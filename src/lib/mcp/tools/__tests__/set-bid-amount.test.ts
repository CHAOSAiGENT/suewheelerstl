import { describe, it, expect, vi } from "vitest";
import { setBidAmount, BID_AMOUNT_CEILING } from "../set-bid-amount";
import { SUBMISSION_SELECT } from "../../columns";
import { ForbiddenFieldError } from "../../projection";

const ID = "00000000-0000-4000-8000-000000000001";

const ROW = { id: ID, name: "Hartmann", status: "to_bid", bid_amount: 4200 };

/**
 * A client that RECORDS WRITES. `calls.updates` is the assertion surface both
 * for the confirm gate and for the guarantee that only `bid_amount` is written.
 */
function mockClient(
  opts: {
    current?: Record<string, unknown> | null;
    updated?: Record<string, unknown> | null;
    selectError?: { message: string } | null;
    updateError?: { message: string } | null;
  } = {},
) {
  const calls = { updates: [] as Record<string, unknown>[], selects: [] as string[] };
  const client = {
    from: vi.fn(() => {
      let isUpdate = false;
      const builder: Record<string, unknown> = {};
      Object.assign(builder, {
        select: (cols: string) => {
          calls.selects.push(cols);
          return builder;
        },
        update: (payload: Record<string, unknown>) => {
          isUpdate = true;
          calls.updates.push(payload);
          return builder;
        },
        eq: () => builder,
        maybeSingle: () =>
          isUpdate
            ? Promise.resolve({
                data: opts.updateError ? null : (opts.updated ?? opts.current ?? null),
                error: opts.updateError ?? null,
              })
            : Promise.resolve({
                data: opts.selectError ? null : ("current" in opts ? opts.current : ROW),
                error: opts.selectError ?? null,
              }),
      });
      return builder;
    }),
  };
  return { client, calls };
}

describe("setBidAmount", () => {
  it("writes bid_amount when given an explicit amount and confirm", async () => {
    const { client, calls } = mockClient({ updated: { ...ROW, bid_amount: 3900 } });
    const r = await setBidAmount({ id: ID, amount: 3900, confirm: true }, client as never);

    expect(calls.updates).toEqual([{ bid_amount: 3900 }]);
    expect(r.written).toBe(true);
    expect(r.changes).toEqual([{ field: "bid_amount", from: 4200, to: 3900 }]);
  });

  it("writes bid_amount and NOTHING else — never bid_status, bid_sent_at, bid_file_url", async () => {
    const { client, calls } = mockClient({ updated: { ...ROW, bid_amount: 3900 } });
    await setBidAmount({ id: ID, amount: 3900, confirm: true }, client as never);
    expect(calls.updates).toHaveLength(1);
    expect(Object.keys(calls.updates[0])).toEqual(["bid_amount"]);
  });

  // ── SAFETY PROPERTY ───────────────────────────────────────────────────────
  it("performs ZERO database writes without confirm", async () => {
    const { client, calls } = mockClient();
    const r = await setBidAmount({ id: ID, amount: 3900 }, client as never);

    expect(calls.updates).toHaveLength(0);
    expect(r.preview).toBe(true);
    expect(r.written).toBe(false);
    expect(r.currentBidAmount).toBe(4200);
    expect(r.proposedBidAmount).toBe(3900);
    expect(r.message).toMatch(/OVERWRITE/);
  });

  // ── SAFETY PROPERTY ───────────────────────────────────────────────────────
  it("rejects a call with no amount, and writes nothing", async () => {
    const { client, calls } = mockClient();
    await expect(setBidAmount({ id: ID, confirm: true } as never, client as never)).rejects.toThrow();
    expect(calls.updates).toHaveLength(0);
    expect(client.from).not.toHaveBeenCalled();
  });

  it("rejects a non-numeric amount, and writes nothing", async () => {
    const { client, calls } = mockClient();
    await expect(
      setBidAmount({ id: ID, amount: "3900", confirm: true } as never, client as never),
    ).rejects.toThrow();
    expect(calls.updates).toHaveLength(0);
  });

  it("rejects a negative amount", async () => {
    const { client, calls } = mockClient();
    await expect(
      setBidAmount({ id: ID, amount: -100, confirm: true }, client as never),
    ).rejects.toThrow(/negative/);
    expect(calls.updates).toHaveLength(0);
  });

  it("rejects a non-finite amount", async () => {
    const { client, calls } = mockClient();
    await expect(
      setBidAmount({ id: ID, amount: Number.POSITIVE_INFINITY, confirm: true }, client as never),
    ).rejects.toThrow();
    await expect(
      setBidAmount({ id: ID, amount: Number.NaN, confirm: true }, client as never),
    ).rejects.toThrow();
    expect(calls.updates).toHaveLength(0);
  });

  it("rejects an amount above the sanity ceiling", async () => {
    const { client, calls } = mockClient();
    await expect(
      setBidAmount({ id: ID, amount: BID_AMOUNT_CEILING + 1, confirm: true }, client as never),
    ).rejects.toThrow(/ceiling/);
    expect(calls.updates).toHaveLength(0);
  });

  it("rejects a non-UUID id before touching the database", async () => {
    const { client } = mockClient();
    await expect(
      setBidAmount({ id: "the-hartmann-job", amount: 3900, confirm: true }, client as never),
    ).rejects.toThrow();
    expect(client.from).not.toHaveBeenCalled();
  });

  it("says so plainly when the job has no bid amount yet", async () => {
    const { client } = mockClient({ current: { ...ROW, bid_amount: null } });
    const r = await setBidAmount({ id: ID, amount: 3900 }, client as never);
    expect(r.currentBidAmount).toBeNull();
    expect(r.message).toMatch(/no bid amount yet/);
  });

  it("throws when the submission does not exist", async () => {
    const { client } = mockClient({ current: null });
    await expect(
      setBidAmount({ id: ID, amount: 3900, confirm: true }, client as never),
    ).rejects.toThrow(/no submission with id/);
  });

  it("surfaces a database error as a thrown error, not a silent no-op", async () => {
    const { client } = mockClient({ selectError: { message: "boom" } });
    await expect(
      setBidAmount({ id: ID, amount: 3900, confirm: true }, client as never),
    ).rejects.toThrow(/boom/);
  });

  it("surfaces a write error as a thrown error", async () => {
    const { client } = mockClient({ updateError: { message: "write boom" } });
    await expect(
      setBidAmount({ id: ID, amount: 3900, confirm: true }, client as never),
    ).rejects.toThrow(/write boom/);
  });

  // ── REQUEST SHAPE ─────────────────────────────────────────────────────────
  // Defence in depth. NOT the PII guarantee — see the response tests below.
  it("selects only allowlisted columns, never *", async () => {
    const { client, calls } = mockClient({ updated: ROW });
    await setBidAmount({ id: ID, amount: 3900, confirm: true }, client as never);
    expect(calls.selects.length).toBeGreaterThan(0);
    for (const cols of calls.selects) {
      expect(cols).toBe(SUBMISSION_SELECT);
      expect(cols).not.toContain("*");
      expect(cols).not.toContain("client_token");
      expect(cols).not.toContain("reply_token");
    }
  });

  // ── THE PII GUARANTEE ─────────────────────────────────────────────────────
  const TOKENED = {
    ...ROW,
    client_token: "3f1c0e7a-0000-4000-8000-000000000001",
    reply_token: "a1b2c3d4e5f6",
  };

  it("throws rather than returning a row that carries a bearer credential", async () => {
    const { client } = mockClient({ current: TOKENED, updated: TOKENED });
    await expect(
      setBidAmount({ id: ID, amount: 3900, confirm: true }, client as never),
    ).rejects.toThrow(ForbiddenFieldError);
  });

  it("throws in preview too — the preview returns the row as well", async () => {
    const { client, calls } = mockClient({ current: TOKENED });
    await expect(setBidAmount({ id: ID, amount: 3900 }, client as never)).rejects.toThrow(
      ForbiddenFieldError,
    );
    expect(calls.updates).toHaveLength(0);
  });

  it("throws on the written row when only the write echo carries a credential", async () => {
    const { client } = mockClient({ current: ROW, updated: TOKENED });
    await expect(
      setBidAmount({ id: ID, amount: 3900, confirm: true }, client as never),
    ).rejects.toThrow(ForbiddenFieldError);
  });

  it("throws on either credential alone", async () => {
    for (const token of ["client_token", "reply_token"]) {
      const { client } = mockClient({ current: { ...ROW, [token]: "leaked" } });
      await expect(
        setBidAmount({ id: ID, amount: 3900, confirm: true }, client as never),
      ).rejects.toThrow(ForbiddenFieldError);
    }
  });

  it("returns only allowlisted keys, dropping anything else the source sends", async () => {
    const row = { ...ROW, is_test: false, archived_at: null };
    const { client } = mockClient({ current: row, updated: row });
    const r = await setBidAmount({ id: ID, amount: 3900, confirm: true }, client as never);
    expect(Object.keys(r.lead!).sort()).toEqual(["bid_amount", "id", "name", "status"]);
  });
});
