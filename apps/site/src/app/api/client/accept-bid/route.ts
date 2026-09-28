import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { resend } from "@/lib/email/resend";
import { bidAcceptedEmail } from "@/lib/email/templates";
import { generateAdminMagicLink } from "@/lib/supabase/admin-link";
import { threadReplyTo } from "@/lib/email/reply-address";
import type { SubmissionStatus } from "@/lib/types";

/**
 * Pipeline status to move a submission into when the customer accepts the bid.
 *
 * This was `"scheduled"` until 2026-09-22 — a value that is NOT in
 * `STATUS_VALUES` (src/lib/db-contract.ts), so the live
 * `submissions_status_check` CHECK constraint rejected every one of these
 * UPDATEs with error 23514 and the row never changed. `on_deck` is the correct
 * vocabulary: bid accepted, work agreed, not yet started.
 *
 * The `SubmissionStatus` annotation is the guard against a repeat — that union
 * is derived from `STATUS_VALUES`, so a value the database would reject now
 * fails `tsc` instead of failing silently in production.
 */
const ACCEPTED_STATUS: SubmissionStatus = "on_deck";

const FROM_EMAIL = process.env.FROM_EMAIL ?? "sue@suewheelerstl.com";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "sue@suewheelerstl.com";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const ADMIN_CC = process.env.ADMIN_CC_EMAIL ? [process.env.ADMIN_CC_EMAIL] : [];

export async function POST(req: Request) {
  const { token } = await req.json();
  if (!token)
    return NextResponse.json({ error: "Missing token" }, { status: 400 });

  const supabase = createServiceSupabaseClient();

  const { data: submission } = await supabase
    .from("submissions")
    .select()
    .eq("client_token", token)
    .single();

  if (!submission)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (submission.bid_status !== "sent") {
    return NextResponse.json({ error: "No pending bid" }, { status: 409 });
  }
  if (new Date(submission.client_token_expires_at) < new Date()) {
    return NextResponse.json({ error: "Token expired" }, { status: 410 });
  }

  // The result of this UPDATE is checked, not discarded. Previously it was
  // ignored, so a rejected write still returned `ok: true` and still sent the
  // "bid accepted" email — the customer was told about a state change that had
  // not happened. Nothing downstream of here may run if the write failed.
  const { error: updateError } = await supabase
    .from("submissions")
    .update({
      bid_status: "accepted",
      bid_accepted_at: new Date().toISOString(),
      status: ACCEPTED_STATUS,
    })
    .eq("id", submission.id);

  if (updateError) {
    console.error("[client/accept-bid] failed to record acceptance", {
      submissionId: submission.id,
      error: updateError,
    });
    return NextResponse.json(
      { error: "Could not record bid acceptance" },
      { status: 500 },
    );
  }

  // Notify Sue
  const adminUrl = await generateAdminMagicLink(`/admin/${submission.id}`);
  if (process.env.RESEND_API_KEY) {
    const tpl = bidAcceptedEmail(submission, adminUrl);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      cc: ADMIN_CC,
      replyTo: threadReplyTo(submission.reply_token),
      subject: tpl.subject,
      html: tpl.html,
    });
  }

  return NextResponse.json({ ok: true });
}
