import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("@/lib/supabase/server", () => ({
  createServerSupabaseClient: vi.fn(),
}));
vi.mock("@/lib/supabase/service", () => ({
  createServiceSupabaseClient: vi.fn(),
}));

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { GET } from "../route";

/** Auth client mock whose getUser() resolves to the given signed-in user. */
function mockAuth(email: string | null) {
  return {
    auth: {
      getUser: () =>
        Promise.resolve({
          data: { user: email === null ? null : { id: "u1", email } },
          error: null,
        }),
    },
  };
}

/** Service client mock returning one crew row. */
function mockService() {
  return {
    from: () => ({
      select: () => ({
        eq: () => ({
          order: () => Promise.resolve({ data: [{ id: "c1" }], error: null }),
        }),
      }),
    }),
  };
}

beforeEach(() => {
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.mocked(createServiceSupabaseClient).mockReturnValue(
    mockService() as unknown as ReturnType<typeof createServiceSupabaseClient>,
  );
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

function signedInAs(email: string | null) {
  vi.mocked(createServerSupabaseClient).mockResolvedValue(
    mockAuth(email) as unknown as Awaited<
      ReturnType<typeof createServerSupabaseClient>
    >,
  );
}

describe("GET /api/admin/crew — authorization", () => {
  it("401s when nobody is signed in", async () => {
    vi.stubEnv("ADMIN_EMAILS", "sue@example.com");
    signedInAs(null);
    expect((await GET()).status).toBe(401);
  });

  // The vulnerability: any Google account could complete OAuth and satisfy the
  // old `if (!user)` check. It must now be rejected with 403, not admitted.
  it("403s an authenticated user who is not on the allowlist", async () => {
    vi.stubEnv("ADMIN_EMAILS", "sue@example.com");
    signedInAs("attacker@gmail.com");
    const res = await GET();
    expect(res.status).toBe(403);
    expect(await res.json()).toMatchObject({ error: "Forbidden" });
  });

  it("200s for an allowlisted user, matching case-insensitively", async () => {
    vi.stubEnv("ADMIN_EMAILS", " Sue@Example.com ");
    signedInAs("sue@example.com");
    const res = await GET();
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ crew: [{ id: "c1" }] });
  });

  it("403s even the real admin when ADMIN_EMAILS is unset (fails closed)", async () => {
    vi.stubEnv("ADMIN_EMAILS", undefined);
    signedInAs("sue@example.com");
    expect((await GET()).status).toBe(403);
  });
});
