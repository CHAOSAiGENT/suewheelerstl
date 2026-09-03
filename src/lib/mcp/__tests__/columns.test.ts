import { describe, it, expect } from "vitest";
// The plan's version of this file used `require("../columns")` inside the last
// test. Vitest runs these as ESM, so CJS `require` cannot resolve a `.ts`
// module and the test failed with "Cannot find module '../columns'" even once
// the module existed. Imported statically instead — same assertion, resolvable.
import { SUBMISSION_COLUMNS, FORBIDDEN_COLUMNS, SUBMISSION_SELECT } from "../columns";

describe("MCP column allowlists", () => {
  it("never exposes bearer credentials", () => {
    for (const forbidden of FORBIDDEN_COLUMNS) {
      expect(SUBMISSION_COLUMNS).not.toContain(forbidden);
    }
  });

  it("names client_token and reply_token as forbidden", () => {
    expect(FORBIDDEN_COLUMNS).toContain("client_token");
    expect(FORBIDDEN_COLUMNS).toContain("reply_token");
  });

  it("selects the columns the tools actually need", () => {
    for (const needed of ["id", "name", "email", "phone", "address", "status", "bid_amount"]) {
      expect(SUBMISSION_COLUMNS).toContain(needed);
    }
  });

  it("exposes a comma-joined select string with no whitespace", () => {
    expect(SUBMISSION_SELECT).not.toMatch(/\s/);
    expect(SUBMISSION_SELECT.split(",")).toEqual(SUBMISSION_COLUMNS);
  });
});
