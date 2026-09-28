/**
 * Covers the fail-closed change made to POST /api/inbound on 2026-09-22.
 *
 * `verifyWebhook` used to log a warning and return `true` when
 * RESEND_WEBHOOK_SECRET was unset, so an unsigned POST was accepted and could
 * write messages into a customer thread. An unset secret must now reject,
 * exactly as an unset ADMIN_EMAILS denies every admin.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase/service", () => ({
  createServiceSupabaseClient: vi.fn(),
}));

import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { POST } from "../route";

function req(headers: Record<string, string> = {}) {
  return new Request("http://localhost/api/inbound", {
    method: "POST",
    headers,
    body: JSON.stringify({
      type: "email.received",
      data: {
        from: "stranger@example.test",
        to: ["thread-abc123abc123@reply.suewheelerstl.com"],
        text: "forged",
      },
    }),
  });
}

beforeEach(() => {
  vi.mocked(createServiceSupabaseClient).mockReset();
  vi.unstubAllEnvs();
});

describe("POST /api/inbound", () => {
  it("rejects an unsigned webhook when the secret is unset", async () => {
    vi.stubEnv("RESEND_WEBHOOK_SECRET", "");

    const res = await POST(req());

    expect(res.status).toBe(400);
    // Nothing may reach the database on a rejected webhook.
    expect(createServiceSupabaseClient).not.toHaveBeenCalled();
  });

  it("rejects a webhook missing its svix headers when the secret IS set", async () => {
    vi.stubEnv("RESEND_WEBHOOK_SECRET", "whsec_test");

    const res = await POST(req());

    expect(res.status).toBe(400);
    expect(createServiceSupabaseClient).not.toHaveBeenCalled();
  });

  it("rejects a webhook whose signature does not verify", async () => {
    vi.stubEnv("RESEND_WEBHOOK_SECRET", "whsec_dGVzdHNlY3JldHRlc3RzZWNyZXQ=");

    const res = await POST(
      req({
        "svix-id": "msg_1",
        "svix-timestamp": String(Math.floor(Date.now() / 1000)),
        "svix-signature": "v1,bm90YXJlYWxzaWduYXR1cmU=",
      }),
    );

    expect(res.status).toBe(400);
    expect(createServiceSupabaseClient).not.toHaveBeenCalled();
  });
});
