import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { resend } from "@/lib/email/resend";
import { bidSentEmail } from "@/lib/email/templates";
import { threadReplyTo } from "@/lib/email/reply-address";
import { adminApiGuard } from "@/lib/auth/admin-guard";
import type { SubmissionStatus } from "@/lib/types";

/**
 * Pipeline status to move a submission into when a bid is sent.
 *
 * This was `"quote_sent"` until 2026-09-22 — a value that is NOT in
 * `STATUS_VALUES` (src/lib/db-contract.ts), so the live
 * `submissions_status_check` CHECK constraint rejected the UPDATE with error
 * 23514 and the row kept its old status. `bid_sent` is the real vocabulary, and
 * is what the newer `/api/admin/bid/generate-pdf` route already writes.
 *
 * The `SubmissionStatus` annotation is the guard against a repeat — that union
 * is derived from `STATUS_VALUES`, so a value the database would reject now
 * fails `tsc` instead of failing silently in production.
 */
const BID_SENT_STATUS: SubmissionStatus = "bid_sent";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "sue@suewheelerstl.com";

export async function POST(req: Request) {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  const guard = adminApiGuard(user);
  if (!guard.authorized) return guard.response;

  const formData = await req.formData();
  const submissionId = formData.get("submission_id") as string;
  const bidAmount = parseFloat(formData.get("bid_amount") as string);
  const bidNotes = formData.get("bid_notes") as string;
  const file = formData.get("bid_file") as File | null;

  if (!submissionId || isNaN(bidAmount)) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const supabase = createServiceSupabaseClient();

  const { data: submission } = await supabase
    .from("submissions")
    .select()
    .eq("id", submissionId)
    .single();

  if (!submission) {
    return NextResponse.json(
      { error: "Submission not found" },
      { status: 404 },
    );
  }

  // Upload bid file if provided
  let bidFileUrl: string | null = null;
  if (file && file.size > 0) {
    const ext = file.name.split(".").pop() ?? "pdf";
    const path = `bids/${submissionId}/${crypto.randomUUID()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const { error: uploadError } = await supabase.storage
      .from("bid-files")
      .upload(path, buffer, {
        contentType: file.type || "application/pdf",
        upsert: false,
      });
    if (!uploadError) bidFileUrl = path;
  }

  // Update submission with bid details. The result is checked, not discarded:
  // previously a rejected write still returned `ok: true` and still emailed the
  // client an estimate the CRM had no record of sending.
  const { error: updateError } = await supabase
    .from("submissions")
    .update({
      bid_amount: bidAmount,
      bid_notes: bidNotes || null,
      bid_file_url: bidFileUrl,
      bid_status: "sent",
      bid_sent_at: new Date().toISOString(),
      status: BID_SENT_STATUS,
    })
    .eq("id", submissionId);

  if (updateError) {
    console.error("[admin/bid] failed to record bid", {
      submissionId,
      error: updateError,
    });
    return NextResponse.json({ error: "Could not save bid" }, { status: 500 });
  }

  // Create a bid message in the thread
  await supabase.from("messages").insert({
    submission_id: submissionId,
    is_from_admin: true,
    is_bid: true,
    body: bidNotes || `Estimate: $${bidAmount.toFixed(2)}`,
    sent_by_email: FROM_EMAIL,
  });

  // Email client
  const portalUrl = `${SITE_URL}/my-request/${submission.client_token}`;
  if (process.env.RESEND_API_KEY) {
    const tpl = bidSentEmail(submission, bidAmount, bidNotes, portalUrl);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [submission.email],
      replyTo: threadReplyTo(submission.reply_token),
      subject: tpl.subject,
      html: tpl.html,
    });
  }

  return NextResponse.json({ ok: true });
}
