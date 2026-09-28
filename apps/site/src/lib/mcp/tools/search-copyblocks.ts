/**
 * search_copyblocks — searches Sue's copyblock library.
 *
 * The library is 94 blocks across 14 categories, mined from her past bids. It
 * carries pricing intelligence as prose inside titles and bodies, e.g.
 * "FRONT DOOR — 121 occurrences | Range: $200–$8,000 | Median: $2,500".
 *
 * This is the tool that makes bid-drafting work: it lets Claude write in Sue's
 * own historical language rather than inventing copy, and it is where any
 * pricing suggestion must be grounded.
 *
 * No database access — the library is a static JSON asset.
 */

import { z } from "zod";
import library from "@/lib/bid/copyblock-library.json";
import type { CopyblockLibrary } from "@/lib/bid/types";

const LIBRARY = library as CopyblockLibrary;

export const searchCopyblocksInput = z.object({
  query: z
    .string()
    .optional()
    .describe("Text to match against block titles and bodies. Omit to browse categories."),
  categoryKey: z.string().optional().describe("Restrict the search to one category."),
  limit: z.number().int().positive().max(50).default(20),
});

export type SearchCopyblocksInput = z.input<typeof searchCopyblocksInput>;

export interface CopyblockHit {
  key: string;
  title: string;
  body: string;
  categoryKey: string;
  categoryLabel: string;
}

export interface SearchCopyblocksResult {
  blocks: CopyblockHit[];
  totalMatched: number;
  categories: { key: string; label: string; blockCount: number }[];
}

export async function searchCopyblocks(
  raw: SearchCopyblocksInput,
): Promise<SearchCopyblocksResult> {
  const { query, categoryKey, limit } = searchCopyblocksInput.parse(raw);

  const categories = LIBRARY.map((c) => ({
    key: c.key,
    label: c.label,
    blockCount: c.blocks.length,
  }));

  const scope = categoryKey ? LIBRARY.filter((c) => c.key === categoryKey) : LIBRARY;

  const all: CopyblockHit[] = scope.flatMap((category) =>
    category.blocks.map((block) => ({
      key: block.key,
      title: block.title,
      body: block.body,
      categoryKey: category.key,
      categoryLabel: category.label,
    })),
  );

  if (!query) {
    return { blocks: [], totalMatched: 0, categories };
  }

  const needle = query.toLowerCase();
  const matched = all.filter(
    (b) =>
      b.title.toLowerCase().includes(needle) || b.body.toLowerCase().includes(needle),
  );

  return { blocks: matched.slice(0, limit), totalMatched: matched.length, categories };
}
