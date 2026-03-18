import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Interior Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Interior door refinishing in St. Louis — stain consistency, finish matching, EPA lead-safe process. Sue Wheeler, hand-stripped, 36 years. Free estimate: (314) 367-6054.",
};

const faqItems = [
  {
    question: "Can you match my door stain to my hardwood floors?",
    answer:
      "We work to get as close as possible. The challenge is that floors and door trim are different wood species with different grain and porosity, and original finishes on both have shifted color over decades. We assess both and aim for visual harmony — usually achievable, though an exact match isn't always technically possible.",
  },
  {
    question: "I have 8 interior doors. Can you do them all at once?",
    answer:
      "Yes, and it's often the most efficient approach. We stage the work so you always have access to the rooms you need. All doors come back finished to the same standard at the same time, so your millwork reads as a consistent set.",
  },
  {
    question: "My interior doors were painted over original stain. Can you get back to the stain?",
    answer:
      "Usually. It depends on how many layers are present and whether the original stain finish underneath is intact. We strip and assess before committing to a result. If the original finish has been compromised, we'll tell you what the realistic options are.",
  },
  {
    question: "How long does interior door refinishing take?",
    answer:
      "Individual doors: 3–5 days. Larger sets are staged and typically completed within 1–2 weeks depending on count.",
  },
];

export default function InteriorDoorRefinishingPage() {
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
            / Interior Doors
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Interior door refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Interior doors set the tone for every room they enter. Consistent finish across doors
            and trim is the difference between a house that reads as finished and one that doesn't.
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

      {/* Stain consistency */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Stain consistency across your millwork.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              The woodwork in a well-maintained historic St. Louis home is a system. The doors, the
              door casings, the baseboard, the window trim — they were all finished to match. Over
              time, individual elements get touched up, repainted, or refinished piecemeal, and the
              consistency falls apart.
            </p>
            <p>
              Interior door refinishing is often about restoration of that visual coherence. We
              strip the door to bare wood, stain to match the surrounding millwork as closely as
              possible, and finish with polyurethane. The door reads as part of the room again
              instead of a mismatched element in it.
            </p>
          </div>
        </div>
      </section>

      {/* Board-up */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Board-up method — less disruption, better results.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              For interior doors, the board-up method is standard: we remove the door from its
              hinges, take it to the shop, refinish it in controlled conditions, and return it
              rehung. You get a consistently cured finish without chemical smell in your living
              space and without sanding dust on your floors.
            </p>
            <p>
              Doors are typically returned and rehung within 3–5 days. For interior door sets — a
              hallway with four or five doors — we stage the work so you're never without access to
              all rooms simultaneously.
            </p>
          </div>
          <Link
            href="/door-refinishing"
            className="mt-4 inline-block text-sm font-sans font-semibold text-[#11B2E8] hover:underline uppercase tracking-widest"
          >
            How the board-up method works →
          </Link>
        </div>
      </section>

      {/* EPA */}
      <section
        className="py-14 px-6 border-l-4"
        style={{ backgroundColor: "#F8F6F1", borderColor: "#11B2E8" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            EPA Certified for pre-1978 interior doors.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Pre-1978 interior doors in St. Louis homes frequently have lead paint in their finish
            history — sometimes buried under layers of subsequent work that came later. Sue Wheeler
            is an EPA Certified Lead Renovator. Every pre-1978 interior door project is handled
            with proper containment, HEPA filtration, and documented cleanup. Especially important
            in bedrooms and rooms where children spend time.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
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
