import { describe, it, expect, vi } from "vitest";
import { createLead } from "../create-lead";
import { SUBMISSION_SELECT } from "../../columns";

function mockClient(result: { data: unknown; error: unknown }) {
  const calls: { insert: unknown[][]; select: unknown[][] } = { insert: [], select: [] };
  const builder: Record<string, unknown> = {};
  Object.assign(builder, {
    insert: (...args: unknown[]) => {
      calls.insert.push(args);
      return builder;
    },
    select: (...args: unknown[]) => {
      calls.select.push(args);
      return builder;
    },
    single: () => Promise.resolve(result),
  });
  return { client: { from: vi.fn(() => builder) }, calls };
}

const valid = {
  name: "Hartmann",
  phone: "314-555-0101",
  email: "hartmann@example.com",
  project_description: "Front door and two interior doors",
  service_types: ["Front door"],
};

const inserted = { id: "00000000-0000-4000-8000-000000000001", name: "Hartmann" };

describe("createLead", () => {
  it("inserts the lead and returns the created row", async () => {
    const { client, calls } = mockClient({ data: inserted, error: null });
    const r = await createLead(valid, client as never);
    expect(client.from).toHaveBeenCalledWith("submissions");
    expect(r.lead.id).toBe("00000000-0000-4000-8000-000000000001");
    const row = calls.insert[0][0] as Record<string, unknown>;
    expect(row.name).toBe("Hartmann");
    expect(row.service_types).toEqual(["Front door"]);
  });

  it("returns the created row through the allowlist, never *", async () => {
    const { client, calls } = mockClient({ data: inserted, error: null });
    await createLead(valid, client as never);
    expect(calls.select[0][0]).toBe(SUBMISSION_SELECT);
    expect(calls.select[0][0]).not.toContain("*");
    expect(calls.select[0][0]).not.toContain("client_token");
    expect(calls.select[0][0]).not.toContain("reply_token");
  });

  it("forces status to_bid and bid_status none, ignoring anything the caller sends", async () => {
    const { client, calls } = mockClient({ data: inserted, error: null });
    await createLead(
      { ...valid, status: "active", bid_status: "accepted" } as never,
      client as never,
    );
    const row = calls.insert[0][0] as Record<string, unknown>;
    expect(row.status).toBe("to_bid");
    expect(row.bid_status).toBe("none");
  });

  it("never sets is_test — that column belongs to the health monitor", async () => {
    const { client, calls } = mockClient({ data: inserted, error: null });
    await createLead({ ...valid, is_test: true } as never, client as never);
    expect(calls.insert[0][0]).not.toHaveProperty("is_test");
  });

  it("carries the optional fields through, nulling the ones not supplied", async () => {
    const { client, calls } = mockClient({ data: inserted, error: null });
    await createLead(
      { ...valid, address: "4 Flad Ave", zip: "63110" },
      client as never,
    );
    const row = calls.insert[0][0] as Record<string, unknown>;
    expect(row.address).toBe("4 Flad Ave");
    expect(row.zip).toBe("63110");
    expect(row.best_time).toBeNull();
    expect(row.timeline).toBeNull();
    expect(row.referral).toBeNull();
  });

  it.each(["name", "phone", "email", "project_description"])(
    "rejects a missing %s before touching the database",
    async (field) => {
      const { client } = mockClient({ data: inserted, error: null });
      const input = { ...valid } as Record<string, unknown>;
      delete input[field];
      await expect(createLead(input as never, client as never)).rejects.toThrow();
      expect(client.from).not.toHaveBeenCalled();
    },
  );

  it("rejects a malformed email before touching the database", async () => {
    // This path is fed by a model transcribing a phone call, where "bob at
    // gmail dot com" becomes "bob@gmailcom" — a lead that looks complete and is
    // unreachable. The admin route only checks presence; this one checks shape,
    // so Sue is told while the customer is still on the line.
    const { client } = mockClient({ data: inserted, error: null });
    await expect(
      createLead({ ...valid, email: "bob@gmailcom" } as never, client as never),
    ).rejects.toThrow();
    expect(client.from).not.toHaveBeenCalled();
  });

  it("rejects an empty service_types array — a lead with no services on it", async () => {
    const { client } = mockClient({ data: inserted, error: null });
    await expect(
      createLead({ ...valid, service_types: [] }, client as never),
    ).rejects.toThrow(/service_types/);
    expect(client.from).not.toHaveBeenCalled();
  });

  it("rejects whitespace-only required text", async () => {
    const { client } = mockClient({ data: inserted, error: null });
    await expect(createLead({ ...valid, name: "   " }, client as never)).rejects.toThrow();
  });

  it("surfaces a database error as a thrown error, not a phantom lead", async () => {
    const { client } = mockClient({ data: null, error: { message: "boom" } });
    await expect(createLead(valid, client as never)).rejects.toThrow(/boom/);
  });
});
