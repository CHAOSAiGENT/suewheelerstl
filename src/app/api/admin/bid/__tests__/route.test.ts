/**
 * Covers the two defects fixed on 2026-09-22 in POST /api/admin/bid:
 *
 *   1. The route wrote `status: "quote_sent"`, which is not in STATUS_VALUES,
 *      so the live CHECK constraint rejected it. The correct value is
 *      `bid_sent` — what /api/admin/bid/generate-pdf already writes.
 *   2. The UPDATE result was discarded, so a rejected write still emailed the
 *      client an estimate the CRM had no record of.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase/service", () => ({
  createServiceSupabaseClient: vi.fn(),
}));
vi.mock("@/lib/supabase/server", () => ({
  createServerSupabaseClient: vi.fn(),
}));
vi.mock("@/lib/email/resend", () => ({
  resend: { emails: { send: vi.fn().mockResolvedValue({}) } },
}));

import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { resend } from "@/lib/email/resend";
import { STATUS_VALUES } from "@/lib/db-contract";
import { POST } from "../route";

const ADMIN = "sue@suewheelerstl.com";

type UpdatePayload = Record<string, unknown>;

function mockServiceClient(opts: {
  submission: Record<string, unknown> | null;
  updateError?: unknown;
}) {
  const updates: UpdatePayload[] = [];
  const inserts: UpdatePayload[] = [];
  const client = {
    from: () => ({
      select: () => ({
        eq: () => ({
          single: () => Promise.resolve({ data: opts.submission, error: null }),
        }),
      }),
      update: (payload: UpdatePayload) => {
        updates.push(payload);
        return { eq: () => Promise.resolve({ error: opts.updateError ?? null }) };
      },
      insert: (payload: UpdatePayload) => {
        inserts.push(payload);
        return Promise.resolve({ error: null });
      },
    }),
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ error: null }),
      }),
    },
  };
  return { client, updates, inserts };
}

function install(opts: Parameters<typeof mockServiceClient>[0]) {
  const { client, updates, inserts } = mockServiceClient(opts);
  vi.mocked(createServiceSupabaseClient).mockReturnValue(
    client as unknown as ReturnType<typeof createServiceSupabaseClient>,
  );
  return { updates, inserts };
}

function signIn(email: string | null) {
  vi.mocked(createServerSupabaseClient).mockResolvedValue({
    auth: {
      getUser: () => Promise.resolve({ data: { user: email ? { email } : null } }),
    },
  } as unknown as Awaited<ReturnType<typeof createServerSupabaseClient>>);
}

function req(fields: Record<string, string> = {}) {
  const form = new FormData();
  form.set("submission_id", "sub-1");
  form.set("bid_amount", "1200");
  for (const [k, v] of Object.entries(fields)) form.set(k, v);
  return new Request("http://localhost/api/admin/bid", {
    method: "POST",
    body: form,
  });
}

const SUBMISSION = {
  id: "sub-1",
  email: "client@example.test",
  client_token: "tok",
  reply_token: "abc123abc123",
  name: "Client",
};

beforeEach(() => {
  vi.mocked(createServiceSupabaseClient).mockReset();
  vi.mocked(createServerSupabaseClient).mockReset();
  vi.mocked(resend.emails.send).mockClear();
  vi.stubEnv("ADMIN_EMAILS", ADMIN);
  vi.stubEnv("RESEND_API_KEY", "test-key");
});

describe("POST /api/admin/bid", () => {
  it("401s when nobody is signed in", async () => {
    signIn(null);
    install({ submission: SUBMISSION });
    expect((await POST(req())).status).toBe(401);
  });

  it("403s for a signed-in non-admin", async () => {
    signIn("stranger@example.test");
    install({ submission: SUBMISSION });
    expect((await POST(req())).status).toBe(403);
  });

  it("writes a status the database CHECK constraint permits", async () => {
    signIn(ADMIN);
    const { updates } = install({ submission: SUBMISSION });

    const res = await POST(req());

    expect(res.status).toBe(200);
    expect(updates).toHaveLength(1);
    const status = updates[0].status as string;
    // The regression this guards: "quote_sent" is not in the contract.
    expect(STATUS_VALUES as readonly string[]).toContain(status);
    expect(status).toBe("bid_sent");
    expect(updates[0].bid_status).toBe("sent");
  });

  it("500s and sends NO email when the update is rejected", async () => {
    signIn(ADMIN);
    install({
      submission: SUBMISSION,
      updateError: { code: "23514", message: "violates check constraint" },
    });

    const res = await POST(req());

    expect(res.status).toBe(500);
    expect(resend.emails.send).not.toHaveBeenCalled();
  });

  it("emails the client only after a successful update", async () => {
    signIn(ADMIN);
    install({ submission: SUBMISSION });

    const res = await POST(req());

    expect(res.status).toBe(200);
    expect(resend.emails.send).toHaveBeenCalledTimes(1);
  });
});
