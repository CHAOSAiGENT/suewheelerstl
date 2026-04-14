import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  if (!token)
    return NextResponse.json({ error: "Missing token" }, { status: 400 });

  const supabase = createServiceSupabaseClient();
  const { data: submission } = await supabase
    .from("submissions")
    .select("bid_file_url")
    .eq("client_token", token)
    .single();

  if (!submission?.bid_file_url) {
    return NextResponse.json({ error: "No file attached" }, { status: 404 });
  }

  const { data } = await supabase.storage
    .from("bid-files")
    .createSignedUrl(submission.bid_file_url, 60 * 30); // 30 min

  if (!data?.signedUrl) {
    return NextResponse.json(
      { error: "Could not generate link" },
      { status: 500 },
    );
  }

  return NextResponse.redirect(data.signedUrl);
}
