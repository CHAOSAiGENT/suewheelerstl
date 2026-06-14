import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";

export const dynamic = "force-dynamic";

/**
 * Form health check. Exercises the REAL submissions write path the contact form
 * uses (same table, same required columns) so it catches schema/env/DB failures
 * the public form would hit. Inserts a flagged test row, reads it back, deletes
 * it. Never emails or touches photo storage. Gated by MONITOR_SECRET.
 */
export async function POST(req: Request) {
  const secret = req.headers.get("x-monitor-secret");
  if (!process.env.MONITOR_SECRET || secret !== process.env.MONITOR_SECRET) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  const startedAt = Date.now();
  const supabase = createServiceSupabaseClient();

  // Mirror /api/contact's insert shape so DB/schema failures surface identically.
  const { data: inserted, error: insertError } = await supabase
    .from("submissions")
    .insert({
      name: "Form Monitor",
      phone: "(000) 000-0000",
      email: "monitor@suewheelerstl.com",
      address: null,
      zip: null,
      service_types: ["Other"],
      best_time: null,
      timeline: null,
      project_description: "Automated health check — safe to ignore.",
      referral: null,
      status: "to_bid",
      is_test: true,
    })
    .select("id")
    .single();

  if (insertError || !inserted) {
    return NextResponse.json(
      {
        ok: false,
        error: `insert: ${insertError?.message ?? "no row returned"}`,
      },
      { status: 500 },
    );
  }

  // Read back to prove the write is visible.
  const { error: readError } = await supabase
    .from("submissions")
    .select("id")
    .eq("id", inserted.id)
    .single();

  // Always attempt cleanup, even if the read failed.
  const { error: deleteError } = await supabase
    .from("submissions")
    .delete()
    .eq("id", inserted.id);

  if (readError) {
    return NextResponse.json(
      { ok: false, error: `read: ${readError.message}` },
      { status: 500 },
    );
  }

  if (deleteError) {
    // Non-fatal: the is_test admin filter hides the row. Log and still report ok.
    console.error(
      "[health] cleanup delete failed for",
      inserted.id,
      deleteError,
    );
  }

  return NextResponse.json({ ok: true, dbWriteMs: Date.now() - startedAt });
}
