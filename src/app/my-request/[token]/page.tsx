import { notFound } from "next/navigation";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import type { Message, Submission } from "@/lib/types";
import { STATUS_LABELS, STATUS_COLORS } from "@/lib/types";
import { ClientReplyForm } from "./ClientReplyForm";

interface Props {
  params: Promise<{ token: string }>;
}

export const metadata = {
  title: "My Estimate Request | Sue Wheeler Wood Refinishing",
  robots: { index: false },
};

export default async function MyRequestPage({ params }: Props) {
  const { token } = await params;
  const supabase = createServiceSupabaseClient();

  const { data: submission } = await supabase
    .from("submissions")
    .select()
    .eq("client_token", token)
    .single<Submission>();

  if (!submission) return notFound();

  const expired = new Date(submission.client_token_expires_at) < new Date();
  if (expired) {
    return (
      <main className="min-h-screen bg-[#EBE6DE] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <p className="font-serif text-2xl text-[#2A2421] mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            This link has expired.
          </p>
          <p className="text-sm font-sans text-[#6B5E55]">
            Call Sue directly at{" "}
            <a href="tel:3143676054" className="text-[#11B2E8]">(314) 367-6054</a>.
          </p>
        </div>
      </main>
    );
  }

  const { data: messages } = await supabase
    .from("messages")
    .select()
    .eq("submission_id", submission.id)
    .order("created_at", { ascending: true })
    .returns<Message[]>();

  // Generate signed URLs for photos
  const signedPhotos: string[] = [];
  for (const path of submission.photo_urls) {
    const { data } = await supabase.storage
      .from("submission-photos")
      .createSignedUrl(path, 60 * 60 * 24 * 7); // 7 days
    if (data?.signedUrl) signedPhotos.push(data.signedUrl);
  }

  const statusColor = STATUS_COLORS[submission.status];
  const statusLabel = STATUS_LABELS[submission.status];

  return (
    <main className="min-h-screen bg-[#EBE6DE] py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <a
            href="/"
            className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] hover:text-[#11B2E8] transition-colors"
          >
            ← suewheelerstl.com
          </a>
          <h1
            className="mt-4 text-3xl text-[#2A2421]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Your Estimate Request
          </h1>
          <p className="text-sm font-sans text-[#6B5E55] mt-1">
            {new Date(submission.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Status */}
        <div
          className="flex items-center gap-3 px-4 py-3 mb-6 bg-white border"
          style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
        >
          <span
            className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
            style={{ background: statusColor }}
          />
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55]">Status</p>
            <p className="text-sm font-sans font-medium text-[#2A2421]">{statusLabel}</p>
          </div>
        </div>

        {/* Submission summary */}
        <div
          className="bg-white border p-6 mb-6"
          style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
        >
          <h2
            className="text-lg text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Your Request
          </h2>
          <dl className="space-y-3 text-sm font-sans">
            <div className="flex gap-4">
              <dt className="text-[#6B5E55] w-32 shrink-0 font-semibold text-xs uppercase tracking-widest pt-0.5">Services</dt>
              <dd className="text-[#2A2421]">{submission.service_types.join(", ")}</dd>
            </div>
            {submission.timeline && (
              <div className="flex gap-4">
                <dt className="text-[#6B5E55] w-32 shrink-0 font-semibold text-xs uppercase tracking-widest pt-0.5">Timeline</dt>
                <dd className="text-[#2A2421]">{submission.timeline}</dd>
              </div>
            )}
            {submission.address && (
              <div className="flex gap-4">
                <dt className="text-[#6B5E55] w-32 shrink-0 font-semibold text-xs uppercase tracking-widest pt-0.5">Location</dt>
                <dd className="text-[#2A2421]">{submission.address}</dd>
              </div>
            )}
            <div className="flex gap-4">
              <dt className="text-[#6B5E55] w-32 shrink-0 font-semibold text-xs uppercase tracking-widest pt-0.5">Description</dt>
              <dd className="text-[#2A2421] whitespace-pre-wrap">{submission.project_description}</dd>
            </div>
          </dl>

          {signedPhotos.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[rgba(42,36,33,0.08)]">
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-3">
                Photos
              </p>
              <div className="grid grid-cols-3 gap-2">
                {signedPhotos.map((url, i) => (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={url}
                      alt={`Photo ${i + 1}`}
                      className="w-full aspect-square object-cover"
                      style={{ borderRadius: "2px" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Message thread */}
        <div
          className="bg-white border p-6 mb-6"
          style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
        >
          <h2
            className="text-lg text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Messages
          </h2>

          {(!messages || messages.length === 0) ? (
            <p className="text-sm font-sans text-[#9e9087] italic">
              No messages yet. Sue will be in touch within one business day.
            </p>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={[
                    "p-4",
                    msg.is_from_admin
                      ? "bg-[#EBF8FD] border-l-4 border-[#11B2E8]"
                      : "bg-[#F8F6F1] border-l-4 border-[rgba(42,36,33,0.15)]",
                  ].join(" ")}
                  style={{ borderRadius: "0 2px 2px 0" }}
                >
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-1.5">
                    {msg.is_from_admin ? "Sue Wheeler" : "You"} ·{" "}
                    {new Date(msg.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-sm font-sans text-[#2A2421] whitespace-pre-wrap leading-relaxed">
                    {msg.body}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-[rgba(42,36,33,0.08)]">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-3">
              Send a message
            </p>
            <ClientReplyForm token={token} />
          </div>
        </div>

        {/* Footer contact */}
        <p className="text-center text-xs font-sans text-[#6B5E55]">
          Need to reach Sue directly?{" "}
          <a href="tel:3143676054" className="text-[#11B2E8]">(314) 367-6054</a>
          {" "}· She answers personally.
        </p>
      </div>
    </main>
  );
}
