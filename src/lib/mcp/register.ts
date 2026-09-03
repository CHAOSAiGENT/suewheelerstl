/**
 * MCP tool registration — the thin adapter between the pure tools in
 * ./tools/ and the MCP protocol. No business logic lives here; if a rule
 * about the CRM is being decided in this file, it is in the wrong file.
 *
 * ---------------------------------------------------------------------------
 * VERIFIED API — mcp-handler@2.1.1 / @modelcontextprotocol/server@2.0.0 / zod@4.5.4
 *
 * Read from node_modules/mcp-handler/README.md and
 * node_modules/@modelcontextprotocol/server/dist/createMcpHandler-*.d.cts.
 * Vercel's public MCP docs page still shows the 1.x API against a 2.x package —
 * do not use it. What is actually true here:
 *
 *   server.registerTool(
 *     name: string,
 *     config: {
 *       title?: string;
 *       description?: string;
 *       inputSchema?: StandardSchema;   // a FULL z.object({...}), not a raw shape
 *       outputSchema?: StandardSchema;
 *       annotations?: ToolAnnotations;
 *       icons?: Icon[];
 *       _meta?: Record<string, unknown>;
 *     },
 *     cb: (args, ctx) => CallToolResult | Promise<CallToolResult>,
 *   ): RegisteredTool
 *
 *   createMcpHandler(
 *     initializeServer: (server: McpServer) => void | Promise<void>,
 *     options?: ServerOptions & {
 *       serverInfo?: { name: string; version: string };
 *       verboseLogs?: boolean;
 *       onEvent?: (event: McpEvent) => void;
 *       maxSubscriptions?: number;
 *     },
 *   ): (request: Request) => Promise<Response>
 *
 * Removed in 2.x (all present in 1.x and in the stale docs page):
 *   server.tool(...) / .prompt(...) / .resource(...) variadic forms,
 *   basePath, streamableHttpEndpoint, sseEndpoint, sseMessageEndpoint,
 *   disableSse, redisUrl, maxDuration, sessionIdGenerator.
 * Mount at the route instead; set duration with Next's `export const maxDuration`.
 *
 * The raw-shape `inputSchema` overload still exists but is marked @deprecated —
 * "Wrap with z.object({...}) instead". Our tools already export z.object(...)
 * schemas, so they drop straight in.
 *
 * For Task 8: auth context is `ctx.http?.authInfo` — renamed from 1.x's
 * `extra.authInfo`. `withMcpAuth`, `protectedResourceHandler`,
 * `generateProtectedResourceMetadata`, and `metadataCorsOptionsRequestHandler`
 * are all exported from "mcp-handler".
 *
 * The README links docs/AUTHORIZATION.md, docs/CLIENTS.md, docs/ADVANCED.md —
 * those are DEAD. The npm tarball ships only dist/, package.json, and
 * README.md. dist/index.d.ts is the fallback source of truth.
 * ---------------------------------------------------------------------------
 */

import type { McpServer } from "@modelcontextprotocol/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { searchLeads, searchLeadsInput } from "./tools/search-leads";
import { getLead, getLeadInput } from "./tools/get-lead";
import { getPipeline, getPipelineInput } from "./tools/get-pipeline";
import { searchCopyblocks, searchCopyblocksInput } from "./tools/search-copyblocks";

/**
 * Every tool returns plain data; the protocol wants content blocks. Pretty-print
 * so the JSON stays legible in a model's context rather than arriving as one
 * unbroken line.
 */
function asToolResult(data: unknown) {
  return { content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }] };
}

/**
 * Registers the four read tools on an MCP server instance.
 *
 * Descriptions are written for a model, not a changelog: each says what comes
 * back and when to reach for it. search_leads names the UUID hand-off explicitly
 * so Claude learns to resolve a name to an id instead of guessing one.
 */
export function registerCrmTools(server: McpServer): void {
  server.registerTool(
    "search_leads",
    {
      title: "Search leads",
      description:
        "Find leads (contact-form submissions) by customer name, email, address, or pipeline " +
        "stage. Returns a list of matching leads including each lead's UUID `id`. Use this " +
        "FIRST whenever the user refers to a job by name (\"the Hartmann job\") — get_lead and " +
        "every write tool accept only a UUID, never a name, so this is how a name becomes an " +
        "id. Excludes archived leads and automated health-monitor test rows. Returns a " +
        "summary row per lead, not the full history; call get_lead for that.",
      inputSchema: searchLeadsInput,
    },
    async (args) => asToolResult(await searchLeads(args, createServiceSupabaseClient())),
  );

  server.registerTool(
    "get_lead",
    {
      title: "Get lead",
      description:
        "Open one lead in full: the submission record plus its private admin notes, the " +
        "two-way message thread with the customer, and any bid blocks already drafted for it. " +
        "Use this once you have a UUID and need the working context to answer a question, " +
        "write a reply, or draft a bid. Takes a UUID only — run search_leads first to resolve " +
        "a customer name to an id. Returns lead: null if no lead has that id.",
      inputSchema: getLeadInput,
    },
    async (args) => asToolResult(await getLead(args, createServiceSupabaseClient())),
  );

  server.registerTool(
    "get_pipeline",
    {
      title: "Get pipeline",
      description:
        "Snapshot of the whole Kanban board: every pipeline stage with its lead count, the sum " +
        "of bid amounts in that stage, and the id + name + bid amount of each lead in it. Use " +
        "this for \"what's on my plate\", \"what needs bidding\", or any question about the " +
        "business as a whole rather than one customer. Empty stages are included with a count " +
        "of 0, so an absent stage means the stage does not exist, not that it is empty. Takes " +
        "no arguments.",
      inputSchema: getPipelineInput,
    },
    async (args) => asToolResult(await getPipeline(args, createServiceSupabaseClient())),
  );

  server.registerTool(
    "search_copyblocks",
    {
      title: "Search copyblocks",
      description:
        "Search Sue's copyblock library — reusable bid language mined from her past jobs, " +
        "grouped into categories, with historical pricing carried in the text (occurrence " +
        "counts, ranges, medians). Use this before writing ANY bid copy or suggesting ANY " +
        "price, so the wording is Sue's own and the number is grounded in what she has " +
        "actually charged rather than invented. Omit `query` to list the categories and browse. " +
        "Reads a static library — no customer data, no database.",
      inputSchema: searchCopyblocksInput,
    },
    async (args) => asToolResult(await searchCopyblocks(args)),
  );
}
