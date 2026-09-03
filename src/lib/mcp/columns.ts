/**
 * Column allowlists for MCP tool reads.
 *
 * The rest of this codebase uses `select("*")`, which returns `client_token`
 * and `reply_token` alongside the business data. Both are BEARER CREDENTIALS:
 * `client_token` opens a customer's portal at /my-request/<token>, and
 * `reply_token` is embedded in email headers so anyone who can forge a message
 * to that address can inject into a customer's thread.
 *
 * Anything an MCP tool returns lands in a model's context and persists in
 * conversation history. So MCP reads NEVER use `select("*")` — they select an
 * explicit list, and the guarantee is that these credentials are not on it.
 *
 * Enforced by `__tests__/columns.test.ts`, which asserts no FORBIDDEN_COLUMNS
 * entry appears in any allowlist. Add a column here, not at the call site.
 */

/** Never returned by any MCP tool, under any circumstances. */
export const FORBIDDEN_COLUMNS = ["client_token", "reply_token"] as const;

/** Submission columns MCP read tools may return. */
export const SUBMISSION_COLUMNS = [
  "id",
  "created_at",
  "name",
  "phone",
  "email",
  "address",
  "zip",
  "service_types",
  "best_time",
  "timeline",
  "project_description",
  "referral",
  "status",
  "admin_notes",
  "bid_amount",
  "bid_status",
  "bid_start_date",
  "crew_member_ids",
  "lost_reason",
  "lost_note",
  "after_photos_uploaded",
  "final_payment_confirmed",
] as const;

/** Ready-to-use PostgREST select string. */
export const SUBMISSION_SELECT = SUBMISSION_COLUMNS.join(",");
