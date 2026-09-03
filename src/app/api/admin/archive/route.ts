import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { adminApiGuard } from "@/lib/auth/admin-guard";

export async function POST() {
  const supabaseAuth = await createServerSupabaseClient();
  const { data: { user } } = await supabaseAuth.auth.getUser();
  const guard = adminApiGuard(user);
  if (!guard.authorized) return guard.response;

  const supabase = createServiceSupabaseClient();
  const cutoff = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from("submissions")
    .update({ archived_at: new Date().toISOString() })
    .in("status", ["fully_complete", "lost"])
    .lt("updated_at", cutoff)
    .is("archived_at", null)
    .select("id");

  if (error) return NextResponse.json({ error: "Archive failed" }, { status: 500 });
  return NextResponse.json({ count: data?.length ?? 0 });
}
