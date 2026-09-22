/**
 * Covers the expiry check added to GET /api/client/bid-file on 2026-09-22.
 *
 * The route mints a 30-minute signed URL to a private bucket from nothing but
 * `client_token`. Its three siblings (the portal page, client/reply and
 * client/accept-bid) all reject an expired token with 410; this one checked
 * nothing, so an expired link still handed out the bid PDF.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase/service", () => ({
  createServiceSupabaseClient: vi.fn(),
}));

import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { GET } from "../route";

const FUTURE = new Date(Date.now() + 86_400_000).toISOString();
const PAST = new Date(Date.now() - 86_400_000).toISOString();

function install(submission: Record<string, unknown> | null) {
  const signedUrl = vi.fn().mockResolvedValue({
    data: { signedUrl: "https://storage.example.test/signed" },
  });
  const client = {
    from: () => ({
      select: () => ({
        eq: () => ({ single: () => Promise.resolve({ data: submission }) }),
      }),
    }),
    storage: { from: () => ({ createSignedUrl: signedUrl }) },
  };
  vi.mocked(createServiceSupabaseClient).mockReturnValue(
    client as unknown as ReturnType<typeof createServiceSupabaseClient>,
  );
  return signedUrl;
}

function req(token?: string) {
  const url = token
    ? `http://localhost/api/client/bid-file?token=${token}`
    : "http://localhost/api/client/bid-file";
  return new Request(url);
}

beforeEach(() => {
  vi.mocked(createServiceSupabaseClient).mockReset();
});

describe("GET /api/client/bid-file", () => {
  it("400s without a token", async () => {
    install(null);
    expect((await GET(req())).status).toBe(400);
  });

  it("404s when no file is attached", async () => {
    install({ bid_file_url: null, client_token_expires_at: FUTURE });
    expect((await GET(req("t"))).status).toBe(404);
  });

  it("410s on an expired client token, and mints no signed URL", async () => {
    const signedUrl = install({
      bid_file_url: "bids/sub-1/file.pdf",
      client_token_expires_at: PAST,
    });

    const res = await GET(req("t"));

    expect(res.status).toBe(410);
    expect(signedUrl).not.toHaveBeenCalled();
  });

  it("redirects to a signed URL while the token is live", async () => {
    const signedUrl = install({
      bid_file_url: "bids/sub-1/file.pdf",
      client_token_expires_at: FUTURE,
    });

    const res = await GET(req("t"));

    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe(
      "https://storage.example.test/signed",
    );
    expect(signedUrl).toHaveBeenCalledOnce();
  });
});
