import { describe, it, expect, vi, beforeEach } from "vitest";

// vi.mock is hoisted above every const in this file, so anything a factory
// closes over has to be created by vi.hoisted() rather than declared normally.
const h = vi.hoisted(() => ({
  meterRows: [] as unknown[],
  authorizeAppRequest: vi.fn(),
  dispatchTool: vi.fn(),
}));

vi.mock("@/lib/supabase/service", () => ({
  createServiceSupabaseClient: vi.fn(() => ({
    from: vi.fn(() => ({
      insert: (row: unknown) => {
        h.meterRows.push(row);
        return Promise.resolve({ error: null });
      },
    })),
  })),
}));

vi.mock("@/lib/supabase/server", () => ({
  createServerSupabaseClient: vi.fn(async () => ({})),
}));

vi.mock("@/lib/app-api/auth", () => ({ authorizeAppRequest: h.authorizeAppRequest }));

vi.mock("@/lib/app-api/dispatch", async (orig) => ({
  ...(await orig<Record<string, unknown>>()),
  dispatchTool: h.dispatchTool,
}));

const { meterRows, authorizeAppRequest, dispatchTool } = h;

import { POST } from "../route";

function call(name: string, body: unknown = {}, raw?: string) {
  return POST(
    new Request(`https://example.test/api/app/tools/${name}`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-client-id": "desktop" },
      body: raw ?? JSON.stringify(body),
    }),
    { params: Promise.resolve({ name }) },
  );
}

describe("POST /api/app/tools/:name", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    meterRows.length = 0;
    authorizeAppRequest.mockResolvedValue({ ok: true, email: "sue@suewheelerstl.com" });
    dispatchTool.mockResolvedValue({ stages: {}, totalLeads: 0, truncated: false });
  });

  // ── ORDER ─────────────────────────────────────────────────────────────────
  it("404s an unknown tool name BEFORE authenticating", async () => {
    // Not an auth question. Rejecting it first means a probe never reaches the
    // auth path or the database.
    const res = await call("drop_everything");
    expect(res.status).toBe(404);
    expect(authorizeAppRequest).not.toHaveBeenCalled();
    expect(dispatchTool).not.toHaveBeenCalled();
  });

  // ── AUTH ──────────────────────────────────────────────────────────────────
  it("401s when auth rejects the token", async () => {
    authorizeAppRequest.mockResolvedValue({ ok: false, status: 401, error: "no token" });
    const res = await call("get_pipeline");
    expect(res.status).toBe(401);
    expect(dispatchTool).not.toHaveBeenCalled();
  });

  it("403s an authenticated caller who is not allowlisted", async () => {
    authorizeAppRequest.mockResolvedValue({ ok: false, status: 403, error: "nope" });
    expect((await call("get_pipeline")).status).toBe(403);
  });

  it("does not meter a request that never reached a tool", async () => {
    authorizeAppRequest.mockResolvedValue({ ok: false, status: 401, error: "no" });
    await call("get_pipeline");
    expect(meterRows).toHaveLength(0);
  });

  // ── HAPPY PATH ────────────────────────────────────────────────────────────
  it("invokes the tool and returns its result", async () => {
    const res = await call("get_pipeline");
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ totalLeads: 0 });
    expect(dispatchTool).toHaveBeenCalledWith("get_pipeline", {}, expect.anything());
  });

  it("passes the request body through as the tool input", async () => {
    await call("search_leads", { query: "hartmann" });
    expect(dispatchTool).toHaveBeenCalledWith(
      "search_leads",
      { query: "hartmann" },
      expect.anything(),
    );
  });

  // ── METERING ──────────────────────────────────────────────────────────────
  it("writes exactly one usage row on success, with the client id", async () => {
    await call("get_pipeline");
    expect(meterRows).toHaveLength(1);
    const row = meterRows[0] as Record<string, unknown>;
    expect(row.tool_name).toBe("get_pipeline");
    expect(row.outcome).toBe("ok");
    expect(row.client_id).toBe("desktop");
    expect(row.user_email).toBe("sue@suewheelerstl.com");
    expect(typeof row.duration_ms).toBe("number");
  });

  it("meters failures too — an error still consumed a round trip", async () => {
    dispatchTool.mockRejectedValue(new Error("boom"));
    await call("get_pipeline");
    expect(meterRows).toHaveLength(1);
    expect((meterRows[0] as Record<string, unknown>).outcome).toBe("error");
  });

  // ── ERROR CLASSIFICATION ──────────────────────────────────────────────────
  it("400s a validation failure rather than 500ing", async () => {
    // Telling a client to retry something that can never succeed is worse than
    // no error at all.
    dispatchTool.mockRejectedValue(new Error('Invalid status "quote_sent" — expected one of ...'));
    expect((await call("get_pipeline", { status: "quote_sent" })).status).toBe(400);
  });

  it("500s an unrecognised failure — conservative by design", async () => {
    dispatchTool.mockRejectedValue(new Error("connection terminated unexpectedly"));
    expect((await call("get_pipeline")).status).toBe(500);
  });

  it("400s a malformed JSON body without calling the tool", async () => {
    const res = await call("get_pipeline", undefined, "{not json");
    expect(res.status).toBe(400);
    expect(dispatchTool).not.toHaveBeenCalled();
    // Still metered: it reached auth and cost a request.
    expect(meterRows).toHaveLength(1);
  });

  // ── THE LEAK GUARD ────────────────────────────────────────────────────────
  it("withholds a response carrying a bearer credential, and does not 200", async () => {
    // projection.ts should make this unreachable. The boundary asserts it
    // anyway, because the cost of being wrong is a credential written
    // permanently into a model transcript.
    dispatchTool.mockResolvedValue({ lead: { id: "x", client_token: "leaked" } });
    const res = await call("get_lead");
    expect(res.status).toBe(500);
    const body = await res.text();
    expect(body).not.toContain("client_token");
    expect(body).not.toContain("leaked");
  });

  it("withholds on reply_token too", async () => {
    dispatchTool.mockResolvedValue({ lead: { id: "x", reply_token: "abc123" } });
    const res = await call("get_lead");
    expect(res.status).toBe(500);
    expect(await res.text()).not.toContain("reply_token");
  });
});
