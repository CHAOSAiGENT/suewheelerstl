/**
 * Usage accounting for the app API.
 *
 * Written in the same request as the work it describes. Billing cannot be
 * reconstructed after the fact — you cannot invoice for a period you were not
 * recording — so this is wired from the first endpoint rather than added once
 * there is revenue to justify it.
 *
 * Failed calls are recorded too: an error still consumed a model call and a
 * database round trip, and a usage table that only counts successes understates
 * cost exactly when something is going wrong.
 */

import type { SupabaseClient } from "@supabase/supabase-js";

export interface UsageEvent {
  userEmail: string;
  clientId: string;
  toolName: string;
  outcome: "ok" | "error";
  durationMs: number;
  model?: string;
  inputTokens?: number;
  outputTokens?: number;
  providerCostUsd?: number;
}

export async function recordUsage(
  event: UsageEvent,
  client: SupabaseClient,
): Promise<void> {
  const { error } = await client.from("usage_events").insert({
    user_email: event.userEmail,
    client_id: event.clientId,
    tool_name: event.toolName,
    outcome: event.outcome,
    duration_ms: event.durationMs,
    model: event.model ?? null,
    input_tokens: event.inputTokens ?? null,
    output_tokens: event.outputTokens ?? null,
    provider_cost_usd: event.providerCostUsd ?? null,
  });

  // Deliberately swallowed. This is the one place in the codebase where an error
  // is not thrown: a metering failure must never fail the user's request. Losing
  // a billing row costs money; losing Sue's bid because accounting hiccuped
  // costs a customer. Logged loudly so the loss is visible.
  if (error) {
    console.error("[meter] failed to record usage:", error.message, {
      tool: event.toolName,
      user: event.userEmail,
    });
  }
}
