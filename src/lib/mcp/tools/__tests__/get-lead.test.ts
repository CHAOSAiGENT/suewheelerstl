import { describe, it, expect, vi } from "vitest";
import { getLead } from "../get-lead";
import { ForbiddenFieldError } from "../../projection";

function mockClient(tables: Record<string, { data: unknown; error: unknown }>) {
  const selects: Record<string, string> = {};
  return {
    from: vi.fn((table: string) => {
      const builder: Record<string, unknown> = {};
      Object.assign(builder, {
        select: (cols: string) => {
          selects[table] = cols;
          return builder;
        },
        eq: () => builder,
        order: () => Promise.resolve(tables[table]),
        maybeSingle: () => Promise.resolve(tables[table]),
      });
      return builder;
    }),
    selects,
  };
}

describe("getLead", () => {
  const ok = {
    submissions: { data: { id: "u1", name: "Hartmann" }, error: null },
    submission_notes: { data: [{ body: "note" }], error: null },
    messages: { data: [{ body: "hello" }], error: null },
    bid_blocks: { data: [{ title: "Front door" }], error: null },
  };

  it("rejects a non-UUID id before touching the database", async () => {
    const client = mockClient(ok);
    await expect(getLead({ id: "the-hartmann-job" }, client as never)).rejects.toThrow();
    expect(client.from).not.toHaveBeenCalled();
  });

  it("returns the submission with its notes, messages, and bid blocks", async () => {
    const client = mockClient(ok);
    const r = await getLead(
      { id: "00000000-0000-4000-8000-000000000001" },
      client as never,
    );
    expect(r.lead!.name).toBe("Hartmann");
    expect(r.notes).toHaveLength(1);
    expect(r.messages).toHaveLength(1);
    expect(r.bidBlocks).toHaveLength(1);
  });

  // ── REQUEST SHAPE ─────────────────────────────────────────────────────────
  // Defence in depth. NOT the PII guarantee — see the response tests below.
  it("never selects bearer tokens from any table", async () => {
    const client = mockClient(ok);
    await getLead({ id: "00000000-0000-4000-8000-000000000001" }, client as never);
    expect(Object.keys(client.selects).sort()).toEqual([
      "bid_blocks",
      "messages",
      "submission_notes",
      "submissions",
    ]);
    for (const cols of Object.values(client.selects)) {
      expect(cols).not.toContain("client_token");
      expect(cols).not.toContain("reply_token");
      expect(cols).not.toBe("*");
    }
  });

  // ── THE PII GUARANTEE ─────────────────────────────────────────────────────
  // The real property: a credential cannot reach the caller even when the data
  // source hands one over, which is what a view, an RPC, a cache, or a backend
  // without server-side field projection would do.
  it("throws rather than returning a submission that carries a bearer credential", async () => {
    const client = mockClient({
      ...ok,
      submissions: {
        data: {
          id: "u1",
          name: "Hartmann",
          client_token: "3f1c0e7a-0000-4000-8000-000000000001",
          reply_token: "a1b2c3d4e5f6",
        },
        error: null,
      },
    });
    await expect(
      getLead({ id: "00000000-0000-4000-8000-000000000001" }, client as never),
    ).rejects.toThrow(ForbiddenFieldError);
  });

  it("throws on either credential alone", async () => {
    for (const token of ["client_token", "reply_token"]) {
      const client = mockClient({
        ...ok,
        submissions: { data: { id: "u1", name: "Hartmann", [token]: "leaked" }, error: null },
      });
      await expect(
        getLead({ id: "00000000-0000-4000-8000-000000000001" }, client as never),
      ).rejects.toThrow(ForbiddenFieldError);
    }
  });

  // The child collections carry no credential today. They are projected anyway,
  // so a schema change that puts one on `messages` fails here instead of
  // writing it into a transcript.
  it.each(["submission_notes", "messages", "bid_blocks"])(
    "throws rather than returning a %s row that carries a bearer credential",
    async (table) => {
      const client = mockClient({
        ...ok,
        [table]: { data: [{ id: "x", client_token: "leaked" }], error: null },
      });
      await expect(
        getLead({ id: "00000000-0000-4000-8000-000000000001" }, client as never),
      ).rejects.toThrow(ForbiddenFieldError);
    },
  );

  it("returns only allowlisted keys, dropping anything else the source sends", async () => {
    const client = mockClient({
      ...ok,
      submissions: { data: { id: "u1", name: "Hartmann", archived_at: null }, error: null },
    });
    const r = await getLead({ id: "00000000-0000-4000-8000-000000000001" }, client as never);
    expect(Object.keys(r.lead!)).toEqual(["id", "name"]);
  });

  it("returns null lead when the id does not exist", async () => {
    const client = mockClient({ ...ok, submissions: { data: null, error: null } });
    const r = await getLead(
      { id: "00000000-0000-4000-8000-000000000009" },
      client as never,
    );
    expect(r.lead).toBeNull();
  });
});
