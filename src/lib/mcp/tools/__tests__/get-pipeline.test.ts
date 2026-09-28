import { describe, it, expect, vi } from "vitest";
import { getPipeline, PIPELINE_LIMIT } from "../get-pipeline";
import { STATUS_VALUES } from "@/lib/db-contract";
import { ForbiddenFieldError } from "../../projection";

function mockClient(rows: unknown[], error: unknown = null) {
  const calls: { limit: number[] } = { limit: [] };
  const builder: Record<string, unknown> = {};
  Object.assign(builder, {
    select: () => builder,
    eq: () => builder,
    is: () => builder,
    order: () => builder,
    limit: (n: number) => {
      calls.limit.push(n);
      return Promise.resolve({ data: rows, error });
    },
  });
  return { from: vi.fn(() => builder), calls };
}

/** n rows, all `to_bid`, distinct ids. */
function rows(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    id: `id-${i}`,
    name: `Lead ${i}`,
    status: "to_bid",
    bid_amount: 1,
  }));
}

describe("getPipeline", () => {
  // ── THE BOUND ─────────────────────────────────────────────────────────────
  // An unbounded read would put the whole table into a model's context and get
  // slower as Sue's board grows. The bound matters less than the reporting: a
  // truncated pipeline that does not say so makes the model state confident
  // totals that are wrong, with nothing in the response revealing it.

  it("asks for one more than the cap, so truncation is detectable", async () => {
    const client = mockClient(rows(3));
    await getPipeline({}, client as never);
    expect(client.calls.limit).toEqual([PIPELINE_LIMIT + 1]);
  });

  it("reports truncated:false and the cap when the board fits", async () => {
    const client = mockClient(rows(3));
    const r = await getPipeline({}, client as never);
    expect(r.truncated).toBe(false);
    expect(r.limit).toBe(PIPELINE_LIMIT);
    expect(r.totalLeads).toBe(3);
  });

  it("reports truncated:true and DROPS the probe row from the counts", async () => {
    // PIPELINE_LIMIT + 1 rows come back. Counting all of them would report one
    // more lead than was actually returned — a total that is wrong by exactly
    // the row we fetched to detect the problem.
    const client = mockClient(rows(PIPELINE_LIMIT + 1));
    const r = await getPipeline({}, client as never);
    expect(r.truncated).toBe(true);
    expect(r.totalLeads).toBe(PIPELINE_LIMIT);
    expect(r.stages.to_bid.count).toBe(PIPELINE_LIMIT);
    expect(r.stages.to_bid.leads).toHaveLength(PIPELINE_LIMIT);
  });

  it("does not report truncation when the board is exactly at the cap", async () => {
    // The case a plain .limit(PIPELINE_LIMIT) could not distinguish from a
    // truncated board.
    const client = mockClient(rows(PIPELINE_LIMIT));
    const r = await getPipeline({}, client as never);
    expect(r.truncated).toBe(false);
    expect(r.totalLeads).toBe(PIPELINE_LIMIT);
  });

  it("includes every contracted status, even empty ones", async () => {
    const client = mockClient([{ id: "1", status: "active", name: "A", bid_amount: 100 }]);
    const r = await getPipeline({}, client as never);
    expect(Object.keys(r.stages).sort()).toEqual([...STATUS_VALUES].sort());
  });

  it("counts leads per stage", async () => {
    const client = mockClient([
      { id: "1", status: "active", name: "A", bid_amount: 100 },
      { id: "2", status: "active", name: "B", bid_amount: 200 },
      { id: "3", status: "to_bid", name: "C", bid_amount: null },
    ]);
    const r = await getPipeline({}, client as never);
    expect(r.stages.active.count).toBe(2);
    expect(r.stages.to_bid.count).toBe(1);
    expect(r.stages.lost.count).toBe(0);
  });

  it("sums bid amounts per stage, treating null as zero", async () => {
    const client = mockClient([
      { id: "1", status: "active", name: "A", bid_amount: 100 },
      { id: "2", status: "active", name: "B", bid_amount: null },
    ]);
    const r = await getPipeline({}, client as never);
    expect(r.stages.active.totalBidAmount).toBe(100);
  });

  it("ignores rows whose status is not in the contract", async () => {
    const client = mockClient([{ id: "1", status: "quote_sent", name: "X", bid_amount: 1 }]);
    const r = await getPipeline({}, client as never);
    expect(r.unknownStatusCount).toBe(1);
    expect(r.totalLeads).toBe(0);
  });

  // ── THE PII GUARANTEE ─────────────────────────────────────────────────────
  // This tool builds its output objects field by field, so a credential could
  // not survive the loop anyway. That is a property of how the loop happens to
  // be written, which nothing else tests and the next edit can remove. The rows
  // are projected on the way in so a credential arriving here is a thrown error
  // rather than an invisible near-miss.
  it("throws rather than processing a row that carries a bearer credential", async () => {
    const client = mockClient([
      {
        id: "1",
        status: "active",
        name: "A",
        bid_amount: 100,
        client_token: "3f1c0e7a-0000-4000-8000-000000000001",
        reply_token: "a1b2c3d4e5f6",
      },
    ]);
    await expect(getPipeline({}, client as never)).rejects.toThrow(ForbiddenFieldError);
  });

  it("throws on either credential alone", async () => {
    for (const token of ["client_token", "reply_token"]) {
      const client = mockClient([
        { id: "1", status: "active", name: "A", bid_amount: 100, [token]: "leaked" },
      ]);
      await expect(getPipeline({}, client as never)).rejects.toThrow(ForbiddenFieldError);
    }
  });

  it("throws on a database error", async () => {
    const client = mockClient([], { message: "boom" });
    await expect(getPipeline({}, client as never)).rejects.toThrow(/boom/);
  });
});
