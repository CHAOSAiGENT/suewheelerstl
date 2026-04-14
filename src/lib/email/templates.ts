import type { Submission, Message } from "@/lib/types";

const brand = {
  blue: "#11B2E8",
  dark: "#2A2421",
  muted: "#6B5E55",
  bg: "#F8F6F1",
  accent: "#A65D37",
  border: "rgba(42,36,33,0.12)",
};

function base(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
</head>
<body style="margin:0;padding:0;background:${brand.bg};font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:${brand.bg};padding:40px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid ${brand.border};">
      <!-- header -->
      <tr>
        <td style="background:${brand.dark};padding:24px 32px;">
          <p style="margin:0;font-family:Georgia,serif;font-size:18px;color:#ffffff;letter-spacing:0.04em;">
            Wood Refinishing by <strong>Sue Wheeler</strong>
          </p>
          <p style="margin:4px 0 0;font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.55);letter-spacing:0.08em;text-transform:uppercase;">
            St. Louis · Since 1989
          </p>
        </td>
      </tr>
      <!-- body -->
      <tr><td style="padding:32px;">${body}</td></tr>
      <!-- footer -->
      <tr>
        <td style="border-top:1px solid ${brand.border};padding:20px 32px;">
          <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:${brand.muted};line-height:1.6;">
            Wood Refinishing by Sue Wheeler · 900 S Boyle Ave, St. Louis, MO 63110<br/>
            <a href="tel:3143676054" style="color:${brand.blue};text-decoration:none;">(314) 367-6054</a> ·
            <a href="https://suewheelerstl.com" style="color:${brand.blue};text-decoration:none;">suewheelerstl.com</a>
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function field(label: string, value: string | null | undefined): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 0;font-family:Arial,sans-serif;font-size:11px;font-weight:700;color:${brand.muted};text-transform:uppercase;letter-spacing:0.08em;width:140px;vertical-align:top;">${label}</td>
    <td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:${brand.dark};vertical-align:top;">${value}</td>
  </tr>`;
}

function btn(href: string, label: string): string {
  return `<a href="${href}" style="display:inline-block;background:${brand.blue};color:#ffffff;font-family:Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;padding:12px 28px;border-radius:2px;">${label}</a>`;
}

// ── 1. Admin notification — sent to sue@suewheelerstl.com ──────
export function adminNotificationEmail(
  sub: Submission,
  adminUrl: string
): { subject: string; html: string } {
  const subject = `New estimate request — ${sub.name}`;
  const html = base(
    subject,
    `<h2 style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;font-weight:400;color:${brand.dark};">New Estimate Request</h2>
<p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:13px;color:${brand.muted};">${new Date(sub.created_at).toLocaleString("en-US", { timeZone: "America/Chicago", dateStyle: "full", timeStyle: "short" })} CT</p>
<table cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid ${brand.border};margin-bottom:24px;">
  ${field("Name", sub.name)}
  ${field("Phone", `<a href="tel:${sub.phone.replace(/\D/g, "")}" style="color:${brand.blue};text-decoration:none;">${sub.phone}</a>`)}
  ${field("Email", `<a href="mailto:${sub.email}" style="color:${brand.blue};text-decoration:none;">${sub.email}</a>`)}
  ${field("Address", sub.address)}
  ${field("Services", sub.service_types.join(", "))}
  ${field("Best time", sub.best_time)}
  ${field("Timeline", sub.timeline)}
  ${field("How they heard", sub.referral)}
</table>
<p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;color:${brand.muted};text-transform:uppercase;letter-spacing:0.08em;">Project description</p>
<div style="background:${brand.bg};border-left:3px solid ${brand.blue};padding:12px 16px;margin-bottom:28px;font-family:Arial,sans-serif;font-size:14px;color:${brand.dark};line-height:1.6;">${sub.project_description.replace(/\n/g, "<br/>")}</div>
${sub.photo_urls.length > 0 ? `<p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:13px;color:${brand.muted};">${sub.photo_urls.length} photo${sub.photo_urls.length > 1 ? "s" : ""} attached — view in portal.</p>` : ""}
${btn(adminUrl, "Open in Admin Portal")}`
  );
  return { subject, html };
}

// ── 2. Client confirmation — sent to the person who submitted ──
export function clientConfirmationEmail(
  sub: Submission,
  portalUrl: string
): { subject: string; html: string } {
  const subject = "We received your estimate request";
  const html = base(
    subject,
    `<h2 style="margin:0 0 8px;font-family:Georgia,serif;font-size:24px;font-weight:400;color:${brand.dark};">We've got your message, ${sub.name.split(" ")[0]}.</h2>
<p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:14px;color:${brand.muted};line-height:1.7;">Sue will review your request and be in touch within one business day. If you need to reach her sooner, call <a href="tel:3143676054" style="color:${brand.blue};text-decoration:none;">(314) 367-6054</a> — she answers personally.</p>

<div style="background:${brand.bg};border:1px solid ${brand.border};padding:20px 24px;margin-bottom:28px;border-radius:2px;">
  <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;color:${brand.muted};text-transform:uppercase;letter-spacing:0.08em;">Your request summary</p>
  <table cellpadding="0" cellspacing="0" style="width:100%;">
    ${field("Services", sub.service_types.join(", "))}
    ${field("Timeline", sub.timeline)}
    ${field("Address", sub.address)}
  </table>
</div>

<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:13px;color:${brand.muted};line-height:1.6;">Use the link below to check the status of your request and see any messages from Sue:</p>
${btn(portalUrl, "View My Request")}
<p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:11px;color:${brand.muted};">This link is unique to your request. No account needed.</p>`
  );
  return { subject, html };
}

// ── 3. Admin reply notification — sent to client when Sue replies
export function adminReplyEmail(
  msg: Message,
  sub: Submission,
  portalUrl: string
): { subject: string; html: string } {
  const subject = `Sue Wheeler replied to your estimate request`;
  const html = base(
    subject,
    `<h2 style="margin:0 0 8px;font-family:Georgia,serif;font-size:22px;font-weight:400;color:${brand.dark};">Sue sent you a message.</h2>
<p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:13px;color:${brand.muted};">Regarding your ${sub.service_types.join(", ")} request.</p>
<div style="background:${brand.bg};border-left:3px solid ${brand.blue};padding:16px 20px;margin-bottom:28px;font-family:Georgia,serif;font-size:15px;color:${brand.dark};line-height:1.7;font-style:italic;">${msg.body.replace(/\n/g, "<br/>")}</div>
<p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:13px;color:${brand.muted};">You can reply directly from your request portal:</p>
${btn(portalUrl, "View & Reply")}
<p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:12px;color:${brand.muted};">Or call Sue directly at <a href="tel:3143676054" style="color:${brand.blue};text-decoration:none;">(314) 367-6054</a>.</p>`
  );
  return { subject, html };
}

// ── 4. Client reply notification — sent to sue@suewheelerstl.com
export function clientReplyEmail(
  msg: Message,
  sub: Submission,
  adminUrl: string
): { subject: string; html: string } {
  const subject = `${sub.name} replied to their estimate request`;
  const html = base(
    subject,
    `<h2 style="margin:0 0 8px;font-family:Georgia,serif;font-size:22px;font-weight:400;color:${brand.dark};">${sub.name} sent a message.</h2>
<p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:13px;color:${brand.muted};">Re: ${sub.service_types.join(", ")} · <a href="mailto:${sub.email}" style="color:${brand.blue};text-decoration:none;">${sub.email}</a></p>
<div style="background:${brand.bg};border-left:3px solid ${brand.accent};padding:16px 20px;margin-bottom:28px;font-family:Georgia,serif;font-size:15px;color:${brand.dark};line-height:1.7;font-style:italic;">${msg.body.replace(/\n/g, "<br/>")}</div>
${btn(adminUrl, "Reply in Admin Portal")}`
  );
  return { subject, html };
}
