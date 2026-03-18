import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Room Millwork Refinishing St. Louis | Sue Wheeler",
  description:
    "Baseboards, crown molding, wainscoting, chair rail, mantels, and window trim refinished in St. Louis. Sue Wheeler, EPA Certified, 36 years. Free estimate: (314) 367-6054.",
};

const faqItems = [
  {
    question: "Can you do a single element — just the mantel, or just the baseboards?",
    answer:
      "Yes. Single-element projects are common. We work to match the existing room finish as closely as possible when refinishing one piece in isolation. A full-room approach produces the most consistent result, but single-element work is practical and worthwhile.",
  },
  {
    question: "My wainscoting has been painted over original stain. Can you return it to wood?",
    answer:
      "Usually. Painted wainscoting in historic homes often has intact original stain underneath the paint — it was painted over at some later renovation. We strip and assess before committing to a result. If the original surface isn't fully recoverable, we discuss options.",
  },
  {
    question: "What's the difference between chair rail and picture rail?",
    answer:
      "Chair rail runs horizontally around a room at approximately 36\" height — traditionally to protect plaster walls from chair backs. Picture rail runs near the ceiling and has a projecting lip designed to hold picture hooks. Both are present in many St. Louis homes from the 1880s–1930s and are often refinished as part of a full-room millwork project.",
  },
  {
    question: "Can you match new millwork stain to original old-growth millwork?",
    answer:
      "Closely, but not exactly — modern lumber and old-growth wood accept stain differently due to grain density and porosity differences. When new millwork is added to an existing room, we work to get as close as possible while setting accurate expectations about the match.",
  },
];

const millworkItems = [
  {
    label: "Baseboards",
    body: "often 6–8\" tall in older homes, with ogee or beaded profiles",
  },
  {
    label: "Crown molding",
    body: "the transition between wall and ceiling, often deep and multi-layered",
  },
  {
    label: "Wainscoting",
    body: "applied panel or board-and-batten cladding on the lower portion of walls",
  },
  {
    label: "Chair rail",
    body: "the horizontal molding that traditionally protected walls from chair backs",
  },
  {
    label: "Picture rail",
    body: "the upper molding used for hanging art without damaging plaster walls",
  },
  {
    label: "Window trim and aprons",
    body: "the casings, stools, and aprons framing each window",
  },
  {
    label: "Door casings",
    body: "the trim surrounding each door opening",
  },
  {
    label: "Fireplace surrounds and overmantels",
    body: "the full surround assembly including mantel shelf, pilasters, and frieze",
  },
];

export default function RoomMillworkPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            <Link href="/built-ins-and-millwork-refinishing" className="hover:underline">
              Built-Ins &amp; Millwork Refinishing
            </Link>{" "}
            / Room Millwork
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Room millwork refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Baseboards. Crown molding. Wainscoting. Chair rail. Window trim. Mantels. The finish
            that makes a room look finished.
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

      {/* Full scope */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The full scope of room millwork.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-6">
            Room millwork is everything attached to the walls and ceilings that isn&rsquo;t a door
            or a window — and in St. Louis&rsquo;s pre-war homes, there&rsquo;s a lot of it:
          </p>
          <dl className="space-y-3">
            {millworkItems.map(({ label, body }) => (
              <div key={label} className="flex gap-3">
                <dt className="font-sans font-semibold text-sm text-[#2A2421] shrink-0">
                  {label} —
                </dt>
                <dd className="font-sans text-sm text-[#6B5E55] leading-relaxed">{body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[#6B5E55] font-sans text-base leading-relaxed">
            Most older St. Louis homes have several of these elements. When they&rsquo;re all in
            good condition and consistently finished, a room reads as complete. When any of them
            are worn, painted over, or mismatched, the whole room feels unfinished.
          </p>
        </div>
      </section>

      {/* Visual coherence */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Visual coherence across a room.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Millwork refinishing is often about restoring the visual system of a room — bringing
              all the wood elements back to the same tone and finish level. This is especially
              important in formal rooms (dining rooms, living rooms, parlors) where the millwork
              was originally designed as part of the room&rsquo;s aesthetic vocabulary.
            </p>
            <p>
              We stain and finish room millwork to a consistent standard, whether we&rsquo;re
              addressing a single element or a full room. When work is done in phases — mantel
              first, wainscoting later — we document the stain formula so the next phase matches.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal timing */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Seasonal timing.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Room millwork refinishing is particularly popular for holiday season prep
            (October–November) in dining rooms and living rooms, and for spring refresh in rooms
            that face high-traffic use. Interior work runs year-round; there&rsquo;s no seasonal
            constraint on millwork projects.
          </p>
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
            EPA Certified for pre-1978 millwork.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Room millwork in pre-1978 homes has lead paint. Working in living spaces — dining
            rooms, bedrooms, living rooms — makes proper containment and HEPA filtration especially
            important. Sue Wheeler is an EPA Certified Lead Renovator. Every pre-1978 millwork
            project includes proper containment and documented cleanup.
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
