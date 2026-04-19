import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "Perk Up & Protect: When Your Wood Doesn't Need Stripping — It Needs a Second Life | Sue Wheeler Wood Refinishing",
  description:
    "Most people think refinishing means a full strip. Sue Wheeler invented a third option — wet sand, color coat, and topcoat for finishes that are sound underneath. Faster, less invasive, and extends finish life 5–10 years.",
  openGraph: {
    title:
      "Perk Up & Protect: When Your Wood Doesn't Need Stripping — It Needs a Second Life",
    description:
      "Most people think refinishing means a full strip. Sue Wheeler invented a third option — wet sand, color coat, and topcoat for finishes that are sound underneath. Faster, less invasive, and extends finish life 5–10 years.",
    url: "https://suewheelerstl.com/blog/perk-up-and-protect",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Perk Up & Protect: When Your Wood Doesn't Need Stripping — It Needs a Second Life",
  description:
    "Most people think refinishing means a full strip. Sue Wheeler invented a third option — wet sand, color coat, and topcoat for finishes that are sound underneath. Faster, less invasive, and extends finish life 5–10 years.",
  url: "https://suewheelerstl.com/blog/perk-up-and-protect",
  datePublished: "2026-04-18",
  dateModified: "2026-04-18",
  author: {
    "@type": "Person",
    name: "Sue Wheeler",
    jobTitle: "Owner, Wood Refinishing by Sue Wheeler LLC",
  },
  publisher: {
    "@type": "Organization",
    name: "Wood Refinishing by Sue Wheeler, LLC",
    url: "https://suewheelerstl.com",
  },
  about: {
    "@type": "LocalBusiness",
    "@id": "https://suewheelerstl.com/#business",
  },
};

const faqItems = [
  {
    question:
      "How do I know if my wood finish qualifies for Perk Up & Protect?",
    answer:
      "The single most reliable indicator is whether bare wood is showing anywhere. If the finish is intact across the entire surface — no peeling, no flaking, no areas where you can see raw wood at wear points — the finish has likely not failed at the substrate level. Surface dulling, minor scratches, UV yellowing, and light color fading are all signs that the finish is aging, not failing. Those are exactly what Perk Up & Protect addresses. If you are unsure, a free estimate is the right next step. Sue will assess the piece in person and tell you straight which service it needs.",
  },
  {
    question: "Will Perk Up & Protect fix deep scratches?",
    answer:
      "Scratches that are entirely within the finish film — meaning they have not cut through to bare wood — can be addressed as part of the wet-sanding and topcoat process. Scratches that expose raw wood are a different problem. They break the seal between finish and substrate, and in that area the finish has already failed. Applying a new topcoat over exposed bare wood produces an uneven result and does not protect the wood properly. Pieces with significant scratched-through areas typically need a full Strip & Refinish for a lasting outcome.",
  },
  {
    question:
      "How much less does Perk Up & Protect cost compared to full refinishing?",
    answer:
      "Because the process skips stripping and substrate prep — the most labor-intensive part of a full refinish — Perk Up & Protect is meaningfully less expensive. The precise difference depends on the piece: for a set of kitchen cabinet doors, you might be looking at roughly 40–60% of the cost of a full strip-and-refinish. For architectural woodwork in place — a staircase railing, a built-in — the savings are similarly significant. The estimate is free and will give you a straight comparison if your piece could go either way.",
  },
  {
    question: "How long does Perk Up & Protect last?",
    answer:
      "Done correctly on a sound finish, the result typically extends the life of the existing finish by five to ten years. What you are adding is a fresh, properly bonded topcoat over a mechanically prepared surface — not a cosmetic overlay that will peel in a year. The longevity depends on where the piece is and how it is used. Kitchen cabinets that see daily handling will age faster than a built-in bookcase or a staircase railing. The key variable is that the existing finish must be sound when the work is done. If it is failing at the substrate level and Perk Up & Protect is applied anyway, the result will not hold — which is why Sue assesses every piece before committing to a method.",
  },
];

export default function PerkUpAndProtectBlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "Perk Up & Protect: When Your Wood Doesn't Need Stripping",
            url: "https://suewheelerstl.com/blog/perk-up-and-protect",
          },
        ]}
      />
      <FAQSchema items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article header */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            Wood Refinishing Guide
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl text-[#2A2421] mb-6 leading-tight"
          >
            Perk Up &amp; Protect: When Your Wood Doesn&rsquo;t Need Stripping
            &mdash; It Needs a Second Life
          </h1>
          <p className="text-base text-[#6B5E55] font-sans leading-relaxed mb-2">
            That&rsquo;s our term for a maintenance coat &mdash; a way to revive
            a sound finish without stripping it back to bare wood.
          </p>
          <p className="text-sm font-sans text-[#6B5E55]">
            By Sue Wheeler · April 2026 · 8 min read
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Lead paragraph */}
          <div className="border-l-4 border-[#11B2E8] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              The conventional understanding of wood refinishing runs something
              like this: if the wood looks bad, you strip it to bare wood and
              start over. That is either true or it is expensive overkill,
              depending entirely on what is actually wrong with the finish.
              There is a third option that most refinishers do not offer as a
              named service — and that option exists precisely because stripping
              sound wood is wasteful, disruptive, and unnecessary.
            </p>
          </div>

          {/* Section 1 — The Problem */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Problem
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Great woodwork that looks tired — but isn&rsquo;t actually failing
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Historic homes in St. Louis — in the Central West End, Lafayette
              Square, Compton Heights, Shaw, and Benton Park — were built with
              woodwork intended to last a century. Frequently, it has. The
              original fir doors, quarter-sawn oak staircases, and built-in
              hutches in a home from 1905 are still structurally excellent 120
              years later.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              What ages is the finish on top of the wood, not the wood itself.
              Over decades, finish film dulls and loses its sheen. UV exposure
              yellows and fades stain color, particularly on south- and
              west-facing surfaces. Daily handling creates a network of fine
              surface scratches that scatter light and produce a hazy, flat
              appearance. The woodwork stops looking like something to take
              pride in, even though nothing structural has changed.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Homeowners who call about this — and I hear it regularly —
              describe the problem in similar terms: the wood looks dull, dark,
              or just old. They assume the answer is a full strip and refinish.
              In many cases, it is not. What they are describing is finish
              fatigue: the surface film has aged out of performing its job, but
              the finish has not failed at the substrate level. The wood beneath
              is fine. The bond between finish and wood is intact.
            </p>

            <div className="bg-[#EBE6DE] border-l-4 border-[#A65D37] p-6 rounded-sm">
              <p className="font-sans font-semibold text-[#2A2421] mb-2">
                Finish fatigue versus finish failure
              </p>
              <p className="text-[#2A2421] font-sans leading-relaxed text-base">
                Finish fatigue is what happens when the film has aged without
                losing its adhesion to the substrate. The wood is protected; it
                just does not look like it is. Finish failure is a different
                condition entirely — peeling, lifting, alligatoring, or bare
                wood showing at wear points — where the bond between finish and
                wood has broken down. These two conditions look somewhat similar
                from across a room and require fundamentally different
                responses.
              </p>
            </div>
          </div>

          {/* Section 2 — What Perk Up & Protect Is */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Service
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What Perk Up &amp; Protect is — and how it works
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-8">
              Perk Up &amp; Protect is a three-step maintenance coat for wood
              with a sound existing finish. No stripping. No substrate prep. The
              process works at the surface of the existing finish — not below it
              — and adds a fresh, properly bonded topcoat that restores
              appearance and extends protective life.
            </p>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div
                  className="shrink-0 w-10 h-10 flex items-center justify-center text-white text-sm font-sans font-medium"
                  style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
                >
                  1
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 400,
                    }}
                    className="text-xl text-[#2A2421] mb-2"
                  >
                    Wet sand
                  </h3>
                  <p className="text-[#2A2421] font-sans leading-relaxed text-base">
                    The existing finish surface is lightly abraded using wet
                    sanding technique. This serves two purposes: it removes the
                    surface layer of dulling, oxidation, and fine scratches, and
                    it mechanically opens the old topcoat just enough for the
                    new coat to form a proper bond. The critical constraint is
                    that wet sanding never cuts through to bare wood. The
                    process stays entirely within the finish film.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div
                  className="shrink-0 w-10 h-10 flex items-center justify-center text-white text-sm font-sans font-medium"
                  style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
                >
                  2
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 400,
                    }}
                    className="text-xl text-[#2A2421] mb-2"
                  >
                    Color correction
                  </h3>
                  <p className="text-[#2A2421] font-sans leading-relaxed text-base">
                    Where UV fading or handling wear has shifted the stain color
                    — particularly at edges, high-contact areas, and surfaces
                    facing south — color is touched in before the topcoat goes
                    on. Not every piece needs this step. On pieces where the
                    color has held evenly, wet sanding alone is sufficient
                    preparation. The decision happens at the estimate, when I
                    can see the actual condition of the piece.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div
                  className="shrink-0 w-10 h-10 flex items-center justify-center text-white text-sm font-sans font-medium"
                  style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
                >
                  3
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 400,
                    }}
                    className="text-xl text-[#2A2421] mb-2"
                  >
                    New topcoat
                  </h3>
                  <p className="text-[#2A2421] font-sans leading-relaxed text-base">
                    Fresh polyurethane is applied over the prepared surface.
                    This is not a surface wash or a polish — it is a new finish
                    coat, properly bonded to a mechanically prepared substrate.
                    The dullness is gone. The haze is gone. The piece looks the
                    way wood is supposed to look in a well-maintained historic
                    home. And the existing finish — still sound, still
                    protecting the wood — gets another several years of working
                    life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 — When it's right vs. not */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Decision Criteria
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              When Perk Up &amp; Protect is the right call — and when it is not
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-8">
              This is the most important question, and it has a clear answer.
              The determining factor is whether the existing finish has failed
              at the substrate level. Everything else follows from that.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Right call */}
              <div
                className="p-6 border-l-4"
                style={{ backgroundColor: "#EBE6DE", borderColor: "#A65D37" }}
              >
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-lg text-[#2A2421] mb-4"
                >
                  Perk Up &amp; Protect is right when:
                </h3>
                <ul className="space-y-3 font-sans text-[#6B5E55] text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A65D37] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    The finish looks dull, hazy, or flat — but is intact across
                    the entire surface
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A65D37] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    UV fading or yellowing has shifted the stain color but not
                    broken the film
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A65D37] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    Surface scratches are present but confined to the topcoat —
                    no bare wood showing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A65D37] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    No peeling, flaking, or film separation anywhere on the
                    piece
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A65D37] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    No water damage that has penetrated through the finish into
                    the wood
                  </li>
                </ul>
              </div>

              {/* Wrong call */}
              <div
                className="p-6 border-l-4"
                style={{ backgroundColor: "#EBE6DE", borderColor: "#11B2E8" }}
              >
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-lg text-[#2A2421] mb-4"
                >
                  You need a full Strip &amp; Refinish when:
                </h3>
                <ul className="space-y-3 font-sans text-[#6B5E55] text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#11B2E8] shrink-0 mt-0.5">
                      &#8594;
                    </span>
                    Bare wood is exposed at wear points — the finish has been
                    worn through
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#11B2E8] shrink-0 mt-0.5">
                      &#8594;
                    </span>
                    Peeling or flaking is present — the bond between finish and
                    substrate has failed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#11B2E8] shrink-0 mt-0.5">
                      &#8594;
                    </span>
                    Alligatoring — a pattern of cracks resembling reptile scales
                    — indicates film failure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#11B2E8] shrink-0 mt-0.5">
                      &#8594;
                    </span>
                    Water damage has penetrated through the finish into the wood
                    grain
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#11B2E8] shrink-0 mt-0.5">
                      &#8594;
                    </span>
                    Previous paint layers have been applied over original stain
                    finish
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              The practical implication: applying a maintenance coat over a
              failing finish does not work. The new topcoat will not bond
              properly to a substrate that has already failed, and the
              underlying problems will continue to progress. Getting the
              diagnosis right before choosing a method is the whole job. That is
              what the free estimate is for.
            </p>
          </div>

          {/* Section 4 — Cost */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Cost &amp; Value
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What it costs versus full refinishing
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Stripping is the most labor-intensive part of any wood refinishing
              project. It involves chemical application, dwell time, mechanical
              removal with scrapers, neutralization, and careful sanding back to
              a clean substrate. On a full Strip &amp; Refinish, that process
              can represent 50 to 60 percent of the total labor cost before any
              finish goes on.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Perk Up &amp; Protect skips stripping entirely. The labor is in
              the wet sanding, the color work where needed, and the topcoat
              application — all of which is less time-consuming than stripping a
              piece to bare wood. On a set of kitchen cabinet doors, the
              difference can be substantial: Perk Up &amp; Protect at 40 to 60
              percent of the cost of a full refinish is not an unusual outcome.
              For in-place architectural woodwork — staircase railings, built-in
              bookcases, door casings — the time saved in stripping translates
              directly into a lower project cost.
            </p>

            <div className="bg-[#2A2421] text-white rounded-sm p-8">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-2xl mb-5"
              >
                The important caveat on cost
              </h3>
              <p className="text-[#EBE6DE] font-sans leading-relaxed text-base mb-4">
                Perk Up &amp; Protect is only less expensive than full
                refinishing when it is the correct method for the piece. A
                maintenance coat applied to a failing finish is money spent on a
                result that will not hold — and the piece will still need to be
                stripped and done properly afterward. In that case, the
                homeowner has paid for both processes instead of one.
              </p>
              <p className="text-[#EBE6DE] font-sans leading-relaxed text-base">
                This is why the method determination happens before any work is
                quoted. The estimate is not just a number — it is an assessment.
                If Perk Up &amp; Protect is the right call, you get the lower
                cost. If the finish has failed and a full refinish is what the
                piece needs, that is what I will tell you, and why.
              </p>
            </div>
          </div>

          {/* Section 5 — Can and Cannot Fix */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              What It Fixes
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What Perk Up &amp; Protect can and cannot address
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-8">
              Being specific about this matters. The process works within a
              defined scope, and being clear about that scope is how you avoid
              disappointment on the back end.
            </p>

            <div className="space-y-4 mb-8">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-4"
                >
                  What it can fix
                </h3>
                <ul className="space-y-3 font-sans text-[#2A2421] leading-relaxed text-base">
                  <li className="flex gap-3">
                    <span className="text-[#A65D37] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>
                      <strong>Dulling and loss of sheen.</strong> The finish
                      film has oxidized and no longer reflects light cleanly.
                      Wet sanding removes that compromised surface layer and the
                      new topcoat restores sheen to the specified level.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A65D37] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>
                      <strong>Surface scratches within the topcoat.</strong>{" "}
                      Fine scratching that has not cut through to bare wood is
                      removed in the wet sanding step. The new coat starts on a
                      clean surface.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A65D37] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>
                      <strong>Color fading from UV exposure.</strong> Where
                      stain has lightened or shifted in tone from sun exposure,
                      color correction touches it back in before the topcoat
                      goes on.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A65D37] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>
                      <strong>UV yellowing in clear finishes.</strong> Topcoats
                      yellow over time, particularly on lighter woods. A fresh
                      coat restores clarity and corrects the color cast.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A65D37] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>
                      <strong>Haze from years of handling.</strong> On railings,
                      newel posts, and cabinet doors, the film hazes from
                      contact oils and abrasion over time. Wet sanding removes
                      that haze layer entirely.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-4"
                >
                  What it cannot fix
                </h3>
                <ul className="space-y-3 font-sans text-[#2A2421] leading-relaxed text-base">
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>
                      <strong>Peeling or lifting at the substrate.</strong> Once
                      the bond between finish and wood has failed, there is no
                      surface treatment that restores it. The failed finish must
                      be removed and the wood properly reprepped.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>
                      <strong>Alligatoring.</strong> A crazed or alligatored
                      finish has undergone film failure across its full depth.
                      The pattern of cracks indicates the finish has lost
                      flexibility and adhesion. Topcoating over it produces a
                      result that continues to crack.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>
                      <strong>Water damage that has reached the wood.</strong>{" "}
                      Water rings and staining that have penetrated through the
                      finish into the wood fiber cannot be addressed without
                      opening the surface to the wood level. That requires
                      stripping.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>
                      <strong>Lifting grain from moisture damage.</strong> Where
                      water has caused the wood grain to raise and remain
                      raised, that is a substrate problem. Wet sanding and a new
                      topcoat will show the grain texture through the finish.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>
                      <strong>Paint over stain.</strong> If a previous owner
                      painted over original stained woodwork, the only path to
                      restoring the wood is a full strip — and, in older homes,
                      proper lead-safe procedures for removing that paint.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6 — Result */}
          <div>
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
              What you get: five to ten more years without the disruption
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              A full Strip &amp; Refinish on in-place woodwork is a significant
              undertaking. Pieces may need to be removed and brought to the
              shop. On pieces that are refinished in place, there is masking,
              containment, and drying time in a room that is out of service for
              the duration. On a kitchen cabinet project, the kitchen may be
              partially or fully out of service during the work. On a staircase,
              one flight at a time may need to be blocked off.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Perk Up &amp; Protect is considerably less disruptive. The process
              does not require stripping or substrate prep, which means shorter
              time on site and faster return to normal use. The finish dries and
              cures on the same timeline as any new topcoat, but the overall
              project takes fewer days than a full refinish.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              The outcome, done correctly on the right piece, is a finish that
              looks the way it should and has five to ten additional years of
              protective life. The wood — original old-growth fir, quarter-sawn
              oak, chestnut — continues to be protected by a finish that is now
              doing its job again. The disruption is minimal. The cost is a
              fraction of full refinishing. And the existing finish, which was
              still sound, continues to serve the wood it was built to protect.
            </p>

            <div className="bg-[#EBE6DE] border-l-4 border-[#A65D37] p-6 rounded-sm">
              <p className="font-sans font-semibold text-[#2A2421] mb-2">
                Why no other refinisher in St. Louis offers this as a named
                service
              </p>
              <p className="text-[#2A2421] font-sans leading-relaxed text-base">
                The method itself — wet sanding, color correction, topcoat — is
                not novel. What is unusual is treating it as a standalone
                service category with a clear scope, a defined set of qualifying
                conditions, and a formal assessment step before any work is
                committed. Most refinishers default to a full strip because it
                is the safe choice from a liability standpoint: strip to bare
                wood and everything that follows is predictable. Perk Up &amp;
                Protect requires knowing exactly what you are looking at when
                you assess the piece — and being willing to tell the homeowner
                the honest answer, even when the answer is that a full refinish
                is what the wood actually needs.
              </p>
            </div>
          </div>

          {/* Dark callout */}
          <div className="bg-[#2A2421] text-white rounded-sm p-8 text-center">
            <p
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-2xl mb-3"
            >
              36 years. Honest assessments. Every project.
            </p>
            <p className="font-sans text-[#9e9087] leading-relaxed text-base mb-6">
              Sue Wheeler has been refinishing the architectural woodwork of St.
              Louis historic homes since 1989. She will tell you which service
              your piece needs — and why. No upselling. No guessing from photos.
              Free estimate: (314) 367-6054.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </article>

      {/* FAQ section */}
      <section className="py-14 px-6 bg-[#EBE6DE]">
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
            Perk Up &amp; Protect: FAQ
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
        heading="Your woodwork deserves an honest assessment — not a default full strip."
        subtext="Free estimates. Sue will tell you straight: Perk Up & Protect or full Strip & Refinish. (314) 367-6054."
      />
    </>
  );
}
