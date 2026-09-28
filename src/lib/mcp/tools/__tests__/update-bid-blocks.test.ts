import { describe, it, expect, vi } from "vitest";
import { updateBidBlocks, BID_BLOCK_SELECT } from "../update-bid-blocks";
import { ForbiddenFieldError } from "../../projection";

const A = "00000000-0000-4000-8000-00000000000a";
const B = "00000000-0000-4000-8000-00000000000b";
const C = "00000000-0000-4000-8000-00000000000c";

const ROWS = [
  { id: A, submission_id: "s1", source_key: "front-door", title: "FRONT DOOR", body: "old a", sort_order: 0, photo_paths: [] },
  { id: B, submission_id: "s1", source_key: "door-frame", title: "DOOR FRAME", body: "old b", sort_order: 1, photo_paths: [] },
  { id: C, submission_id: "s1", source_key: "porch", title: "PORCH", body: "old c", sort_order: 2, photo_paths: [] },
];

/**
 * A client that RECORDS WRITES. `calls.updates` is the assertion surface for the
 * confirm gate. `failIds` makes a specific block's write fail, which is how the
 * partial-write reporting is exercised.
 */
function mockClient(
  opts: {
    rows?: Record<string, unknown>[];
    readError?: { message: string } | null;
    failIds?: string[];
  } = {},
) {
  const calls = {
    updates: [] as { id: string | null; payload: Record<string, unknown> }[],
    selects: [] as string[],
    in: [] as unknown[][],
  };
  const failIds = new Set(opts.failIds ?? []);
  const client = {
    from: vi.fn(() => {
      let pending: { id: string | null; payload: Record<string, unknown> } | null = null;
      const builder: Record<string, unknown> = {};
      Object.assign(builder, {
        select: (cols: string) => {
          calls.selects.push(cols);
          return builder;
        },
        update: (payload: Record<string, unknown>) => {
          pending = { id: null, payload };
          calls.updates.push(pending);
          return builder;
        },
        eq: (col: string, value: unknown) => {
          if (pending && col === "id") pending.id = String(value);
          return builder;
        },
        in: (...args: unknown[]) => {
          calls.in.push(args);
          return Promise.resolve({
            data: opts.readError ? null : (opts.rows ?? ROWS),
            error: opts.readError ?? null,
          });
        },
        maybeSingle: () => {
          const id = pending?.id ?? "";
          return failIds.has(id)
            ? Promise.resolve({ data: null, error: { message: `write failed for ${id}` } })
            : Promise.resolve({ data: { id }, error: null });
        },
      });
      return builder;
    }),
  };
  return { client, calls };
}

describe("updateBidBlocks", () => {
  it("writes every requested block when confirmed", async () => {
    const { client, calls } = mockClient();
    const r = await updateBidBlocks(
      { blocks: [{ id: A, body: "new a" }, { id: B, title: "NEW B" }], confirm: true },
      client as never,
    );

    expect(calls.updates.map((u) => u.payload)).toEqual([{ body: "new a" }, { title: "NEW B" }]);
    expect(r.ok).toBe(true);
    expect(r.preview).toBe(false);
    expect(r.blocks.every((b) => b.written)).toBe(true);
    expect(r.updatedIds).toEqual([A, B]);
    expect(r.failed).toEqual([]);
  });

  // ── SAFETY PROPERTY ───────────────────────────────────────────────────────
  it("performs ZERO database writes without confirm", async () => {
    const { client, calls } = mockClient();
    const r = await updateBidBlocks(
      { blocks: [{ id: A, body: "new a" }, { id: B, title: "NEW B" }] },
      client as never,
    );

    expect(calls.updates).toHaveLength(0);
    expect(r.preview).toBe(true);
    expect(r.updatedIds).toEqual([]);
    expect(r.blocks.every((b) => b.written === false)).toBe(true);
  });

  it("previews current title and body against the proposal for every block", async () => {
    const { client } = mockClient();
    const r = await updateBidBlocks(
      { blocks: [{ id: A, body: "new a" }, { id: B, sort_order: 9 }] },
      client as never,
    );

    const blockA = r.blocks.find((b) => b.id === A)!;
    expect(blockA.changes).toContainEqual({
      field: "title",
      from: "FRONT DOOR",
      to: "FRONT DOOR",
      changed: false,
    });
    expect(blockA.changes).toContainEqual({
      field: "body",
      from: "old a",
      to: "new a",
      changed: true,
    });

    // Block B is only reordered, but its prose is still shown so the human can
    // see which block is being touched.
    const blockB = r.blocks.find((b) => b.id === B)!;
    expect(blockB.changes.map((c) => c.field)).toEqual(
      expect.arrayContaining(["title", "body", "sort_order"]),
    );
  });

  it("reports exactly which blocks landed when one fails mid-batch", async () => {
    const { client, calls } = mockClient({ failIds: [C] });
    const r = await updateBidBlocks(
      {
        blocks: [{ id: A, body: "1" }, { id: B, body: "2" }, { id: C, body: "3" }],
        confirm: true,
      },
      client as never,
    );

    expect(calls.updates).toHaveLength(3);
    expect(r.ok).toBe(false);
    expect(r.updatedIds).toEqual([A, B]);
    expect(r.failed).toEqual([{ id: C, error: `write failed for ${C}` }]);
    expect(r.message).toMatch(/PARTIAL WRITE/);
    expect(r.blocks.find((b) => b.id === C)!.written).toBe(false);
  });

  it("never attempts a write for a block id that does not exist", async () => {
    const { client, calls } = mockClient({ rows: [ROWS[0]] });
    const r = await updateBidBlocks(
      { blocks: [{ id: A, body: "1" }, { id: B, body: "2" }], confirm: true },
      client as never,
    );

    expect(calls.updates).toHaveLength(1);
    expect(r.notFound).toEqual([B]);
    expect(r.ok).toBe(false);
  });

  it("rejects a non-UUID block id before touching the database", async () => {
    const { client } = mockClient();
    await expect(
      updateBidBlocks({ blocks: [{ id: "front-door", body: "x" }], confirm: true }, client as never),
    ).rejects.toThrow();
    expect(client.from).not.toHaveBeenCalled();
  });

  it("rejects a block with nothing to change", async () => {
    const { client } = mockClient();
    await expect(
      updateBidBlocks({ blocks: [{ id: A }], confirm: true }, client as never),
    ).rejects.toThrow();
  });

  it("rejects the same block twice in one call", async () => {
    const { client } = mockClient();
    await expect(
      updateBidBlocks(
        { blocks: [{ id: A, body: "1" }, { id: A, body: "2" }], confirm: true },
        client as never,
      ),
    ).rejects.toThrow(/Duplicate block id/);
  });

  it("surfaces a read error as a thrown error, not an empty result", async () => {
    const { client } = mockClient({ readError: { message: "boom" } });
    await expect(
      updateBidBlocks({ blocks: [{ id: A, body: "x" }], confirm: true }, client as never),
    ).rejects.toThrow(/boom/);
  });

  // ── REQUEST SHAPE ─────────────────────────────────────────────────────────
  // Defence in depth. NOT the PII guarantee — see the response tests below.
  it("selects an explicit column list, never *", async () => {
    const { client, calls } = mockClient();
    await updateBidBlocks({ blocks: [{ id: A, body: "x" }], confirm: true }, client as never);
    expect(calls.selects.length).toBeGreaterThan(0);
    for (const cols of calls.selects) {
      expect(cols).toBe(BID_BLOCK_SELECT);
      expect(cols).not.toContain("*");
    }
  });

  // ── THE PII GUARANTEE ─────────────────────────────────────────────────────
  // The pre-write rows are not returned whole, but their values are: every
  // `changes[].from` is read off one. bid_blocks carries no credential today;
  // projecting anyway means a schema change that puts one there fails loudly.
  it("throws rather than reading from a block that carries a bearer credential", async () => {
    const { client, calls } = mockClient({
      rows: [
        {
          ...ROWS[0],
          client_token: "3f1c0e7a-0000-4000-8000-000000000001",
          reply_token: "a1b2c3d4e5f6",
        },
      ],
    });
    await expect(
      updateBidBlocks({ blocks: [{ id: A, body: "x" }], confirm: true }, client as never),
    ).rejects.toThrow(ForbiddenFieldError);
    // It throws on the READ, so nothing was written either.
    expect(calls.updates).toHaveLength(0);
  });

  it("throws on either credential alone", async () => {
    for (const token of ["client_token", "reply_token"]) {
      const { client } = mockClient({ rows: [{ ...ROWS[0], [token]: "leaked" }] });
      await expect(
        updateBidBlocks({ blocks: [{ id: A, body: "x" }], confirm: true }, client as never),
      ).rejects.toThrow(ForbiddenFieldError);
    }
  });

  it("reports only allowlisted keys in the preview's before values", async () => {
    const { client } = mockClient({ rows: [{ ...ROWS[0], internal_flag: true }] });
    const r = await updateBidBlocks({ blocks: [{ id: A, body: "x" }] }, client as never);
    expect(r.blocks[0].changes.map((c) => c.field).sort()).toEqual(["body", "title"]);
  });
});
