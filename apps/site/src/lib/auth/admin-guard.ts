/**
 * Admin authorization guard — single source of truth for "who is an admin".
 *
 * The app's admin surfaces (the `/admin` CRM pages and the `/api/admin/*`
 * routes) previously only asked *authentication* questions — "is someone
 * signed in?" — never *authorization* ones — "is this the right person?".
 * Because the Google OAuth consent screen is published as External, any Google
 * account can complete sign-in and receive a Supabase user, so authentication
 * alone admitted the entire internet to real customer PII (names, home
 * addresses, phone numbers, photos of their houses, private notes, and full
 * message history).
 *
 * This module closes that hole. It is consumed in three places:
 *   1. `src/middleware.ts` — redirects non-allowlisted users away from /admin.
 *   2. `src/app/api/admin/**` route handlers — 403 for non-allowlisted users.
 *   3. `src/app/admin/**` server components — defense in depth, because those
 *      pages read with the service-role key, which bypasses RLS entirely.
 *
 * THE MOST IMPORTANT PROPERTY OF THIS FILE IS THAT IT FAILS CLOSED. If
 * `ADMIN_EMAILS` is unset, empty, or unparseable, EVERY user is denied and a
 * loud error is logged server-side. An unset allowlist must never be read as
 * "allow everyone" — that would silently reintroduce exactly the bug this file
 * exists to fix, and it would do so at the worst possible moment (a bad deploy,
 * a missing env var in a new environment).
 *
 * NOTE ON `NEXT_PUBLIC_ADMIN_EMAILS`: do not use it here, or anywhere, for an
 * authorization decision. Any `NEXT_PUBLIC_*` value is inlined into the browser
 * bundle at build time — it is attacker-visible and attacker-modifiable. Server-
 * side authorization reads only the non-public `ADMIN_EMAILS`.
 */

import { NextResponse } from "next/server";

/**
 * Minimal structural shape of a Supabase `User` — just the field policy cares
 * about. Kept structural so this module stays importable from the Edge runtime
 * (middleware) without dragging in the Supabase client types.
 */
export type AdminUserLike = { email?: string | null } | null | undefined;

/** Env var holding the comma-separated allowlist. Deliberately NOT NEXT_PUBLIC_. */
const ALLOWLIST_ENV_VAR = "ADMIN_EMAILS";

/**
 * Parses `ADMIN_EMAILS` into a normalized set of allowed addresses.
 *
 * Read fresh on every call rather than cached at module load, so a corrected
 * env var takes effect without a cold start and so tests can stub it.
 *
 * Returns an EMPTY set when the variable is missing/blank/unparseable — callers
 * must treat an empty set as "deny everyone", never "allow everyone".
 */
export function getAdminAllowlist(): Set<string> {
  const raw = process.env[ALLOWLIST_ENV_VAR];
  if (typeof raw !== "string") return new Set();

  const emails = raw
    .split(",")
    .map((entry) => normalizeEmail(entry))
    .filter((entry) => entry.length > 0);

  return new Set(emails);
}

/**
 * Normalizes an email for comparison: trims surrounding whitespace and
 * lowercases. Casing varies by identity provider (Google may hand back
 * `Sue@Example.com`), and a case-sensitive compare would lock out a legitimate
 * admin — an availability bug that invites someone to "fix" it by disabling the
 * check.
 */
function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * The policy. Answers "is this authenticated user an authorized admin?".
 *
 * Accepts either a Supabase user (anything with an `email`) or a bare email
 * string, so call sites do not have to unwrap. Fails closed on every ambiguous
 * input: no user, no email, empty allowlist.
 */
export function isAuthorizedAdmin(userOrEmail: AdminUserLike | string): boolean {
  const email =
    typeof userOrEmail === "string" ? userOrEmail : userOrEmail?.email;
  if (typeof email !== "string" || email.trim().length === 0) return false;

  const allowlist = getAdminAllowlist();
  if (allowlist.size === 0) {
    // Fail closed, loudly. This is a misconfiguration, not a normal denial.
    console.error(
      `[admin-guard] ${ALLOWLIST_ENV_VAR} is unset or empty — denying ALL admin access. ` +
        `Set ${ALLOWLIST_ENV_VAR} to a comma-separated list of admin email addresses.`,
    );
    return false;
  }

  return allowlist.has(normalizeEmail(email));
}

/** Outcome of `adminApiGuard` — a discriminated union so call sites narrow. */
export type AdminApiGuardResult =
  | { authorized: false; response: NextResponse }
  | { authorized: true; email: string };

/**
 * Route-handler wrapper for `/api/admin/*`. Every exported handler under that
 * tree calls it, in exactly two lines, so there is one definition of the policy:
 *
 *   const guard = adminApiGuard(user);
 *   if (!guard.authorized) return guard.response;
 *
 * On success it hands back the verified, normalized admin email, so handlers
 * that need to record "who did this" use the value the guard actually checked
 * rather than re-reaching into a possibly-null user object.
 *
 * 401 means "not signed in"; 403 means "signed in, but not permitted" — the
 * distinction matters because a non-allowlisted user re-authenticating will
 * never succeed, and a 401 would send them round the OAuth loop forever.
 */
export function adminApiGuard(user: AdminUserLike): AdminApiGuardResult {
  if (!user) {
    return {
      authorized: false,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }
  if (!isAuthorizedAdmin(user)) {
    return {
      authorized: false,
      response: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }
  return { authorized: true, email: normalizeEmail(user.email as string) };
}
