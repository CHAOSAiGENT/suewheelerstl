/**
 * create_bid_blocks — the ordered prose of a bid, written in one call.
 *
 * A bid in this system is a list of `bid_blocks` plus a single
 * `submissions.bid_amount`. This tool writes the list. It never touches the
 * number: that split is what keeps "Sue sets the price" structural rather than
 * a prompt instruction (docs/MCP.md §9).
 *
 * WHY THE ROWS GO IN ONE AT A TIME. PostgREST inserts an array as a single
 * statement, so a bad value in block three rolls back blocks one and two and
 * reports one error. That is a safe outcome but an illegible one: the caller
 * cannot tell whether anything landed. Inserting sequentially costs a round
 * trip per block and buys an exact answer to "what is on this bid now" — which
 * is the question that matters when the next step is Sue opening the bid
 * builder. On a failure the run STOPS; the blocks after it are reported as not
 * attempted rather than written into a gap left by the one that failed.
 *
 * `sort_order` is assigned from array position, continuing after the highest
 * value already on that submission, so calling this twice appends rather than
 * overwriting the ordering of an existing draft. A caller-supplied `sort_order`
 * is honoured unless it collides, in which case it is moved to the next free
 * slot — the resolved value is in every returned row, so the adjustment is
 * visible rather than silent.
 *
 * `source_key` records which copyblock a block was adapted from. It defaults to
 * "custom", which is the honest label for prose written from scratch.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { columnsOf, projectRecord } from "../projection";

/**
 * bid_blocks holds no credentials, so the allowlist is a local literal —
 * the same one get_lead uses for this table. It is still an explicit list:
 * `select("*")` appears nowhere in an MCP tool.
 *
 * Every created row is projected against it before being returned. The table
 * carrying no credential today is why this costs nothing, not a reason to skip
 * it: a schema change that puts one here should fail loudly rather than write a
 * credential into a transcript. See ../projection.ts.
 */
const BID_BLOCK_SELECT = "id,submission_id,source_key,title,body,sort_order,photo_paths";
const BID_BLOCK_COLUMNS = columnsOf(BID_BLOCK_SELECT);

export const createBidBlocksInput = z.object({
  submission_id: z
    .string()
    .uuid()
    .describe("Submission UUID, as returned by search_leads."),
  blocks: z
    .array(
      z.object({
        title: z
          .string()
          .trim()
          .min(1, { error: "Each block needs a title" })
          .describe("Block heading, e.g. \"Front door\"."),
        body: z.string().describe("The block's prose."),
        source_key: z
          .string()
          .trim()
          .min(1)
          .default("custom")
          .describe(
            "The copyblock key this was adapted from, as returned by search_copyblocks. " +
              "Leave unset for prose written from scratch; it records as \"custom\".",
          ),
        sort_order: z
          .number()
          .int()
          .nonnegative()
          .optional()
          .describe("Position in the bid. Defaults to array order, appended after existing blocks."),
        photo_paths: z.array(z.string()).default([]).describe("Storage paths for block photos."),
      }),
    )
    .min(1, { error: "blocks must hold at least one block" })
    .describe("The blocks to write, in the order they should appear in the bid."),
});

export type CreateBidBlocksInput = z.input<typeof createBidBlocksInput>;

export interface CreateBidBlocksFailure {
  /** Index in the submitted `blocks` array. */
  index: number;
  title: string;
  error: string;
}

export interface CreateBidBlocksResult {
  submission_id: string;
  created: Record<string, unknown>[];
  createdCount: number;
  /** True only when every submitted block landed. */
  complete: boolean;
  /** The block that failed, if one did. Everything before it is in `created`. */
  failed: CreateBidBlocksFailure | null;
  /** Indices of blocks never sent, because the run stopped at `failed`. */
  notAttempted: number[];
}

export async function createBidBlocks(
  raw: CreateBidBlocksInput,
  client: SupabaseClient,
): Promise<CreateBidBlocksResult> {
  const { submission_id, blocks } = createBidBlocksInput.parse(raw);

  const leadRes = await client
    .from("submissions")
    .select("id")
    .eq("id", submission_id)
    .maybeSingle();
  if (leadRes.error) throw new Error(`create_bid_blocks failed: ${leadRes.error.message}`);
  if (!leadRes.data) {
    throw new Error(
      `create_bid_blocks failed: no lead with id ${submission_id} — run search_leads to get the right UUID`,
    );
  }

  const existingRes = await client
    .from("bid_blocks")
    .select("sort_order")
    .eq("submission_id", submission_id);
  if (existingRes.error) {
    throw new Error(`create_bid_blocks existing blocks failed: ${existingRes.error.message}`);
  }

  const taken = new Set<number>();
  for (const row of (existingRes.data ?? []) as { sort_order: number | null }[]) {
    if (typeof row.sort_order === "number") taken.add(row.sort_order);
  }
  let cursor = taken.size ? Math.max(...taken) + 1 : 0;

  const resolved = blocks.map((block) => {
    let order = block.sort_order ?? cursor;
    while (taken.has(order)) order += 1;
    taken.add(order);
    if (order >= cursor) cursor = order + 1;
    return {
      submission_id,
      source_key: block.source_key,
      title: block.title,
      body: block.body,
      sort_order: order,
      photo_paths: block.photo_paths,
    };
  });

  const created: Record<string, unknown>[] = [];
  let failed: CreateBidBlocksFailure | null = null;
  let stoppedAt = resolved.length;

  for (let i = 0; i < resolved.length; i += 1) {
    const { data, error } = await client
      .from("bid_blocks")
      .insert(resolved[i])
      .select(BID_BLOCK_SELECT)
      .single();

    if (error || !data) {
      failed = {
        index: i,
        title: resolved[i].title,
        error: error?.message ?? "insert returned no row",
      };
      stoppedAt = i;
      break;
    }
    created.push(
      projectRecord(
        data as unknown as Record<string, unknown>,
        BID_BLOCK_COLUMNS,
        "create_bid_blocks: bid_blocks",
      ),
    );
  }

  // Nothing landed: there is no partial state to report, so this is an outright
  // failure and must throw. Returning an empty list would read as "the bid has
  // no blocks", which is indistinguishable from a bid nobody has written yet.
  if (failed && created.length === 0) {
    throw new Error(`create_bid_blocks failed: ${failed.error}`);
  }

  const notAttempted: number[] = [];
  if (failed) {
    for (let i = stoppedAt + 1; i < resolved.length; i += 1) notAttempted.push(i);
  }

  return {
    submission_id,
    created,
    createdCount: created.length,
    complete: failed === null,
    failed,
    notAttempted,
  };
}
