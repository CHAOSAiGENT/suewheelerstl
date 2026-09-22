/**
 * propose_bid_amount — gathers the evidence a human needs to price a job.
 *
 * THIS TOOL WRITES NOTHING, EVER. It has no `confirm` parameter because it has
 * no write to gate. The only tool that writes a price is set_bid_amount, and it
 * demands an explicit numeric amount plus confirm: true. That split is what
 * makes "Sue sets the price" a property of the tool surface rather than a
 * sentence in a prompt a model can talk itself past.
 *
 * WHY THE PRICING PROSE IS RETURNED VERBATIM. The copyblock library carries
 * historical pricing inside titles and bodies, e.g.
 * "FRONT DOOR — 121 occurrences | Range: $200–$8,000 | Median: $2,500".
 * A 40x range is not a number; it is a spread whose position depends on the
 * house, the damage, the lead paint, and the access. Parsing that into
 * arithmetic — summing medians, averaging ranges — would manufacture false
 * precision and hand it to Sue with the authority of a computed total. So this
 * tool extracts no numbers and computes no total. It returns the evidence; the
 * model reasons aloud over it; Sue picks the number.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import library from "@/lib/bid/copyblock-library.json";
import type { CopyblockLibrary } from "@/lib/bid/types";
import { SUBMISSION_SELECT } from "../columns";
import { BID_BLOCK_SELECT } from "./update-bid-blocks";

const LIBRARY = library as CopyblockLibrary;

/** Words that match everything and therefore mean nothing as search terms. */
const STOPWORDS = new Set([
  "other",
  "and",
  "the",
  "for",
  "with",
  "from",
  "your",
  "this",
  "that",
  "work",
]);

export const proposeBidAmountInput = z.object({
  id: z
    .string()
    .uuid()
    .describe("Submission UUID, as returned by search_leads. Never a customer name."),
  query: z
    .string()
    .optional()
    .describe(
      "Extra search text for the copyblock library, e.g. 'newel post'. Added to the terms derived from service_types.",
    ),
  copyblockLimit: z
    .number()
    .int()
    .positive()
    .max(50)
    .default(12)
    .describe("Maximum copyblocks to return."),
});

export type ProposeBidAmountInput = z.input<typeof proposeBidAmountInput>;

export interface ProposedCopyblock {
  key: string;
  /** Verbatim from the library — pricing prose included, unparsed. */
  title: string;
  /** Verbatim from the library. */
  body: string;
  categoryKey: string;
  categoryLabel: string;
  matchedTerms: string[];
}

export interface ProposeBidAmountResult {
  /** This is a proposal. */
  proposal: true;
  /** Nothing was written to the database by this call. Always false. */
  written: false;
  /** The tool that can write a price, and the only one. */
  writeTool: "set_bid_amount";
  submission: {
    id: string;
    name: unknown;
    status: unknown;
    service_types: unknown;
    project_description: unknown;
  };
  /** What the job is currently priced at, or null if unpriced. */
  currentBidAmount: number | null;
  bidBlocks: Record<string, unknown>[];
  copyblocks: ProposedCopyblock[];
  totalMatched: number;
  searchTerms: string[];
  message: string;
}

/** "Exterior Doors" -> ["exterior doors", "exterior", "door"] */
function termsFor(phrase: string): string[] {
  const normalized = phrase.toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  if (!normalized) return [];
  const terms = new Set<string>([normalized]);
  for (const word of normalized.split(" ")) {
    const singular = word.replace(/&/g, "").replace(/s$/, "");
    if (singular.length >= 4 && !STOPWORDS.has(singular)) terms.add(singular);
  }
  return [...terms].filter((t) => !STOPWORDS.has(t));
}

export async function proposeBidAmount(
  raw: ProposeBidAmountInput,
  client: SupabaseClient,
): Promise<ProposeBidAmountResult> {
  const { id, query, copyblockLimit } = proposeBidAmountInput.parse(raw);

  const leadRes = await client
    .from("submissions")
    .select(SUBMISSION_SELECT)
    .eq("id", id)
    .maybeSingle();
  if (leadRes.error) throw new Error(`propose_bid_amount failed: ${leadRes.error.message}`);
  if (!leadRes.data) throw new Error(`propose_bid_amount failed: no submission with id ${id}`);
  const lead = leadRes.data as unknown as Record<string, unknown>;

  const blocksRes = await client
    .from("bid_blocks")
    .select(BID_BLOCK_SELECT)
    .eq("submission_id", id)
    .order("sort_order", { ascending: true });
  if (blocksRes.error) {
    throw new Error(`propose_bid_amount bid_blocks failed: ${blocksRes.error.message}`);
  }

  const serviceTypes = Array.isArray(lead.service_types) ? (lead.service_types as string[]) : [];
  const searchTerms = [...new Set([...serviceTypes, ...(query ? [query] : [])].flatMap(termsFor))];

  const hits: ProposedCopyblock[] = [];
  for (const category of LIBRARY) {
    for (const block of category.blocks) {
      const haystack = `${block.title}\n${block.body}`.toLowerCase();
      const matchedTerms = searchTerms.filter((t) => haystack.includes(t));
      if (matchedTerms.length === 0) continue;
      hits.push({
        // Verbatim. No parsing of the pricing prose, by design.
        key: block.key,
        title: block.title,
        body: block.body,
        categoryKey: category.key,
        categoryLabel: category.label,
        matchedTerms,
      });
    }
  }

  // Rank by how many distinct terms a block answers, then prefer title matches.
  hits.sort((a, b) => {
    const byTerms = b.matchedTerms.length - a.matchedTerms.length;
    if (byTerms !== 0) return byTerms;
    const aTitle = a.matchedTerms.some((t) => a.title.toLowerCase().includes(t)) ? 1 : 0;
    const bTitle = b.matchedTerms.some((t) => b.title.toLowerCase().includes(t)) ? 1 : 0;
    return bTitle - aTitle;
  });

  const bidAmount = lead.bid_amount;

  return {
    proposal: true,
    written: false,
    writeTool: "set_bid_amount",
    submission: {
      id,
      name: lead.name ?? null,
      status: lead.status ?? null,
      service_types: lead.service_types ?? [],
      project_description: lead.project_description ?? null,
    },
    currentBidAmount: typeof bidAmount === "number" ? bidAmount : null,
    bidBlocks: (blocksRes.data ?? []) as unknown as Record<string, unknown>[],
    copyblocks: hits.slice(0, copyblockLimit),
    totalMatched: hits.length,
    searchTerms,
    message:
      "Evidence only — no price was set and nothing was written. The ranges and medians above are historical prose, not a calculation: read them aloud to Sue with your reasoning, and write the number she gives you with set_bid_amount.",
  };
}
