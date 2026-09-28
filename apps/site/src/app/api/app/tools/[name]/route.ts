/**
 * POST /api/app/tools/:name — the app API's only write surface.
 *
 * Thin by design. It does HTTP concerns and nothing else: reject unknown names,
 * authorize, dispatch, meter, serialize. Every business rule — confirm-before-
 * write, UUID-only targeting, column allowlists, the PII guarantee — lives in
 * the tool layer, so a second client (mobile) inherits all of it by calling the
 * same endpoint rather than by reimplementing anything.
 *
 * ORDER MATTERS. An unknown tool name is rejected BEFORE authentication. "Is
 * this a real tool" is not an auth question, and answering it first means a
 * probe or a typo costs one string comparison instead of a Supabase round trip.
 *
 * Node runtime: the service-role Supabase client is not Edge-safe.
 */

import { NextResponse } from "next/server";
import { isToolName, CLIENT_ID_HEADER } from "@suewheelerstl/contract";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { authorizeAppRequest } from "@/lib/app-api/auth";
import { recordUsage } from "@/lib/app-api/meter";
import { dispatchTool, classifyToolError } from "@/lib/app-api/dispatch";
import { FORBIDDEN_COLUMNS } from "@/lib/mcp/columns";

export const runtime = "nodejs";

export async function POST(
  request: Request,
  context: { params: Promise<{ name: string }> },
): Promise<Response> {
  const { name } = await context.params;

  // Before auth, deliberately. See the header comment.
  if (!isToolName(name)) {
    return NextResponse.json({ error: `Unknown tool: ${name}` }, { status: 404 });
  }

  const auth = await authorizeAppRequest(request, createServerSupabaseClient);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const clientId = request.headers.get(CLIENT_ID_HEADER)?.trim() || "unknown";
  const service = createServiceSupabaseClient();
  const startedAt = Date.now();

  let input: unknown = {};
  try {
    const text = await request.text();
    input = text ? JSON.parse(text) : {};
  } catch {
    // Malformed JSON is the caller's fault and never reaches a tool, so it is
    // metered as an error rather than skipped — it still cost a request.
    await recordUsage(
      {
        userEmail: auth.email,
        clientId,
        toolName: name,
        outcome: "error",
        durationMs: Date.now() - startedAt,
      },
      service,
    );
    return NextResponse.json({ error: "Malformed JSON body" }, { status: 400 });
  }

  try {
    const result = await dispatchTool(name, input, service);

    // Final leak guard. src/lib/mcp/projection.ts should make this unreachable —
    // it throws on a forbidden key before a record ever gets here. This asserts
    // the same property at the HTTP boundary, independently of the layer below,
    // because the cost of being wrong is a bearer credential written permanently
    // into a model transcript.
    const body = JSON.stringify(result ?? null);
    for (const forbidden of FORBIDDEN_COLUMNS) {
      if (body.includes(forbidden)) {
        console.error(
          `[app-api] BLOCKED a response from ${name} carrying ${forbidden}. ` +
            `projection.ts should have thrown before this point — investigate ` +
            `the tool's return path, do not relax this guard.`,
        );
        await recordUsage(
          {
            userEmail: auth.email,
            clientId,
            toolName: name,
            outcome: "error",
            durationMs: Date.now() - startedAt,
          },
          service,
        );
        return NextResponse.json(
          { error: "Response withheld: it carried a credential" },
          { status: 500 },
        );
      }
    }

    await recordUsage(
      {
        userEmail: auth.email,
        clientId,
        toolName: name,
        outcome: "ok",
        durationMs: Date.now() - startedAt,
      },
      service,
    );

    return new NextResponse(body, {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    const status = classifyToolError(error);
    // Metered on the failure path too. An error still consumed a round trip,
    // and a ledger that counts only successes understates cost exactly when
    // something is going wrong.
    await recordUsage(
      {
        userEmail: auth.email,
        clientId,
        toolName: name,
        outcome: "error",
        durationMs: Date.now() - startedAt,
      },
      service,
    );
    const message = error instanceof Error ? error.message : "Tool failed";
    if (status === 500) console.error(`[app-api] ${name} failed:`, message);
    return NextResponse.json({ error: message }, { status });
  }
}
