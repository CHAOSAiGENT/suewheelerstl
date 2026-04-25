import { NextResponse } from "next/server";
import { resend } from "@/lib/email/resend";
import { threadReplyTo } from "@/lib/email/reply-address";

const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@suewheelerstl.com";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "sue@suewheelerstl.com";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const useThread = url.searchParams.get("thread") === "1";
  const hasKey = !!process.env.RESEND_API_KEY;
  const keyPrefix = process.env.RESEND_API_KEY?.slice(0, 6) ?? "UNSET";
  const replyTo = useThread ? threadReplyTo("test123test12") : CONTACT_EMAIL;

  if (!hasKey) {
    return NextResponse.json({ error: "RESEND_API_KEY not set" });
  }

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo,
      subject: `Debug test — ${useThread ? "thread replyTo" : "normal replyTo"}`,
      html: `<p>replyTo: ${replyTo}</p>`,
    });
    return NextResponse.json({
      ok: true,
      keyPrefix,
      from: FROM_EMAIL,
      replyTo,
      result,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({
      ok: false,
      keyPrefix,
      from: FROM_EMAIL,
      replyTo,
      error: message,
    });
  }
}
