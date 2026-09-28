/**
 * set_bid_amount — the only tool that writes submissions.bid_amount.
 *
 * TWO LOCKS, BOTH REQUIRED. The amount is a required argument, so a call that
 * does not name a number is rejected before any database call; and `confirm`
 * defaults to false, so a call that names a number without confirming it gets a
 * preview and no write. Claude cannot set a price Sue has not seen, because the
 * only path to the write runs through a number a human supplied and a
 * confirmation a human gave.
 *
 * IT WRITES ONE COLUMN. `bid_status`, `bid_sent_at` and `bid_file_url` belong to
 * the send flow, which stays a deliberate human act in the admin UI — Sue opens
 * the rendered PDF, reads it, and sends it. The MCP must never be able to put a
 * bid in front of a customer, so those columns are not in the payload and there
 * is no code here that could add them.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SUBMISSION_COLUMNS, SUBMISSION_SELECT } from "../columns";
import { projectNullableRecord, projectRecord } from "../projection";

/**
 * Upper bound on a bid, in dollars.
 *
 * The largest single figure anywhere in Sue's historical copyblock library is
 * $64,800 (the top of the PORCH range); medians run $1,400–$8,800. $250,000 is
 * therefore ~4x the largest job she has ever recorded on one element and well
 * above any plausible residential refinishing bid, while still catching the
 * error this guard exists for: a cents-for-dollars mix-up or a stray digit,
 * which turns a $4,200 bid into $420,000. It is a sanity ceiling, not a pricing
 * policy — the preview is what catches a wrong number inside the plausible range.
 */
export const BID_AMOUNT_CEILING = 250_000;

export const setBidAmountInput = z.object({
  id: z
    .string()
    .uuid()
    .describe("Submission UUID, as returned by search_leads. Never a customer name."),
  amount: z
    .number({
      error: (issue) =>
        `Invalid amount ${JSON.stringify(issue.input)} — set_bid_amount requires an explicit number in dollars, given by Sue. Use propose_bid_amount to gather the evidence for one.`,
    })
    .refine((v) => Number.isFinite(v), {
      error: (issue) => `Invalid amount ${JSON.stringify(issue.input)} — must be a finite number`,
    })
    .refine((v) => v >= 0, {
      error: (issue) => `Invalid amount ${JSON.stringify(issue.input)} — must not be negative`,
    })
    .refine((v) => v <= BID_AMOUNT_CEILING, {
      error: (issue) =>
        `Invalid amount ${JSON.stringify(issue.input)} — above the ${BID_AMOUNT_CEILING} sanity ceiling. If the bid really is this large, set it in the admin UI.`,
    })
    .describe("The bid in dollars. Sue's number, not a computed one."),
  confirm: z
    .boolean()
    .default(false)
    .describe(
      "Must be true to write. Omitted or false returns the existing amount against the proposed one and writes nothing.",
    ),
});

export type SetBidAmountInput = z.input<typeof setBidAmountInput>;

export interface SetBidAmountResult {
  preview: boolean;
  written: boolean;
  id: string;
  currentBidAmount: number | null;
  proposedBidAmount: number;
  /** Always exactly one entry: bid_amount. No other column is touched. */
  changes: { field: "bid_amount"; from: number | null; to: number }[];
  lead: Record<string, unknown> | null;
  message: string;
}

export async function setBidAmount(
  raw: SetBidAmountInput,
  client: SupabaseClient,
): Promise<SetBidAmountResult> {
  const { id, amount, confirm } = setBidAmountInput.parse(raw);

  const currentRes = await client
    .from("submissions")
    .select(SUBMISSION_SELECT)
    .eq("id", id)
    .maybeSingle();
  if (currentRes.error) throw new Error(`set_bid_amount failed: ${currentRes.error.message}`);
  if (!currentRes.data) throw new Error(`set_bid_amount failed: no submission with id ${id}`);

  // Projected at the read: `current` is returned as the preview's `lead`.
  const current = projectRecord(
    currentRes.data as unknown as Record<string, unknown>,
    SUBMISSION_COLUMNS,
    "set_bid_amount: submissions",
  );
  const currentBidAmount = typeof current.bid_amount === "number" ? current.bid_amount : null;
  const changes = [{ field: "bid_amount" as const, from: currentBidAmount, to: amount }];

  // ── THE CONFIRM GATE ──────────────────────────────────────────────────────
  // No `.update()` above this line. Removing this block is what
  // set-bid-amount.test.ts mutation-tests against.
  if (!confirm) {
    return {
      preview: true,
      written: false,
      id,
      currentBidAmount,
      proposedBidAmount: amount,
      changes,
      lead: current,
      message:
        currentBidAmount === null
          ? `Preview only — nothing was written. This job has no bid amount yet; ${amount} would be its first. Call again with confirm: true to write it.`
          : `Preview only — nothing was written. This would OVERWRITE the existing bid of ${currentBidAmount} with ${amount}. Call again with confirm: true to write it.`,
    };
  }

  // One column. bid_status / bid_sent_at / bid_file_url belong to the send flow.
  const { data, error } = await client
    .from("submissions")
    .update({ bid_amount: amount })
    .eq("id", id)
    .select(SUBMISSION_SELECT)
    .maybeSingle();
  if (error) throw new Error(`set_bid_amount failed: ${error.message}`);

  return {
    preview: false,
    written: true,
    id,
    currentBidAmount,
    proposedBidAmount: amount,
    changes,
    lead: projectNullableRecord(
      data as unknown as Record<string, unknown> | null,
      SUBMISSION_COLUMNS,
      "set_bid_amount: submissions",
    ),
    message: `bid_amount set to ${amount} on submission ${id}. The bid has NOT been sent — sending stays in the admin UI.`,
  };
}
