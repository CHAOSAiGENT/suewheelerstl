import { createServiceSupabaseClient } from "@/lib/supabase/service";
import type { Submission } from "@/lib/types";
import { STATUS_LABELS, STATUS_COLORS } from "@/lib/types";

export const metadata = {
  title: "Estimate Requests — Admin",
  robots: { index: false },
};

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const supabase = createServiceSupabaseClient();
  const { data: submissions } = await supabase
    .from("submissions")
    .select()
    .order("created_at", { ascending: false })
    .returns<Submission[]>();

  const counts = (submissions ?? []).reduce(
    (acc, s) => {
      acc[s.status] = (acc[s.status] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1
            className="text-3xl text-[#2A2421]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Estimate Requests
          </h1>
          <p className="text-sm font-sans text-[#6B5E55] mt-1">
            {submissions?.length ?? 0} total
          </p>
        </div>
        {/* Status summary chips */}
        <div className="hidden sm:flex flex-wrap gap-2">
          {Object.entries(STATUS_LABELS).map(([key, label]) => (
            <span
              key={key}
              className="px-3 py-1 text-xs font-sans font-semibold uppercase tracking-widest bg-white border"
              style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.12)", color: counts[key] ? STATUS_COLORS[key as keyof typeof STATUS_COLORS] : "#9e9087" }}
            >
              {label} {counts[key] ? `· ${counts[key]}` : ""}
            </span>
          ))}
        </div>
      </div>

      {!submissions || submissions.length === 0 ? (
        <div
          className="bg-white border p-12 text-center"
          style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
        >
          <p className="font-serif italic text-xl text-[#6B5E55]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            No requests yet.
          </p>
          <p className="text-sm font-sans text-[#9e9087] mt-2">
            They&apos;ll show up here when the contact form is submitted.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {submissions.map((sub) => (
            <a
              key={sub.id}
              href={`/admin/${sub.id}`}
              className="flex items-center gap-4 bg-white border px-5 py-4 hover:border-[#11B2E8] transition-colors group"
              style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
            >
              {/* Status dot */}
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: STATUS_COLORS[sub.status] }}
              />

              {/* Name + services */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-sans font-semibold text-[#2A2421] group-hover:text-[#11B2E8] transition-colors">
                  {sub.name}
                </p>
                <p className="text-xs font-sans text-[#6B5E55] truncate">
                  {sub.service_types.join(", ")}
                  {sub.address ? ` · ${sub.address}` : ""}
                </p>
              </div>

              {/* Status label */}
              <span
                className="hidden sm:inline text-xs font-sans font-semibold uppercase tracking-widest shrink-0"
                style={{ color: STATUS_COLORS[sub.status] }}
              >
                {STATUS_LABELS[sub.status]}
              </span>

              {/* Date */}
              <span className="text-xs font-sans text-[#9e9087] shrink-0">
                {new Date(sub.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>

              <span className="text-[#9e9087] group-hover:text-[#11B2E8] transition-colors">›</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
