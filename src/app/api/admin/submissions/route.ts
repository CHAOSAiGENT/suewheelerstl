import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";

export async function POST(req: Request) {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Validate required fields
  const required = [
    "name",
    "phone",
    "email",
    "project_description",
    "service_types",
  ];
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 },
      );
    }
  }

  // Validate service_types is an array
  if (!Array.isArray(body.service_types)) {
    return NextResponse.json(
      { error: "service_types must be an array" },
      { status: 400 },
    );
  }

  const submission = {
    name: body.name,
    phone: body.phone,
    email: body.email,
    address: body.address || null,
    project_description: body.project_description,
    service_types: body.service_types,
    status: "to_bid" as const,
    created_at: new Date().toISOString(),
    bid_status: "none" as const,
    crew_member_ids: [],
    photo_urls: [],
    client_token: "",
    client_token_expires_at: "",
  };

  const supabase = createServiceSupabaseClient();
  const { data, error } = await supabase
    .from("submissions")
    .insert(submission)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: "Insert failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, submission: data }, { status: 201 });
}
