// NOTE: Do NOT add `export const runtime = "edge"` here.
// @react-pdf/renderer requires the Node.js runtime.

import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { resend } from "@/lib/email/resend";
import { bidSentEmail } from "@/lib/email/templates";
import { BidDocument } from "@/lib/bid/BidDocument";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "sue@suewheelerstl.com";

interface GeneratePdfRequest {
  submission_id: string;
  bid_amount?: number | null;
  bid_start_date?: string | null;
  send?: boolean;
}

export async function POST(req: Request) {
  // Auth check
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Parse request body
  let body: GeneratePdfRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { submission_id, bid_amount, bid_start_date, send = false } = body;

  if (!submission_id) {
    return NextResponse.json(
      { error: "submission_id is required" },
      { status: 400 },
    );
  }

  const supabase = createServiceSupabaseClient();

  // Fetch submission
  const { data: submission, error: subError } = await supabase
    .from("submissions")
    .select("*")
    .eq("id", submission_id)
    .single();

  if (subError || !submission) {
    return NextResponse.json(
      { error: "Submission not found" },
      { status: 404 },
    );
  }

  // Fetch bid_blocks ordered by sort_order
  const { data: bidBlocks, error: blocksError } = await supabase
    .from("bid_blocks")
    .select("*")
    .eq("submission_id", submission_id)
    .order("sort_order", { ascending: true });

  if (blocksError) {
    return NextResponse.json(
      { error: "Failed to fetch bid blocks" },
      { status: 500 },
    );
  }

  const blocks = (bidBlocks ?? []).map((b) => ({
    title: b.title as string,
    body: b.body as string,
  }));

  // Determine effective bid values (request overrides may be in-flight)
  const effectiveBidAmount =
    bid_amount !== undefined ? bid_amount : submission.bid_amount;
  const effectiveStartDate =
    bid_start_date !== undefined ? bid_start_date : submission.bid_start_date;

  // Render PDF
  let pdfBuffer: Buffer;
  try {
    pdfBuffer = await renderToBuffer(
      <BidDocument
        clientName={submission.name as string}
        address={submission.address as string | null}
        phone={submission.phone as string}
        startDate={effectiveStartDate as string | null}
        bidAmount={effectiveBidAmount as number | null}
        blocks={blocks}
      />,
    );
  } catch (err) {
    console.error("PDF render error:", err);
    return NextResponse.json(
      { error: "Failed to render PDF" },
      { status: 500 },
    );
  }

  // Upload to Supabase Storage
  // Using the existing "bid-files" bucket (same bucket the manual upload route uses)
  const timestamp = Date.now();
  const storagePath = `bid-files/${submission_id}/estimate-${timestamp}.pdf`;

  const { error: uploadError } = await supabase.storage
    .from("bid-files")
    .upload(storagePath, pdfBuffer, {
      contentType: "application/pdf",
      upsert: false,
    });

  if (uploadError) {
    console.error("Storage upload error:", uploadError);
    return NextResponse.json(
      { error: "Failed to upload PDF to storage" },
      { status: 500 },
    );
  }

  // Get a signed URL valid for 1 hour
  const { data: signedUrlData, error: signedUrlError } = await supabase.storage
    .from("bid-files")
    .createSignedUrl(storagePath, 3600);

  if (signedUrlError || !signedUrlData?.signedUrl) {
    console.error("Signed URL error:", signedUrlError);
    return NextResponse.json(
      { error: "Failed to get signed URL for PDF" },
      { status: 500 },
    );
  }

  const signedUrl = signedUrlData.signedUrl;

  // Build the update payload
  type SubmissionUpdate = {
    bid_file_url: string;
    bid_amount?: number;
    bid_start_date?: string;
    bid_status?: string;
    bid_sent_at?: string;
    status?: string;
  };

  const updatePayload: SubmissionUpdate = {
    bid_file_url: storagePath,
  };

  if (bid_amount !== undefined && bid_amount !== null) {
    updatePayload.bid_amount = bid_amount;
  }
  if (bid_start_date !== undefined && bid_start_date !== null) {
    updatePayload.bid_start_date = bid_start_date;
  }

  if (send) {
    updatePayload.bid_status = "sent";
    updatePayload.bid_sent_at = new Date().toISOString();
    updatePayload.status = "bid_sent";
  }

  await supabase
    .from("submissions")
    .update(updatePayload)
    .eq("id", submission_id);

  // If send=true, email the client with the PDF attached
  if (send && process.env.RESEND_API_KEY) {
    const portalUrl = `${SITE_URL}/my-request/${submission.client_token}`;
    const effectiveAmount = effectiveBidAmount ?? 0;
    const tpl = bidSentEmail(
      { ...submission, bid_amount: effectiveAmount },
      effectiveAmount,
      submission.bid_notes ?? null,
      portalUrl,
    );

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [submission.email as string],
      replyTo: FROM_EMAIL,
      subject: tpl.subject,
      html: tpl.html,
      attachments: [
        {
          filename: `estimate-${submission.name.replace(/\s+/g, "-").toLowerCase()}.pdf`,
          content: pdfBuffer,
        },
      ],
    });
  }

  return NextResponse.json({ url: signedUrl });
}
