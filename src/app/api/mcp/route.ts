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
import { registerCrmTools } from "@/lib/mcp/register";

// Node runtime: mcp-handler@2 requires Node 20+, and the service-role Supabase
// client is not Edge-safe.
export const runtime = "nodejs";
export const maxDuration = 60;

const handler = createMcpHandler(registerCrmTools, {
  serverInfo: { name: "suewheelerstl-crm", version: "0.1.0" },
});

export { handler as GET, handler as POST };
