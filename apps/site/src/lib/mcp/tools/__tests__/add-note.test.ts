import { describe, it, expect, vi } from "vitest";
import { addNote } from "../add-note";
import { ForbiddenFieldError } from "../../projection";

const ID = "00000000-0000-4000-8000-000000000001";

interface MockOpts {
  lead?: { data: unknown; error: unknown };
  note?: { data: unknown; error: unknown };
  mirror?: { data: unknown; error: unknown };
}

/**
 * `submissions` is hit twice here — once to check the lead exists, once to
 * mirror the note into admin_notes — so the mock has to distinguish a select
 * chain from an update chain on the same table.
 */
function mockClient(opts: MockOpts = {}) {
  const lead = opts.lead ?? { data: { id: ID }, error: null };
  const note = opts.note ?? {
    data: { id: "note-1", submission_id: ID, body: "Stripped the newel post" },
    error: null,
  };
  const mirror = opts.mirror ?? { data: null, error: null };

  const selects: Record<string, string> = {};
  const updates: Record<string, unknown>[] = [];
  const inserts: Record<string, unknown>[] = [];
  const tables: string[] = [];

  const from = vi.fn((table: string) => {
    tables.push(table);
    const builder: Record<string, unknown> = {};
    let isUpdate = false;
    Object.assign(builder, {
      select: (cols: string) => {
        selects[table] = cols;
        return builder;
      },
      insert: (row: Record<string, unknown>) => {
        inserts.push(row);
        return builder;
      },
      update: (patch: Record<string, unknown>) => {
        isUpdate = true;
        updates.push(patch);
        return builder;
      },
      eq: () => builder,
      maybeSingle: () => Promise.resolve(lead),
      single: () => Promise.resolve(note),
      // Only an update chain is awaited directly.
      then: (resolve: (v: unknown) => unknown) =>
        Promise.resolve(isUpdate ? mirror : undefined).then(resolve),
    });
    return builder;
  });

  return { client: { from }, selects, updates, inserts, tables };
}

describe("addNote", () => {
  it("inserts the note and returns it", async () => {
    const m = mockClient();
    const r = await addNote({ submission_id: ID, body: "Stripped the newel post" }, m.client as never);
    expect(m.inserts[0]).toEqual({ submission_id: ID, body: "Stripped the newel post" });
    expect(r.note.id).toBe("note-1");
  });

  it("mirrors the note text into submissions.admin_notes for the Kanban card", async () => {
    const m = mockClient();
    const r = await addNote({ submission_id: ID, body: "Stripped the newel post" }, m.client as never);
    expect(m.updates).toEqual([{ admin_notes: "Stripped the newel post" }]);
    expect(r.adminNotesMirrored).toBe(true);
  });

  it("reports the note as saved but unmirrored when the admin_notes update fails", async () => {
    const m = mockClient({ mirror: { data: null, error: { message: "mirror boom" } } });
    const r = await addNote({ submission_id: ID, body: "note" }, m.client as never);
    expect(r.note.id).toBe("note-1");
    expect(r.adminNotesMirrored).toBe(false);
    expect(r.mirrorError).toMatch(/mirror boom/);
  });

  it("rejects a non-UUID submission_id before touching the database", async () => {
    const m = mockClient();
    await expect(
      addNote({ submission_id: "the-hartmann-job", body: "note" }, m.client as never),
    ).rejects.toThrow();
    expect(m.client.from).not.toHaveBeenCalled();
  });

  it("rejects an empty body before touching the database", async () => {
    const m = mockClient();
    await expect(
      addNote({ submission_id: ID, body: "   " }, m.client as never),
    ).rejects.toThrow(/body/i);
    expect(m.client.from).not.toHaveBeenCalled();
  });

  it("refuses to write a note against a submission that does not exist", async () => {
    const m = mockClient({ lead: { data: null, error: null } });
    await expect(
      addNote({ submission_id: ID, body: "note" }, m.client as never),
    ).rejects.toThrow(/no lead with id/);
    expect(m.inserts).toHaveLength(0);
  });

  // ── REQUEST SHAPE ─────────────────────────────────────────────────────────
  // Defence in depth. NOT the PII guarantee — see the response tests below.
  it("never selects bearer tokens from any table", async () => {
    const m = mockClient();
    await addNote({ submission_id: ID, body: "note" }, m.client as never);
    expect(Object.keys(m.selects).sort()).toEqual(["submission_notes", "submissions"]);
    for (const cols of Object.values(m.selects)) {
      expect(cols).not.toBe("*");
      expect(cols).not.toContain("client_token");
      expect(cols).not.toContain("reply_token");
    }
  });

  // ── THE PII GUARANTEE ─────────────────────────────────────────────────────
  // submission_notes carries no credential today; the note is projected anyway
  // so a schema change that puts one there fails loudly instead of leaking.
  it("throws rather than returning a note that carries a bearer credential", async () => {
    const m = mockClient({
      note: {
        data: {
          id: "note-1",
          submission_id: ID,
          body: "note",
          client_token: "3f1c0e7a-0000-4000-8000-000000000001",
          reply_token: "a1b2c3d4e5f6",
        },
        error: null,
      },
    });
    await expect(
      addNote({ submission_id: ID, body: "note" }, m.client as never),
    ).rejects.toThrow(ForbiddenFieldError);
  });

  it("throws on either credential alone", async () => {
    for (const token of ["client_token", "reply_token"]) {
      const m = mockClient({
        note: { data: { id: "note-1", body: "note", [token]: "leaked" }, error: null },
      });
      await expect(
        addNote({ submission_id: ID, body: "note" }, m.client as never),
      ).rejects.toThrow(ForbiddenFieldError);
    }
  });

  it("returns only allowlisted keys, dropping anything else the source sends", async () => {
    const m = mockClient({
      note: {
        data: { id: "note-1", submission_id: ID, body: "note", internal_flag: true },
        error: null,
      },
    });
    const r = await addNote({ submission_id: ID, body: "note" }, m.client as never);
    expect(Object.keys(r.note).sort()).toEqual(["body", "id", "submission_id"]);
  });

  it("surfaces a note insert error as a thrown error", async () => {
    const m = mockClient({ note: { data: null, error: { message: "boom" } } });
    await expect(
      addNote({ submission_id: ID, body: "note" }, m.client as never),
    ).rejects.toThrow(/boom/);
  });

  it("surfaces a lookup error as a thrown error", async () => {
    const m = mockClient({ lead: { data: null, error: { message: "lookup boom" } } });
    await expect(
      addNote({ submission_id: ID, body: "note" }, m.client as never),
    ).rejects.toThrow(/lookup boom/);
  });
});
