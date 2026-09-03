import { describe, it, expect, vi } from "vitest";
import { getPipeline } from "../get-pipeline";
import { STATUS_VALUES } from "@/lib/db-contract";

function mockClient(rows: unknown[], error: unknown = null) {
  const builder: Record<string, unknown> = {};
  Object.assign(builder, {
    select: () => builder,
    eq: () => builder,
    is: () => Promise.resolve({ data: rows, error }),
  });
  return { from: vi.fn(() => builder) };
}

describe("getPipeline", () => {
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

  it("throws on a database error", async () => {
    const client = mockClient([], { message: "boom" });
    await expect(getPipeline({}, client as never)).rejects.toThrow(/boom/);
  });
});
