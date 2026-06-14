import { describe, it, expect } from "vitest";
import { checkHealth, formatAlert } from "../check.mjs";

describe("checkHealth", () => {
  it("returns ok on a 200 + {ok:true} body", async () => {
    const fakeFetch = async () => ({
      ok: true,
      status: 200,
      json: async () => ({ ok: true, dbWriteMs: 12 }),
    });
    const result = await checkHealth(fakeFetch, { retries: 0, backoffMs: 0 });
    expect(result.ok).toBe(true);
    expect(result.status).toBe(200);
  });

  it("retries then fails on persistent 500", async () => {
    let calls = 0;
    const fakeFetch = async () => {
      calls++;
      return { ok: false, status: 500, json: async () => ({ ok: false, error: "boom" }) };
    };
    const result = await checkHealth(fakeFetch, { retries: 2, backoffMs: 0 });
    expect(result.ok).toBe(false);
    expect(result.status).toBe(500);
    expect(calls).toBe(3); // initial + 2 retries
  });

  it("treats a thrown fetch (site down) as failure", async () => {
    const fakeFetch = async () => {
      throw new Error("ECONNREFUSED");
    };
    const result = await checkHealth(fakeFetch, { retries: 0, backoffMs: 0 });
    expect(result.ok).toBe(false);
    expect(result.status).toBe(0);
  });
});

describe("formatAlert", () => {
  it("includes status, detail, and run url", () => {
    const msg = formatAlert(
      { ok: false, status: 500, body: { error: "insert: boom" } },
      "https://example.com/run/1",
    );
    expect(msg).toContain("500");
    expect(msg).toContain("insert: boom");
    expect(msg).toContain("https://example.com/run/1");
  });
});
