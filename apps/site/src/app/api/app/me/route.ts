/**
 * GET /api/app/me — who am I, and what may I call?
 *
 * A client renders its capability set from this rather than hardcoding a tool
 * list, so adding or removing a tool server-side does not require shipping a new
 * desktop build. That is the same reasoning as proxying the model key: anything
 * that can change should change by deploying the website.
 *
 * Returns nothing but the verified email and the tool names. Deliberately NOT
 * the allowlist, the env, or anything else about the account — a client needs to
 * know what it can do, not who else can do it.
 */

import { NextResponse } from "next/server";
import { TOOL_NAMES } from "@suewheelerstl/contract";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { authorizeAppRequest } from "@/lib/app-api/auth";

export const runtime = "nodejs";

export async function GET(request: Request): Promise<Response> {
  const auth = await authorizeAppRequest(request, createServerSupabaseClient);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }
  return NextResponse.json({ email: auth.email, tools: TOOL_NAMES });
}
