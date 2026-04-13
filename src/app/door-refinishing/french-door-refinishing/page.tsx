import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "French Door Refinishing St. Louis | Sue Wheeler",
  description:
    "French door refinishing in St. Louis. Multi-lite doors, glass edge detail, careful hand prep. Sue Wheeler, EPA Certified, 36 years. Free estimate: (314) 367-6054.",
};

const faqItems = [
  {
    question: "Can you refinish French doors without removing the glass?",
    answer:
      "Yes — glass masking is standard procedure. We mask the glass carefully before stripping and finishing. Removing and reinstalling glass is rarely necessary and adds risk to the process.",
  },
  {
    question: "My French door glass is original wavy glass. Can you work around that?",
    answer:
      "Yes. Wavy or antique glass is common in older St. Louis homes and is often irreplaceable. We mask it carefully and handle it with appropriate care throughout the process.",
  },
  {
    question: "Do you refinish both interior and exterior French doors?",
    answer:
      "Both. Interior French doors (between rooms) and exterior French doors (to a deck, sunroom, or garden) are refinished with finishes appropriate to their exposure — interior polyurethane for interior applications, UV-resistant exterior polyurethane for exterior.",
  },
  {
    question: "How long does French door refinishing take?",
    answer:
      "A single French door unit typically runs 4–6 days given the additional hand work required around the glass. We'll give you a specific timeline with your estimate.",
  },
];

export default function FrenchDoorRefinishingPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            <Link href="/door-refinishing" className="hover:underline">
              Door Refinishing
            </Link>{" "}
            / French Doors
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            French door refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Multi-lite doors require hand work at every glass edge. There are no shortcuts here
            — and dipping is never an option.
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

      {/* Why hand prep */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Why French doors require hand prep — always.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              French doors — multi-lite doors with glass panels — can't be dipped. The glass can't
              go in a chemical tank. But more importantly, even if the glass weren't there, dipping
              would be the wrong choice: the profiles and muntins on a well-made French door have
              detail that chemical stripping softens and obscures.
            </p>
            <p>
              Hand work is required. Every muntin, every glass edge, every profile — stripped
              carefully, masked where needed, finished precisely. It takes longer than a standard
              slab door. The result is a door that looks right rather than processed.
            </p>
          </div>
        </div>
      </section>

      {/* Sunrooms, dining rooms, libraries */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Sunrooms, dining rooms, libraries.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              French doors in St. Louis homes appear most commonly between dining rooms and living
              areas, in sunroom transitions, and in library or study entries. These are
              high-visibility locations — the doors are seen from both sides, often with light
              coming through the glass, which makes any inconsistency in the finish immediately
              apparent.
            </p>
            <p>
              We refinish French doors as a unit — door slab, frame, and both sides — so the
              finish reads consistently from every angle.
            </p>
          </div>
        </div>
      </section>

      {/* Board-up */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Board-up method.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-4">
            Where the door can be safely removed, we take it to the shop for a
            controlled-environment finish. For built-in or very large French door assemblies that
            can't be transported, on-premise work is available.
          </p>
          <Link
            href="/door-refinishing"
            className="text-sm font-sans font-semibold text-[#11B2E8] hover:underline uppercase tracking-widest"
          >
            How the board-up method works →
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
            EPA Certified for pre-1978 French doors.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            French doors in older St. Louis homes carry the same lead paint considerations as any
            other pre-1978 wood surface. Sue Wheeler is an EPA Certified Lead Removal. All
            pre-1978 projects include proper containment and documented cleanup.
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
