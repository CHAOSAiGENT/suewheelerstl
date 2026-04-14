import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { resend } from "@/lib/email/resend";
import { bidAcceptedEmail } from "@/lib/email/templates";
import { generateAdminMagicLink } from "@/lib/supabase/admin-link";

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

  await supabase
    .from("submissions")
    .update({
      bid_status: "accepted",
      bid_accepted_at: new Date().toISOString(),
      status: "scheduled",
    })
    .eq("id", submission.id);

  // Notify Sue
  const adminUrl = await generateAdminMagicLink(`/admin/${submission.id}`);
  if (process.env.RESEND_API_KEY) {
    const tpl = bidAcceptedEmail(submission, adminUrl);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      cc: ADMIN_CC,
      subject: tpl.subject,
      html: tpl.html,
    });
  }

  return NextResponse.json({ ok: true });
}
