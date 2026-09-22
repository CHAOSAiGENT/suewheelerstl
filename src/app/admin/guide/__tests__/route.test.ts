/**
 * Covers GET /admin/guide, added 2026-09-22 when `public/sue-admin-guide.html`
 * was moved out of the web root.
 *
 * The filesystem is deliberately NOT mocked. The point of the "serves it to an
 * allowlisted admin" case is to read the real 1.4 MB file from the real path
 * the route computes — `<cwd>/private/sue-admin-guide.html`. A mocked `readFile`
 * would pass with the file deleted, which is the exact failure this route is
 * exposed to (Next does not bundle files it cannot statically see, so the path
 * has to be correct AND the file has to be in the build trace).
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { NextRequest } from "next/server";

vi.mock("@/lib/supabase/server", () => ({
  createServerSupabaseClient: vi.fn(),
}));

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { GET } from "../route";

const ADMIN = "sue@suewheelerstl.com";
const GUIDE_PATH = path.join(process.cwd(), "private", "sue-admin-guide.html");

function signIn(email: string | null) {
  vi.mocked(createServerSupabaseClient).mockResolvedValue({
    auth: {
      getUser: () =>
        Promise.resolve({ data: { user: email ? { email } : null } }),
    },
  } as unknown as Awaited<ReturnType<typeof createServerSupabaseClient>>);
}

const req = () => new NextRequest("https://suewheelerstl.com/admin/guide");

beforeEach(() => {
  vi.mocked(createServerSupabaseClient).mockReset();
  vi.stubEnv("ADMIN_EMAILS", ADMIN);
});

describe("GET /admin/guide", () => {
  it("redirects an anonymous visitor to the login page", async () => {
    signIn(null);

    const res = await GET(req());

    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toContain("/admin/login");
  });

  it("redirects a signed-in non-admin to the login page", async () => {
    signIn("stranger@example.test");

    const res = await GET(req());

    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toContain("/admin/login");
  });

  it("redirects everyone when ADMIN_EMAILS is unset — fails closed", async () => {
    vi.stubEnv("ADMIN_EMAILS", "");
    signIn(ADMIN);

    const res = await GET(req());

    expect(res.status).toBe(307);
  });

  it("serves the real file to an allowlisted admin", async () => {
    signIn(ADMIN);

    const res = await GET(req());

    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("text/html; charset=utf-8");
    expect(res.headers.get("x-robots-tag")).toContain("noindex");
    expect(res.headers.get("cache-control")).toContain("no-store");

    const served = Buffer.from(await res.arrayBuffer());
    expect(served.byteLength).toBe(readFileSync(GUIDE_PATH).byteLength);
  });
});
