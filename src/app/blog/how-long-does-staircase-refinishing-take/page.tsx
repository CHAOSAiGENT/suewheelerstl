import type { Metadata } from "next";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "How Long Does Staircase Refinishing Take? | Sue Wheeler Wood Refinishing",
  description:
    "Timeline depends on scope, component count, and whether lead paint is involved. Here is what drives the schedule and what to expect during the project.",
  openGraph: {
    title: "How Long Does Staircase Refinishing Take?",
    description:
      "Timeline depends on scope, component count, and whether lead paint is involved. Here is what drives the schedule and what to expect during the project.",
    url: "https://suewheelerstl.com/blog/how-long-does-staircase-refinishing-take",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Long Does Staircase Refinishing Take?",
  description:
    "Timeline depends on scope, component count, and whether lead paint is involved. Here is what drives the schedule and what to expect during the project.",
  url: "https://suewheelerstl.com/blog/how-long-does-staircase-refinishing-take",
  datePublished: "2026-04-19",
  dateModified: "2026-04-19",
  author: {
    "@type": "Person",
    name: "Sue Wheeler",
    jobTitle: "Owner",
  },
  publisher: {
    "@type": "Organization",
    name: "Wood Refinishing by Sue Wheeler LLC",
    url: "https://suewheelerstl.com",
  },
};

const faqItems = [
  {
    question: "Can you do just the treads and leave the spindles?",
    answer:
      "Yes. Partial refinishing makes sense when the treads are the primary problem and the spindles are in acceptable condition. Sue will tell you honestly at the estimate whether the result will look cohesive or whether the untouched components will look noticeably worse by comparison after the treads are fresh. Sometimes partial work is exactly right. Sometimes it creates a contrast that makes the untouched parts look worse than before.",
  },
  {
    question: "Do I need to leave my home during the project?",
    answer:
      "For most projects, no. The work area is contained and the rest of the house remains accessible. For households with children under 6 or pregnant women, Sue recommends temporarily staying out of the immediate staircase area during active stripping work as an additional precaution — not because it is required, but because it is the right call for those households.",
  },
  {
    question:
      "My staircase has ornate carved newel posts — does that affect timeline?",
    answer:
      "Yes. Carved details require full hand-stripping. There is no tool that can get into carved relief without damaging the profile — it has to be done by hand, with patience, working into every recess. This takes longer than stripping a flat surface. The timeline is longer, but that time is what preserves the original detail that makes the piece worth refinishing in the first place.",
  },
];

export default function HowLongStaircaseRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "How Long Does Staircase Refinishing Take?",
            url: "https://suewheelerstl.com/blog/how-long-does-staircase-refinishing-take",
          },
        ]}
      />
      <FAQSchema items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-4">
            Wood Refinishing
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl text-[#2A2421] mb-6 leading-tight"
          >
            How long does <em>staircase refinishing</em> take?
          </h1>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed max-w-2xl">
            The honest answer is: it depends on scope. A full staircase with
            treads, risers, spindles, newel post, and railings is a different
            project than treads-only. Both are worth doing. The timeline is just
            different — and it is driven by specific variables worth
            understanding before the work starts.
          </p>
          <p className="text-sm font-sans text-[#6B5E55] mt-4">
            By Sue Wheeler · April 2026 · 5 min read
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            The Variables
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What drives staircase refinishing timelines
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-8">
            Four things determine how long a staircase project takes. Every
            project involves some combination of these factors, and the estimate
            reflects all of them.
          </p>
          <div className="space-y-4">
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6 flex gap-4">
              <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                01
              </span>
              <div>
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Number of components
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Treads and risers only is a focused project. Add spindles, a
                  newel post, and railings, and the scope multiplies. Each
                  component is stripped and finished separately. The total count
                  of surfaces drives the base timeline more than anything else.
                </p>
              </div>
            </div>
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6 flex gap-4">
              <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                02
              </span>
              <div>
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Spindle count
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Each spindle is turned individually and stripped by hand.
                  There are no shortcuts for spindles — no tool reaches into the
                  turned profile without damaging it. A full spindle set on a
                  typical St. Louis Victorian staircase can mean 30 to 60
                  individual pieces, each requiring patient hand work. This is
                  the single biggest timeline variable on most historic
                  staircases.
                </p>
              </div>
            </div>
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6 flex gap-4">
              <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                03
              </span>
              <div>
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Lead paint
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Pre-1978 homes require EPA RRP compliance. This adds
                  containment setup and teardown at the beginning and end of the
                  project, and replaces faster but dustier methods with
                  wet-sanding and HEPA cleanup procedures throughout. The work
                  takes longer — and that longer timeline is the correct way to
                  do it on these surfaces.
                </p>
              </div>
            </div>
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6 flex gap-4">
              <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                04
              </span>
              <div>
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Condition of the existing finish
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Thick paint build-up — five or six layers accumulated over a
                  century — takes significantly longer to strip than a degraded
                  clear finish on the same surface. The more material that is on
                  the wood, the more time the stripping phase takes. This cannot
                  be assessed accurately without seeing the piece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Component by Component
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            How each staircase component affects the schedule
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-8">
            Not all staircase components take the same amount of time. Here is
            what each one involves.
          </p>
          <div className="space-y-4">
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-3"
              >
                Treads and risers
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                Treads and risers are relatively flat, accessible surfaces. They
                are the fastest components to strip and finish. On a typical
                single flight, treads and risers can often be addressed in one
                to two days of stripping time. They are usually done in sequence
                to minimize disruption to staircase access.
              </p>
            </div>
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-3"
              >
                Spindles
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                Spindles are the slowest component on almost every staircase
                project. Each one is hand-stripped individually, working into
                the turned profiles with small tools and patience. A full
                spindle set on a Victorian staircase — often 40 to 60 pieces
                depending on the house — can take several days of stripping work
                on its own, separate from everything else. There is no faster
                method that does not damage the profile. The time is the work.
              </p>
            </div>
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-3"
              >
                Newel posts
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                Carved newel posts require the same patient hand work as
                spindles, across a larger and more complex surface. The carved
                details — cap profiles, panel moldings, base details — must be
                stripped by hand to avoid damaging the original profile. Rushing
                this work costs the homeowner the detail that makes the piece
                worth refinishing. The timeline for a carved newel post reflects
                the complexity of the original work.
              </p>
            </div>
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-3"
              >
                Railings
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                Railings are relatively fast compared to spindles and newel
                posts. The profile is consistent and the surface is accessible.
                They require careful masking during finish application to get
                clean edges where they meet the spindles and newel, but
                stripping and finishing railings does not typically drive the
                project timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Realistic Timelines
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What the schedule looks like in practice
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            A full staircase refinishing project — treads, risers, spindles,
            newel post, and railings — typically runs two to four weeks from
            start to completion. That range accounts for stripping, any repairs
            to the wood, stain application if the color is changing, and
            multiple finish coats with proper cure time between each coat.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Cure time between coats is not a scheduling luxury. It is what makes
            the finish work. Applying a second coat before the first has cured
            traps solvents and ruins adhesion. The coats go on when the previous
            coat is ready — not on a fixed calendar. Good weather, good
            ventilation, and appropriate drying time between coats are all part
            of the process.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Partial projects narrow the timeline considerably. Treads and risers
            only, with no spindle work, can typically be completed in a week or
            less depending on condition and lead paint status. If you have a
            specific deadline — a family event, a sale, a renovation phase —
            tell Sue at the estimate and she will tell you honestly what is
            achievable.
          </p>
          <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-5 rounded-sm">
            <p className="font-sans text-[#2A2421] leading-relaxed text-sm">
              <strong>The realistic summary:</strong> Full staircase with all
              components, 2–4 weeks. Treads and risers only, 1 week or less.
              Spindle-heavy projects trend toward the longer end of the full
              staircase range. Projects with significant lead paint build-up add
              time at both ends for containment and compliance procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Living With It
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What disruption actually looks like
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            For homes with a single staircase, the staircase being unavailable
            during work is a real constraint. Sue stages the work so the
            staircase is passable within a day or two of the final finish coat —
            not fully cured, but accessible with care. Full cure takes longer,
            and foot traffic on a freshly finished stair tread should be
            deliberate and careful in the first week.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Homes with a secondary staircase have more flexibility. The staging
            can prioritize thoroughness over speed when access is not the
            constraint.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            The disruption conversation happens at the estimate — specifically,
            not generally. Sue will tell you what the staging plan looks like
            for your staircase and your household before the work starts.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Lead Paint
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            Lead paint and what it means for the timeline
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Any home built before 1978 is assumed to have lead paint until
            proven otherwise. Pre-1940 homes almost certainly do. EPA RRP
            (Renovation, Repair, and Painting) compliance is not optional — it
            is a legal requirement, and it is also the right way to work on
            surfaces that contain lead.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            RRP compliance adds time at the beginning and end of the project:
            containment setup before work starts, and documented HEPA cleanup
            and teardown when it ends. During the work itself, wet methods
            replace dry sanding, which is slower but does not aerosolize lead
            dust the way dry sanding does. These procedures add days to the
            overall schedule.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            Sue is EPA Lead-Safe Certified. The timeline reflects this
            correctly. A contractor who quotes a faster timeline on a pre-1978
            staircase is either skipping compliance steps or has not found the
            lead paint yet.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-10"
          >
            Common questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6"
              >
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  {item.question}
                </h3>
                <p className="font-sans text-[#6B5E55] leading-relaxed text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        heading="Get a specific timeline for your staircase."
        subtext="Sue estimates every project in person. Free estimate — (314) 367-6054."
      />
    </>
  );
}
