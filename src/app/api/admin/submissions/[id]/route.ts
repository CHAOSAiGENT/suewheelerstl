import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { STATUS_VALUES, LOST_REASON_VALUES } from "@/lib/db-contract";
import { adminApiGuard } from "@/lib/auth/admin-guard";

// STATUS_VALUES and LOST_REASON_VALUES are imported, never retyped. Until now
// this file held a hand-copied duplicate of STATUS_VALUES, free to drift from
// the contract that src/lib/__tests__/schema-drift.test.ts asserts against the
// live database — the same class of app↔database drift that took the contact
// form down on 2026-06-01 (see the header of src/lib/db-contract.ts).

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  const guard = adminApiGuard(user);
  if (!guard.authorized) return guard.response;

  const { id } = await params;
  const body = await req.json();
  const update: Record<string, unknown> = {};

  if (body.status !== undefined) {
    if (!(STATUS_VALUES as readonly unknown[]).includes(body.status)) {
      return NextResponse.json(
        {
          error: `Invalid status ${JSON.stringify(body.status)} — expected one of ${STATUS_VALUES.join(", ")}`,
        },
        { status: 400 },
      );
    }
    update.status = body.status;
  }

  if (body.admin_notes !== undefined) update.admin_notes = body.admin_notes;

  // `lost_reason` was forwarded unvalidated, so an unknown value reached the
  // `submissions_lost_reason_check` CHECK constraint and came back as an opaque
  // 500. Validated here the same way `status` is, with the rejected value echoed
  // back — matching src/lib/mcp/tools/update-lead.ts. `null` stays legal: that
  // is how the admin UI clears the field.
  if (body.lost_reason !== undefined) {
    if (
      body.lost_reason !== null &&
      !(LOST_REASON_VALUES as readonly unknown[]).includes(body.lost_reason)
    ) {
      return NextResponse.json(
        {
          error: `Invalid lost_reason ${JSON.stringify(body.lost_reason)} — expected one of ${LOST_REASON_VALUES.join(", ")}`,
        },
        { status: 400 },
      );
    }
    update.lost_reason = body.lost_reason;
  }

  if (body.lost_note !== undefined) update.lost_note = body.lost_note;
  if (body.crew_member_ids !== undefined)
    update.crew_member_ids = body.crew_member_ids;
  if (body.after_photos_uploaded !== undefined)
    update.after_photos_uploaded = body.after_photos_uploaded;
  if (body.final_payment_confirmed !== undefined)
    update.final_payment_confirmed = body.final_payment_confirmed;
  if (body.bid_start_date !== undefined)
    update.bid_start_date = body.bid_start_date;
  if (body.bid_amount !== undefined) update.bid_amount = body.bid_amount;
  if (body.archived_at !== undefined) update.archived_at = body.archived_at;

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  const supabase = createServiceSupabaseClient();
  const { data, error } = await supabase
    .from("submissions")
    .update(update)
    .eq("id", id)
    .select(
      "id, status, bid_status, bid_amount, bid_notes, bid_sent_at, bid_accepted_at, admin_notes, lost_reason, lost_note, crew_member_ids, after_photos_uploaded, final_payment_confirmed, bid_start_date",
    )
    .single();

  if (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, submission: data });
}
