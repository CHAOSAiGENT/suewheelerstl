import { describe, it, expect } from "vitest";
import {
  ForbiddenFieldError,
  columnsOf,
  projectNullableRecord,
  projectRecord,
  projectRecords,
} from "../projection";
import { FORBIDDEN_COLUMNS, SUBMISSION_COLUMNS } from "../columns";

const PERMITTED = ["id", "name", "email"];

describe("MCP response projection", () => {
  it("throws ForbiddenFieldError when a record carries a bearer credential", () => {
    expect(() =>
      projectRecord({ id: "1", name: "Hartmann", client_token: "tok" }, PERMITTED, "t"),
    ).toThrow(ForbiddenFieldError);
  });

  it("throws for each forbidden column independently", () => {
    for (const forbidden of FORBIDDEN_COLUMNS) {
      expect(() => projectRecord({ id: "1", [forbidden]: "x" }, PERMITTED, "t")).toThrow(
        ForbiddenFieldError,
      );
    }
  });

  // A silent strip is the failure mode this whole module exists to refuse: it
  // would let a misconfigured data layer leak nothing visible and signal
  // nothing, until the next forbidden column arrives upstream.
  it("does NOT strip silently — the forbidden key is reported, not removed", () => {
    let caught: unknown;
    try {
      projectRecord({ id: "1", client_token: "t", reply_token: "r" }, PERMITTED, "t");
    } catch (e) {
      caught = e;
    }
    expect(caught).toBeInstanceOf(ForbiddenFieldError);
    expect((caught as ForbiddenFieldError).fields).toEqual(["client_token", "reply_token"]);
  });

  it("names the source and calls it a data-layer bug", () => {
    expect(() => projectRecord({ client_token: "t" }, PERMITTED, "get_lead: submissions")).toThrow(
      /get_lead: submissions/,
    );
    expect(() => projectRecord({ client_token: "t" }, PERMITTED, "get_lead: submissions")).toThrow(
      /DATA-LAYER bug, not a query problem/,
    );
  });

  it("reuses FORBIDDEN_COLUMNS rather than defining a second list", () => {
    // One home for the prohibition: a column added to columns.ts must be
    // enforced here with no second edit.
    for (const forbidden of FORBIDDEN_COLUMNS) {
      expect(() => projectRecord({ [forbidden]: null }, PERMITTED, "t")).toThrow(
        ForbiddenFieldError,
      );
    }
    // The real allowlist and the real prohibition are disjoint.
    for (const forbidden of FORBIDDEN_COLUMNS) {
      expect(SUBMISSION_COLUMNS).not.toContain(forbidden);
    }
  });

  it("throws on a forbidden key even when its value is null or empty", () => {
    // Presence of the KEY is the leak signal. A null today is a value tomorrow.
    expect(() => projectRecord({ id: "1", reply_token: null }, PERMITTED, "t")).toThrow(
      ForbiddenFieldError,
    );
    expect(() => projectRecord({ id: "1", reply_token: "" }, PERMITTED, "t")).toThrow(
      ForbiddenFieldError,
    );
  });

  it("returns only permitted keys that are present", () => {
    const out = projectRecord({ id: "1", name: "Hartmann", extra: "junk" }, PERMITTED, "t");
    expect(out).toEqual({ id: "1", name: "Hartmann" });
    expect(out).not.toHaveProperty("extra");
    expect(out).not.toHaveProperty("email");
  });

  it("drops an unknown key without complaint — only credentials are fatal", () => {
    expect(() =>
      projectRecord({ id: "1", some_new_column: "x" }, PERMITTED, "t"),
    ).not.toThrow();
  });

  it("projects an array, failing the whole call on one bad row", () => {
    expect(projectRecords([{ id: "1" }, { id: "2" }], PERMITTED, "t")).toEqual([
      { id: "1" },
      { id: "2" },
    ]);
    expect(() =>
      projectRecords([{ id: "1" }, { id: "2", client_token: "t" }], PERMITTED, "t"),
    ).toThrow(ForbiddenFieldError);
  });

  it("passes null through as null — 'no such row' is a real answer", () => {
    expect(projectNullableRecord(null, PERMITTED, "t")).toBeNull();
    expect(projectNullableRecord(undefined, PERMITTED, "t")).toBeNull();
    expect(projectNullableRecord({ id: "1", extra: "x" }, PERMITTED, "t")).toEqual({ id: "1" });
    expect(() => projectNullableRecord({ client_token: "t" }, PERMITTED, "t")).toThrow(
      ForbiddenFieldError,
    );
  });

  it("derives a permitted list from a select string so the two cannot drift", () => {
    expect(columnsOf("id,body,created_at")).toEqual(["id", "body", "created_at"]);
    expect(columnsOf("id, body")).toEqual(["id", "body"]);
  });
});
