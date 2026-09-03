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
}

export async function getPipeline(
  raw: GetPipelineInput,
  client: SupabaseClient,
): Promise<GetPipelineResult> {
  getPipelineInput.parse(raw);

  const { data, error } = await client
    .from("submissions")
    .select("id,name,status,bid_amount")
    .eq("is_test", false)
    .is("archived_at", null);

  if (error) throw new Error(`get_pipeline failed: ${error.message}`);

  const stages: Record<string, PipelineStage> = {};
  for (const status of STATUS_VALUES) {
    stages[status] = { count: 0, totalBidAmount: 0, leads: [] };
  }

  let unknownStatusCount = 0;
  let totalLeads = 0;

  for (const row of (data ?? []) as {
    id: string;
    name: string;
    status: string;
    bid_amount: number | null;
  }[]) {
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

  return { stages, totalLeads, unknownStatusCount };
}
