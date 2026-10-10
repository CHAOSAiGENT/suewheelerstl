/**
 * Covers the two defects fixed in PATCH /api/admin/submissions/[id]:
 *
 *   1. The status allowlist was a hand-retyped copy of STATUS_VALUES
 *      (src/lib/db-contract.ts), free to drift from the contract the
 *      schema-drift test asserts against the live database. It is now imported.
 *      The first test below pins the route's accepted vocabulary to the
 *      contract, so a future divergence fails here rather than in production.
 *   2. `lost_reason` was forwarded with no validation at all, so an unknown
 *      value reached the `submissions_lost_reason_check` CHECK constraint and
 *      surfaced as an opaque 500. It is now validated like `status`, with the
 *      rejected value echoed back — matching src/lib/mcp/tools/update-lead.ts.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase/service", () => ({
  createServiceSupabaseClient: vi.fn(),
}));
vi.mock("@/lib/supabase/server", () => ({
  createServerSupabaseClient: vi.fn(),
}));

import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { STATUS_VALUES, LOST_REASON_VALUES } from "@/lib/db-contract";
import { PATCH } from "../route";

const ADMIN = "sue@suewheelerstl.com";

type UpdatePayload = Record<string, unknown>;

function install(opts: { updateError?: unknown } = {}) {
  const updates: UpdatePayload[] = [];
  const client = {
    from: () => ({
      update: (payload: UpdatePayload) => {
        updates.push(payload);
        return {
          eq: () => ({
            select: () => ({
              single: () =>
                Promise.resolve({
                  data: opts.updateError ? null : { id: "sub-1", ...payload },
                  error: opts.updateError ?? null,
                }),
            }),
          }),
        };
      },
    }),
  };
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

function call(body: Record<string, unknown>) {
  const req = new Request("http://localhost/api/admin/submissions/sub-1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return PATCH(req, { params: Promise.resolve({ id: "sub-1" }) });
}

beforeEach(() => {
  vi.mocked(createServiceSupabaseClient).mockReset();
  vi.mocked(createServerSupabaseClient).mockReset();
  vi.stubEnv("ADMIN_EMAILS", ADMIN);
});

describe("PATCH /api/admin/submissions/[id] — status", () => {
  it("accepts every value in the contract, and only those", async () => {
    signIn(ADMIN);
    for (const status of STATUS_VALUES) {
      const { updates } = install();
      const res = await call({ status });
      expect(res.status).toBe(200);
      expect(updates[0].status).toBe(status);
    }
  });

  it("rejects an invalid status with 400, naming the rejected value", async () => {
    signIn(ADMIN);
    const { updates } = install();

    // `quote_sent` is the exact value that broke POST /api/admin/bid — not in
    // STATUS_VALUES, so the CHECK constraint rejects it.
    const res = await call({ status: "quote_sent" });

    expect(res.status).toBe(400);
    const { error } = await res.json();
    expect(error).toContain("quote_sent");
    expect(error).toContain(STATUS_VALUES.join(", "));
    expect(updates).toHaveLength(0);
  });
});

describe("PATCH /api/admin/submissions/[id] — lost_reason", () => {
  it("accepts every value in the contract", async () => {
    signIn(ADMIN);
    for (const reason of LOST_REASON_VALUES) {
      const { updates } = install();
      const res = await call({ status: "lost", lost_reason: reason });
      expect(res.status).toBe(200);
      expect(updates[0].lost_reason).toBe(reason);
    }
  });

  it("rejects an invalid lost_reason with 400, naming the rejected value", async () => {
    signIn(ADMIN);
    const { updates } = install();

    const res = await call({ status: "lost", lost_reason: "too_expensive" });

    expect(res.status).toBe(400);
    const { error } = await res.json();
    // The defect: this reached Postgres and came back as an opaque 500.
    expect(error).toContain("too_expensive");
    expect(error).toContain(LOST_REASON_VALUES.join(", "));
    expect(updates).toHaveLength(0);
  });

  it("allows null to clear the field", async () => {
    signIn(ADMIN);
    const { updates } = install();

    const res = await call({ lost_reason: null });

    expect(res.status).toBe(200);
    expect(updates[0].lost_reason).toBeNull();
  });
});

describe("PATCH /api/admin/submissions/[id] — guards", () => {
  it("401s when nobody is signed in", async () => {
    signIn(null);
    install();
    expect((await call({ status: "to_bid" })).status).toBe(401);
  });

  it("403s for a signed-in non-admin", async () => {
    signIn("stranger@example.test");
    install();
    expect((await call({ status: "to_bid" })).status).toBe(403);
  });

  it("400s when there is nothing to update", async () => {
    signIn(ADMIN);
    install();
    expect((await call({})).status).toBe(400);
  });

  it("500s when the update is rejected", async () => {
    signIn(ADMIN);
    install({ updateError: { message: "connection reset" } });
    expect((await call({ status: "active" })).status).toBe(500);
  });
});
