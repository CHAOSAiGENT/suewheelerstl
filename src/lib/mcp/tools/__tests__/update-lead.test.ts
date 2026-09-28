import { describe, it, expect, vi } from "vitest";
import { updateLead } from "../update-lead";
import { SUBMISSION_SELECT } from "../../columns";
import { ForbiddenFieldError } from "../../projection";

const ID = "00000000-0000-4000-8000-000000000001";

const ROW = {
  id: ID,
  name: "Hartmann",
  status: "to_bid",
  admin_notes: "old note",
  bid_amount: 4200,
  crew_member_ids: [],
};

/**
 * A client that RECORDS WRITES. `calls.updates` is the assertion surface for the
 * confirm gate: a preview must leave it empty.
 */
function mockClient(
  opts: {
    current?: Record<string, unknown> | null;
    updated?: Record<string, unknown> | null;
    selectError?: { message: string } | null;
    updateError?: { message: string } | null;
  } = {},
) {
  const calls = {
    updates: [] as Record<string, unknown>[],
    selects: [] as string[],
    eq: [] as unknown[][],
  };
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
        eq: (...args: unknown[]) => {
          calls.eq.push(args);
          return builder;
        },
        maybeSingle: () =>
          isUpdate
            ? Promise.resolve({
                data: opts.updateError ? null : (opts.updated ?? opts.current ?? null),
                error: opts.updateError ?? null,
              })
            : Promise.resolve({
                data: opts.selectError ? null : (opts.current ?? null),
                error: opts.selectError ?? null,
              }),
      });
      return builder;
    }),
  };
  return { client, calls };
}

describe("updateLead", () => {
  it("writes the requested fields when confirmed", async () => {
    const { client, calls } = mockClient({
      current: ROW,
      updated: { ...ROW, status: "active" },
    });
    const r = await updateLead({ id: ID, status: "active", confirm: true }, client as never);

    expect(calls.updates).toEqual([{ status: "active" }]);
    expect(r.written).toBe(true);
    expect(r.preview).toBe(false);
    expect(r.changes).toEqual([{ field: "status", from: "to_bid", to: "active" }]);
    expect(r.lead!.status).toBe("active");
  });

  // ── SAFETY PROPERTY ───────────────────────────────────────────────────────
  it("performs ZERO database writes without confirm", async () => {
    const { client, calls } = mockClient({ current: ROW });
    const r = await updateLead(
      { id: ID, status: "lost", admin_notes: "new note" },
      client as never,
    );

    expect(calls.updates).toHaveLength(0);
    expect(r.preview).toBe(true);
    expect(r.written).toBe(false);
    expect(r.changes).toContainEqual({ field: "status", from: "to_bid", to: "lost" });
    expect(r.changes).toContainEqual({
      field: "admin_notes",
      from: "old note",
      to: "new note",
    });
  });

  it("performs ZERO database writes when confirm is explicitly false", async () => {
    const { client, calls } = mockClient({ current: ROW });
    const r = await updateLead({ id: ID, status: "lost", confirm: false }, client as never);
    expect(calls.updates).toHaveLength(0);
    expect(r.written).toBe(false);
  });

  it("rejects a non-UUID id before touching the database", async () => {
    const { client } = mockClient({ current: ROW });
    await expect(
      updateLead({ id: "the-hartmann-job", status: "active", confirm: true }, client as never),
    ).rejects.toThrow();
    expect(client.from).not.toHaveBeenCalled();
  });

  it("rejects a status outside the db contract, echoing the rejected value", async () => {
    const { client, calls } = mockClient({ current: ROW });
    await expect(
      updateLead({ id: ID, status: "quote_sent", confirm: true } as never, client as never),
    ).rejects.toThrow(/quote_sent/);
    expect(calls.updates).toHaveLength(0);
  });

  it("rejects a lost_reason outside the db contract", async () => {
    const { client, calls } = mockClient({ current: ROW });
    await expect(
      updateLead({ id: ID, lost_reason: "too_expensive", confirm: true } as never, client as never),
    ).rejects.toThrow(/too_expensive/);
    expect(calls.updates).toHaveLength(0);
  });

  it("refuses to write bid_amount — that is set_bid_amount's column", async () => {
    const { client, calls } = mockClient({ current: ROW });
    await expect(
      updateLead({ id: ID, bid_amount: 9999, confirm: true } as never, client as never),
    ).rejects.toThrow(/no editable field/);
    expect(calls.updates).toHaveLength(0);
  });

  it("rejects a call with no editable field", async () => {
    const { client } = mockClient({ current: ROW });
    await expect(updateLead({ id: ID, confirm: true }, client as never)).rejects.toThrow(
      /no editable field/,
    );
  });

  it("throws when the submission does not exist", async () => {
    const { client, calls } = mockClient({ current: null });
    await expect(
      updateLead({ id: ID, status: "active", confirm: true }, client as never),
    ).rejects.toThrow(/no submission with id/);
    expect(calls.updates).toHaveLength(0);
  });

  it("surfaces a read error as a thrown error, not a silent no-op", async () => {
    const { client } = mockClient({ current: ROW, selectError: { message: "boom" } });
    await expect(
      updateLead({ id: ID, status: "active", confirm: true }, client as never),
    ).rejects.toThrow(/boom/);
  });

  it("surfaces a write error as a thrown error", async () => {
    const { client } = mockClient({ current: ROW, updateError: { message: "write boom" } });
    await expect(
      updateLead({ id: ID, status: "active", confirm: true }, client as never),
    ).rejects.toThrow(/write boom/);
  });

  // ── REQUEST SHAPE ─────────────────────────────────────────────────────────
  // Defence in depth. NOT the PII guarantee — see the response tests below.
  it("selects only allowlisted columns, never *", async () => {
    const { client, calls } = mockClient({ current: ROW, updated: ROW });
    await updateLead({ id: ID, status: "active", confirm: true }, client as never);
    expect(calls.selects.length).toBeGreaterThan(0);
    for (const cols of calls.selects) {
      expect(cols).toBe(SUBMISSION_SELECT);
      expect(cols).not.toContain("*");
      expect(cols).not.toContain("client_token");
      expect(cols).not.toContain("reply_token");
    }
  });

  // ── THE PII GUARANTEE ─────────────────────────────────────────────────────
  // Both the preview's `lead` and every `changes[].from` are read off the
  // pre-write row, so a credential on it reaches the caller by two routes. The
  // projection sits at the read, which closes both.
  const TOKENED = {
    ...ROW,
    client_token: "3f1c0e7a-0000-4000-8000-000000000001",
    reply_token: "a1b2c3d4e5f6",
  };

  it("throws rather than returning a row that carries a bearer credential", async () => {
    const { client } = mockClient({ current: TOKENED, updated: TOKENED });
    await expect(
      updateLead({ id: ID, status: "active", confirm: true }, client as never),
    ).rejects.toThrow(ForbiddenFieldError);
  });

  it("throws in preview too — the preview returns the row as well", async () => {
    const { client, calls } = mockClient({ current: TOKENED });
    await expect(updateLead({ id: ID, status: "active" }, client as never)).rejects.toThrow(
      ForbiddenFieldError,
    );
    expect(calls.updates).toHaveLength(0);
  });

  it("throws on the written row when only the write echo carries a credential", async () => {
    const { client } = mockClient({ current: ROW, updated: TOKENED });
    await expect(
      updateLead({ id: ID, status: "active", confirm: true }, client as never),
    ).rejects.toThrow(ForbiddenFieldError);
  });

  it("throws on either credential alone", async () => {
    for (const token of ["client_token", "reply_token"]) {
      const { client } = mockClient({ current: { ...ROW, [token]: "leaked" } });
      await expect(
        updateLead({ id: ID, status: "active", confirm: true }, client as never),
      ).rejects.toThrow(ForbiddenFieldError);
    }
  });

  it("returns only allowlisted keys, dropping anything else the source sends", async () => {
    const row = { ...ROW, is_test: false, archived_at: null };
    const { client } = mockClient({ current: row, updated: row });
    const r = await updateLead({ id: ID, status: "active", confirm: true }, client as never);
    expect(Object.keys(r.lead!).sort()).toEqual(
      ["id", "name", "status", "admin_notes", "bid_amount", "crew_member_ids"].sort(),
    );
  });
});
