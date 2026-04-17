import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { resend } from "@/lib/email/resend";
import { bidSentEmail } from "@/lib/email/templates";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "sue@suewheelerstl.com";

export async function POST(req: Request) {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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

  // Update submission with bid details
  await supabase
    .from("submissions")
    .update({
      bid_amount: bidAmount,
      bid_notes: bidNotes || null,
      bid_file_url: bidFileUrl,
      bid_status: "sent",
      bid_sent_at: new Date().toISOString(),
      status: "quote_sent",
    })
    .eq("id", submissionId);

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
      replyTo: FROM_EMAIL,
      subject: tpl.subject,
      html: tpl.html,
    });
  }

  return NextResponse.json({ ok: true });
}
