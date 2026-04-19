import type { Metadata } from "next";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "What to Expect During a Wood Refinishing Project | Sue Wheeler Wood Refinishing",
  description:
    "What Sue does on the first visit, how the work is staged, what disruption actually looks like, and what you get at the end. No surprises.",
  openGraph: {
    title: "What to Expect During a Wood Refinishing Project",
    description:
      "What Sue does on the first visit, how the work is staged, what disruption actually looks like, and what you get at the end. No surprises.",
    url: "https://suewheelerstl.com/blog/what-to-expect-wood-refinishing-project",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to Expect During a Wood Refinishing Project",
  description:
    "What Sue does on the first visit, how the work is staged, what disruption actually looks like, and what you get at the end. No surprises.",
  url: "https://suewheelerstl.com/blog/what-to-expect-wood-refinishing-project",
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
    question: "Do I need to leave my home during the project?",
    answer:
      "For most projects, no. The work area is contained and the rest of the house is accessible throughout. For households with children under 6 or pregnant women, staying out of the immediate work area during active stripping is recommended as an additional precaution — not a requirement, but the right call for those households.",
  },
  {
    question: "How do I prepare for a refinishing project?",
    answer:
      "Move fragile items away from the work area before the start date. For kitchen cabinet work, clear the shelves immediately behind the doors that are being removed. For staircase work, clear any décor from the stair area. Sue will tell you specifically what to move and what to expect at the estimate — there is no guesswork on your end.",
  },
  {
    question: "What happens if something goes wrong?",
    answer:
      "In 36 years, most things that can go wrong on a refinishing project have come up at some point. Hidden damage under old paint, finish adhesion that behaves unexpectedly, wood movement after stripping — these are real situations that get addressed as part of the work. If there is an unexpected issue that changes the scope or the approach, Sue will tell you what it is and what the options are before proceeding. There are no surprises on the invoice that were not discussed first.",
  },
];

export default function WhatToExpectWoodRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "What to Expect During a Wood Refinishing Project",
            url: "https://suewheelerstl.com/blog/what-to-expect-wood-refinishing-project",
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
            What to expect during a <em>wood refinishing project</em>
          </h1>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed max-w-2xl">
            Most homeowners have never hired a wood refinisher before. They have
            questions about disruption, timeline, chemicals, and what the
            finished result actually looks and feels like. This is what a Sue
            Wheeler project looks like from start to finish — no vague promises,
            no surprises.
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
            Step One
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            The estimate
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Sue looks at every job herself before quoting. She is not sending a
            salesperson. She will look at the existing finish condition,
            identify whether lead paint is present or likely given the home's
            age, assess any structural issues with the wood, and tell you
            specifically what the work involves. If a full refinish is
            indicated, she will say why. If the existing finish is sound enough
            that a lighter maintenance approach is the right call, she will say
            that instead.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            If the job is not something she recommends — if the wood is
            genuinely past refinishing, or if the scope does not match what the
            homeowner actually wants — she will say so at the estimate. That
            conversation costs nothing. The goal is an accurate recommendation,
            not a signed contract.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            The estimate conversation is also where timeline and staging get
            discussed in specific terms for your project — not general ranges
            from a website.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Before Work Begins
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What happens before the first day of work
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            For interior work, fragile items near the work area get moved. For
            kitchen cabinet projects, the shelves behind the doors being removed
            need to be cleared. For staircase work, decorative items on or near
            the stairs come down. Sue will tell you exactly what is needed when
            she does the estimate.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            For pre-1978 homes, the work area will be set up in compliance with
            EPA RRP requirements before stripping begins. This means plastic
            sheeting containing the work area, HVAC vents sealed to prevent dust
            migration, and proper signage. This is not optional and it is not
            excessive caution — it is the correct way to work on surfaces that
            likely contain lead paint, which most pre-1978 woodwork does.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            The containment setup takes time at the beginning and end of the
            project. That time is built into the estimate and the timeline.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            The Work Itself: Stripping
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            During the work — stripping
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            For jobs requiring a full refinish, stripping is the first phase.
            Chemical stripper is applied, allowed to work, and then removed by
            hand. No dip tanks. Dip tanks — a method used by some shops where
            the entire piece is submerged in a caustic bath — destroy the glue
            joints in raised panel doors and spindles, raise the grain, and make
            proper finishing nearly impossible afterward. The damage from a dip
            tank is not always visible right away, but it shows up.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Hand stripping is slower. It is also controlled. The stripper gets
            applied where it needs to go, worked in at the right pace, and
            removed without aggressive methods that would damage the wood
            profile. On carved newel posts, spindles, and raised panel doors,
            this is the only approach that preserves the original detail.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            The work area is contained during stripping. Ventilation is managed.
            For lead paint work specifically, wet methods replace dry sanding
            throughout — slower, but the correct approach for surfaces with lead
            present.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            The Work Itself: Finishing
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            During the work — finishing
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            After stripping and any repairs to the wood, the surface is sanded
            and prepared for finish. If the color is changing, stain goes on at
            this point — applied evenly, allowed to penetrate, wiped back. Then
            the first coat of finish goes on.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Multiple finish coats follow, with proper cure time between each
            one. This is not a detail — it is the difference between a finish
            that holds up and one that fails early. Applying a new coat before
            the previous one has cured traps solvents and compromises adhesion
            between coats. The coats go on when the wood and the previous coat
            are ready, not on a fixed-day schedule that ignores conditions.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            Between coats, the surface is lightly sanded or abraded to level any
            raised grain and prepare adhesion for the next coat. The final coat
            is not sanded — it is the finished surface, applied to create the
            correct sheen and texture for the specification.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Staging and Access
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What you can use — and what you cannot — during the project
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-8">
            Different types of projects have different disruption profiles. Here
            is what each one looks like.
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
                Doors
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                Exterior doors typically go to the shop for refinishing and come
                back installed when finished. The opening is secured during that
                time. The turnaround depends on stripping complexity and weather
                conditions — exterior finish requires appropriate drying
                conditions to cure correctly.
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
                Staircases
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                Work is staged to minimize disruption. For a single staircase,
                the goal is to have the staircase passable within a day or two
                of the final coat — not fully cured, but usable with care. Full
                cure takes longer. Careful foot traffic can resume relatively
                quickly; heavy traffic and furniture moving wait until the
                finish is fully hardened.
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
                Kitchen cabinets
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                Doors and drawer fronts come off and go to the shop. The cabinet
                boxes stay in place. The kitchen remains accessible throughout
                the project — the shelves are open, the sink and appliances
                work, you can use the kitchen. The doors come back finished and
                are rehung when the finish has cured appropriately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            The Result
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What the finished result looks and feels like
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Fresh finish is smooth, consistent in sheen, and correct. The grain
            reads clearly through the finish film. The color is even across the
            surface. There are no witness marks from the stripping phase, no lap
            marks in the finish coats, no uneven sheen from rushed cure times.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Old-growth wood under fresh finish has a visual depth that new wood
            does not have. The grain pattern in a century-old piece of
            quarter-sawn white oak or heart fir is not something contemporary
            material can replicate. The result should look like the piece was
            built this way — not like it was stripped and redone, not like it
            was painted over, not like it was recently renovated. Like it was
            always supposed to look like this.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            That is the standard the work is held to. If it does not meet it,
            the work is not done.
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
        heading="Ready to start?"
        subtext="Free estimate. Sue looks at every project herself before quoting — (314) 367-6054."
      />
    </>
  );
}
