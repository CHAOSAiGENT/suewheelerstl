import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";

// Allowlist of safe image content types
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/heic",
  "image/heif",
]);

// Map content type to file extension
const EXT_MAP: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/heic": "heic",
  "image/heif": "heif",
};

export async function POST(req: Request) {
  let body: { contentType: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { contentType } = body;
  if (!contentType) {
    return NextResponse.json(
      { error: "contentType required" },
      { status: 400 },
    );
  }

  // Validate content type against allowlist
  if (!ALLOWED_TYPES.has(contentType)) {
    return NextResponse.json(
      { error: "Invalid content type. Only image formats are allowed." },
      { status: 415 },
    );
  }

  const ext = EXT_MAP[contentType];
  const path = `uploads/${crypto.randomUUID()}.${ext}`;

  const supabase = createServiceSupabaseClient();
  const { data, error } = await supabase.storage
    .from("submission-photos")
    .createSignedUploadUrl(path);

  if (error || !data) {
    console.error("[upload-url]", error);
    return NextResponse.json(
      { error: "Could not generate upload URL" },
      { status: 500 },
    );
  }

  return NextResponse.json({ path, signedUrl: data.signedUrl });
}
