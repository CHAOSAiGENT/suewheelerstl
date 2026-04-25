import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { resend } from "@/lib/email/resend";
import {
  adminNotificationEmail,
  clientConfirmationEmail,
} from "@/lib/email/templates";
import { generateAdminMagicLink } from "@/lib/supabase/admin-link";
import { threadReplyTo } from "@/lib/email/reply-address";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "sue@suewheelerstl.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@suewheelerstl.com";
const ADMIN_CC = process.env.ADMIN_CC_EMAIL ? [process.env.ADMIN_CC_EMAIL] : [];

export async function POST(req: Request) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const name = formData.get("name") as string;
  const rawPhone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const address = formData.get("address") as string | null;
  const zip = formData.get("zip") as string | null;
  const project_description = formData.get("project") as string;
  const referral = formData.get("referral") as string | null;
  const best_time = formData.get("best_time") as string | null;
  const timeline = formData.get("timeline") as string | null;
  const service_types = formData.getAll("service_types") as string[];

  // Normalize phone to (###) ###-#### format
  const digits = rawPhone.replace(/\D/g, "").slice(0, 10);
  const phone =
    digits.length === 10
      ? `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
      : rawPhone;

  if (!name || !phone || !email || !project_description) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }
  if (service_types.length === 0) {
    return NextResponse.json(
      { error: "Select at least one service type" },
      { status: 400 },
    );
  }

  const supabase = createServiceSupabaseClient();

  // Insert submission first to get the ID for photo paths
  const { data: submission, error: insertError } = await supabase
    .from("submissions")
    .insert({
      name,
      phone,
      email,
      address: address || null,
      zip: zip || null,
      service_types,
      best_time: best_time || null,
      timeline: timeline || null,
      project_description,
      referral: referral || null,
      status: "to_bid",
    })
    .select()
    .single();

  if (insertError || !submission) {
    console.error("[contact] insert error", insertError);
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 500 },
    );
  }

  // Parse photo paths from FormData (uploaded client-side before submission)
  let photo_urls: string[] = [];
  const rawPaths = formData.get("photo_paths") as string | null;
  if (rawPaths) {
    try {
      const parsed = JSON.parse(rawPaths);
      if (Array.isArray(parsed)) {
        // Only accept paths that look like our own storage paths (uploads/<uuid>.<ext>)
        photo_urls = parsed.filter(
          (p): p is string =>
            typeof p === "string" && /^uploads\/[a-f0-9-]+\.[a-z]+$/.test(p),
        );
      }
    } catch {
      console.warn("[contact] malformed photo_paths, ignoring");
    }
  }

  // Update submission with photo paths
  if (photo_urls.length > 0) {
    await supabase
      .from("submissions")
      .update({ photo_urls })
      .eq("id", submission.id);
    submission.photo_urls = photo_urls;
  }

  const portalUrl = `${SITE_URL}/my-request/${submission.client_token}`;
  const adminUrl = await generateAdminMagicLink(`/admin/${submission.id}`);

  // Send emails (non-blocking — don't fail the submission if email fails)
  if (process.env.RESEND_API_KEY) {
    const adminTpl = adminNotificationEmail(submission, adminUrl);
    const clientTpl = clientConfirmationEmail(submission, portalUrl);

    const replyTo = threadReplyTo(submission.reply_token);
    console.log(
      "[contact] sending emails, replyTo:",
      replyTo,
      "from:",
      FROM_EMAIL,
      "to:",
      TO_EMAIL,
      "client:",
      email,
    );

    const results = await Promise.allSettled([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        cc: ADMIN_CC,
        replyTo,
        subject: adminTpl.subject,
        html: adminTpl.html,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        replyTo,
        subject: clientTpl.subject,
        html: clientTpl.html,
      }),
    ]);

    results.forEach((r, i) => {
      if (r.status === "rejected") {
        console.error(`[contact] email ${i} failed:`, r.reason);
      } else {
        console.log(`[contact] email ${i} sent:`, r.value);
      }
    });
  }

  return NextResponse.json({ ok: true, token: submission.client_token });
}
