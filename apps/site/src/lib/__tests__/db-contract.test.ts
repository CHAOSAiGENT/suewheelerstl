import { describe, it, expect } from "vitest";
import { REQUIRED_COLUMNS } from "../db-contract";

describe("db-contract", () => {
  it("tracks the is_test column the health monitor depends on", () => {
    expect(REQUIRED_COLUMNS.submissions).toContain("is_test");
  });
});
