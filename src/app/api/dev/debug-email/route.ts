import { NextResponse } from "next/server";
import { resend } from "@/lib/email/resend";

const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@suewheelerstl.com";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "sue@suewheelerstl.com";

export async function GET() {
  const hasKey = !!process.env.RESEND_API_KEY;
  const keyPrefix = process.env.RESEND_API_KEY?.slice(0, 6) ?? "UNSET";

  if (!hasKey) {
    return NextResponse.json({
      error: "RESEND_API_KEY not set",
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
    });
  }

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: CONTACT_EMAIL,
      subject: "Debug test — email system check",
      html: "<p>If you see this, Resend is working.</p>",
    });
    return NextResponse.json({
      ok: true,
      keyPrefix,
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      result,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({
      ok: false,
      keyPrefix,
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      error: message,
    });
  }
}
