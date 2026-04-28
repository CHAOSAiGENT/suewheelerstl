import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import type { SubmissionStatus } from "@/lib/types";

const VALID_STATUSES: SubmissionStatus[] = [
  "to_bid",
  "contacted",
  "bid_sent",
  "on_deck",
  "active",
  "finishing",
  "fully_complete",
  "lost",
];

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const update: Record<string, unknown> = {};

  if (body.status !== undefined) {
    if (!VALID_STATUSES.includes(body.status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }
    update.status = body.status;
  }

  if (body.admin_notes !== undefined) update.admin_notes = body.admin_notes;
  if (body.lost_reason !== undefined) update.lost_reason = body.lost_reason;
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
