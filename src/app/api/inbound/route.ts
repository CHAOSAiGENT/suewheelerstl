import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { resend } from "@/lib/email/resend";
import { adminReplyEmail, clientReplyEmail } from "@/lib/email/templates";
import { generateAdminMagicLink } from "@/lib/supabase/admin-link";
import { threadReplyTo } from "@/lib/email/reply-address";
import { stripQuotedText, extractEmail } from "@/lib/email/parse-reply";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@suewheelerstl.com";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "sue@suewheelerstl.com";
const WEBHOOK_SECRET = process.env.RESEND_WEBHOOK_SECRET ?? "";

async function verifyWebhook(req: Request, body: string): Promise<boolean> {
  if (!WEBHOOK_SECRET) {
    console.warn(
      "[inbound] RESEND_WEBHOOK_SECRET not set — skipping verification",
    );
    return true;
  }

  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) return false;

  const { Webhook } = await import("svix");
  try {
    const wh = new Webhook(WEBHOOK_SECRET);
    wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
    return true;
  } catch {
    return false;
  }
}

const TOKEN_RE = /^thread-([a-f0-9]{12})@/i;

const IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

function extFromMime(mime: string): string {
  const map: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/heic": "heic",
    "image/heif": "heif",
  };
  return map[mime] ?? "jpg";
}

export async function POST(req: Request) {
  const rawBody = await req.text();

  if (!(await verifyWebhook(req, rawBody))) {
    console.error("[inbound] webhook signature verification failed");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  let payload: {
    type?: string;
    data?: {
      from: string;
      to: string[];
      subject?: string;
      text?: string;
      html?: string;
      attachments?: Array<{
        filename: string;
        content: string;
        content_type: string;
      }>;
    };
  };

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = payload.data;
  if (!email || payload.type !== "email.received") {
    return NextResponse.json({ ok: true });
  }

  const toAddress = email.to?.[0] ?? "";
  const tokenMatch = toAddress.match(TOKEN_RE);
  if (!tokenMatch) {
    console.warn("[inbound] no reply token in to address:", toAddress);
    return NextResponse.json({ ok: true });
  }
  const replyToken = tokenMatch[1];

  const supabase = createServiceSupabaseClient();
  const { data: submission } = await supabase
    .from("submissions")
    .select("*")
    .eq("reply_token", replyToken)
    .single();

  if (!submission) {
    console.warn("[inbound] no submission for token:", replyToken);
    return NextResponse.json({ ok: true });
  }

  const senderEmail = extractEmail(email.from);
  const isFromAdmin =
    senderEmail === CONTACT_EMAIL.toLowerCase() ||
    senderEmail === FROM_EMAIL.toLowerCase();

  const rawText = email.text ?? "";
  const body = stripQuotedText(rawText);

  if (!body) {
    console.warn("[inbound] empty body after stripping, skipping");
    return NextResponse.json({ ok: true });
  }

  const { data: message, error: msgError } = await supabase
    .from("messages")
    .insert({
      submission_id: submission.id,
      is_from_admin: isFromAdmin,
      body,
      sent_by_email: senderEmail,
    })
    .select()
    .single();

  if (msgError || !message) {
    console.error("[inbound] failed to insert message", msgError);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 },
    );
  }

  const imageAttachments = (email.attachments ?? []).filter((a) =>
    IMAGE_TYPES.has(a.content_type),
  );

  if (imageAttachments.length > 0) {
    const newPaths: string[] = [];

    for (const att of imageAttachments) {
      const ext = extFromMime(att.content_type);
      const path = `uploads/${crypto.randomUUID()}.${ext}`;
      const buffer = Buffer.from(att.content, "base64");

      const { error: uploadError } = await supabase.storage
        .from("submission-photos")
        .upload(path, buffer, {
          contentType: att.content_type,
          upsert: false,
        });

      if (!uploadError) {
        newPaths.push(path);
      } else {
        console.error("[inbound] photo upload failed", uploadError);
      }
    }

    if (newPaths.length > 0) {
      const existingUrls: string[] = submission.photo_urls ?? [];
      await supabase
        .from("submissions")
        .update({ photo_urls: [...existingUrls, ...newPaths] })
        .eq("id", submission.id);
    }
  }

  if (process.env.RESEND_API_KEY) {
    const replyTo = threadReplyTo(submission.reply_token);

    if (isFromAdmin) {
      const portalUrl = `${SITE_URL}/my-request/${submission.client_token}`;
      const tpl = adminReplyEmail(message, submission, portalUrl);
      await resend.emails
        .send({
          from: FROM_EMAIL,
          to: [submission.email],
          replyTo,
          subject: tpl.subject,
          html: tpl.html,
        })
        .catch((e) => console.error("[inbound] forward to client failed", e));
    } else {
      const adminUrl = await generateAdminMagicLink(`/admin/${submission.id}`);
      const tpl = clientReplyEmail(message, submission, adminUrl);
      await resend.emails
        .send({
          from: FROM_EMAIL,
          to: [CONTACT_EMAIL],
          replyTo,
          subject: tpl.subject,
          html: tpl.html,
        })
        .catch((e) => console.error("[inbound] forward to admin failed", e));
    }
  }

  return NextResponse.json({ ok: true });
}
