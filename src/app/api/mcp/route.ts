/**
 * The MCP endpoint — Streamable HTTP, served by mcp-handler@2.1.1.
 *
 * AUTHLESS SPIKE. This deployment is Phase 0: prove transport, tool schemas,
 * and mobile connector support. It is thrown away, not shipped. A secret URL is
 * a bearer credential that ends up in logs and in Claude's config, so it is not
 * a substitute for auth. Task 8 wraps this handler in `withMcpAuth`.
 *
 * mcp-handler does not inspect the pathname — it serves every request it gets,
 * and routing belongs to Next. 2.x removed `basePath` and `maxDuration` as
 * handler options, so the route location and the duration are set here.
 */

import { createMcpHandler } from "mcp-handler";
import { NextResponse } from "next/server";
import { registerCrmTools } from "@/lib/mcp/register";

// Node runtime: mcp-handler@2 requires Node 20+, and the service-role Supabase
// client is not Edge-safe.
export const runtime = "nodejs";
export const maxDuration = 60;

const mcpHandler = createMcpHandler(registerCrmTools, {
  serverInfo: { name: "suewheelerstl-crm", version: "0.1.0" },
});

/**
 * KILL SWITCH — fails closed.
 *
 * This handler has NO authentication until Task 8 lands. The docstring above
 * says the spike is "thrown away, not shipped", but a comment does not stop a
 * deploy: this file is on main, Vercel deploys on push, and the export below
 * would publish an unauthenticated endpoint that reads the entire CRM —
 * customer names, home addresses, phone numbers, private notes, and full
 * message history.
 *
 * So the route only responds when MCP_SPIKE_ENABLED is explicitly "true", which
 * is set locally and nowhere else. Unset, misspelled, or missing in a new
 * environment all mean disabled, for the same reason `admin-guard.ts` treats an
 * unset allowlist as "deny everyone": a config value that means "wide open" when
 * absent will eventually be absent.
 *
 * 404 rather than 403 — an endpoint that is not supposed to exist should not
 * advertise that it does.
 *
 * DELETE THIS BLOCK in Task 8, when withMcpAuth provides real authentication.
 */
function enabled(): boolean {
  return process.env.MCP_SPIKE_ENABLED === "true";
}

async function guarded(request: Request): Promise<Response> {
  if (!enabled()) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return mcpHandler(request);
}

export { guarded as GET, guarded as POST };
