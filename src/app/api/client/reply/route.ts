import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { resend } from "@/lib/email/resend";
import { clientReplyEmail } from "@/lib/email/templates";
import { generateAdminMagicLink } from "@/lib/supabase/admin-link";
import { threadReplyTo } from "@/lib/email/reply-address";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@suewheelerstl.com";
const ADMIN_EMAIL = process.env.CONTACT_EMAIL ?? "sue@suewheelerstl.com";

export async function POST(req: Request) {
  const { token, body } = await req.json();

  if (!token || !body?.trim()) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const supabase = createServiceSupabaseClient();

  // Validate token
  const { data: submission, error: fetchError } = await supabase
    .from("submissions")
    .select()
    .eq("client_token", token)
    .single();

  if (fetchError || !submission) {
    return NextResponse.json(
      { error: "Invalid or expired link" },
      { status: 404 },
    );
  }

  if (new Date(submission.client_token_expires_at) < new Date()) {
    return NextResponse.json(
      { error: "This link has expired" },
      { status: 410 },
    );
  }

  // Insert message
  const { data: message, error: msgError } = await supabase
    .from("messages")
    .insert({
      submission_id: submission.id,
      is_from_admin: false,
      body: body.trim(),
      sent_by_email: submission.email,
    })
    .select()
    .single();

  if (msgError || !message) {
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 },
    );
  }

  // Email Sue
  if (process.env.RESEND_API_KEY) {
    const adminUrl = await generateAdminMagicLink(`/admin/${submission.id}`);
    const tpl = clientReplyEmail(message, submission, adminUrl);
    await resend.emails
      .send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        replyTo: threadReplyTo(submission.reply_token),
        subject: tpl.subject,
        html: tpl.html,
      })
      .catch((e) => console.error("[client/reply] email error", e));
  }

  return NextResponse.json({ ok: true, message });
}
