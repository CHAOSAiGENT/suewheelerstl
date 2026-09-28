/**
 * create_lead — a new `submissions` row, for a lead that arrived by phone,
 * text, or word of mouth rather than through the website form.
 *
 * Mirrors POST /api/admin/submissions: the same five required fields, the same
 * forced `status: 'to_bid'` / `bid_status: 'none'`, and the same empty
 * `crew_member_ids` / `photo_urls` arrays. Two deliberate differences from that
 * route, both recorded in docs/MCP.md §8:
 *
 *   1. The row comes back through SUBMISSION_SELECT, never `select()` /
 *      `select("*")`, and then through ../projection.ts before it is returned.
 *      The route returns the whole row including `client_token` and
 *      `reply_token`; those are bearer credentials, and a row returned here
 *      lands in a model's transcript permanently. This is the sharpest case in
 *      the whole MCP surface: both tokens are DEFAULT-generated at insert time,
 *      so the row the database has in hand as it answers this call is a row
 *      with two live credentials on it.
 *   2. `service_types` must hold at least one entry. The route's check is
 *      `!body[field]`, and `[]` is truthy in JavaScript, so it accepts a lead
 *      with no services on it.
 *
 * `is_test` is deliberately not set. The column is NOT NULL DEFAULT false
 * (supabase/migrations/20260614_add_is_test_column.sql) and belongs to the form
 * health monitor; setting it true here would hide the lead from Sue's pipeline.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SUBMISSION_COLUMNS, SUBMISSION_SELECT } from "../columns";
import { projectRecord } from "../projection";

/** Trimmed, and required to survive the trim. */
const required = (label: string) =>
  z
    .string()
    .trim()
    .min(1, { error: `Missing required field: ${label}` });

export const createLeadInput = z.object({
  name: required("name").describe("Customer name."),
  phone: required("phone").describe("Contact phone number."),
  // Format-validated, unlike POST /api/admin/submissions, which only checks
  // presence. That route is fed by a browser form with its own `type=email`
  // input; this one is fed by a model transcribing a phone call, where
  // "bob at gmail dot com" becomes "bob@gmailcom" and the lead looks fine while
  // being unreachable. Rejecting it lets Sue correct it while she still has the
  // customer on the line.
  email: required("email")
    .pipe(z.string().email({ error: "email is not a valid address" }))
    .describe("Contact email address."),
  project_description: required("project_description").describe(
    "What the customer wants done, in their words where possible.",
  ),
  service_types: z
    .array(z.string().trim().min(1))
    .min(1, { error: "service_types must hold at least one entry" })
    .describe("One or more service types, e.g. [\"Front door\", \"Interior doors\"]."),
  address: z.string().trim().min(1).optional().describe("Job address."),
  zip: z.string().trim().min(1).optional().describe("Job ZIP code."),
  best_time: z.string().trim().min(1).optional().describe("Best time to reach them."),
  timeline: z.string().trim().min(1).optional().describe("When they want the work done."),
  referral: z.string().trim().min(1).optional().describe("How they heard about Sue."),
});

export type CreateLeadInput = z.input<typeof createLeadInput>;

export interface CreateLeadResult {
  lead: Record<string, unknown>;
}

export async function createLead(
  raw: CreateLeadInput,
  client: SupabaseClient,
): Promise<CreateLeadResult> {
  const input = createLeadInput.parse(raw);

  const row = {
    name: input.name,
    phone: input.phone,
    email: input.email,
    address: input.address ?? null,
    zip: input.zip ?? null,
    best_time: input.best_time ?? null,
    timeline: input.timeline ?? null,
    referral: input.referral ?? null,
    project_description: input.project_description,
    service_types: input.service_types,
    // Forced, never caller-supplied. A lead enters the board at the start of
    // the pipeline; anything else is a move, which belongs to update_lead.
    status: "to_bid" as const,
    bid_status: "none" as const,
    created_at: new Date().toISOString(),
    crew_member_ids: [],
    photo_urls: [],
  };

  const { data, error } = await client
    .from("submissions")
    .insert(row)
    .select(SUBMISSION_SELECT)
    .single();

  // Throw rather than returning a null lead. A swallowed insert error would let
  // Claude tell Sue the lead is on the board when it is not.
  if (error) throw new Error(`create_lead failed: ${error.message}`);
  if (!data) throw new Error("create_lead failed: insert returned no row");

  return {
    lead: projectRecord(
      data as unknown as Record<string, unknown>,
      SUBMISSION_COLUMNS,
      "create_lead: submissions",
    ),
  };
}
