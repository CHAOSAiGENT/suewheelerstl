import { describe, it, expect, vi } from "vitest";
import { recordUsage } from "../meter";

function mockClient(error: unknown = null) {
  const rows: unknown[] = [];
  const client = {
    from: vi.fn(() => ({
      insert: (row: unknown) => {
        rows.push(row);
        return Promise.resolve({ error });
      },
    })),
  };
  return { client, rows };
}

const base = {
  userEmail: "sue@suewheelerstl.com",
  clientId: "desktop",
  toolName: "get_pipeline",
  outcome: "ok" as const,
  durationMs: 42,
};

describe("recordUsage", () => {
  it("writes exactly one row to usage_events", async () => {
    const { client, rows } = mockClient();
    await recordUsage(base, client as never);
    expect(client.from).toHaveBeenCalledWith("usage_events");
    expect(rows).toHaveLength(1);
  });

  it("records the fields billing depends on", async () => {
    const { client, rows } = mockClient();
    await recordUsage({ ...base, model: "claude", inputTokens: 10, outputTokens: 20 }, client as never);
    const r = rows[0] as Record<string, unknown>;
    expect(r.user_email).toBe("sue@suewheelerstl.com");
    expect(r.client_id).toBe("desktop");
    expect(r.tool_name).toBe("get_pipeline");
    expect(r.outcome).toBe("ok");
    expect(r.duration_ms).toBe(42);
    expect(r.input_tokens).toBe(10);
  });

  it("records failed calls too — an error still consumed resources", async () => {
    const { client, rows } = mockClient();
    await recordUsage({ ...base, outcome: "error" }, client as never);
    expect((rows[0] as Record<string, unknown>).outcome).toBe("error");
  });

  it("NEVER throws when the meter write fails", async () => {
    // A metering failure must not fail the user's request. Losing a billing row
    // is bad; losing Sue's work because accounting hiccuped is worse.
    const { client } = mockClient({ message: "meter down" });
    await expect(recordUsage(base, client as never)).resolves.toBeUndefined();
  });
});
