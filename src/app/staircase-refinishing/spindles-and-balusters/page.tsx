import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Spindle & Baluster Refinishing St. Louis | Sue Wheeler",
  description:
    "Stair spindle and baluster refinishing in St. Louis. Intricate hand work, no shortcuts. Sue Wheeler, EPA Certified, 36 years experience. Free estimate: (314) 367-6054.",
};

const faqItems = [
  {
    question: "Can you refinish spindles without doing the whole staircase?",
    answer:
      "Yes. Spindle-only projects are possible, though the refinished spindles may not match an unchanged handrail or treads in finish tone. We discuss what to expect before starting.",
  },
  {
    question: "My spindles are painted white but I want them stained. Is that possible?",
    answer:
      "It depends on the condition of the wood underneath the paint. If the original wood surface is intact, stripping to bare wood and staining is usually achievable. If there's significant filler or damage underneath, the result may not be what you're expecting. We assess before committing.",
  },
  {
    question: "How many spindles can you do at once?",
    answer:
      "We work on the full spindle set as a unit — consistency of finish across all spindles in a run is important visually. For large staircases with significant spindle counts, we stage the work across multiple days.",
  },
  {
    question: "Why does spindle refinishing cost more per piece than tread refinishing?",
    answer:
      "Labor. A tread is a flat surface. A turned spindle has multiple profiles, each requiring detail work, and needs to be finished on all sides. The time per spindle is significantly higher than the time per tread. It's not a reflection of material cost — it's the time the work requires.",
  },
];

export default function SpindlesAndBalustersPage() {
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
            / Spindles &amp; Balusters
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Spindle and baluster refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Every spindle is stripped by hand. There's no other way to do it right.
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

      {/* Most labor-intensive */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The most labor-intensive part of any staircase.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Spindles and balusters are the most time-intensive component of staircase refinishing
              — and the most revealing of whether the work was done correctly. A row of 30 turned
              spindles, each with its own profile, each needing to be stripped, prepped, and
              finished individually: there are no shortcuts that produce a good result.
            </p>
            <p>
              Dipping destroys spindle work. Chemical tank stripping attacks the glue joints where
              spindles meet the treads and handrail. The joints loosen. The turned profiles soften.
              The wood absorbs moisture and swells unevenly. A dipped spindle set looks wrong and
              structurally compromised.
            </p>
            <p>
              We strip each spindle by hand. Detail tools, appropriate solvents, patience. The
              profiles stay sharp. The joints stay tight. The result looks like what it is:
              100-year-old woodwork that's been properly cared for.
            </p>
          </div>
        </div>
      </section>

      {/* Painted vs stained */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Painted vs. stained spindles.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Many St. Louis staircases have painted spindles against a stained handrail and
              treads. This is historically accurate for a large proportion of late 19th and early
              20th century construction — painted spindles were standard in many architectural
              styles. We refinish to whatever the original or desired specification is: painted
              white, painted black, or stained to match the rail.
            </p>
            <p>
              If spindles were painted over original stain and the homeowner wants to return to
              stained wood, we assess what's present and advise on whether the original finish is
              recoverable.
            </p>
          </div>
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
            EPA Certified for pre-1978 spindles.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Painted spindles in pre-1978 homes carry lead paint. Stripping them requires
            EPA-certified protocols. Sue Wheeler is an EPA Certified Lead Removal. Every
            pre-1978 spindle project includes proper containment and documented cleanup.
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
