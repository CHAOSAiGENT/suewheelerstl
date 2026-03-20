import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, address, project, referral } = body;

  if (!name || !phone || !email || !project) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Use Resend if API key is set, otherwise log (for dev)
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? "info@suewheelerstl.com";
  const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@suewheelerstl.com";

  const subject = `New Estimate Request from ${name}`;
  const html = `
    <h2>New Estimate Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${address ? `<p><strong>Address/Neighborhood:</strong> ${address}</p>` : ""}
    <p><strong>Project:</strong></p>
    <blockquote style="border-left:3px solid #11B2E8;padding-left:12px;color:#555">${project.replace(/\n/g, "<br>")}</blockquote>
    ${referral ? `<p><strong>Referral source:</strong> ${referral}</p>` : ""}
  `;

  if (!RESEND_API_KEY) {
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[Resend error]", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
