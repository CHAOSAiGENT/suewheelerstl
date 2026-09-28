import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase/service", () => ({
  createServiceSupabaseClient: vi.fn(),
}));
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { POST } from "../route";

/** Builds a Supabase client mock whose insert/read/delete resolve to given values. */
function mockClient(opts: {
  insert: { data: unknown; error: unknown };
  read: { data: unknown; error: unknown };
  del: { error: unknown };
}) {
  return {
    from: () => ({
      insert: () => ({
        select: () => ({ single: () => Promise.resolve(opts.insert) }),
      }),
      select: () => ({
        eq: () => ({ single: () => Promise.resolve(opts.read) }),
      }),
      delete: () => ({ eq: () => Promise.resolve(opts.del) }),
    }),
  };
}

function req(secret?: string) {
  const headers: Record<string, string> = {};
  if (secret !== undefined) headers["x-monitor-secret"] = secret;
  return new Request("http://localhost/api/health", {
    method: "POST",
    headers,
  });
}

beforeEach(() => {
  vi.stubEnv("MONITOR_SECRET", "test-secret");
  vi.mocked(createServiceSupabaseClient).mockReset();
});

describe("POST /api/health", () => {
  it("401s without the secret header", async () => {
    const res = await POST(req());
    expect(res.status).toBe(401);
  });

  it("401s with a wrong secret", async () => {
    const res = await POST(req("nope"));
    expect(res.status).toBe(401);
  });

  it("200s on a successful insert/read/delete round-trip", async () => {
    vi.mocked(createServiceSupabaseClient).mockReturnValue(
      mockClient({
        insert: { data: { id: "abc" }, error: null },
        read: { data: { id: "abc" }, error: null },
        del: { error: null },
      }) as unknown as ReturnType<typeof createServiceSupabaseClient>,
    );
    const res = await POST(req("test-secret"));
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ ok: true });
  });

  it("500s when the insert fails", async () => {
    vi.mocked(createServiceSupabaseClient).mockReturnValue(
      mockClient({
        insert: { data: null, error: { message: "boom" } },
        read: { data: null, error: null },
        del: { error: null },
      }) as unknown as ReturnType<typeof createServiceSupabaseClient>,
    );
    const res = await POST(req("test-secret"));
    expect(res.status).toBe(500);
    expect(await res.json()).toMatchObject({ ok: false });
  });
});
