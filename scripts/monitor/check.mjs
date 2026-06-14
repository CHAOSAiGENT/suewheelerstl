// Form health monitor runner. Run by .github/workflows/form-monitor.yml.
// POSTs /api/health with retries; on failure fans out Email/SMS/Slack alerts
// and exits non-zero (which also fails the GitHub job — the 4th alert channel).
// Uses only Node 22 built-ins (fetch, Buffer) — no dependencies.

const HEALTH_URL = process.env.MONITOR_URL ?? "https://suewheelerstl.com/api/health";
const SECRET = process.env.MONITOR_SECRET ?? "";

export async function checkHealth(fetchImpl = fetch, { retries = 2, backoffMs = 2000 } = {}) {
  let last = { ok: false, status: 0, body: {} };
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetchImpl(HEALTH_URL, {
        method: "POST",
        headers: { "x-monitor-secret": SECRET },
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) return { ok: true, status: res.status, body };
      last = { ok: false, status: res.status, body };
    } catch (err) {
      last = { ok: false, status: 0, body: { error: String(err) } };
    }
    if (attempt < retries) {
      await new Promise((r) => setTimeout(r, backoffMs * (attempt + 1)));
    }
  }
  return last;
}

export function formatAlert(result, runUrl) {
  return [
    "🚨 Sue Wheeler contact form health check FAILED",
    `Status: ${result.status}`,
    `Detail: ${JSON.stringify(result.body)}`,
    runUrl ? `Run: ${runUrl}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

async function sendEmail(message) {
  if (!process.env.RESEND_API_KEY || !process.env.ALERT_EMAIL_TO) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.ALERT_EMAIL_FROM ?? "no-reply@suewheelerstl.com",
      to: [process.env.ALERT_EMAIL_TO],
      subject: "🚨 Sue Wheeler form health check FAILED",
      text: message,
    }),
  });
}

async function sendSms(message) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;
  const to = process.env.ALERT_SMS_TO;
  if (!sid || !token || !from || !to) return;
  const body = new URLSearchParams({ From: from, To: to, Body: message.slice(0, 320) });
  await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
}

async function sendSlack(message) {
  if (!process.env.SLACK_WEBHOOK_URL) return;
  await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: message }),
  });
}

export async function sendAlerts(message) {
  // Each channel independent — one failing never blocks the others.
  await Promise.allSettled([sendEmail(message), sendSms(message), sendSlack(message)]);
}

// Run as main (not when imported by tests).
if (import.meta.url === `file://${process.argv[1]}`) {
  const result = await checkHealth();
  if (result.ok) {
    console.log("[monitor] OK", JSON.stringify(result.body));
    process.exit(0);
  }
  const message = formatAlert(result, process.env.GITHUB_RUN_URL);
  console.error("[monitor] FAILED\n" + message);
  await sendAlerts(message);
  process.exit(1);
}
