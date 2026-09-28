/**
 * Response projection for MCP tool reads — the PII guarantee, enforced on what
 * actually goes back to the caller.
 *
 * WHY THIS EXISTS AT ALL, GIVEN ../columns.ts ALREADY NAMES THE PROHIBITION.
 * `columns.ts` constrains the REQUEST: every tool selects an explicit column
 * list, and `client_token` / `reply_token` are not on it. That is a statement
 * about what we ASK the database for. The property that matters is a statement
 * about what we HAND BACK: no record returned by an MCP tool may carry a bearer
 * credential, because anything a tool returns lands in a model's context and
 * persists in conversation history. A leaked token is not a transient exposure;
 * it is written into a transcript.
 *
 * Those two statements are not the same statement. They coincide only because
 * PostgREST honours the field list — the select string determines the response
 * shape, so today "we did not ask for it" implies "we did not get it". That
 * implication is a property of one data source, not of this codebase, and it
 * does not survive:
 *
 *   - **A Postgres view or RPC.** `select("id,name")` against a function that
 *     returns a composite row gets whatever the function returns. The field
 *     list is not a projection there; it names output columns the function
 *     already chose to emit.
 *   - **An RPC or edge function returning JSON.** `client.rpc(...)` takes no
 *     select string at all. There is no request-side field list to assert on.
 *   - **A cache or read-replica layer in front of Supabase.** A layer that
 *     stores whole rows and replays them ignores the select string entirely.
 *   - **A different backend.** Any store without server-side field projection —
 *     a document store, a search index, a REST API someone wraps — returns the
 *     document it has.
 *
 * On every one of those the request-shaped assertion still passes, and the
 * guarantee silently becomes a no-op while the whole test suite stays green.
 * A test that reads the argument we passed in cannot see what came back. So the
 * guarantee lives here, on the response, where it is measuring the thing that
 * would actually hurt Sue's customers.
 *
 * WHY IT THROWS RATHER THAN STRIPPING. A silent strip is the worse failure. It
 * lets a misconfigured data layer run indefinitely, leaking nothing visible and
 * signalling nothing, so the day a new forbidden column is added upstream it
 * leaks until a human happens to notice a token in a transcript. A throw is
 * loud, immediate, and lands on the person who changed the data layer. The tool
 * call fails, which is the correct outcome: an MCP read that cannot be served
 * without a credential attached must not be served.
 *
 * The forbidden list is not redefined here. It is `FORBIDDEN_COLUMNS` from
 * ../columns.ts — one definition of the prohibition, so a column added there is
 * enforced on both the request and the response with no second edit.
 *
 * Enforced by a response-shaped test in every tool's test file: the mocked
 * client hands back a row carrying both tokens, and the tool is asserted to
 * throw. Add a tool, add that test — see docs/MCP.md §4.
 */

import { FORBIDDEN_COLUMNS } from "./columns";

/** Re-exported so callers need only one import to reason about the guarantee. */
export { FORBIDDEN_COLUMNS };

/**
 * Thrown when a record reaching projection carries a bearer credential.
 *
 * A named class, not a bare `Error`, so tests can assert on the type rather
 * than pattern-matching a message that will eventually be reworded.
 */
export class ForbiddenFieldError extends Error {
  /** The forbidden keys found, in `FORBIDDEN_COLUMNS` order. */
  readonly fields: readonly string[];
  /** Where the record came from, e.g. `get_lead: submissions`. */
  readonly source: string;

  constructor(fields: readonly string[], source: string) {
    super(
      `${source} returned a record carrying ${fields.join(", ")}. ` +
        `These are bearer credentials and must never reach an MCP caller — ` +
        `an MCP response is written into a model's transcript permanently. ` +
        `This is a DATA-LAYER bug, not a query problem: the column allowlist ` +
        `did not ask for these fields, so the source handed them over anyway ` +
        `(a view, an RPC, a cache, or a backend without server-side field ` +
        `projection). Fix the data layer. Do not relax this check, and do not ` +
        `strip the fields silently — see src/lib/mcp/projection.ts.`,
    );
    this.name = "ForbiddenFieldError";
    this.fields = fields;
    this.source = source;
  }
}

/**
 * The permitted-key list for a table, derived from the PostgREST select string
 * it is read with.
 *
 * Deriving rather than retyping is the point: the request allowlist and the
 * response allowlist are then the same list by construction, so they cannot
 * drift into a state where a column is selected but rejected, or vice versa.
 */
export function columnsOf(select: string): readonly string[] {
  return select.split(",").map((c) => c.trim());
}

/**
 * Projects one record onto `permitted`, throwing if it carries a forbidden key.
 *
 * The forbidden check runs BEFORE the projection, deliberately. Projecting
 * first would drop the credential and leave nothing to detect — which is
 * exactly the silent strip this function exists to refuse.
 *
 * Keys that are neither permitted nor forbidden are dropped without complaint.
 * An innocuous new column appearing upstream should not break a tool; a
 * credential appearing upstream should.
 *
 * @param record    The record as the data layer returned it.
 * @param permitted Keys that may be returned. Only those present survive.
 * @param source    Identifies the read in the error, e.g. `get_lead: messages`.
 */
export function projectRecord(
  record: Record<string, unknown>,
  permitted: readonly string[],
  source: string,
): Record<string, unknown> {
  const found = FORBIDDEN_COLUMNS.filter((c) => c in record);
  if (found.length > 0) throw new ForbiddenFieldError(found, source);

  const out: Record<string, unknown> = {};
  for (const key of permitted) {
    if (key in record) out[key] = record[key];
  }
  return out;
}

/** `projectRecord` over an array. One forbidden key in one row fails the call. */
export function projectRecords(
  records: readonly Record<string, unknown>[],
  permitted: readonly string[],
  source: string,
): Record<string, unknown>[] {
  return records.map((r) => projectRecord(r, permitted, source));
}

/**
 * `projectRecord` for a lookup that may legitimately find nothing.
 *
 * `null` passes through as `null` — "no such row" is a real answer and is not a
 * record to project.
 */
export function projectNullableRecord(
  record: Record<string, unknown> | null | undefined,
  permitted: readonly string[],
  source: string,
): Record<string, unknown> | null {
  if (record === null || record === undefined) return null;
  return projectRecord(record, permitted, source);
}
