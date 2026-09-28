/**
 * get_pipeline — the Kanban board, summarized.
 *
 * Reports every status in the db contract including empty ones, so Claude can
 * say "nothing in finishing" rather than omitting the stage and leaving Sue to
 * infer it.
 *
 * Rows carrying a status outside the contract are counted separately rather
 * than silently dropped. Two existing routes write 'quote_sent' and 'scheduled',
 * which the live CHECK constraint rejects, so a nonzero unknownStatusCount is a
 * real signal worth surfacing rather than hiding.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { STATUS_VALUES } from "@/lib/db-contract";
import { columnsOf, projectRecords } from "../projection";

/**
 * A narrower list than SUBMISSION_COLUMNS — this tool needs four fields, and a
 * summary should not carry a customer's address and phone number into a
 * transcript just because a broader allowlist was to hand.
 */
const PIPELINE_SELECT = "id,name,status,bid_amount";

export const getPipelineInput = z.object({});
export type GetPipelineInput = z.input<typeof getPipelineInput>;

export interface PipelineStage {
  count: number;
  totalBidAmount: number;
  leads: { id: string; name: string; bid_amount: number | null }[];
}

export interface GetPipelineResult {
  stages: Record<string, PipelineStage>;
  totalLeads: number;
  unknownStatusCount: number;
  /**
   * True when the board holds more leads than this call returned. The counts
   * above are then a floor, not a total, and must be reported as such.
   */
  truncated: boolean;
  /** The cap that was applied. Present whether or not it was reached. */
  limit: number;
}

/**
 * Maximum leads read in one pipeline snapshot.
 *
 * The board held 24 rows when this was written, so this is ~20x headroom and
 * Sue will not reach it. It exists because an unbounded read is a defect that
 * only shows up once it is expensive: at a few thousand rows this call would
 * quietly become the slowest thing in the app and put the whole table into a
 * model's context.
 *
 * The number matters less than the reporting. A truncated pipeline that does
 * not SAY it is truncated is worse than an error — the model reports confident
 * totals that are wrong, and nothing in the response reveals it.
 */
export const PIPELINE_LIMIT = 500;

export async function getPipeline(
  raw: GetPipelineInput,
  client: SupabaseClient,
): Promise<GetPipelineResult> {
  getPipelineInput.parse(raw);

  // Fetch one more than the cap. If it comes back, there is definitely at least
  // one more lead than we are reporting — which a plain `.limit(PIPELINE_LIMIT)`
  // cannot distinguish from a board that holds exactly PIPELINE_LIMIT leads.
  const { data, error } = await client
    .from("submissions")
    .select(PIPELINE_SELECT)
    .eq("is_test", false)
    .is("archived_at", null)
    .order("created_at", { ascending: false })
    .limit(PIPELINE_LIMIT + 1);

  if (error) throw new Error(`get_pipeline failed: ${error.message}`);

  // Projected before the loop rather than after it. The loop builds its output
  // objects field by field, so a credential could not survive it anyway — but
  // "safe because of how the loop happens to be written" is a property nobody
  // is testing and the next edit can remove. Projecting the source rows makes a
  // credential arriving here a thrown error instead of an invisible near-miss.
  const fetched = (data ?? []) as unknown as Record<string, unknown>[];
  const truncated = fetched.length > PIPELINE_LIMIT;

  const rows = projectRecords(
    // Drop the probe row so it is never counted or summed. Reporting a total
    // that silently included one extra lead would be worse than truncating.
    truncated ? fetched.slice(0, PIPELINE_LIMIT) : fetched,
    columnsOf(PIPELINE_SELECT),
    "get_pipeline: submissions",
  ) as unknown as {
    id: string;
    name: string;
    status: string;
    bid_amount: number | null;
  }[];

  const stages: Record<string, PipelineStage> = {};
  for (const status of STATUS_VALUES) {
    stages[status] = { count: 0, totalBidAmount: 0, leads: [] };
  }

  let unknownStatusCount = 0;
  let totalLeads = 0;

  for (const row of rows) {
    const stage = stages[row.status];
    if (!stage) {
      unknownStatusCount += 1;
      continue;
    }
    stage.count += 1;
    stage.totalBidAmount += row.bid_amount ?? 0;
    stage.leads.push({ id: row.id, name: row.name, bid_amount: row.bid_amount });
    totalLeads += 1;
  }

  return { stages, totalLeads, unknownStatusCount, truncated, limit: PIPELINE_LIMIT };
}
