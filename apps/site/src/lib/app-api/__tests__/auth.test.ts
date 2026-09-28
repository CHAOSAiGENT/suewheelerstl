import { describe, it, expect, vi, beforeEach } from "vitest";
import { authorizeAppRequest } from "../auth";

function req(headers: Record<string, string> = {}) {
  return new Request("https://example.test/api/app/tools/get_pipeline", { headers });
}

function stubSupabase(user: { email: string } | null) {
  return {
    auth: { getUser: vi.fn(async () => ({ data: { user }, error: null })) },
  };
}

describe("authorizeAppRequest", () => {
  beforeEach(() => vi.stubEnv("ADMIN_EMAILS", "sue@suewheelerstl.com"));

  it("rejects a request with no Authorization header without constructing Supabase", async () => {
    // A misconfigured environment makes the constructor THROW. If the factory
    // ran here, an unauthenticated probe would 500 instead of 401 — which is
    // exactly what a live curl found before this took a factory.
    let factoryCalls = 0;
    const sb = stubSupabase(null);
    const r = await authorizeAppRequest(req(), () => { factoryCalls++; return sb as never; });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(401);
    expect(sb.auth.getUser).not.toHaveBeenCalled();
    expect(factoryCalls).toBe(0); // the client is never even CONSTRUCTED
  });

  it("rejects a token Supabase does not recognise", async () => {
    const sb = stubSupabase(null);
    const r = await authorizeAppRequest(req({ authorization: "Bearer bad" }), () => sb as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(401);
  });

  it("rejects an authenticated user who is not allowlisted, with 403 not 401", async () => {
    // 403, because re-authenticating will never help. A 401 would send them
    // round the OAuth loop forever.
    const sb = stubSupabase({ email: "stranger@example.com" });
    const r = await authorizeAppRequest(req({ authorization: "Bearer good" }), () => sb as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(403);
  });

  it("accepts an allowlisted user and returns the normalized email", async () => {
    const sb = stubSupabase({ email: "Sue@SueWheelerSTL.com" });
    const r = await authorizeAppRequest(req({ authorization: "Bearer good" }), () => sb as never);
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.email).toBe("sue@suewheelerstl.com");
  });

  it("denies everyone when ADMIN_EMAILS is unset — fails closed", async () => {
    vi.stubEnv("ADMIN_EMAILS", "");
    const sb = stubSupabase({ email: "sue@suewheelerstl.com" });
    const r = await authorizeAppRequest(req({ authorization: "Bearer good" }), () => sb as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(403);
  });
});
