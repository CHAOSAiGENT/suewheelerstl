/**
 * Tool dispatch for the app API.
 *
 * Maps a `ToolName` from @suewheelerstl/contract onto the tool function that
 * serves it. Kept separate from the route handler so the mapping is testable
 * without constructing a Request, and so the route stays about HTTP concerns
 * (status codes, metering, serialization) rather than about which tool is which.
 *
 * `search_copyblocks` is the one tool with no client parameter — it reads a
 * static JSON asset and touches no database. The union below models that
 * explicitly rather than passing a client it would ignore, so the type system
 * knows the difference.
 */

import type { SupabaseClient } from "@supabase/supabase-js";
import type { ToolName } from "@suewheelerstl/contract";

import { searchLeads } from "@/lib/mcp/tools/search-leads";
import { getLead } from "@/lib/mcp/tools/get-lead";
import { getPipeline } from "@/lib/mcp/tools/get-pipeline";
import { searchCopyblocks } from "@/lib/mcp/tools/search-copyblocks";
import { createLead } from "@/lib/mcp/tools/create-lead";
import { addNote } from "@/lib/mcp/tools/add-note";
import { createBidBlocks } from "@/lib/mcp/tools/create-bid-blocks";
import { updateLead } from "@/lib/mcp/tools/update-lead";
import { updateBidBlocks } from "@/lib/mcp/tools/update-bid-blocks";
import { proposeBidAmount } from "@/lib/mcp/tools/propose-bid-amount";
import { setBidAmount } from "@/lib/mcp/tools/set-bid-amount";

type WithClient = (input: never, client: SupabaseClient) => Promise<unknown>;
type WithoutClient = (input: never) => Promise<unknown>;

const NEEDS_CLIENT: Record<Exclude<ToolName, "search_copyblocks">, WithClient> = {
  search_leads: searchLeads as WithClient,
  get_lead: getLead as WithClient,
  get_pipeline: getPipeline as WithClient,
  create_lead: createLead as WithClient,
  add_note: addNote as WithClient,
  create_bid_blocks: createBidBlocks as WithClient,
  update_lead: updateLead as WithClient,
  update_bid_blocks: updateBidBlocks as WithClient,
  propose_bid_amount: proposeBidAmount as WithClient,
  set_bid_amount: setBidAmount as WithClient,
};

const NO_CLIENT: Record<"search_copyblocks", WithoutClient> = {
  search_copyblocks: searchCopyblocks as WithoutClient,
};

/**
 * Invokes the named tool. The caller is responsible for having established that
 * `name` is a real ToolName — this function assumes it, because the route
 * rejects unknown names before authenticating.
 */
export async function dispatchTool(
  name: ToolName,
  input: unknown,
  client: SupabaseClient,
): Promise<unknown> {
  if (name === "search_copyblocks") {
    return NO_CLIENT.search_copyblocks(input as never);
  }
  return NEEDS_CLIENT[name](input as never, client);
}

/**
 * Classifies a thrown tool error as the caller's fault or ours.
 *
 * The tools throw plain Errors for both — a Zod parse failure and a database
 * outage look identical to `catch`. Returning 500 for a bad `status` value would
 * tell a client to retry something that will never succeed; returning 400 for a
 * database outage would tell it to fix input that was fine. So we match on the
 * message shapes the tool layer actually produces.
 *
 * Deliberately conservative: anything unrecognised is a 500. A misclassified
 * server error shown as a client error is the worse mistake, because it sends
 * someone looking for a bug in their own payload.
 */
export function classifyToolError(error: unknown): 400 | 500 {
  const message = error instanceof Error ? error.message : String(error);
  const clientFault =
    /invalid/i.test(message) ||
    /missing required/i.test(message) ||
    /must hold at least/i.test(message) ||
    /expected one of/i.test(message) ||
    /not a valid/i.test(message);
  return clientFault ? 400 : 500;
}
