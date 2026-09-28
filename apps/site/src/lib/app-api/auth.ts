/**
 * Authorization for the /api/app surface.
 *
 * Clients send a Supabase session JWT as a Bearer token — the same session the
 * admin web UI already issues via Google sign-in. That is deliberate: it means
 * the desktop and mobile apps need no second credential and, critically, do not
 * wait on the MCP OAuth work.
 *
 * The allowlist decision is delegated to isAuthorizedAdmin() rather than
 * reimplemented. Two parallel authorization policies drift apart, and that drift
 * is what left this CRM open to any Google account until 2026-09-03.
 *
 * NOTE ON SCOPES: Supabase OAuth scopes do NOT restrict database access — a
 * token carries the user's full RLS privileges. Any per-client limit has to be
 * expressed here or in RLS, never assumed from a scope.
 */

import type { SupabaseClient } from "@supabase/supabase-js";
import { isAuthorizedAdmin } from "@/lib/auth/admin-guard";

export type AppAuthResult =
  | { ok: true; email: string }
  | { ok: false; status: 401 | 403; error: string };

/**
 * Takes a FACTORY, not a client.
 *
 * The short-circuit below is the point of this function, and passing a
 * constructed client defeats it: the caller would have to build the Supabase
 * client before calling us, so an unauthenticated probe pays for construction
 * anyway — and if the environment is misconfigured, the constructor throws and
 * the request 500s instead of 401ing.
 *
 * That is not hypothetical. It was the original signature, the unit tests
 * mocked the constructor so they could not see it, and a live curl against a
 * server with no env returned 500 for every unauthenticated request. A factory
 * makes the short-circuit real rather than nominal.
 */
export async function authorizeAppRequest(
  request: Request,
  getSupabase: () => SupabaseClient | Promise<SupabaseClient>,
): Promise<AppAuthResult> {
  const header = request.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7).trim() : "";

  // Short-circuit before the network call AND before constructing the client.
  // An unauthenticated probe should cost nothing.
  if (!token) return { ok: false, status: 401, error: "Missing bearer token" };

  const supabase = await getSupabase();
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user?.email) {
    return { ok: false, status: 401, error: "Invalid or expired session" };
  }

  if (!isAuthorizedAdmin(data.user.email)) {
    return { ok: false, status: 403, error: "Not permitted" };
  }

  return { ok: true, email: data.user.email.trim().toLowerCase() };
}
