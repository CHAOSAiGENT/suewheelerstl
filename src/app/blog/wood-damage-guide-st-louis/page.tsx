import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "What's Wrong With My Wood? A St. Louis Homeowner's Guide to Wood Finish Damage | Sue Wheeler Wood Refinishing",
  description:
    "Peeling finish, water rings, yellowing clear coat, deep scratches — this guide identifies every common wood finish damage type, what caused it, and whether it needs Perk Up & Protect or a full strip and refinish.",
  openGraph: {
    title:
      "What's Wrong With My Wood? A St. Louis Homeowner's Guide to Wood Finish Damage",
    description:
      "Peeling finish, water rings, yellowing clear coat, deep scratches — this guide identifies every common wood finish damage type, what caused it, and whether it needs Perk Up & Protect or a full strip and refinish.",
    url: "https://suewheelerstl.com/blog/wood-damage-guide-st-louis",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What's Wrong With My Wood? A St. Louis Homeowner's Guide to Wood Finish Damage",
  description:
    "Peeling finish, water rings, yellowing clear coat, deep scratches — this guide identifies every common wood finish damage type, what caused it, and whether it needs Perk Up & Protect or a full strip and refinish.",
  url: "https://suewheelerstl.com/blog/wood-damage-guide-st-louis",
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
    question: "Can you fix water damaged wood doors?",
    answer:
      "It depends on how far the water penetrated. White hazing or water rings that sit in the finish layer — not in the wood — are often resolved with Perk Up & Protect, which includes a light wet sand and new topcoat. Dark water stains that have soaked into the wood fiber itself require a full strip, possible bleaching to lift the stain, and a fresh refinish. Sue assesses in person at the estimate — water damage is one of those situations where a photo genuinely cannot tell you which category you're in.",
  },
  {
    question: "My wood finish is peeling — is it ruined?",
    answer:
      "No. Peeling finish means the topcoat has failed at the adhesion layer, which is a finish problem, not a wood problem. The wood underneath is almost always intact. A full strip removes every layer down to bare wood, the surface is assessed and cleaned, and fresh stain and topcoat are applied. In historic St. Louis homes, stripping peeling paint or varnish often reveals original old-growth fir or oak in surprisingly good condition underneath decades of layered finishes.",
  },
  {
    question: "What causes wood finish to crack?",
    answer:
      "Cracking — sometimes called alligatoring or checking — happens when the finish layer dries out and loses flexibility over time. Old oil-based varnishes and lacquers are especially prone to this as they age. The finish can no longer expand and contract with seasonal humidity changes in the wood, so it cracks. This is not a structural problem with the wood; it is the finish telling you it has reached the end of its life. A full strip is required — applying a new coat over a cracked finish does not repair the underlying failure.",
  },
  {
    question: "Can yellowed wood trim be restored?",
    answer:
      "Yes, in most cases. Yellowing is caused by UV ambering of old oil-based varnish and clear coats. If the yellowing is mild and the finish is otherwise sound, Perk Up & Protect with a color correction coat can neutralize the warmth and apply a fresh topcoat. If the yellowing is severe, or if the finish is also cracking or peeling, a full strip and refinish with a water-based or conversion varnish topcoat — which does not amber the way oil-based products do — will give you a clean, neutral result.",
  },
  {
    question: "How do I know if my wood needs refinishing or replacing?",
    answer:
      "The short answer: if the wood itself is structurally sound, refinishing is almost always the right answer — and far more cost-effective than replacement. The exception is structural rot, which compromises the wood fiber itself and cannot be reversed by finishing. For everything else — peeling, cracking, water staining, deep scratches, fading — refinishing addresses the damage and restores the piece. Replacing historic woodwork in a pre-1950s St. Louis home also means losing original old-growth material that simply cannot be sourced today. Sue will tell you at the estimate if a piece is too far gone to refinish.",
  },
];

export default function WoodDamageGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "What's Wrong With My Wood? A St. Louis Homeowner's Guide",
            url: "https://suewheelerstl.com/blog/wood-damage-guide-st-louis",
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
            Diagnostic Guide
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl text-[#2A2421] mb-6 leading-tight"
          >
            What&rsquo;s Wrong With My Wood? A St. Louis Homeowner&rsquo;s Guide
            to Wood Finish Damage
          </h1>
          <p className="text-sm font-sans text-[#6B5E55]">
            By Sue Wheeler &middot; April 2026 &middot; 10 min read
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Lead paragraph */}
          <div className="border-l-4 border-[#11B2E8] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              If you own a home in the Central West End, Benton Park, Lafayette
              Square, or any of the older St. Louis neighborhoods, your woodwork
              has almost certainly shown you something over the years — a door
              with a finish that is peeling at the edges, trim that has gone
              flat and yellowish, a stair railing with a haze that no amount of
              polishing seems to fix. Most homeowners notice these things and
              assume the wood is damaged or ruined. In the vast majority of
              cases, it is not. The finish is the problem — and the wood and the
              finish are two very different things.
            </p>
          </div>

          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            This guide is a diagnostic reference. For each type of damage you
            might see, it covers what the damage looks like, what caused it, and
            what the correct treatment is. Some problems are candidates for{" "}
            <Link
              href="/perk-up-and-protect"
              className="text-[#11B2E8] underline underline-offset-2 hover:text-[#0e96c4] transition-colors"
            >
              Perk Up &amp; Protect
            </Link>{" "}
            — a maintenance coat that revives a sound finish without stripping —
            others need a full strip and refinish. A few fall outside what wood
            refinishing can address at all. Knowing which category you are in
            before calling a contractor saves time and helps you ask the right
            questions.
          </p>

          {/* Section 1 — Key distinction */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Essential Distinction
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Finish damage vs. wood damage — they are not the same thing
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              When you look at a piece of woodwork, you are looking at two
              distinct layers. The wood itself — fir, oak, walnut, pine — is the
              substrate (the wood surface beneath the finish). On top of that
              sits the finish: stain, varnish, polyurethane, lacquer, shellac,
              or paint, applied in layers over decades. In many St. Louis
              historic homes, the original woodwork has been refinished multiple
              times since the house was built in the 1890s or 1920s. The finish
              is what has accumulated; the wood beneath it has often changed
              very little.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div
                className="p-6 border-l-4"
                style={{ backgroundColor: "#EBE6DE", borderColor: "#A65D37" }}
              >
                <h3
                  className="text-lg text-[#2A2421] mb-3"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                >
                  Finish damage
                </h3>
                <p className="text-sm text-[#6B5E55] font-sans leading-relaxed mb-3">
                  Almost always treatable. The wood underneath is intact.
                </p>
                <ul className="space-y-2 text-sm text-[#6B5E55] font-sans leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-[#A65D37] shrink-0">&#10003;</span>
                    Peeling, flaking, or bubbling surface
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#A65D37] shrink-0">&#10003;</span>
                    Dull, flat, or hazy appearance
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#A65D37] shrink-0">&#10003;</span>
                    Yellowing or ambering of clear coat
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#A65D37] shrink-0">&#10003;</span>
                    White rings or haze from moisture
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#A65D37] shrink-0">&#10003;</span>
                    Surface-level scratches
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#A65D37] shrink-0">&#10003;</span>
                    Alligatoring or cracking pattern
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#A65D37] shrink-0">&#10003;</span>
                    Chalking or powdery surface
                  </li>
                </ul>
              </div>
              <div
                className="p-6 border-l-4"
                style={{ backgroundColor: "#EBE6DE", borderColor: "#11B2E8" }}
              >
                <h3
                  className="text-lg text-[#2A2421] mb-3"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                >
                  Wood damage
                </h3>
                <p className="text-sm text-[#6B5E55] font-sans leading-relaxed mb-3">
                  Sometimes treatable, sometimes not. Requires assessment.
                </p>
                <ul className="space-y-2 text-sm text-[#6B5E55] font-sans leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-[#11B2E8] shrink-0">&#8594;</span>
                    Dark water stains in the wood fiber
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#11B2E8] shrink-0">&#8594;</span>
                    Deep gouges reaching bare wood
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#11B2E8] shrink-0">&#8594;</span>
                    Sun bleaching of wood pigment
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#11B2E8] shrink-0">&#8594;</span>
                    Structural rot (soft, spongy, crumbling)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#11B2E8] shrink-0">&#8594;</span>
                    Warping or cupping from sustained moisture
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              The practical implication: finish damage does not mean the wood is
              ruined. Even severe finish failure — complete peeling, heavy
              cracking, years of neglect — typically reveals sound wood
              underneath once the old finish is stripped. The goal of
              refinishing is to remove what has failed and apply what works. The
              wood itself is usually the part that survives.
            </p>
          </div>
        </div>
      </article>

      {/* Damage type guide */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Damage Type Guide
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-2"
            >
              Ten types of wood finish damage — and what to do about each one
            </h2>
            <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
              Find what you are looking at, read what caused it, and see which
              treatment applies.
            </p>
          </div>

          {/* Damage 1 */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="bg-[#2A2421] px-6 py-4">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                1. Peeling or flaking finish
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What it looks like
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Sections of the finish lifting away from the wood surface in
                  chips, flakes, or long strips. Often starts at edges, corners,
                  or high-contact areas like door stiles and handrail tops. You
                  can see bare wood or an older finish layer beneath.
                </p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What caused it
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Adhesion failure between finish layers — usually caused by
                  incompatible products applied over each other, moisture
                  infiltration under the finish, or a topcoat applied over a
                  surface that was not properly prepared. In older homes, it
                  often reflects decades of repainting without stripping between
                  coats.
                </p>
              </div>
              <div className="bg-[#EBE6DE] rounded-sm px-5 py-3 flex gap-3 items-start">
                <span className="text-[#11B2E8] font-bold shrink-0 font-sans">
                  Treatment:
                </span>
                <p className="text-[#2A2421] font-sans text-base leading-relaxed">
                  <strong>Full strip and refinish.</strong> A maintenance coat
                  cannot bond properly over a failing adhesion layer. The
                  existing finish must come off completely before a new one is
                  applied.
                </p>
              </div>
            </div>
          </div>

          {/* Damage 2 */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="bg-[#2A2421] px-6 py-4">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                2. Dull, flat, or hazy finish
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What it looks like
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  The wood has lost its depth and clarity. It looks flat, gray,
                  or milky rather than rich and clear. The grain is still
                  visible but muted. Wiping the surface with a damp cloth may
                  temporarily bring back some color, but it returns to dull when
                  dry.
                </p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What caused it
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  UV oxidation breaking down the topcoat over time, or buildup
                  from cleaning products — particularly wax-based polishes or
                  silicone sprays — that have clouded the finish surface. The
                  finish is intact; it has simply lost its clarity.
                </p>
              </div>
              <div className="bg-[#EBE6DE] rounded-sm px-5 py-3 flex gap-3 items-start">
                <span className="text-[#11B2E8] font-bold shrink-0 font-sans">
                  Treatment:
                </span>
                <p className="text-[#2A2421] font-sans text-base leading-relaxed">
                  <strong>Perk Up &amp; Protect candidate.</strong> If the
                  finish is otherwise sound — no peeling, no cracking, no bare
                  wood — a light wet sand to remove oxidized material and a
                  fresh topcoat restores clarity without stripping.
                </p>
              </div>
            </div>
          </div>

          {/* Damage 3 */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="bg-[#2A2421] px-6 py-4">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                3. Yellowing or ambering of clear coat
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What it looks like
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  The clear coat has taken on an orange or yellow cast —
                  particularly noticeable on light-colored or natural-finish
                  wood. White-painted trim may look cream or tan. Oak and maple
                  may look as if they were stained amber when they were not. In
                  some cases you can see the yellowing is heavier on sun-exposed
                  surfaces and lighter in shadowed areas.
                </p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What caused it
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  UV light reacts with the resins in oil-based varnish and
                  polyurethane, causing them to amber progressively over time.
                  This is a known property of oil-based finishes — they deepen
                  in color. It is not damage in the structural sense, but it is
                  a significant aesthetic change.
                </p>
              </div>
              <div className="bg-[#EBE6DE] rounded-sm px-5 py-3 flex gap-3 items-start">
                <span className="text-[#11B2E8] font-bold shrink-0 font-sans">
                  Treatment:
                </span>
                <p className="text-[#2A2421] font-sans text-base leading-relaxed">
                  <strong>Depends on severity.</strong> Mild yellowing with a
                  sound finish: Perk Up &amp; Protect with a color correction
                  coat. Heavy yellowing or yellowing combined with other finish
                  failure: full strip and refinish with a water-based topcoat
                  that will not amber.
                </p>
              </div>
            </div>
          </div>

          {/* Damage 4 */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="bg-[#2A2421] px-6 py-4">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                4. Water rings or white haze
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What it looks like
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Circular white or light-gray rings, often from glasses or
                  planters set directly on wood. Or a general white haze across
                  a section of the surface — common on surfaces near leaking
                  windows or in rooms with high humidity cycles. The marks are
                  white or light, not dark.
                </p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What caused it
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Moisture trapped in the finish layer — between the topcoat and
                  the wood, or between finish layers. It has not penetrated into
                  the wood itself. The white color is caused by water disrupting
                  the clarity of the finish film.
                </p>
              </div>
              <div className="bg-[#EBE6DE] rounded-sm px-5 py-3 flex gap-3 items-start">
                <span className="text-[#11B2E8] font-bold shrink-0 font-sans">
                  Treatment:
                </span>
                <p className="text-[#2A2421] font-sans text-base leading-relaxed">
                  <strong>Often a Perk Up &amp; Protect candidate.</strong>{" "}
                  White haze confined to the finish layer responds well to wet
                  sanding and a fresh topcoat. Sue assesses at the estimate — if
                  the hazing goes deeper than the surface finish, it changes the
                  approach.
                </p>
              </div>
            </div>
          </div>

          {/* Damage 5 */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="bg-[#2A2421] px-6 py-4">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                5. Dark water stains
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What it looks like
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Black, dark brown, or gray staining in the wood — not a
                  surface haze, but color that appears to go into the grain.
                  Common on door sills, window stools, and stair treads near
                  exterior openings. The stain remains visible even when the
                  finish is stripped away.
                </p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What caused it
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Moisture that penetrated through or past the finish and
                  reacted with tannins in the wood fiber — or introduced mold or
                  oxidation at the wood surface. Dark water staining is wood
                  damage, not finish damage, though in many cases it is
                  treatable.
                </p>
              </div>
              <div className="bg-[#EBE6DE] rounded-sm px-5 py-3 flex gap-3 items-start">
                <span className="text-[#11B2E8] font-bold shrink-0 font-sans">
                  Treatment:
                </span>
                <p className="text-[#2A2421] font-sans text-base leading-relaxed">
                  <strong>
                    Full strip and refinish, with possible bleaching.
                  </strong>{" "}
                  The finish must be removed completely. Depending on severity,
                  the stain may be addressed with wood bleach before new stain
                  and topcoat are applied. In some cases the staining is too
                  deep to fully neutralize — Sue will tell you at the estimate
                  what the realistic outcome is.
                </p>
              </div>
            </div>
          </div>

          {/* Damage 6 */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="bg-[#2A2421] px-6 py-4">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                6. Surface scratches
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What it looks like
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Fine lines or scuffs visible in the finish surface. They catch
                  light at an angle. The scratch appears lighter than the
                  surrounding finish — the finish has been disrupted, not the
                  wood. You cannot feel the scratch as a significant groove with
                  your fingernail.
                </p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What caused it
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Normal wear — keys, rings, belt buckles, moving furniture, pet
                  claws. Surface scratches are the most common finish complaint
                  in households with children or pets. They have not cut through
                  to bare wood.
                </p>
              </div>
              <div className="bg-[#EBE6DE] rounded-sm px-5 py-3 flex gap-3 items-start">
                <span className="text-[#11B2E8] font-bold shrink-0 font-sans">
                  Treatment:
                </span>
                <p className="text-[#2A2421] font-sans text-base leading-relaxed">
                  <strong>Perk Up &amp; Protect candidate</strong> if scratches
                  are confined to the topcoat. The wet sand step in the
                  maintenance coat process addresses this level of surface
                  disruption. If scratches are numerous and deep enough to reach
                  the stain layer, a full strip may give a cleaner result.
                </p>
              </div>
            </div>
          </div>

          {/* Damage 7 */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="bg-[#2A2421] px-6 py-4">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                7. Deep scratches or gouges
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What it looks like
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Visible groove or pit in the surface. You can feel it with a
                  fingernail. Bare wood may be visible at the bottom of the
                  scratch. On painted surfaces, you may see the layer structure
                  — bare wood, primer, old paint — in the cross-section of the
                  gouge.
                </p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What caused it
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Physical impact — dropped tools, dragged furniture, aggressive
                  scrubbing with abrasive cleaners. The damage extends through
                  all finish layers to the wood surface itself.
                </p>
              </div>
              <div className="bg-[#EBE6DE] rounded-sm px-5 py-3 flex gap-3 items-start">
                <span className="text-[#11B2E8] font-bold shrink-0 font-sans">
                  Treatment:
                </span>
                <p className="text-[#2A2421] font-sans text-base leading-relaxed">
                  <strong>Full strip and refinish.</strong> Gouges that reach
                  bare wood may also require wood filler to level the surface
                  before stain and topcoat are applied. Sue assesses depth and
                  location at the estimate — a gouge in a flat panel is handled
                  differently than one in a curved molding profile.
                </p>
              </div>
            </div>
          </div>

          {/* Damage 8 */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="bg-[#2A2421] px-6 py-4">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                8. Alligatoring or cracking finish
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What it looks like
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  A network of cracks across the finish surface — sometimes fine
                  hairline cracks, sometimes larger breaks that follow the grain
                  or run at angles to it. The pattern can resemble alligator
                  skin or dried mud. The finish may still be adhered between the
                  cracks, but the surface is no longer continuous.
                </p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What caused it
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  The finish dried out and lost flexibility. Old oil-based
                  varnishes and lacquers are particularly prone to this as they
                  age — they can no longer move with the wood&rsquo;s seasonal
                  expansion and contraction and crack instead. It can also
                  result from applying a hard topcoat over a more flexible
                  primer, creating incompatible layers.
                </p>
              </div>
              <div className="bg-[#EBE6DE] rounded-sm px-5 py-3 flex gap-3 items-start">
                <span className="text-[#11B2E8] font-bold shrink-0 font-sans">
                  Treatment:
                </span>
                <p className="text-[#2A2421] font-sans text-base leading-relaxed">
                  <strong>Full strip required.</strong> The cracking pattern is
                  a structural failure of the finish layer. Applying a new coat
                  over cracked finish does not repair the underlying problem —
                  it adds another layer to an already failed substrate.
                </p>
              </div>
            </div>
          </div>

          {/* Damage 9 */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="bg-[#2A2421] px-6 py-4">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                9. Chalking or powdering finish
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What it looks like
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  The finish surface has a dusty or powdery feel — when you run
                  a finger across it, you pick up a fine residue. The surface
                  may look flat and slightly grainy. This is most common on
                  older shellac and early varnish finishes and on exterior wood
                  that has been weathered without maintenance.
                </p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What caused it
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Advanced breakdown of the finish at a molecular level. Old
                  shellac and natural varnishes degrade over time — the resins
                  oxidize and the binder fails, leaving a powdery surface
                  residue. It signals that the finish has reached the end of its
                  functional life.
                </p>
              </div>
              <div className="bg-[#EBE6DE] rounded-sm px-5 py-3 flex gap-3 items-start">
                <span className="text-[#11B2E8] font-bold shrink-0 font-sans">
                  Treatment:
                </span>
                <p className="text-[#2A2421] font-sans text-base leading-relaxed">
                  <strong>Full strip required.</strong> The degraded finish
                  layer cannot serve as a base for a new coat — adhesion would
                  fail immediately. The old material must be removed completely
                  before refinishing.
                </p>
              </div>
            </div>
          </div>

          {/* Damage 10 */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="bg-[#2A2421] px-6 py-4">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                10. Sun bleaching or color loss
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What it looks like
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  The wood has faded — particularly noticeable on stained pieces
                  where one area in direct sun has bleached lighter than the
                  surrounding wood. The stain color is gone from the affected
                  area; the wood may look grayish or washed out. Common on
                  south- and west-facing windows, doors, and cabinet runs near
                  skylights.
                </p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-1">
                  What caused it
                </p>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  UV radiation breaking down the pigments in the stain layer
                  over time. The finish may still be intact, but the color
                  beneath it has been bleached out. This is accelerated in rooms
                  without UV-filtering window film and on pieces that have not
                  been refinished in twenty or more years.
                </p>
              </div>
              <div className="bg-[#EBE6DE] rounded-sm px-5 py-3 flex gap-3 items-start">
                <span className="text-[#11B2E8] font-bold shrink-0 font-sans">
                  Treatment:
                </span>
                <p className="text-[#2A2421] font-sans text-base leading-relaxed">
                  <strong>
                    Perk Up &amp; Protect with color correction coat.
                  </strong>{" "}
                  If the finish is otherwise sound, the wet sand + color
                  correction + topcoat process addresses color loss without
                  stripping. For severe or uneven bleaching across a large run
                  of cabinets or millwork, a full strip and restain gives a more
                  consistent result.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision table */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Quick Reference
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-8"
          >
            Decision framework: which treatment applies?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full font-sans text-sm border-collapse">
              <thead>
                <tr className="bg-[#2A2421] text-white">
                  <th
                    className="text-left px-5 py-4 font-semibold"
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 400,
                    }}
                  >
                    What you see
                  </th>
                  <th
                    className="text-center px-4 py-4 font-semibold"
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 400,
                    }}
                  >
                    Perk Up &amp; Protect
                  </th>
                  <th
                    className="text-center px-4 py-4 font-semibold"
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 400,
                    }}
                  >
                    Full Strip &amp; Refinish
                  </th>
                  <th
                    className="text-center px-4 py-4 font-semibold"
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 400,
                    }}
                  >
                    Refer Out
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    damage: "Peeling or flaking finish",
                    perk: "",
                    strip: "Yes",
                    refer: "",
                    bg: "white",
                  },
                  {
                    damage: "Dull, flat, or hazy finish",
                    perk: "Yes",
                    strip: "If also peeling",
                    refer: "",
                    bg: "#F8F6F1",
                  },
                  {
                    damage: "Yellowing clear coat (mild)",
                    perk: "Yes",
                    strip: "If severe",
                    refer: "",
                    bg: "white",
                  },
                  {
                    damage: "White water rings or haze",
                    perk: "Often",
                    strip: "If deeper than finish",
                    refer: "",
                    bg: "#F8F6F1",
                  },
                  {
                    damage: "Dark water stains in wood",
                    perk: "",
                    strip: "Yes",
                    refer: "",
                    bg: "white",
                  },
                  {
                    damage: "Surface scratches (topcoat only)",
                    perk: "Yes",
                    strip: "If numerous/deep",
                    refer: "",
                    bg: "#F8F6F1",
                  },
                  {
                    damage: "Deep gouges to bare wood",
                    perk: "",
                    strip: "Yes",
                    refer: "",
                    bg: "white",
                  },
                  {
                    damage: "Alligatoring or cracking finish",
                    perk: "",
                    strip: "Yes",
                    refer: "",
                    bg: "#F8F6F1",
                  },
                  {
                    damage: "Chalking or powdering finish",
                    perk: "",
                    strip: "Yes",
                    refer: "",
                    bg: "white",
                  },
                  {
                    damage: "Sun bleaching or color loss",
                    perk: "Yes",
                    strip: "If severe or uneven",
                    refer: "",
                    bg: "#F8F6F1",
                  },
                  {
                    damage: "Structural rot (soft, spongy wood)",
                    perk: "",
                    strip: "",
                    refer: "Yes",
                    bg: "white",
                  },
                  {
                    damage: "Warping or cupping",
                    perk: "",
                    strip: "Assess first",
                    refer: "Severe cases",
                    bg: "#F8F6F1",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{ backgroundColor: row.bg }}
                    className="border-b border-[rgba(42,36,33,0.08)]"
                  >
                    <td className="px-5 py-4 text-[#2A2421] font-medium">
                      {row.damage}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.perk ? (
                        <span className="text-[#A65D37] font-semibold">
                          {row.perk}
                        </span>
                      ) : (
                        <span className="text-[rgba(42,36,33,0.2)]">—</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center text-[#6B5E55]">
                      {row.strip || (
                        <span className="text-[rgba(42,36,33,0.2)]">—</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.refer ? (
                        <span className="text-[#11B2E8] font-semibold">
                          {row.refer}
                        </span>
                      ) : (
                        <span className="text-[rgba(42,36,33,0.2)]">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs font-sans text-[#6B5E55] mt-4 leading-relaxed">
            Note: &ldquo;Depends on severity&rdquo; entries are assessed in
            person. Sue does not make treatment decisions from photos — she
            looks at the piece at the free estimate.
          </p>
        </div>
      </section>

      {/* What Sue does NOT treat */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Scope of Work
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What Sue does not treat
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-8">
            Wood Refinishing by Sue Wheeler, LLC specializes in architectural
            woodwork — the fixed woodwork of historic homes. Several common
            requests fall outside that scope, and it is worth knowing before you
            call.
          </p>
          <div className="space-y-4">
            {[
              {
                label: "Structural rot",
                body: "Rot is a biological process that destroys wood fiber. Once a piece has reached the point where the wood is soft, spongy, or crumbling, refinishing cannot restore it. Structural rot requires a carpenter for repair or replacement. If only a small section of a larger piece is affected, it may be possible to repair and then refinish — but that determination is made by a carpenter, not a refinisher.",
              },
              {
                label: "Structural wood repair",
                body: "Refinishing restores finishes — it does not repair structural damage. Splits, breaks, or sections requiring wood filler, dutchmen repairs (small patches of replacement wood inlaid to fill gouges or missing sections), or reconstruction need a carpenter first. Once the structural repair is complete, the piece can be refinished.",
              },
              {
                label: "Floors and decks",
                body: "Floor refinishing is a separate specialty requiring different equipment and technique. Decks are exterior horizontal surfaces subject to different conditions than architectural interior woodwork. Neither is within Sue's scope.",
              },
              {
                label: "New construction",
                body: "Perk Up & Protect and full strip and refinish are services for woodwork with existing finishes. New construction and freshly installed millwork needing a first-time finish are not within scope.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6"
              >
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-lg text-[#2A2421] mb-2"
                >
                  {item.label}
                </h3>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get a diagnosis */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Next Step
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            How to get an accurate diagnosis for your wood
          </h2>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
            This guide gives you a starting framework, but the only way to know
            for certain which treatment your woodwork needs is to have Sue look
            at it. The free estimate is exactly that — Sue comes to your home,
            assesses the piece in person, and tells you which service it needs
            and why. She does not make treatment decisions from photographs, and
            she does not upsell. If Perk Up &amp; Protect is the right answer,
            that is what she will tell you.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-8">
            Sue has been refinishing architectural woodwork in St. Louis
            historic homes since 1989. She serves the Central West End, Benton
            Park, Compton Heights, Shaw, Lafayette Square, Clayton, and
            surrounding neighborhoods. She answers every call personally at{" "}
            <a
              href="tel:3143676054"
              className="text-[#11B2E8] hover:underline transition-colors"
            >
              (314) 367-6054
            </a>
            .
          </p>

          <div className="bg-[#2A2421] text-white rounded-sm p-8 text-center">
            <p
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-2xl mb-3"
            >
              Not sure what your wood needs? Sue will tell you.
            </p>
            <p className="font-sans text-[#9e9087] leading-relaxed text-base mb-6">
              Free estimate. In-person assessment. Straight answer on treatment
              and cost. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
                style={{ borderRadius: "2px" }}
              >
                Schedule a Free Estimate
              </Link>
              <a
                href="tel:3143676054"
                className="text-lg font-sans font-medium text-white hover:text-[#11B2E8] transition-colors"
              >
                (314) 367-6054
              </a>
            </div>
          </div>
        </div>
      </section>

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
            Wood damage and refinishing: FAQ
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
        heading="Free estimate. In-person assessment. Straight answer."
        subtext="36 years in St. Louis historic homes. Sue diagnoses the problem and tells you exactly what it needs — Perk Up & Protect or full Strip & Refinish. (314) 367-6054."
      />
    </>
  );
}
