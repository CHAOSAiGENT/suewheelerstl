/**
 * The tool names a client may call — the API contract's outermost boundary.
 *
 * The dispatch route checks this list BEFORE authenticating, so a typo or a
 * probe never reaches the auth path or the database. That ordering is the point:
 * "is this a real tool" is not an auth question, and answering it first means an
 * unknown name costs one string comparison rather than a Supabase round trip.
 *
 * Deliberately hand-written rather than derived from the filesystem or from
 * `register.ts`. Exposing a tool over HTTP to a desktop and a mobile client
 * should be a conscious decision, not a side effect of creating a file — a
 * derived list would publish the next internal tool the moment someone wrote it.
 *
 * Shared with clients: this package has NO runtime dependencies, so a Tauri or
 * React Native app can import it without pulling in a database driver.
 */
export const TOOL_NAMES = [
  // read
  "search_leads",
  "get_lead",
  "get_pipeline",
  "search_copyblocks",
  // create — no confirmation; a surplus row is recoverable
  "create_lead",
  "add_note",
  "create_bid_blocks",
  // update — confirm-before-write, enforced in the tool layer
  "update_lead",
  "update_bid_blocks",
  "propose_bid_amount",
  "set_bid_amount",
] as const;

export type ToolName = (typeof TOOL_NAMES)[number];

export function isToolName(value: unknown): value is ToolName {
  return typeof value === "string" && (TOOL_NAMES as readonly string[]).includes(value);
}

/**
 * Header a client sets to identify itself, e.g. `desktop` or `ios`.
 *
 * Recorded on every metered call. It is also the seam for per-device
 * attribution when device pairing lands — same column, no migration.
 */
export const CLIENT_ID_HEADER = "x-client-id";
