import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Stair Railing Refinishing St. Louis | Sue Wheeler",
  description:
    "Handrail and stair railing refinishing in St. Louis. Safety + beauty combined. Continuous rail, hand profiling, EPA Certified. Sue Wheeler, 36 years. Free estimate.",
};

const faqItems = [
  {
    question: "Can you refinish just the handrail without doing the spindles?",
    answer:
      "Yes. Railing-only projects are common when the rail is in worse condition than the spindles. The rail finish may not match the spindles perfectly if they're on different finish cycles, but the visual improvement is usually worth it.",
  },
  {
    question: "My railing has a profile — not a flat top. Can you strip and refinish the profile without losing the detail?",
    answer:
      "Yes. Profile work on handrails is standard. We use appropriate detail tools to strip the profile correctly without rounding the edges or obscuring the geometry.",
  },
  {
    question: "My railing is painted over original stain. Can you return it to wood?",
    answer:
      "Usually. Painted rails in historic homes are common — often painted at the same time as the spindles, leaving the treads and newel stained. We strip and assess what's underneath. Original stain finish is often recoverable; heavily filled or damaged surfaces are assessed individually.",
  },
  {
    question: "Does a refinished railing hold up to cleaning?",
    answer:
      "Yes — polyurethane is cleanable with standard household products. Avoid abrasive cleaners or anything with bleach, which will dull the finish over time. For maintenance, a gentle wipe-down is all that's needed.",
  },
];

export default function StairRailingsPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            <Link href="/staircase-refinishing" className="hover:underline">
              Staircase Refinishing
            </Link>{" "}
            / Stair Railings
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Stair railing refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            The handrail is touched by everyone who uses the stair, every single time. It has to
            hold up — and look right doing it.
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

      {/* Function and appearance */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Where function and appearance meet.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              A stair railing is the one wood element in your home that's touched constantly — not
              occasionally, like a door handle, but on every pass. The finish wears from the
              contact. It picks up oils, cleaning products, and everyday use in a way that floor or
              millwork finishes don't.
            </p>
            <p>
              When a handrail finish fails, it shows immediately: worn through at the top, tacky or
              discolored in the grip area, peeling at the profile edges. It also reads in
              photographs — a worn rail is one of the first things a buyer notices in listing
              photos.
            </p>
            <p>
              We refinish handrails with polyurethane selected for durability and hand contact —
              not the same profile as a floor finish, and not wall paint. The right product for the
              surface.
            </p>
          </div>
        </div>
      </section>

      {/* Continuous rail */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Continuous rail refinishing.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Continuous handrails — rails that run a full stair length from newel to wall bracket,
            often with a profile that changes direction at landings — require careful attention to
            the transitions. A run that looks good straight but has visible lap marks at the return
            or landing turns isn't finished correctly.
          </p>
          <p className="mt-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            We work the full run as a unit, paying attention to the transitions, so the finished
            rail reads as a single continuous surface.
          </p>
        </div>
      </section>

      {/* Part of a full project */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Railing as part of a full staircase project.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Most handrail refinishing happens as part of a full staircase project alongside
              treads, risers, spindles, and newel posts. Done together, the components are finished
              to match and the staircase reads as a complete restoration.
            </p>
            <p>
              Railing-only projects are also possible when the railing is in significantly worse
              condition than the rest of the stair, or when a homeowner is staging work in phases.
            </p>
          </div>
          <Link
            href="/staircase-refinishing"
            className="mt-4 inline-block text-sm font-sans font-semibold text-[#11B2E8] hover:underline uppercase tracking-widest"
          >
            Full staircase refinishing →
          </Link>
        </div>
      </section>

      {/* EPA */}
      <section
        className="py-14 px-6 border-l-4"
        style={{ backgroundColor: "#EBE6DE", borderColor: "#11B2E8" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            EPA Certified for pre-1978 railings.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Handrail finishes in pre-1978 homes contain lead. Sue Wheeler is an EPA Certified Lead
            Renovator. Every pre-1978 railing project includes proper containment and documented
            cleanup.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Common questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABlock
        heading="Free estimate. No obligation."
        subtext="Sue answers every call personally."
      />
    </>
  );
}
