/**
 * update_lead — edits a submission's whitelisted CRM fields.
 *
 * Mirrors the field whitelist of PATCH /api/admin/submissions/[id]
 * (src/app/api/admin/submissions/[id]/route.ts) with two deliberate departures:
 *
 *   1. `bid_amount` is NOT editable here. The price has its own tool pair —
 *      propose_bid_amount (reads, never writes) and set_bid_amount (the only
 *      writer). Splitting them is what makes "Sue sets the price" structural.
 *      `archived_at` is likewise absent: the MCP does not archive.
 *   2. `lost_reason` is validated against LOST_REASON_VALUES. The admin route
 *      does not validate it — it forwards whatever the browser sent and lets the
 *      CHECK constraint reject it as an opaque 500.
 *
 * CONFIRM-BEFORE-WRITE. `confirm` defaults to false, and the `.update()` call is
 * placed AFTER the unconditional preview return. A call without `confirm: true`
 * cannot reach the write — not because the description asks it not to, but
 * because there is no code path from here to `.update()` that skips the gate.
 *
 * UUID ONLY. `id` is `z.string().uuid()`, parsed before the first database call,
 * so "the Hartmann job" is rejected without a round-trip. search_leads is how a
 * name becomes an id.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { STATUS_VALUES, LOST_REASON_VALUES } from "@/lib/db-contract";
import { SUBMISSION_SELECT } from "../columns";

/** The only columns this tool may write. Mirrors the admin route, minus bid_amount and archived_at. */
export const UPDATE_LEAD_FIELDS = [
  "status",
  "admin_notes",
  "lost_reason",
  "lost_note",
  "crew_member_ids",
  "after_photos_uploaded",
  "final_payment_confirmed",
  "bid_start_date",
] as const;

export const updateLeadInput = z.object({
  id: z
    .string()
    .uuid()
    .describe("Submission UUID, as returned by search_leads. Never a customer name."),
  status: z
    .enum(STATUS_VALUES, {
      // Same reasoning as search-leads.ts: Zod 4's default enum message lists
      // the allowed options but never the value it rejected. A model that
      // guessed `quote_sent` needs its own guess echoed back to self-correct.
      error: (issue) =>
        `Invalid status ${JSON.stringify(issue.input)} — expected one of ${STATUS_VALUES.join(", ")}`,
    })
    .optional()
    .describe("Move the lead to this pipeline stage."),
  admin_notes: z
    .string()
    .nullable()
    .optional()
    .describe("Private notes shown on the Kanban card. Replaces the existing text."),
  lost_reason: z
    .enum(LOST_REASON_VALUES, {
      error: (issue) =>
        `Invalid lost_reason ${JSON.stringify(issue.input)} — expected one of ${LOST_REASON_VALUES.join(", ")}`,
    })
    .nullable()
    .optional()
    .describe("Why the job was lost. Only meaningful with status: lost."),
  lost_note: z.string().nullable().optional().describe("Free text about the loss."),
  crew_member_ids: z
    .array(z.string().min(1))
    .nullable()
    .optional()
    .describe("Crew assigned to the job. Replaces the whole list."),
  after_photos_uploaded: z.boolean().optional(),
  final_payment_confirmed: z.boolean().optional(),
  bid_start_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      error: (issue) =>
        `Invalid bid_start_date ${JSON.stringify(issue.input)} — expected YYYY-MM-DD`,
    })
    .nullable()
    .optional()
    .describe("Scheduled start date, YYYY-MM-DD, matching the admin date picker."),
  confirm: z
    .boolean()
    .default(false)
    .describe(
      "Must be true to write. Omitted or false returns a preview of every change and writes nothing.",
    ),
});

export type UpdateLeadInput = z.input<typeof updateLeadInput>;

export interface FieldChange {
  field: string;
  from: unknown;
  to: unknown;
}

export interface UpdateLeadResult {
  /** True when nothing was written. */
  preview: boolean;
  /** True only when the database was modified. */
  written: boolean;
  id: string;
  changes: FieldChange[];
  lead: Record<string, unknown> | null;
  message: string;
}

export async function updateLead(
  raw: UpdateLeadInput,
  client: SupabaseClient,
): Promise<UpdateLeadResult> {
  const parsed = updateLeadInput.parse(raw) as Record<string, unknown>;
  const id = parsed.id as string;
  const confirm = parsed.confirm as boolean;

  const updates: Record<string, unknown> = {};
  for (const field of UPDATE_LEAD_FIELDS) {
    if (parsed[field] !== undefined) updates[field] = parsed[field];
  }
  if (Object.keys(updates).length === 0) {
    throw new Error(
      `update_lead failed: no editable field supplied — expected one or more of ${UPDATE_LEAD_FIELDS.join(", ")}`,
    );
  }

  const currentRes = await client
    .from("submissions")
    .select(SUBMISSION_SELECT)
    .eq("id", id)
    .maybeSingle();
  // Throw rather than return empty: a swallowed error lets Claude report
  // "already up to date" during an outage, which reads to Sue as fact.
  if (currentRes.error) throw new Error(`update_lead failed: ${currentRes.error.message}`);
  if (!currentRes.data) throw new Error(`update_lead failed: no submission with id ${id}`);

  const current = currentRes.data as unknown as Record<string, unknown>;
  const changes: FieldChange[] = Object.entries(updates).map(([field, to]) => ({
    field,
    from: current[field] ?? null,
    to,
  }));

  // ── THE CONFIRM GATE ──────────────────────────────────────────────────────
  // Everything above this line only reads. The write lives below it. Removing
  // this block is what update-lead.test.ts mutation-tests against.
  if (!confirm) {
    return {
      preview: true,
      written: false,
      id,
      changes,
      lead: current,
      message:
        "Preview only — nothing was written. Show these changes to Sue, then call again with confirm: true to apply them.",
    };
  }

  const { data, error } = await client
    .from("submissions")
    .update(updates)
    .eq("id", id)
    .select(SUBMISSION_SELECT)
    .maybeSingle();
  if (error) throw new Error(`update_lead failed: ${error.message}`);

  return {
    preview: false,
    written: true,
    id,
    changes,
    lead: (data ?? null) as unknown as Record<string, unknown> | null,
    message: `Wrote ${changes.length} field(s) to submission ${id}.`,
  };
}
