import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { adminApiGuard } from "@/lib/auth/admin-guard";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  const guard = adminApiGuard(user);
  if (!guard.authorized) return guard.response;

  const { id } = await params;

  const supabase = createServiceSupabaseClient();
  const { data: existing } = await supabase
    .from("bid_blocks")
    .select("id")
    .eq("id", id)
    .single();
  if (!existing)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  const body = await req.json();
  const update: Record<string, unknown> = {};

  if (body.title !== undefined) update.title = body.title;
  if (body.body !== undefined) update.body = body.body;
  if (body.sort_order !== undefined) update.sort_order = body.sort_order;
  if (body.photo_paths !== undefined) update.photo_paths = body.photo_paths;

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("bid_blocks")
    .update(update)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }

  return NextResponse.json({ block: data });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  const guard = adminApiGuard(user);
  if (!guard.authorized) return guard.response;

  const { id } = await params;
  const supabase = createServiceSupabaseClient();
  const { data: existing } = await supabase
    .from("bid_blocks")
    .select("id")
    .eq("id", id)
    .single();
  if (!existing)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { error } = await supabase.from("bid_blocks").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
