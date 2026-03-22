import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { resend } from "@/lib/email/resend";
import {
  adminNotificationEmail,
  clientConfirmationEmail,
} from "@/lib/email/templates";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "sue@suewheelerstl.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@suewheelerstl.com";

export async function POST(req: Request) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const address = formData.get("address") as string | null;
  const project_description = formData.get("project") as string;
  const referral = formData.get("referral") as string | null;
  const best_time = formData.get("best_time") as string | null;
  const timeline = formData.get("timeline") as string | null;
  const service_types = formData.getAll("service_types") as string[];

  if (!name || !phone || !email || !project_description) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (service_types.length === 0) {
    return NextResponse.json({ error: "Select at least one service type" }, { status: 400 });
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
      service_types,
      best_time: best_time || null,
      timeline: timeline || null,
      project_description,
      referral: referral || null,
    })
    .select()
    .single();

  if (insertError || !submission) {
    console.error("[contact] insert error", insertError);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }

  // Upload photos
  const photoFiles = formData.getAll("photos") as File[];
  const photo_urls: string[] = [];

  for (const file of photoFiles) {
    if (!file || file.size === 0) continue;
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `submissions/${submission.id}/${crypto.randomUUID()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from("submission-photos")
      .upload(path, buffer, {
        contentType: file.type || "image/jpeg",
        upsert: false,
      });

    if (!uploadError) {
      photo_urls.push(path);
    } else {
      console.error("[contact] photo upload error", uploadError);
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
  const adminUrl = `${SITE_URL}/admin/${submission.id}`;

  // Send emails (non-blocking — don't fail the submission if email fails)
  if (process.env.RESEND_API_KEY) {
    const adminTpl = adminNotificationEmail(submission, adminUrl);
    const clientTpl = clientConfirmationEmail(submission, portalUrl);

    await Promise.allSettled([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        replyTo: email,
        subject: adminTpl.subject,
        html: adminTpl.html,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        replyTo: TO_EMAIL,
        subject: clientTpl.subject,
        html: clientTpl.html,
      }),
    ]);
  }

  return NextResponse.json({ ok: true, token: submission.client_token });
}
