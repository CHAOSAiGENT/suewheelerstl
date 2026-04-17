import { notFound } from "next/navigation";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import type {
  Message,
  Submission,
  CrewMember,
  SubmissionNote,
} from "@/lib/types";
import { STATUS_LABELS, STATUS_COLORS } from "@/lib/types";
import { AdminReplyForm } from "./AdminReplyForm";
import { StatusUpdater } from "./StatusUpdater";
import { NotesPanel } from "./NotesPanel";
import { AdminPhotoUpload } from "./AdminPhotoUpload";
import { AdminBidForm } from "./AdminBidForm";
import { CrewAssigner } from "../CrewAssigner";
import { ProjectFieldsForm } from "./ProjectFieldsForm";

interface Props {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export default async function AdminSubmissionPage({ params }: Props) {
  const { id } = await params;
  const supabase = createServiceSupabaseClient();

  const { data: submission } = await supabase
    .from("submissions")
    .select()
    .eq("id", id)
    .single<Submission>();

  if (!submission) return notFound();

  const { data: messages } = await supabase
    .from("messages")
    .select()
    .eq("submission_id", id)
    .order("created_at", { ascending: true })
    .returns<Message[]>();

  const { data: crewMembers } = await supabase
    .from("crew_members")
    .select()
    .eq("active", true)
    .order("name", { ascending: true })
    .returns<CrewMember[]>();

  const { data: submissionNotes } = await supabase
    .from("submission_notes")
    .select()
    .eq("submission_id", id)
    .order("created_at", { ascending: false })
    .returns<SubmissionNote[]>();

  // Signed photo URLs
  const signedPhotos: string[] = [];
  for (const path of submission.photo_urls) {
    const { data } = await supabase.storage
      .from("submission-photos")
      .createSignedUrl(path, 60 * 60 * 24 * 7);
    if (data?.signedUrl) signedPhotos.push(data.signedUrl);
  }

  const portalUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com"}/my-request/${submission.client_token}`;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back */}
      <a
        href="/admin"
        className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] hover:text-[#11B2E8] transition-colors"
      >
        ← All Requests
      </a>

      {/* Header */}
      <div className="mt-6 mb-8 flex items-start justify-between gap-4">
        <div>
          <h1
            className="text-3xl text-[#2A2421]"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            {submission.name}
          </h1>
          <p className="text-sm font-sans text-[#6B5E55] mt-1">
            {new Date(submission.created_at).toLocaleString("en-US", {
              timeZone: "America/Chicago",
              dateStyle: "full",
              timeStyle: "short",
            })}{" "}
            CT
          </p>
        </div>
        <StatusUpdater
          submissionId={submission.id}
          currentStatus={submission.status}
        />
      </div>

      {/* Contact info */}
      <div
        className="bg-white border p-6 mb-4"
        style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
      >
        <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-4">
          Contact
        </h2>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-sans">
          <div>
            <dt className="text-[#9e9087] text-xs mb-0.5">Phone</dt>
            <dd>
              <a
                href={`tel:${submission.phone.replace(/\D/g, "")}`}
                className="text-[#11B2E8]"
              >
                {submission.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[#9e9087] text-xs mb-0.5">Email</dt>
            <dd>
              <a
                href={`mailto:${submission.email}`}
                className="text-[#11B2E8] break-all"
              >
                {submission.email}
              </a>
            </dd>
          </div>
          {submission.address && (
            <div>
              <dt className="text-[#9e9087] text-xs mb-0.5">Location</dt>
              <dd className="text-[#2A2421]">{submission.address}</dd>
            </div>
          )}
          {submission.best_time && (
            <div>
              <dt className="text-[#9e9087] text-xs mb-0.5">
                Best time to call
              </dt>
              <dd className="text-[#2A2421] capitalize">
                {submission.best_time}
              </dd>
            </div>
          )}
          {submission.referral && (
            <div>
              <dt className="text-[#9e9087] text-xs mb-0.5">How they heard</dt>
              <dd className="text-[#2A2421]">{submission.referral}</dd>
            </div>
          )}
          <div className="col-span-2">
            <dt className="text-[#9e9087] text-xs mb-0.5">Client portal</dt>
            <dd>
              <a
                href={portalUrl}
                target="_blank"
                className="text-[#11B2E8] text-xs break-all"
              >
                {portalUrl}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      {/* Project details */}
      <div
        className="bg-white border p-6 mb-4"
        style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
      >
        <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-4">
          Project
        </h2>
        <dl className="space-y-3 text-sm font-sans">
          <div className="flex gap-4">
            <dt className="text-[#9e9087] w-28 shrink-0 text-xs pt-0.5">
              Services
            </dt>
            <dd className="text-[#2A2421]">
              {submission.service_types.join(", ")}
            </dd>
          </div>
          {submission.timeline && (
            <div className="flex gap-4">
              <dt className="text-[#9e9087] w-28 shrink-0 text-xs pt-0.5">
                Timeline
              </dt>
              <dd className="text-[#2A2421]">{submission.timeline}</dd>
            </div>
          )}
          <div className="flex gap-4">
            <dt className="text-[#9e9087] w-28 shrink-0 text-xs pt-0.5">
              Description
            </dt>
            <dd className="text-[#2A2421] whitespace-pre-wrap leading-relaxed">
              {submission.project_description}
            </dd>
          </div>
        </dl>

        {signedPhotos.length > 0 && (
          <div className="mt-5 pt-5 border-t border-[rgba(42,36,33,0.08)]">
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
        <AdminPhotoUpload submissionId={submission.id} />

        <div className="mt-5 pt-5 border-t border-[rgba(42,36,33,0.08)]">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-3">
            Crew Assignment
          </p>
          <CrewAssigner
            submissionId={submission.id}
            allCrew={crewMembers || []}
            initialAssigned={submission.crew_member_ids}
          />
        </div>

        <div className="mt-5 pt-5 border-t border-[rgba(42,36,33,0.08)]">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-3">
            Completion Status
          </p>
          <ProjectFieldsForm
            submissionId={submission.id}
            initialStartDate={submission.bid_start_date}
            initialAfterPhotos={submission.after_photos_uploaded}
            initialFinalPayment={submission.final_payment_confirmed}
          />
        </div>
      </div>

      {/* Estimate / Bid */}
      <div
        className="bg-white border p-6 mb-4"
        style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55]">
            Estimate
          </h2>
          <a
            href={`/admin/${submission.id}/bid-builder`}
            className="px-3 py-1.5 text-xs font-sans font-semibold uppercase tracking-wider bg-[#11B2E8] text-white border border-[#11B2E8] transition-colors hover:bg-[#0A9FD9]"
            style={{ borderRadius: "2px" }}
          >
            Build Estimate
          </a>
        </div>
        <AdminBidForm
          submissionId={submission.id}
          bidStatus={submission.bid_status}
          currentAmount={submission.bid_amount}
          currentNotes={submission.bid_notes}
        />
      </div>

      {/* Admin notes */}
      <div
        className="bg-white border p-6 mb-4"
        style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
      >
        <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-1">
          Private Notes
        </h2>
        <p className="text-xs font-sans text-[#9e9087] mb-3">
          Not visible to the client. Most recent shows on Kanban card.
        </p>
        <NotesPanel
          submissionId={submission.id}
          initialNotes={submissionNotes ?? []}
        />
      </div>

      {/* Message thread */}
      <div
        className="bg-white border p-6"
        style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
      >
        <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-4">
          Messages
          <span className="ml-2 normal-case font-normal tracking-normal text-[#9e9087]">
            — visible to client at their portal link
          </span>
        </h2>

        {!messages || messages.length === 0 ? (
          <p className="text-sm font-sans text-[#9e9087] italic mb-6">
            No messages yet.
          </p>
        ) : (
          <div className="space-y-3 mb-6">
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
                  {msg.is_from_admin ? "You (Sue)" : submission.name} ·{" "}
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

        <div className="border-t border-[rgba(42,36,33,0.08)] pt-5">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-3">
            Reply to {submission.name}
          </p>
          <AdminReplyForm submissionId={submission.id} />
        </div>
      </div>
    </div>
  );
}

// Status chip showing current status
function StatusChip({ status }: { status: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-semibold uppercase tracking-widest"
      style={{
        borderRadius: "2px",
        background: "white",
        border: `1px solid ${STATUS_COLORS[status as keyof typeof STATUS_COLORS]}`,
        color: STATUS_COLORS[status as keyof typeof STATUS_COLORS],
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{
          background: STATUS_COLORS[status as keyof typeof STATUS_COLORS],
        }}
      />
      {STATUS_LABELS[status as keyof typeof STATUS_LABELS]}
    </span>
  );
}
