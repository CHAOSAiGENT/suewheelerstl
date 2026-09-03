import { describe, it, expect, vi } from "vitest";
import { getLead } from "../get-lead";

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

  it("returns null lead when the id does not exist", async () => {
    const client = mockClient({ ...ok, submissions: { data: null, error: null } });
    const r = await getLead(
      { id: "00000000-0000-4000-8000-000000000009" },
      client as never,
    );
    expect(r.lead).toBeNull();
  });
});
