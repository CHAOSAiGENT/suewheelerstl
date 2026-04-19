import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Perk Up & Protect | Wood Finish Maintenance St. Louis | Sue Wheeler",
  description:
    "Wood finish looking dull but not damaged? Perk Up & Protect is a three-step maintenance coat — no full strip required. Sue Wheeler, St. Louis. Free estimate: (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/perk-up-and-protect",
  telephone: "+13143676054",
  foundingDate: "1989",
};

const faqItems = [
  {
    question:
      "How do I know if my woodwork needs Perk Up & Protect or a full refinish?",
    answer:
      "If the finish is peeling, cracking, or completely worn through, a full refinish is the correct call. If it's dull, lightly scratched, or faded but structurally intact, Perk Up & Protect is likely the right approach. Sue evaluates every job in person before recommending either.",
  },
  {
    question: "What does Perk Up & Protect actually involve?",
    answer:
      "We clean the surface thoroughly, lightly abrade the existing finish to create adhesion, and apply fresh finish coats. No chemical stripping, no bare wood, no multi-week timeline. Most projects are completed in a day or two.",
  },
  {
    question: "How long does a Perk Up & Protect finish last?",
    answer:
      "With normal care, 5–10 years before another maintenance coat is needed. The underlying wood and original finish remain intact, which makes subsequent maintenance easier.",
  },
];

export default function PerkUpAndProtectPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Perk Up & Protect",
            url: "https://suewheelerstl.com/perk-up-and-protect",
          },
        ]}
      />
      <FAQSchema items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Your woodwork looks dull. It doesn&rsquo;t need stripping &mdash; it
            needs <em>Perk Up &amp; Protect.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            A maintenance coat for wood with a sound finish. Three steps. No
            strip required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 text-base font-sans font-medium text-[#2A2421] hover:text-[#11B2E8] transition-colors"
            >
              <Phone size={16} />
              (314) 367-6054
            </a>
          </div>
        </div>
      </section>

      {/* Is this the right service? */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Is this the right service for <em>your wood?</em>
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-6 max-w-2xl">
            Perk Up &amp; Protect is a maintenance coat — a way to revive a
            sound wood finish without stripping back to bare wood. If your
            woodwork isn&rsquo;t failing, just showing its age, this is often
            the right call.
          </p>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-10 max-w-2xl">
            Perk Up &amp; Protect is a category-creating service — no other wood
            refinisher in St. Louis offers this as a named standalone
            maintenance option. It works when the existing finish is
            structurally sound. It is not a substitute for a full Strip &amp;
            Refinish when the base is compromised.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Right call */}
            <div
              className="p-6 border-l-4"
              style={{ backgroundColor: "#EBE6DE", borderColor: "#A65D37" }}
            >
              <h3
                className="text-lg text-[#2A2421] mb-4"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                When Perk Up &amp; Protect is the <em>right call</em>
              </h3>
              <ul className="space-y-3 text-[#6B5E55] font-sans text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#A65D37] shrink-0">&#10003;</span>
                  No bare wood showing through the finish
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#A65D37] shrink-0">&#10003;</span>
                  No peeling, flaking, or film failure
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#A65D37] shrink-0">&#10003;</span>
                  No water damage or deep wear through the finish layer
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#A65D37] shrink-0">&#10003;</span>
                  The wood looks dull and dark — not damaged
                </li>
              </ul>
            </div>
            {/* Wrong call */}
            <div
              className="p-6 border-l-4"
              style={{ backgroundColor: "#EBE6DE", borderColor: "#11B2E8" }}
            >
              <h3
                className="text-lg text-[#2A2421] mb-4"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                When it is <em>not</em> the right call (you need a full Strip
                &amp; Refinish)
              </h3>
              <ul className="space-y-3 text-[#6B5E55] font-sans text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#11B2E8] shrink-0">&#8594;</span>
                  Bare wood is showing at wear points
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#11B2E8] shrink-0">&#8594;</span>
                  Finish is peeling or flaking
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#11B2E8] shrink-0">&#8594;</span>
                  Paint layers over original stain
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#11B2E8] shrink-0">&#8594;</span>
                  Water rings, deep scratches, or checking in the wood surface
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three-step process */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-10"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            The three-step process
          </h2>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div
                className="shrink-0 w-10 h-10 flex items-center justify-center text-white text-sm font-sans font-medium"
                style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
              >
                1
              </div>
              <div>
                <h3
                  className="text-lg text-[#2A2421] mb-2"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                >
                  Wet sand
                </h3>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Light mechanical prep of the existing finish surface. This
                  opens the old topcoat just enough for the new coat to bond
                  properly — without cutting through to bare wood.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex gap-6">
              <div
                className="shrink-0 w-10 h-10 flex items-center justify-center text-white text-sm font-sans font-medium"
                style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
              >
                2
              </div>
              <div>
                <h3
                  className="text-lg text-[#2A2421] mb-2"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                >
                  Color refresh (if needed)
                </h3>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Where stain has faded or worn through at edges and
                  high-contact areas, color is touched back in before the
                  topcoat goes on. Not every piece needs this — Sue assesses at
                  the estimate.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex gap-6">
              <div
                className="shrink-0 w-10 h-10 flex items-center justify-center text-white text-sm font-sans font-medium"
                style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
              >
                3
              </div>
              <div>
                <h3
                  className="text-lg text-[#2A2421] mb-2"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                >
                  New topcoat
                </h3>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Fresh polyurethane over the prepared surface. The dullness is
                  gone. The haze is gone. The piece looks like it has been cared
                  for — because now it has.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we work on */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What we work on
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-8 max-w-2xl">
            Perk Up &amp; Protect is suited to architectural woodwork where the
            finish is intact but has aged out of looking its best.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="p-5"
              style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
            >
              <h3
                className="text-base text-[#2A2421] mb-2"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Kitchen cabinets
              </h3>
              <p className="text-sm text-[#6B5E55] font-sans leading-relaxed">
                Sound finish that just looks dated and dull. No delamination, no
                bare patches — just a finish that has lost its life.
              </p>
            </div>
            <div
              className="p-5"
              style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
            >
              <h3
                className="text-base text-[#2A2421] mb-2"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Interior doors
              </h3>
              <p className="text-sm text-[#6B5E55] font-sans leading-relaxed">
                Intact but aging finish. The door is holding — it just
                doesn&rsquo;t look like it is.
              </p>
            </div>
            <div
              className="p-5"
              style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
            >
              <h3
                className="text-base text-[#2A2421] mb-2"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Built-in hutches &amp; bookcases
              </h3>
              <p className="text-sm text-[#6B5E55] font-sans leading-relaxed">
                Finish is holding but tired. The joinery is fine — it&rsquo;s
                just the surface that needs attention.
              </p>
            </div>
            <div
              className="p-5"
              style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
            >
              <h3
                className="text-base text-[#2A2421] mb-2"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Stair railings &amp; newel posts
              </h3>
              <p className="text-sm text-[#6B5E55] font-sans leading-relaxed">
                Clear coat has hazed from years of handling, but the base is
                solid. A new topcoat restores clarity without a full strip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sue determines */}
      <section
        className="py-16 px-6 border-l-4"
        style={{ backgroundColor: "#EBE6DE", borderColor: "#A65D37" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Sue determines which service <em>your piece needs.</em>
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              You don&rsquo;t self-select between Perk Up &amp; Protect and a
              full Strip &amp; Refinish. Sue does, when she sees it. The
              difference matters — applying a maintenance coat over a failing
              finish produces a bad result. Stripping a piece that didn&rsquo;t
              need it costs you time and money you didn&rsquo;t have to spend.
            </p>
            <p>
              The estimate is free. She&rsquo;ll look at the piece, tell you
              which service it needs, and give you a straight answer on why. No
              upselling. No guessing from photos.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Schedule a Free Estimate
              <ArrowRight size={14} />
            </Link>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 text-base font-sans font-medium text-[#2A2421] hover:text-[#11B2E8] transition-colors"
            >
              <Phone size={16} />
              (314) 367-6054
            </a>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Common Questions
          </p>
          <h2
            className="text-3xl text-[#2A2421] mb-10"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
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
        heading="Not sure which service your wood needs?"
        subtext="Free estimate. Sue will tell you straight — Perk Up & Protect or full Strip & Refinish. No obligation."
      />
    </>
  );
}
