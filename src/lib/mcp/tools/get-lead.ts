/**
 * get_lead — one submission with its full working context.
 *
 * Accepts a UUID only. A name lookup here would let Claude act on the wrong
 * customer whenever two names are similar, so resolution belongs in
 * search_leads, which returns candidates for a human-visible choice.
 *
 * `messages` holds two-way customer correspondence and `submission_notes` holds
 * Sue's private notes. Both are selected by explicit column list — see
 * ../columns.ts for why that matters.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SUBMISSION_SELECT } from "../columns";

export const getLeadInput = z.object({
  id: z.string().uuid().describe("Submission UUID, as returned by search_leads."),
});

export type GetLeadInput = z.input<typeof getLeadInput>;

export interface GetLeadResult {
  lead: Record<string, unknown> | null;
  notes: Record<string, unknown>[];
  messages: Record<string, unknown>[];
  bidBlocks: Record<string, unknown>[];
}

export async function getLead(
  raw: GetLeadInput,
  client: SupabaseClient,
): Promise<GetLeadResult> {
  const { id } = getLeadInput.parse(raw);

  const leadRes = await client
    .from("submissions")
    .select(SUBMISSION_SELECT)
    .eq("id", id)
    .maybeSingle();
  if (leadRes.error) throw new Error(`get_lead failed: ${leadRes.error.message}`);
  if (!leadRes.data) return { lead: null, notes: [], messages: [], bidBlocks: [] };

  const [notesRes, messagesRes, blocksRes] = await Promise.all([
    client
      .from("submission_notes")
      .select("id,body,created_at")
      .eq("submission_id", id)
      .order("created_at", { ascending: false }),
    client
      .from("messages")
      .select("id,body,is_from_admin,sent_by_email,created_at")
      .eq("submission_id", id)
      .order("created_at", { ascending: true }),
    client
      .from("bid_blocks")
      .select("id,source_key,title,body,sort_order,photo_paths")
      .eq("submission_id", id)
      .order("sort_order", { ascending: true }),
  ]);

  for (const [label, res] of [
    ["notes", notesRes],
    ["messages", messagesRes],
    ["bid_blocks", blocksRes],
  ] as const) {
    if (res.error) throw new Error(`get_lead ${label} failed: ${res.error.message}`);
  }

  return {
    // The select strings are runtime values, not literals, so PostgREST's
    // generic-typed client cannot infer a row shape and falls back to
    // GenericStringError. Widen through `unknown` — the runtime shape is a row.
    lead: leadRes.data as unknown as Record<string, unknown>,
    notes: (notesRes.data ?? []) as Record<string, unknown>[],
    messages: (messagesRes.data ?? []) as Record<string, unknown>[],
    bidBlocks: (blocksRes.data ?? []) as Record<string, unknown>[],
  };
}
