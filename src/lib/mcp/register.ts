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
import { createLead, createLeadInput } from "./tools/create-lead";
import { addNote, addNoteInput } from "./tools/add-note";
import { createBidBlocks, createBidBlocksInput } from "./tools/create-bid-blocks";
import { updateLead, updateLeadInput } from "./tools/update-lead";
import { updateBidBlocks, updateBidBlocksInput } from "./tools/update-bid-blocks";
import { proposeBidAmount, proposeBidAmountInput } from "./tools/propose-bid-amount";
import { setBidAmount, setBidAmountInput } from "./tools/set-bid-amount";

/**
 * Every tool returns plain data; the protocol wants content blocks. Pretty-print
 * so the JSON stays legible in a model's context rather than arriving as one
 * unbroken line.
 */
function asToolResult(data: unknown) {
  return { content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }] };
}

/**
 * Registers the eleven CRM tools on an MCP server instance — four read, three
 * create, four update.
 *
 * Descriptions are written for a model, not a changelog: each says what comes
 * back and when to reach for it. search_leads names the UUID hand-off explicitly
 * so Claude learns to resolve a name to an id instead of guessing one, and every
 * update tool states that omitting `confirm` previews rather than writes.
 *
 * Two safety properties are structural, enforced in the tools themselves rather
 * than by these descriptions — a model can talk itself past prose:
 *   - No update writes without `confirm: true`; without it the tool reads the
 *     current values, returns them beside the proposed ones, and writes nothing.
 *   - Only set_bid_amount can write bid_amount, and only with an explicit
 *     amount AND confirm. propose_bid_amount has no write path at all, which is
 *     what makes "Sue sets the price" a fact about the API rather than a wish.
 *
 * Nothing here can email a customer. Drafting, pricing and saving are
 * reversible; sending is not, so it stays a deliberate act in the admin UI.
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
        "no arguments. IF `truncated` IS TRUE the board holds more leads than were returned, " +
        "and every count and total is a FLOOR rather than a total — say so plainly instead of " +
        "reporting the numbers as complete.",
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

  // ---------------------------------------------------------------- create --

  server.registerTool(
    "create_lead",
    {
      title: "Create lead",
      description:
        "Add a new lead to the CRM — a customer who called, emailed, or was referred, " +
        "rather than one who filled in the website form. Requires name, phone, email, a " +
        "description of the work, and at least one service type. Lands in the `to_bid` " +
        "stage. Creates do not need confirmation: a surplus lead is easy to remove, and " +
        "asking every time would make dictation tedious. The email address is format-" +
        "checked, so a mistranscribed one is rejected rather than saved unreachable.",
      inputSchema: createLeadInput,
    },
    async (args) => asToolResult(await createLead(args, createServiceSupabaseClient())),
  );

  server.registerTool(
    "add_note",
    {
      title: "Add note",
      description:
        "Append a private note to a lead — what the customer said on site, what you " +
        "noticed about the woodwork, what to follow up. Never shown to the customer. " +
        "Also mirrors into the Kanban card preview so the board reflects it; if that " +
        "mirror fails the note is still saved and the response says so, rather than " +
        "reporting a board update that did not happen. Takes a lead UUID from search_leads.",
      inputSchema: addNoteInput,
    },
    async (args) => asToolResult(await addNote(args, createServiceSupabaseClient())),
  );

  server.registerTool(
    "create_bid_blocks",
    {
      title: "Create bid blocks",
      description:
        "Write the narrative body of a bid: an ordered list of blocks, each a title and " +
        "a paragraph. Search the copyblock library first so the language is Sue's own. " +
        "Blocks are appended after any that already exist, so the sort order never " +
        "collides. Writes one block at a time and reports exactly which landed — a bid " +
        "half-written with a gap in the middle is worse than a short one, so on failure " +
        "it stops and names what was not attempted. This writes the words only; the " +
        "price is set separately with set_bid_amount.",
      inputSchema: createBidBlocksInput,
    },
    async (args) => asToolResult(await createBidBlocks(args, createServiceSupabaseClient())),
  );

  // ---------------------------------------------------------------- update --

  server.registerTool(
    "update_lead",
    {
      title: "Update lead",
      description:
        "Change a lead's pipeline stage, crew assignment, scheduled start, or private " +
        "notes. WITHOUT `confirm: true` this previews: it returns the current value " +
        "beside the proposed one for every field and writes NOTHING. Call it once to " +
        "see the change, show Sue, then call again with confirm. Cannot touch the bid " +
        "amount — that is set_bid_amount — and cannot archive or delete.",
      inputSchema: updateLeadInput,
    },
    async (args) => asToolResult(await updateLead(args, createServiceSupabaseClient())),
  );

  server.registerTool(
    "update_bid_blocks",
    {
      title: "Update bid blocks",
      description:
        "Revise the wording or order of bid blocks already written. WITHOUT " +
        "`confirm: true` this previews the current title and body against the proposed " +
        "ones and writes NOTHING. A partial write is reported, not thrown: check `ok` " +
        "and read the message, which names which blocks were updated, which failed, and " +
        "which ids were not found. A non-throwing result is not automatically a success.",
      inputSchema: updateBidBlocksInput,
    },
    async (args) => asToolResult(await updateBidBlocks(args, createServiceSupabaseClient())),
  );

  server.registerTool(
    "propose_bid_amount",
    {
      title: "Propose bid amount",
      description:
        "Gather the evidence for pricing a job and return it. NEVER writes — it has no " +
        "`confirm` parameter because it has no write. Returns the job's service types " +
        "and description, any bid blocks already drafted, and matching copyblock entries " +
        "with their historical pricing text quoted VERBATIM (occurrence counts, ranges, " +
        "medians). Reason aloud from that evidence and give Sue a figure with your " +
        "working; do not present the medians as a calculated total, because the ranges " +
        "are wide and depend on condition the library cannot see. Sue sets the number.",
      inputSchema: proposeBidAmountInput,
    },
    async (args) => asToolResult(await proposeBidAmount(args, createServiceSupabaseClient())),
  );

  server.registerTool(
    "set_bid_amount",
    {
      title: "Set bid amount",
      description:
        "Write the dollar figure on a bid. This is the only tool that can. Requires BOTH " +
        "an explicit `amount` AND `confirm: true` — a call with an amount but no confirm " +
        "previews the existing figure against the proposed one and writes nothing, and a " +
        "call with no amount is rejected outright. Use the number Sue gives you, not one " +
        "you inferred. Writes the amount and nothing else: it cannot mark a bid as sent " +
        "or email it, which stays a deliberate act in the admin UI.",
      inputSchema: setBidAmountInput,
    },
    async (args) => asToolResult(await setBidAmount(args, createServiceSupabaseClient())),
  );
}
