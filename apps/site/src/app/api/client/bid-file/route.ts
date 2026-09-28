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
    .select("bid_file_url, client_token_expires_at")
    .eq("client_token", token)
    .single();

  if (!submission?.bid_file_url) {
    return NextResponse.json({ error: "No file attached" }, { status: 404 });
  }

  // `client_token` is a bearer credential with an expiry, and this route mints a
  // 30-minute signed URL to a private bucket from it. Its three siblings — the
  // portal page, client/reply and client/accept-bid — all check
  // `client_token_expires_at`; this one did not, so an expired link still handed
  // out the bid PDF. 410 Gone matches the siblings' convention.
  if (new Date(submission.client_token_expires_at) < new Date()) {
    return NextResponse.json(
      { error: "This link has expired" },
      { status: 410 },
    );
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
