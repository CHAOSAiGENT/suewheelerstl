/**
 * search_leads — finds submissions by name, address, or status.
 *
 * Returns UUIDs deliberately. Claude reasons about names ("the Hartmann job")
 * but the database works in ids, and every write tool accepts ONLY a UUID. That
 * is the difference between editing the right customer and editing a
 * similarly-named one.
 *
 * Filters `is_test = false` and `archived_at IS NULL`, matching the Kanban board
 * at src/app/admin/page.tsx:22-23. The form health monitor inserts a real
 * submissions row every six hours; without this filter it shows up as a lead.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { STATUS_VALUES } from "@/lib/db-contract";
import { SUBMISSION_SELECT } from "../columns";

export const searchLeadsInput = z.object({
  query: z
    .string()
    .optional()
    .describe("Free text matched against customer name, email, and address."),
  status: z
    .enum(STATUS_VALUES, {
      // Zod 4's default enum message lists the allowed options but never the
      // value it rejected. Name it: a model that guessed `quote_sent` needs to
      // see its own guess echoed back to correct itself.
      error: (issue) =>
        `Invalid status ${JSON.stringify(issue.input)} — expected one of ${STATUS_VALUES.join(", ")}`,
    })
    .optional()
    .describe("Restrict to one pipeline stage."),
  limit: z.number().int().positive().max(50).default(20),
});

export type SearchLeadsInput = z.input<typeof searchLeadsInput>;

export interface SearchLeadsResult {
  leads: Record<string, unknown>[];
  count: number;
}

export async function searchLeads(
  raw: SearchLeadsInput,
  client: SupabaseClient,
): Promise<SearchLeadsResult> {
  const { query, status, limit } = searchLeadsInput.parse(raw);

  let q = client
    .from("submissions")
    .select(SUBMISSION_SELECT)
    .eq("is_test", false)
    .is("archived_at", null);

  if (status) q = q.eq("status", status);
  if (query) {
    const like = `%${query}%`;
    q = q.or(`name.ilike.${like},email.ilike.${like},address.ilike.${like}`);
  }

  const { data, error } = await q.order("created_at", { ascending: false }).limit(limit);

  // Surface failures. Returning [] on error would let Claude report "no leads
  // found" for a database outage, which reads as fact and is not.
  if (error) throw new Error(`search_leads failed: ${error.message}`);

  const leads = (data ?? []) as unknown as Record<string, unknown>[];
  return { leads, count: leads.length };
}
