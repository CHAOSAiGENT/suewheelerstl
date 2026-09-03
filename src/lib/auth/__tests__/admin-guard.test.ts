import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  getAdminAllowlist,
  isAuthorizedAdmin,
  adminApiGuard,
} from "../admin-guard";

/** Silences (and captures) the loud fail-closed console.error. */
let errorSpy: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllEnvs();
  errorSpy.mockRestore();
});

describe("getAdminAllowlist", () => {
  it("parses a comma-separated list, trimmed and lowercased", () => {
    vi.stubEnv("ADMIN_EMAILS", " Sue@Example.com , Pete@Example.COM ");
    expect(getAdminAllowlist()).toEqual(
      new Set(["sue@example.com", "pete@example.com"]),
    );
  });

  it("drops empty entries from a sloppy list", () => {
    vi.stubEnv("ADMIN_EMAILS", "sue@example.com,,  ,");
    expect(getAdminAllowlist()).toEqual(new Set(["sue@example.com"]));
  });

  it("returns an empty set when unset", () => {
    vi.stubEnv("ADMIN_EMAILS", undefined);
    expect(getAdminAllowlist().size).toBe(0);
  });
});

describe("isAuthorizedAdmin", () => {
  it("authorizes an allowlisted email", () => {
    vi.stubEnv("ADMIN_EMAILS", "sue@example.com,pete@example.com");
    expect(isAuthorizedAdmin({ email: "sue@example.com" })).toBe(true);
    expect(isAuthorizedAdmin("pete@example.com")).toBe(true);
  });

  it("denies an authenticated but non-allowlisted email", () => {
    vi.stubEnv("ADMIN_EMAILS", "sue@example.com");
    expect(isAuthorizedAdmin({ email: "attacker@gmail.com" })).toBe(false);
  });

  it("matches across case and whitespace differences in either direction", () => {
    vi.stubEnv("ADMIN_EMAILS", "  Sue@Example.com ");
    expect(isAuthorizedAdmin({ email: "sue@example.com" })).toBe(true);
    expect(isAuthorizedAdmin("  SUE@EXAMPLE.COM  ")).toBe(true);
  });

  // The single most important property of the guard.
  it("denies everyone when ADMIN_EMAILS is unset", () => {
    vi.stubEnv("ADMIN_EMAILS", undefined);
    expect(isAuthorizedAdmin({ email: "sue@example.com" })).toBe(false);
    expect(errorSpy).toHaveBeenCalled();
  });

  it("denies everyone when ADMIN_EMAILS is empty or unparseable", () => {
    for (const raw of ["", "   ", ",,,", " , , "]) {
      vi.stubEnv("ADMIN_EMAILS", raw);
      expect(isAuthorizedAdmin({ email: "sue@example.com" })).toBe(false);
    }
    expect(errorSpy).toHaveBeenCalled();
  });

  it("denies a null/undefined user or a user with no email", () => {
    vi.stubEnv("ADMIN_EMAILS", "sue@example.com");
    expect(isAuthorizedAdmin(null)).toBe(false);
    expect(isAuthorizedAdmin(undefined)).toBe(false);
    expect(isAuthorizedAdmin({})).toBe(false);
    expect(isAuthorizedAdmin({ email: null })).toBe(false);
    expect(isAuthorizedAdmin("")).toBe(false);
  });

  it("does not read NEXT_PUBLIC_ADMIN_EMAILS", () => {
    vi.stubEnv("ADMIN_EMAILS", undefined);
    vi.stubEnv("NEXT_PUBLIC_ADMIN_EMAILS", "attacker@gmail.com");
    expect(isAuthorizedAdmin({ email: "attacker@gmail.com" })).toBe(false);
  });
});

describe("adminApiGuard", () => {
  it("401s an unauthenticated request", () => {
    vi.stubEnv("ADMIN_EMAILS", "sue@example.com");
    const guard = adminApiGuard(null);
    expect(guard.authorized).toBe(false);
    expect(guard.authorized === false && guard.response.status).toBe(401);
  });

  it("403s an authenticated but non-allowlisted user", () => {
    vi.stubEnv("ADMIN_EMAILS", "sue@example.com");
    const guard = adminApiGuard({ email: "attacker@gmail.com" });
    expect(guard.authorized === false && guard.response.status).toBe(403);
  });

  it("authorizes an allowlisted user and returns the normalized email", () => {
    vi.stubEnv("ADMIN_EMAILS", "sue@example.com");
    const guard = adminApiGuard({ email: " Sue@Example.com " });
    expect(guard).toEqual({ authorized: true, email: "sue@example.com" });
  });

  it("403s even the real admin when ADMIN_EMAILS is unset (fails closed)", () => {
    vi.stubEnv("ADMIN_EMAILS", undefined);
    const guard = adminApiGuard({ email: "sue@example.com" });
    expect(guard.authorized === false && guard.response.status).toBe(403);
  });
});
