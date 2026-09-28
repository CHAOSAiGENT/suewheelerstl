import { describe, it, expect, vi } from "vitest";
import { createBidBlocks } from "../create-bid-blocks";
import { ForbiddenFieldError } from "../../projection";

const ID = "00000000-0000-4000-8000-000000000001";

interface MockOpts {
  lead?: { data: unknown; error: unknown };
  existing?: { data: unknown; error: unknown };
  /** One result per insert, consumed in order. */
  inserts?: { data: unknown; error: unknown }[];
}

function mockClient(opts: MockOpts = {}) {
  const lead = opts.lead ?? { data: { id: ID }, error: null };
  const existing = opts.existing ?? { data: [], error: null };
  const insertResults = opts.inserts ?? [];
  let insertIndex = 0;

  const selects: Record<string, string> = {};
  const insertedRows: Record<string, unknown>[] = [];

  const from = vi.fn((table: string) => {
    const builder: Record<string, unknown> = {};
    let isInsert = false;
    Object.assign(builder, {
      select: (cols: string) => {
        selects[table] = cols;
        return builder;
      },
      insert: (row: Record<string, unknown>) => {
        isInsert = true;
        insertedRows.push(row);
        return builder;
      },
      eq: () => builder,
      maybeSingle: () => Promise.resolve(lead),
      single: () => {
        const r = insertResults[insertIndex] ?? {
          data: { id: `block-${insertIndex}`, ...insertedRows[insertIndex] },
          error: null,
        };
        insertIndex += 1;
        return Promise.resolve(r);
      },
      // Only the "existing sort_orders" query is awaited without a terminator.
      then: (resolve: (v: unknown) => unknown) =>
        Promise.resolve(isInsert ? undefined : existing).then(resolve),
    });
    return builder;
  });

  return { client: { from }, selects, insertedRows };
}

const two = [
  { title: "Front door", body: "Strip and refinish." },
  { title: "Newel post", body: "Hand-sand and seal." },
];

describe("createBidBlocks", () => {
  it("writes every block and reports the run as complete", async () => {
    const m = mockClient();
    const r = await createBidBlocks({ submission_id: ID, blocks: two }, m.client as never);
    expect(r.createdCount).toBe(2);
    expect(r.complete).toBe(true);
    expect(r.failed).toBeNull();
    expect(r.notAttempted).toEqual([]);
  });

  it("assigns sort_order from array position when none is supplied", async () => {
    const m = mockClient();
    await createBidBlocks({ submission_id: ID, blocks: two }, m.client as never);
    expect(m.insertedRows.map((r) => r.sort_order)).toEqual([0, 1]);
  });

  it("continues the sequence past blocks already on the submission", async () => {
    const m = mockClient({ existing: { data: [{ sort_order: 0 }, { sort_order: 4 }], error: null } });
    await createBidBlocks({ submission_id: ID, blocks: two }, m.client as never);
    expect(m.insertedRows.map((r) => r.sort_order)).toEqual([5, 6]);
  });

  it("moves a supplied sort_order off an existing one rather than colliding", async () => {
    const m = mockClient({ existing: { data: [{ sort_order: 2 }], error: null } });
    await createBidBlocks(
      { submission_id: ID, blocks: [{ title: "Front door", body: "x", sort_order: 2 }] },
      m.client as never,
    );
    expect(m.insertedRows[0].sort_order).toBe(3);
  });

  it("defaults source_key to custom for prose written from scratch", async () => {
    const m = mockClient();
    await createBidBlocks(
      {
        submission_id: ID,
        blocks: [
          { title: "Front door", body: "x" },
          { title: "Newel post", body: "y", source_key: "front_door_strip" },
        ],
      },
      m.client as never,
    );
    expect(m.insertedRows.map((r) => r.source_key)).toEqual(["custom", "front_door_strip"]);
  });

  it("reports exactly which blocks landed when one fails mid-run", async () => {
    const m = mockClient({
      inserts: [
        { data: { id: "block-0" }, error: null },
        { data: { id: "block-1" }, error: null },
        { data: null, error: { message: "body too long" } },
      ],
    });
    const r = await createBidBlocks(
      {
        submission_id: ID,
        blocks: [
          { title: "One", body: "a" },
          { title: "Two", body: "b" },
          { title: "Three", body: "c" },
          { title: "Four", body: "d" },
        ],
      },
      m.client as never,
    );
    expect(r.createdCount).toBe(2);
    expect(r.complete).toBe(false);
    expect(r.failed).toEqual({ index: 2, title: "Three", error: "body too long" });
    expect(r.notAttempted).toEqual([3]);
    // The run stopped: block four was never sent.
    expect(m.insertedRows).toHaveLength(3);
  });

  it("throws when nothing landed at all — an empty list would read as an unwritten bid", async () => {
    const m = mockClient({ inserts: [{ data: null, error: { message: "boom" } }] });
    await expect(
      createBidBlocks({ submission_id: ID, blocks: two }, m.client as never),
    ).rejects.toThrow(/boom/);
  });

  // ── REQUEST SHAPE ─────────────────────────────────────────────────────────
  // Defence in depth. NOT the PII guarantee — see the response tests below.
  it("never selects * from any table", async () => {
    const m = mockClient();
    await createBidBlocks({ submission_id: ID, blocks: two }, m.client as never);
    expect(Object.keys(m.selects).sort()).toEqual(["bid_blocks", "submissions"]);
    for (const cols of Object.values(m.selects)) {
      expect(cols).not.toBe("*");
      expect(cols).not.toContain("*");
      expect(cols).not.toContain("client_token");
      expect(cols).not.toContain("reply_token");
    }
  });

  // ── THE PII GUARANTEE ─────────────────────────────────────────────────────
  // bid_blocks carries no credential today; created rows are projected anyway
  // so a schema change that puts one there fails loudly instead of leaking.
  it("throws rather than returning a created block that carries a bearer credential", async () => {
    const m = mockClient({
      inserts: [
        {
          data: {
            id: "block-0",
            client_token: "3f1c0e7a-0000-4000-8000-000000000001",
            reply_token: "a1b2c3d4e5f6",
          },
          error: null,
        },
      ],
    });
    await expect(
      createBidBlocks({ submission_id: ID, blocks: two }, m.client as never),
    ).rejects.toThrow(ForbiddenFieldError);
  });

  it("throws on either credential alone", async () => {
    for (const token of ["client_token", "reply_token"]) {
      const m = mockClient({
        inserts: [{ data: { id: "block-0", [token]: "leaked" }, error: null }],
      });
      await expect(
        createBidBlocks({ submission_id: ID, blocks: two }, m.client as never),
      ).rejects.toThrow(ForbiddenFieldError);
    }
  });

  it("returns created blocks with only allowlisted keys", async () => {
    const m = mockClient({
      inserts: [
        { data: { id: "block-0", title: "Front door", internal_flag: true }, error: null },
        { data: { id: "block-1", title: "Newel post" }, error: null },
      ],
    });
    const r = await createBidBlocks({ submission_id: ID, blocks: two }, m.client as never);
    expect(Object.keys(r.created[0]).sort()).toEqual(["id", "title"]);
  });

  it("rejects a non-UUID submission_id before touching the database", async () => {
    const m = mockClient();
    await expect(
      createBidBlocks({ submission_id: "the-hartmann-job", blocks: two }, m.client as never),
    ).rejects.toThrow();
    expect(m.client.from).not.toHaveBeenCalled();
  });

  it("rejects an empty blocks array and a block with no title", async () => {
    const m = mockClient();
    await expect(
      createBidBlocks({ submission_id: ID, blocks: [] }, m.client as never),
    ).rejects.toThrow(/blocks/);
    await expect(
      createBidBlocks({ submission_id: ID, blocks: [{ title: "  ", body: "x" }] }, m.client as never),
    ).rejects.toThrow(/title/);
    expect(m.client.from).not.toHaveBeenCalled();
  });

  it("refuses to write blocks against a submission that does not exist", async () => {
    const m = mockClient({ lead: { data: null, error: null } });
    await expect(
      createBidBlocks({ submission_id: ID, blocks: two }, m.client as never),
    ).rejects.toThrow(/no lead with id/);
    expect(m.insertedRows).toHaveLength(0);
  });

  it("surfaces an existing-blocks lookup error as a thrown error", async () => {
    const m = mockClient({ existing: { data: null, error: { message: "lookup boom" } } });
    await expect(
      createBidBlocks({ submission_id: ID, blocks: two }, m.client as never),
    ).rejects.toThrow(/lookup boom/);
    expect(m.insertedRows).toHaveLength(0);
  });
});
