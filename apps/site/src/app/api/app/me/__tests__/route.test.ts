import { describe, it, expect, vi, beforeEach } from "vitest";
import { TOOL_NAMES } from "@suewheelerstl/contract";

const h = vi.hoisted(() => ({ authorizeAppRequest: vi.fn() }));
vi.mock("@/lib/supabase/server", () => ({
  createServerSupabaseClient: vi.fn(async () => ({})),
}));
vi.mock("@/lib/app-api/auth", () => ({ authorizeAppRequest: h.authorizeAppRequest }));
const { authorizeAppRequest } = h;

import { GET } from "../route";

const req = () => new Request("https://example.test/api/app/me");

describe("GET /api/app/me", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("ADMIN_EMAILS", "sue@suewheelerstl.com,peter@revelocity.co");
    authorizeAppRequest.mockResolvedValue({ ok: true, email: "sue@suewheelerstl.com" });
  });

  it("401s without a session", async () => {
    authorizeAppRequest.mockResolvedValue({ ok: false, status: 401, error: "no" });
    expect((await GET(req())).status).toBe(401);
  });

  it("403s an authenticated caller who is not allowlisted", async () => {
    authorizeAppRequest.mockResolvedValue({ ok: false, status: 403, error: "no" });
    expect((await GET(req())).status).toBe(403);
  });

  it("returns the verified email and the full tool list", async () => {
    const body = await (await GET(req())).json();
    expect(body.email).toBe("sue@suewheelerstl.com");
    expect(body.tools).toEqual([...TOOL_NAMES]);
  });

  it("leaks nothing about other accounts or the environment", async () => {
    // A client needs to know what IT can do, not who else can do it. The
    // allowlist is a server-side policy and has no business on the wire.
    const text = await (await GET(req())).text();
    expect(text).not.toContain("peter@revelocity.co");
    expect(text).not.toContain("ADMIN_EMAILS");
  });
});
