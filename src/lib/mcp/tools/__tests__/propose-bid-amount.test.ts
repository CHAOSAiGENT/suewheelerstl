import { describe, it, expect, vi } from "vitest";
import { proposeBidAmount } from "../propose-bid-amount";
import { SUBMISSION_SELECT } from "../../columns";
import { BID_BLOCK_SELECT } from "../update-bid-blocks";
import library from "@/lib/bid/copyblock-library.json";
import type { CopyblockLibrary } from "@/lib/bid/types";

const ID = "00000000-0000-4000-8000-000000000001";

const LEAD = {
  id: ID,
  name: "Hartmann",
  status: "to_bid",
  service_types: ["Exterior Doors", "Kitchen Cabinets"],
  project_description: "Front door is sun-damaged; cabinets need a maintenance coat.",
  bid_amount: null,
};

/**
 * A client that RECORDS WRITES. propose_bid_amount must never produce one.
 */
function mockClient(
  opts: {
    lead?: Record<string, unknown> | null;
    blocks?: Record<string, unknown>[];
    leadError?: { message: string } | null;
    blocksError?: { message: string } | null;
  } = {},
) {
  const calls = { updates: [] as unknown[], inserts: [] as unknown[], selects: [] as string[] };
  const client = {
    from: vi.fn((table: string) => {
      const builder: Record<string, unknown> = {};
      Object.assign(builder, {
        select: (cols: string) => {
          calls.selects.push(cols);
          return builder;
        },
        update: (payload: unknown) => {
          calls.updates.push(payload);
          return builder;
        },
        insert: (payload: unknown) => {
          calls.inserts.push(payload);
          return builder;
        },
        eq: () => builder,
        order: () =>
          Promise.resolve({
            data: opts.blocksError ? null : (opts.blocks ?? []),
            error: opts.blocksError ?? null,
          }),
        maybeSingle: () =>
          Promise.resolve({
            data: opts.leadError ? null : ("lead" in opts ? opts.lead : LEAD),
            error: opts.leadError ?? null,
          }),
      });
      void table;
      return builder;
    }),
  };
  return { client, calls };
}

describe("proposeBidAmount", () => {
  it("gathers the submission, its bid blocks, and matching copyblocks", async () => {
    const { client } = mockClient({ blocks: [{ id: "b1", title: "FRONT DOOR" }] });
    const r = await proposeBidAmount({ id: ID }, client as never);

    expect(r.submission.project_description).toBe(LEAD.project_description);
    expect(r.submission.service_types).toEqual(LEAD.service_types);
    expect(r.bidBlocks).toHaveLength(1);
    expect(r.copyblocks.length).toBeGreaterThan(0);
    expect(r.searchTerms).toContain("door");
  });

  // ── SAFETY PROPERTY ───────────────────────────────────────────────────────
  it("performs ZERO database writes — it has no confirm because it has no write", async () => {
    const { client, calls } = mockClient();
    const r = await proposeBidAmount({ id: ID }, client as never);

    expect(calls.updates).toHaveLength(0);
    expect(calls.inserts).toHaveLength(0);
    expect(r.written).toBe(false);
    expect(r.proposal).toBe(true);
    expect(r.writeTool).toBe("set_bid_amount");
  });

  it("returns copyblock pricing prose verbatim and computes no total", async () => {
    const { client } = mockClient();
    const r = await proposeBidAmount({ id: ID, copyblockLimit: 50 }, client as never);

    const lib = library as CopyblockLibrary;
    const byKey = new Map(lib.flatMap((c) => c.blocks).map((b) => [b.key, b]));
    for (const hit of r.copyblocks) {
      expect(hit.title).toBe(byKey.get(hit.key)!.title);
      expect(hit.body).toBe(byKey.get(hit.key)!.body);
    }

    // At least one matched block still carries its historical pricing line.
    expect(r.copyblocks.some((b) => /Median: \$/.test(b.title) || /Median: \$/.test(b.body))).toBe(
      true,
    );

    // Nothing in the result is a derived number: no suggested amount, no
    // parsed range, no median arithmetic.
    const keys = Object.keys(r);
    for (const forbidden of ["suggestedAmount", "suggested", "median", "estimate", "total"]) {
      expect(keys).not.toContain(forbidden);
    }
  });

  it("respects copyblockLimit while reporting the true match count", async () => {
    const { client } = mockClient();
    const r = await proposeBidAmount({ id: ID, copyblockLimit: 2 }, client as never);
    expect(r.copyblocks).toHaveLength(2);
    expect(r.totalMatched).toBeGreaterThan(2);
  });

  it("rejects a non-UUID id before touching the database", async () => {
    const { client } = mockClient();
    await expect(proposeBidAmount({ id: "the-hartmann-job" }, client as never)).rejects.toThrow();
    expect(client.from).not.toHaveBeenCalled();
  });

  it("throws when the submission does not exist", async () => {
    const { client } = mockClient({ lead: null });
    await expect(proposeBidAmount({ id: ID }, client as never)).rejects.toThrow(
      /no submission with id/,
    );
  });

  it("surfaces a database error as a thrown error, not an empty result", async () => {
    const { client } = mockClient({ leadError: { message: "boom" } });
    await expect(proposeBidAmount({ id: ID }, client as never)).rejects.toThrow(/boom/);
  });

  it("surfaces a bid_blocks error as a thrown error", async () => {
    const { client } = mockClient({ blocksError: { message: "blocks boom" } });
    await expect(proposeBidAmount({ id: ID }, client as never)).rejects.toThrow(/blocks boom/);
  });

  it("selects explicit column lists, never *", async () => {
    const { client, calls } = mockClient();
    await proposeBidAmount({ id: ID }, client as never);
    expect(calls.selects).toEqual([SUBMISSION_SELECT, BID_BLOCK_SELECT]);
    for (const cols of calls.selects) {
      expect(cols).not.toContain("*");
      expect(cols).not.toContain("client_token");
      expect(cols).not.toContain("reply_token");
    }
  });
});
