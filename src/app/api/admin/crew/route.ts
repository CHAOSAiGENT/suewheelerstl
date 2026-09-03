import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { adminApiGuard } from "@/lib/auth/admin-guard";

export async function GET() {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  const guard = adminApiGuard(user);
  if (!guard.authorized) return guard.response;

  const supabase = createServiceSupabaseClient();
  const { data, error } = await supabase
    .from("crew_members")
    .select("*")
    .eq("active", true)
    .order("name");

  if (error) {
    return NextResponse.json(
      { error: "Failed to fetch crew" },
      { status: 500 },
    );
  }

  return NextResponse.json({ crew: data });
}

export async function POST(req: Request) {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  const guard = adminApiGuard(user);
  if (!guard.authorized) return guard.response;

  const { name } = await req.json();
  if (!name?.trim()) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }

  const supabase = createServiceSupabaseClient();
  const { data, error } = await supabase
    .from("crew_members")
    .insert({ name: name.trim() })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: "Insert failed" }, { status: 500 });
  }

  return NextResponse.json({ member: data }, { status: 201 });
}
