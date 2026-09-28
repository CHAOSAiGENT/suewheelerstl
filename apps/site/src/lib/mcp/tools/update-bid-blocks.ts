/**
 * update_bid_blocks — edits existing bid_blocks rows in place.
 *
 * A bid in this system is prose plus one number: an ordered list of bid_blocks
 * and a single submissions.bid_amount. This tool owns the prose half. The number
 * is set_bid_amount's, and nothing here touches it.
 *
 * CONFIRM-BEFORE-WRITE. `confirm` defaults to false and the `.update()` calls
 * live after an unconditional preview return, so a call without `confirm: true`
 * has no path to a write. The preview shows the current title and body of every
 * targeted block against what would replace it — a bid is Sue's voice, and
 * overwriting a paragraph she wrote is not recoverable from a transcript.
 *
 * PARTIAL FAILURE IS REPORTED, NOT ROUNDED OFF. PostgREST has no client-side
 * transaction, so a three-block edit can land two. Each block's outcome is
 * returned separately and `ok` is false if any block failed or was missing.
 * Claiming success on a half-written bid is the failure mode this avoids.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { columnsOf, projectRecords } from "../projection";

/**
 * Explicit column list, matching get-lead.ts's bid_blocks read. Never select("*")
 * from an MCP tool — see ../columns.ts for why. The rows read back through it are
 * projected against it before any of their values are returned — see
 * ../projection.ts for why the guarantee lives on the response, not the request.
 */
export const BID_BLOCK_SELECT = "id,submission_id,source_key,title,body,sort_order,photo_paths";
const BID_BLOCK_COLUMNS = columnsOf(BID_BLOCK_SELECT);

/** The only columns this tool may write. */
export const UPDATE_BID_BLOCK_FIELDS = ["title", "body", "sort_order", "photo_paths"] as const;

const blockEdit = z
  .object({
    id: z
      .string()
      .uuid()
      .describe("bid_blocks UUID, as returned by get_lead. Never a block title."),
    title: z.string().optional(),
    body: z.string().optional(),
    sort_order: z.number().int().describe("Display order, ascending.").optional(),
    photo_paths: z.array(z.string()).optional(),
  })
  .refine((b) => UPDATE_BID_BLOCK_FIELDS.some((f) => b[f] !== undefined), {
    // Echo the id back: a model that sent a bare `{ id }` needs to see which
    // block it failed to describe, not just that some block was empty.
    error: (issue) => {
      const input = issue.input as { id?: string } | undefined;
      return `Block ${input?.id ?? "(unknown id)"} has nothing to change — supply at least one of ${UPDATE_BID_BLOCK_FIELDS.join(", ")}`;
    },
  });

export const updateBidBlocksInput = z.object({
  blocks: z
    .array(blockEdit)
    .min(1)
    .refine(
      (blocks) => new Set(blocks.map((b) => b.id)).size === blocks.length,
      // Two edits to one block would apply in array order and silently discard
      // the first. Reject instead of picking a winner.
      { message: "Duplicate block id — each block may appear at most once per call" },
    )
    .describe("One entry per block to edit: its UUID plus the fields to change."),
  confirm: z
    .boolean()
    .default(false)
    .describe(
      "Must be true to write. Omitted or false returns a before/after preview of every block and writes nothing.",
    ),
});

export type UpdateBidBlocksInput = z.input<typeof updateBidBlocksInput>;

export interface BlockFieldChange {
  field: string;
  from: unknown;
  to: unknown;
  /** False when the proposed value equals what is already stored. */
  changed: boolean;
}

export interface BlockOutcome {
  id: string;
  found: boolean;
  changes: BlockFieldChange[];
  written: boolean;
  error: string | null;
}

export interface UpdateBidBlocksResult {
  preview: boolean;
  /** True only when every targeted block was found and written. */
  ok: boolean;
  blocks: BlockOutcome[];
  updatedIds: string[];
  failed: { id: string; error: string }[];
  notFound: string[];
  message: string;
}

export async function updateBidBlocks(
  raw: UpdateBidBlocksInput,
  client: SupabaseClient,
): Promise<UpdateBidBlocksResult> {
  const { blocks, confirm } = updateBidBlocksInput.parse(raw);
  const ids = blocks.map((b) => b.id);

  const currentRes = await client.from("bid_blocks").select(BID_BLOCK_SELECT).in("id", ids);
  if (currentRes.error) {
    throw new Error(`update_bid_blocks failed: ${currentRes.error.message}`);
  }

  // Projected at the read. These rows are not returned whole, but their values
  // are: every `changes[].from` is read off one of them.
  const currentRows = projectRecords(
    (currentRes.data ?? []) as unknown as Record<string, unknown>[],
    BID_BLOCK_COLUMNS,
    "update_bid_blocks: bid_blocks",
  );

  const current = new Map<string, Record<string, unknown>>();
  for (const row of currentRows) {
    current.set(String(row.id), row);
  }

  const notFound = ids.filter((id) => !current.has(id));

  // Preview rows. Title and body are always shown, changed or not, because the
  // question a human is answering is "is this the block I think it is".
  const outcomes: BlockOutcome[] = blocks.map((edit) => {
    const row = current.get(edit.id);
    if (!row) {
      return { id: edit.id, found: false, changes: [], written: false, error: "No bid block with this id" };
    }
    const fields = new Set<string>(["title", "body"]);
    for (const f of UPDATE_BID_BLOCK_FIELDS) if (edit[f] !== undefined) fields.add(f);

    const changes: BlockFieldChange[] = [...fields].map((field) => {
      const from = row[field] ?? null;
      const proposed = (edit as Record<string, unknown>)[field];
      const to = proposed === undefined ? from : proposed;
      return { field, from, to, changed: JSON.stringify(from) !== JSON.stringify(to) };
    });

    return { id: edit.id, found: true, changes, written: false, error: null };
  });

  // ── THE CONFIRM GATE ──────────────────────────────────────────────────────
  // No `.update()` above this line. Removing this block is what
  // update-bid-blocks.test.ts mutation-tests against.
  if (!confirm) {
    return {
      preview: true,
      ok: notFound.length === 0,
      blocks: outcomes,
      updatedIds: [],
      failed: [],
      notFound,
      message:
        "Preview only — nothing was written. Show the before/after to Sue, then call again with confirm: true.",
    };
  }

  const updatedIds: string[] = [];
  const failed: { id: string; error: string }[] = [];

  for (const edit of blocks) {
    const outcome = outcomes.find((o) => o.id === edit.id)!;
    if (!outcome.found) continue;

    const payload: Record<string, unknown> = {};
    for (const f of UPDATE_BID_BLOCK_FIELDS) if (edit[f] !== undefined) payload[f] = edit[f];

    const { error } = await client
      .from("bid_blocks")
      .update(payload)
      .eq("id", edit.id)
      .select(BID_BLOCK_SELECT)
      .maybeSingle();

    if (error) {
      outcome.error = error.message;
      failed.push({ id: edit.id, error: error.message });
    } else {
      outcome.written = true;
      updatedIds.push(edit.id);
    }
  }

  const ok = failed.length === 0 && notFound.length === 0;
  // A per-block failure is reported rather than thrown so the blocks that DID
  // land are still named. Only the initial read throws.
  const message = ok
    ? `Wrote ${updatedIds.length} block(s).`
    : `PARTIAL WRITE — ${updatedIds.length} block(s) written; ${failed.length} failed; ${notFound.length} not found. The bid is now in a mixed state: ${JSON.stringify({ updatedIds, failed: failed.map((f) => f.id), notFound })}`;

  return { preview: false, ok, blocks: outcomes, updatedIds, failed, notFound, message };
}
