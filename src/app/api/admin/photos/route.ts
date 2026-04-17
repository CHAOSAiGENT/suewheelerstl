import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const submissionId = formData.get("submission_id") as string;
  const files = formData.getAll("photos") as File[];

  if (!submissionId || files.length === 0) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const supabase = createServiceSupabaseClient();

  const { data: submission } = await supabase
    .from("submissions")
    .select("photo_urls")
    .eq("id", submissionId)
    .single();

  if (!submission) {
    return NextResponse.json(
      { error: "Submission not found" },
      { status: 404 },
    );
  }

  const newPaths: string[] = [];
  for (const file of files) {
    if (!file || file.size === 0) continue;
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `submissions/${submissionId}/${crypto.randomUUID()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const { error } = await supabase.storage
      .from("submission-photos")
      .upload(path, buffer, {
        contentType: file.type || "image/jpeg",
        upsert: false,
      });
    if (!error) newPaths.push(path);
  }

  if (newPaths.length > 0) {
    await supabase
      .from("submissions")
      .update({ photo_urls: [...submission.photo_urls, ...newPaths] })
      .eq("id", submissionId);
  }

  return NextResponse.json({ ok: true, added: newPaths.length });
}
