import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { SubmissionNote } from "@/lib/types";

interface Params {
  params: Promise<{ id: string }>;
}

export async function POST(req: Request, { params }: Params) {
  const { id } = await params;

  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { body: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const noteBody = body.body?.trim();
  if (!noteBody) {
    return NextResponse.json({ error: "Note body required" }, { status: 400 });
  }

  const supabase = createServiceSupabaseClient();

  const { data: note, error: noteError } = await supabase
    .from("submission_notes")
    .insert({ submission_id: id, body: noteBody })
    .select()
    .single<SubmissionNote>();

  if (noteError || !note) {
    console.error("[notes POST]", noteError);
    return NextResponse.json({ error: "Failed to save note" }, { status: 500 });
  }

  // Keep admin_notes on submission in sync for Kanban card preview
  await supabase
    .from("submissions")
    .update({ admin_notes: noteBody })
    .eq("id", id);

  return NextResponse.json(note, { status: 201 });
}
