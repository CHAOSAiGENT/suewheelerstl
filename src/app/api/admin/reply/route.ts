import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { resend } from "@/lib/email/resend";
import { adminReplyEmail } from "@/lib/email/templates";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@suewheelerstl.com";

export async function POST(req: Request) {
  const supabaseAuth = await createServerSupabaseClient();
  const { data: { user } } = await supabaseAuth.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { submissionId, body } = await req.json();
  if (!submissionId || !body?.trim()) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const supabase = createServiceSupabaseClient();

  // Fetch submission for email context
  const { data: submission, error: fetchError } = await supabase
    .from("submissions")
    .select()
    .eq("id", submissionId)
    .single();

  if (fetchError || !submission) {
    return NextResponse.json({ error: "Submission not found" }, { status: 404 });
  }

  // Insert message
  const { data: message, error: msgError } = await supabase
    .from("messages")
    .insert({
      submission_id: submissionId,
      is_from_admin: true,
      body: body.trim(),
      sent_by_email: user.email!,
    })
    .select()
    .single();

  if (msgError || !message) {
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }

  // Email the client
  if (process.env.RESEND_API_KEY) {
    const portalUrl = `${SITE_URL}/my-request/${submission.client_token}`;
    const tpl = adminReplyEmail(message, submission, portalUrl);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [submission.email],
      replyTo: process.env.CONTACT_EMAIL ?? "sue@suewheelerstl.com",
      subject: tpl.subject,
      html: tpl.html,
    }).catch((e) => console.error("[admin/reply] email error", e));
  }

  return NextResponse.json({ ok: true, message });
}
