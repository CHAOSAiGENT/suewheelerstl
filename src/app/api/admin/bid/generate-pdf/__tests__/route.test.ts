/**
 * Covers the third instance of the discarded-UPDATE defect, fixed here in
 * POST /api/admin/bid/generate-pdf. The two siblings were fixed on 2026-09-22
 * (`ae9ea47`) in /api/admin/bid and /api/client/accept-bid; this route still
 * discarded its UPDATE result, so a rejected write returned a signed URL AND
 * emailed the client their estimate — the customer was told their bid had been
 * sent while the database held no record of it.
 *
 * The UPDATE runs on every path (it always writes `bid_file_url`), so its
 * result is asserted on both the send and the no-send path.
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
// The PDF itself is not under test, and the real renderer is slow and pulls in
// a font stack. Mocked so the test exercises only the route's control flow.
vi.mock("@react-pdf/renderer", () => ({
  renderToBuffer: vi.fn(() => Promise.resolve(Buffer.from("%PDF-1.4 fake"))),
}));
vi.mock("@/lib/bid/BidDocument", () => ({
  BidDocument: () => null,
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
  const client = {
    from: (table: string) => ({
      select: () => ({
        eq: () => ({
          // bid_blocks is read with .order(), submissions with .single()
          single: () => Promise.resolve({ data: opts.submission, error: null }),
          order: () =>
            Promise.resolve({
              data: table === "bid_blocks" ? [] : null,
              error: null,
            }),
        }),
      }),
      update: (payload: UpdatePayload) => {
        updates.push(payload);
        return { eq: () => Promise.resolve({ error: opts.updateError ?? null }) };
      },
    }),
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ error: null }),
        createSignedUrl: () =>
          Promise.resolve({
            data: { signedUrl: "https://storage.test/signed.pdf" },
            error: null,
          }),
      }),
    },
  };
  return { client, updates };
}

function install(opts: Parameters<typeof mockServiceClient>[0]) {
  const { client, updates } = mockServiceClient(opts);
  vi.mocked(createServiceSupabaseClient).mockReturnValue(
    client as unknown as ReturnType<typeof createServiceSupabaseClient>,
  );
  return { updates };
}

function signIn(email: string | null) {
  vi.mocked(createServerSupabaseClient).mockResolvedValue({
    auth: {
      getUser: () => Promise.resolve({ data: { user: email ? { email } : null } }),
    },
  } as unknown as Awaited<ReturnType<typeof createServerSupabaseClient>>);
}

function req(body: Record<string, unknown> = {}) {
  return new Request("http://localhost/api/admin/bid/generate-pdf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ submission_id: "sub-1", ...body }),
  });
}

const SUBMISSION = {
  id: "sub-1",
  email: "client@example.test",
  client_token: "tok",
  reply_token: "abc123abc123",
  name: "Client",
  phone: "3145550000",
  address: "1 Test St",
  bid_amount: 1200,
  bid_start_date: "2026-11-02",
  bid_notes: null,
};

beforeEach(() => {
  vi.mocked(createServiceSupabaseClient).mockReset();
  vi.mocked(createServerSupabaseClient).mockReset();
  vi.mocked(resend.emails.send).mockClear();
  vi.stubEnv("ADMIN_EMAILS", ADMIN);
  vi.stubEnv("RESEND_API_KEY", "test-key");
});

describe("POST /api/admin/bid/generate-pdf", () => {
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

  it("500s and sends NO email when the update is rejected", async () => {
    signIn(ADMIN);
    install({
      submission: SUBMISSION,
      updateError: { code: "23514", message: "violates check constraint" },
    });

    const res = await POST(req({ send: true }));

    expect(res.status).toBe(500);
    // The defect: the customer was emailed their estimate anyway.
    expect(resend.emails.send).not.toHaveBeenCalled();
  });

  it("500s on a rejected update even when send is false", async () => {
    signIn(ADMIN);
    install({
      submission: SUBMISSION,
      updateError: { message: "connection reset" },
    });

    // The UPDATE always runs — it writes bid_file_url — so a failure must not
    // be reported as success just because no email was due.
    const res = await POST(req({ send: false }));

    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Could not save bid PDF" });
  });

  it("returns a signed URL and emails the client on the happy path", async () => {
    signIn(ADMIN);
    const { updates } = install({ submission: SUBMISSION });

    const res = await POST(req({ send: true, bid_amount: 1500 }));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ url: "https://storage.test/signed.pdf" });
    expect(resend.emails.send).toHaveBeenCalledTimes(1);
    expect(updates).toHaveLength(1);
    expect(updates[0].bid_status).toBe("sent");
    expect(STATUS_VALUES as readonly string[]).toContain(
      updates[0].status as string,
    );
  });

  it("succeeds without emailing when send is false", async () => {
    signIn(ADMIN);
    const { updates } = install({ submission: SUBMISSION });

    const res = await POST(req({ send: false }));

    expect(res.status).toBe(200);
    expect(resend.emails.send).not.toHaveBeenCalled();
    expect(updates).toHaveLength(1);
    expect(updates[0].bid_file_url).toMatch(/^bid-files\/sub-1\//);
    expect(updates[0].status).toBeUndefined();
  });
});
