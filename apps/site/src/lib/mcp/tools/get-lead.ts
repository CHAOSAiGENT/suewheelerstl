/**
 * get_lead — one submission with its full working context.
 *
 * Accepts a UUID only. A name lookup here would let Claude act on the wrong
 * customer whenever two names are similar, so resolution belongs in
 * search_leads, which returns candidates for a human-visible choice.
 *
 * `messages` holds two-way customer correspondence and `submission_notes` holds
 * Sue's private notes. Both are selected by explicit column list — see
 * ../columns.ts for why that matters — and every record returned from here goes
 * through ../projection.ts, which is where the guarantee is actually enforced.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SUBMISSION_COLUMNS, SUBMISSION_SELECT } from "../columns";
import { columnsOf, projectRecord, projectRecords } from "../projection";

/**
 * The three child tables' allowlists. One definition each: the select string is
 * the definition and the projection list is derived from it, so the request and
 * the response can never disagree about a column.
 *
 * None of these tables carries a bearer credential today. They are projected
 * anyway — the cost is one object copy per row, and it buys a loud failure the
 * day a schema change puts a credential on one of them, instead of a silent
 * leak into a transcript. Correctness here should not depend on remembering to
 * come back and add projection later.
 */
const NOTE_SELECT = "id,body,created_at";
const MESSAGE_SELECT = "id,body,is_from_admin,sent_by_email,created_at";
const BLOCK_SELECT = "id,source_key,title,body,sort_order,photo_paths";

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
      .select(NOTE_SELECT)
      .eq("submission_id", id)
      .order("created_at", { ascending: false }),
    client
      .from("messages")
      .select(MESSAGE_SELECT)
      .eq("submission_id", id)
      .order("created_at", { ascending: true }),
    client
      .from("bid_blocks")
      .select(BLOCK_SELECT)
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

  // The select strings are runtime values, not literals, so PostgREST's
  // generic-typed client cannot infer a row shape and falls back to
  // GenericStringError. Widen through `unknown` — the runtime shape is a row.
  //
  // Every one of the four goes through projection. `lead` is the one that could
  // carry a credential; the other three are projected for the reason given at
  // the top of this file.
  return {
    lead: projectRecord(
      leadRes.data as unknown as Record<string, unknown>,
      SUBMISSION_COLUMNS,
      "get_lead: submissions",
    ),
    notes: projectRecords(
      (notesRes.data ?? []) as Record<string, unknown>[],
      columnsOf(NOTE_SELECT),
      "get_lead: submission_notes",
    ),
    messages: projectRecords(
      (messagesRes.data ?? []) as Record<string, unknown>[],
      columnsOf(MESSAGE_SELECT),
      "get_lead: messages",
    ),
    bidBlocks: projectRecords(
      (blocksRes.data ?? []) as Record<string, unknown>[],
      columnsOf(BLOCK_SELECT),
      "get_lead: bid_blocks",
    ),
  };
}
