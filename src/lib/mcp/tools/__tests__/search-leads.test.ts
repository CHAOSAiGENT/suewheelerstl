import { describe, it, expect, vi } from "vitest";
import { searchLeads } from "../search-leads";
import { SUBMISSION_SELECT } from "../../columns";

function mockClient(rows: unknown[]) {
  const calls: Record<string, unknown[]> = { select: [], eq: [], is: [], or: [], limit: [] };
  const builder: Record<string, unknown> = {};
  const chain = (name: string) => (...args: unknown[]) => {
    calls[name]?.push(args);
    return builder;
  };
  Object.assign(builder, {
    select: chain("select"),
    eq: chain("eq"),
    is: chain("is"),
    or: chain("or"),
    order: chain("order"),
    limit: (...args: unknown[]) => {
      calls.limit.push(args);
      return Promise.resolve({ data: rows, error: null });
    },
  });
  return { client: { from: vi.fn(() => builder) }, calls };
}

describe("searchLeads", () => {
  it("selects only allowlisted columns, never *", async () => {
    const { client, calls } = mockClient([]);
    await searchLeads({ query: "hartmann" }, client as never);
    expect((calls.select[0] as unknown[])[0]).toBe(SUBMISSION_SELECT);
    expect((calls.select[0] as unknown[])[0]).not.toContain("*");
  });

  it("excludes health-monitor test rows", async () => {
    const { client, calls } = mockClient([]);
    await searchLeads({ query: "x" }, client as never);
    expect(calls.eq).toContainEqual(["is_test", false]);
  });

  it("excludes archived rows", async () => {
    const { client, calls } = mockClient([]);
    await searchLeads({ query: "x" }, client as never);
    expect(calls.is).toContainEqual(["archived_at", null]);
  });

  it("filters by status when given one", async () => {
    const { client, calls } = mockClient([]);
    await searchLeads({ status: "active" }, client as never);
    expect(calls.eq).toContainEqual(["status", "active"]);
  });

  it("rejects a status outside the db contract", async () => {
    const { client } = mockClient([]);
    await expect(
      searchLeads({ status: "quote_sent" } as never, client as never),
    ).rejects.toThrow(/quote_sent/);
  });

  it("returns rows with their UUIDs", async () => {
    const { client } = mockClient([{ id: "uuid-1", name: "Hartmann" }]);
    const result = await searchLeads({ query: "hart" }, client as never);
    expect(result.leads[0].id).toBe("uuid-1");
  });

  it("surfaces a database error as a thrown error, not an empty result", async () => {
    const builder: Record<string, unknown> = {};
    Object.assign(builder, {
      select: () => builder,
      eq: () => builder,
      is: () => builder,
      or: () => builder,
      order: () => builder,
      limit: () => Promise.resolve({ data: null, error: { message: "boom" } }),
    });
    const client = { from: vi.fn(() => builder) };
    await expect(searchLeads({ query: "x" }, client as never)).rejects.toThrow(/boom/);
  });
});
