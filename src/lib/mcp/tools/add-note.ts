/**
 * add_note — one private admin note against a lead.
 *
 * Mirrors POST /api/admin/submissions/[id]/notes, including the part that is
 * easy to miss: the note text is also written to `submissions.admin_notes`, so
 * the Kanban card shows the latest note as its preview. Skipping the mirror
 * would leave a note that exists but is invisible on the board Sue works from.
 *
 * Two deliberate differences from that route:
 *
 *   1. `submission_id` must be a UUID and the submission must exist. The route
 *      takes whatever is in the URL and inserts against it; if the id is wrong,
 *      the foreign key rejects it, but the error the caller sees is a generic
 *      500. A model needs to be told it aimed at nothing.
 *   2. The mirror's outcome is reported rather than discarded. The route fires
 *      the update and never looks at its error. Here, a note that saved while
 *      its mirror failed comes back as `adminNotesMirrored: false` with the
 *      reason — the note is not lost, and nobody is told the card was updated
 *      when it was not.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";

export const addNoteInput = z.object({
  submission_id: z
    .string()
    .uuid()
    .describe("Submission UUID, as returned by search_leads."),
  body: z
    .string()
    .trim()
    .min(1, { error: "Note body required" })
    .describe("The note text."),
});

export type AddNoteInput = z.input<typeof addNoteInput>;

export interface AddNoteResult {
  note: Record<string, unknown>;
  /** False when the note saved but the Kanban card preview did not update. */
  adminNotesMirrored: boolean;
  mirrorError?: string;
}

export async function addNote(
  raw: AddNoteInput,
  client: SupabaseClient,
): Promise<AddNoteResult> {
  const { submission_id, body } = addNoteInput.parse(raw);

  const leadRes = await client
    .from("submissions")
    .select("id")
    .eq("id", submission_id)
    .maybeSingle();
  if (leadRes.error) throw new Error(`add_note failed: ${leadRes.error.message}`);
  if (!leadRes.data) {
    throw new Error(
      `add_note failed: no lead with id ${submission_id} — run search_leads to get the right UUID`,
    );
  }

  const noteRes = await client
    .from("submission_notes")
    .insert({ submission_id, body })
    .select("id,submission_id,body,created_at")
    .single();
  if (noteRes.error) throw new Error(`add_note failed: ${noteRes.error.message}`);
  if (!noteRes.data) throw new Error("add_note failed: insert returned no row");

  // Keep admin_notes in sync so the Kanban card preview shows the latest note.
  const mirrorRes = await client
    .from("submissions")
    .update({ admin_notes: body })
    .eq("id", submission_id);

  const note = noteRes.data as unknown as Record<string, unknown>;
  if (mirrorRes.error) {
    return {
      note,
      adminNotesMirrored: false,
      mirrorError: mirrorRes.error.message,
    };
  }

  return { note, adminNotesMirrored: true };
}
