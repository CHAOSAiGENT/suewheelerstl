/**
 * Covers the two defects fixed on 2026-09-22 in POST /api/client/accept-bid:
 *
 *   1. The route wrote `status: "scheduled"`, which is not in STATUS_VALUES, so
 *      the live CHECK constraint rejected every acceptance.
 *   2. The UPDATE result was discarded, so a rejected write still returned
 *      `ok: true` and still emailed Sue that the bid had been accepted.
 *
 * The status assertion is deliberately made against STATUS_VALUES rather than
 * against the literal "on_deck": what matters is that whatever this route
 * writes is a value the database will accept.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase/service", () => ({
  createServiceSupabaseClient: vi.fn(),
}));
vi.mock("@/lib/email/resend", () => ({
  resend: { emails: { send: vi.fn().mockResolvedValue({}) } },
}));
vi.mock("@/lib/supabase/admin-link", () => ({
  generateAdminMagicLink: vi.fn().mockResolvedValue("https://example.test/admin"),
}));

import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { resend } from "@/lib/email/resend";
import { STATUS_VALUES } from "@/lib/db-contract";
import { POST } from "../route";

const FUTURE = new Date(Date.now() + 86_400_000).toISOString();
const PAST = new Date(Date.now() - 86_400_000).toISOString();

type UpdatePayload = Record<string, unknown>;

/**
 * Supabase client mock. Captures the payload handed to `.update()` and lets the
 * test decide whether that update errors.
 */
function mockClient(opts: {
  submission: Record<string, unknown> | null;
  updateError?: unknown;
}) {
  const captured: UpdatePayload[] = [];
  const client = {
    from: () => ({
      select: () => ({
        eq: () => ({
          single: () => Promise.resolve({ data: opts.submission, error: null }),
        }),
      }),
      update: (payload: UpdatePayload) => {
        captured.push(payload);
        return {
          eq: () => Promise.resolve({ error: opts.updateError ?? null }),
        };
      },
    }),
  };
  return { client, captured };
}

function req(token?: string) {
  return new Request("http://localhost/api/client/accept-bid", {
    method: "POST",
    body: JSON.stringify(token === undefined ? {} : { token }),
  });
}

function install(opts: Parameters<typeof mockClient>[0]) {
  const { client, captured } = mockClient(opts);
  vi.mocked(createServiceSupabaseClient).mockReturnValue(
    client as unknown as ReturnType<typeof createServiceSupabaseClient>,
  );
  return captured;
}

const PENDING_BID = {
  id: "sub-1",
  bid_status: "sent",
  client_token_expires_at: FUTURE,
  reply_token: "abc123abc123",
  name: "Client Name",
  email: "client@example.test",
  phone: "3143676054",
  address: "1 Example St",
  bid_amount: 1200,
  service_types: ["kitchen-cabinets"],
};

beforeEach(() => {
  vi.mocked(createServiceSupabaseClient).mockReset();
  vi.mocked(resend.emails.send).mockClear();
  vi.stubEnv("RESEND_API_KEY", "test-key");
});

describe("POST /api/client/accept-bid", () => {
  it("400s without a token", async () => {
    install({ submission: null });
    expect((await POST(req())).status).toBe(400);
  });

  it("404s for an unknown token", async () => {
    install({ submission: null });
    expect((await POST(req("nope"))).status).toBe(404);
  });

  it("409s when there is no pending bid", async () => {
    install({ submission: { ...PENDING_BID, bid_status: "none" } });
    expect((await POST(req("t"))).status).toBe(409);
  });

  it("410s on an expired client token", async () => {
    install({ submission: { ...PENDING_BID, client_token_expires_at: PAST } });
    expect((await POST(req("t"))).status).toBe(410);
  });

  it("writes a status the database CHECK constraint permits", async () => {
    const captured = install({ submission: PENDING_BID });

    const res = await POST(req("t"));

    expect(res.status).toBe(200);
    expect(captured).toHaveLength(1);
    const status = captured[0].status as string;
    // The regression this guards: "scheduled" is not in the contract.
    expect(STATUS_VALUES as readonly string[]).toContain(status);
    expect(status).toBe("on_deck");
    expect(captured[0].bid_status).toBe("accepted");
  });

  it("500s and sends NO email when the update is rejected", async () => {
    install({
      submission: PENDING_BID,
      updateError: { code: "23514", message: "violates check constraint" },
    });

    const res = await POST(req("t"));

    expect(res.status).toBe(500);
    // The whole point: the customer must not be told the bid was accepted when
    // the row never changed.
    expect(resend.emails.send).not.toHaveBeenCalled();
  });

  it("emails only after a successful update", async () => {
    install({ submission: PENDING_BID });

    const res = await POST(req("t"));

    expect(res.status).toBe(200);
    expect(resend.emails.send).toHaveBeenCalledTimes(1);
  });
});
