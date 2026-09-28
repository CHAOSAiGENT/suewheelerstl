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

export async function authorizeAppRequest(
  request: Request,
  supabase: SupabaseClient,
): Promise<AppAuthResult> {
  const header = request.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7).trim() : "";

  // Short-circuit before the network call. An unauthenticated probe should not
  // cost a Supabase round trip.
  if (!token) return { ok: false, status: 401, error: "Missing bearer token" };

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user?.email) {
    return { ok: false, status: 401, error: "Invalid or expired session" };
  }

  if (!isAuthorizedAdmin(data.user.email)) {
    return { ok: false, status: 403, error: "Not permitted" };
  }

  return { ok: true, email: data.user.email.trim().toLowerCase() };
}
