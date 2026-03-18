import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Stair Tread Refinishing St. Louis | Sue Wheeler",
  description:
    "High-traffic stair tread and riser refinishing in St. Louis. Durability finishes, hand-strip method, EPA Certified. Sue Wheeler, 36 years. Free estimate: (314) 367-6054.",
};

const faqItems = [
  {
    question: "Can you refinish just the treads without doing the whole staircase?",
    answer:
      "Yes. Tread-only projects are common — treads wear faster than spindles or railings. The finish won't match unrefined components perfectly, but it's a reasonable approach when budget or condition makes a full staircase refinish premature.",
  },
  {
    question: "What sheen level do you recommend for stair treads?",
    answer:
      "Satin to semi-gloss for most treads. High-gloss shows every scuff and footprint; flat sheens don't provide adequate surface hardness for high-traffic steps. We discuss the specific application and recommend accordingly.",
  },
  {
    question: "My treads have some gouges from furniture moves. Can those be repaired?",
    answer:
      "Minor gouges and surface damage are often addressable as part of a standard Strip & Refinish — filled, sanded, finished. Deep structural damage or cracks through the tread are assessed individually.",
  },
  {
    question: "How long do refinished stair treads last?",
    answer:
      "With quality polyurethane and proper prep, 10–15 years before the finish needs attention is a reasonable expectation with normal use. Heavy traffic, pets, and high heels accelerate wear. A Perk Up & Protect maintenance coat partway through extends that further.",
  },
];

export default function StairTreadsAndRisersPage() {
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
            / Treads &amp; Risers
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Stair tread and riser refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Treads are the most-used wood surface in your home. The finish has to be able to prove
            it.
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

      {/* High-performance finish */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            High-traffic surfaces need high-performance finish.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Stair treads take more contact per square foot than any other wood surface in a home.
            Every person, every day, every trip up and every trip down. Finish that looks good on a
            dining table won't perform on a stair tread. The selection of polyurethane — sheen,
            build, cure hardness — matters on this surface more than almost anywhere else.
          </p>
          <p className="mt-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            We use oil or water-based polyurethane selected for durability on high-traffic
            surfaces. The prep matters too: a tread that's stripped clean and sanded to the right
            profile holds finish longer than one that got a coat over an existing base.
          </p>
        </div>
      </section>

      {/* Treads and risers together */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Treads and risers together.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Refinishing treads without addressing risers is common — treads wear faster — but doing
            them together produces a better visual result. A freshly finished tread against an
            unchanged riser shows the contrast immediately. We typically quote and finish treads
            and risers as a unit, with the option to prioritize treads if budget requires.
          </p>
        </div>
      </section>

      {/* Refinish vs replace */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Tread refinishing vs. tread replacement.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Tread replacement runs $200–$400+ per tread installed, depending on species match and
              stair complexity. Refinishing costs significantly less and — for solid wood treads in
              sound condition — produces a result that's visually and structurally equivalent to
              new.
            </p>
            <p>
              If treads have deep gouges, cracks, or structural damage, we'll assess and tell you
              honestly when replacement makes more sense than refinishing. Most treads in St.
              Louis's older homes are solid old-growth wood and refinish well.
            </p>
          </div>
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
            EPA Certified for pre-1978 staircases.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Stair finishes in pre-1978 homes contain lead. Stripping them generates lead dust in
            the most-trafficked part of your home. Sue Wheeler is an EPA Certified Lead Renovator.
            Every pre-1978 staircase project includes proper containment, HEPA filtration, and
            documented cleanup.
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
