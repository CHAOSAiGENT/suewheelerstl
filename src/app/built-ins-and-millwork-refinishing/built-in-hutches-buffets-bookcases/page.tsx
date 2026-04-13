import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Built-In Hutch & Bookcase Refinishing St. Louis | Sue Wheeler",
  description:
    "Dining room built-ins, hutches, buffets, and bookcases refinished in St. Louis. Irreplaceable original woodwork restored. EPA Certified. Sue Wheeler. Free estimate.",
};

const faqItems = [
  {
    question:
      "My dining room hutch has leaded glass inserts. Can you refinish around the glass?",
    answer:
      "Yes. Careful masking around glass inserts is standard procedure. We work around the glass without removing it — the risk of cracking irreplaceable original glass in removal isn't worth it.",
  },
  {
    question:
      "The finish on my hutch is peeling and very dark. Can it really be restored?",
    answer:
      "Usually yes. Dark, failing finish is one of the most common conditions we see on original built-ins — it's been coated over multiple times without ever being stripped. A full Strip & Refinish removes all of that accumulated history and reveals the wood underneath. The transformation is often dramatic.",
  },
  {
    question: "Can you match the stain on my hutch to my dining room floor?",
    answer:
      "We work to get as close as possible. Different species and surfaces accept stain differently, and aged finishes have shifted from their original color. We assess both and aim for visual harmony. It's usually achievable to a degree that reads as intentional.",
  },
  {
    question:
      "My built-in bookcase has some shelves that are warped or damaged. Can that be addressed?",
    answer:
      "Minor repairs are often addressable as part of a refinish scope. Structural damage (severely warped shelves, damaged joinery) is assessed individually — some repairs are within scope, others require a separate carpentry engagement.",
  },
  {
    question: "Does refinishing qualify for historic tax credits?",
    answer:
      "It can. If your home is in a certified historic district and you're doing a qualifying rehabilitation, built-in millwork refinishing may be a Qualified Rehabilitation Expenditure. The work needs to align with Secretary of Interior Standards — hand-stripping is compliant.",
  },
];

export default function BuiltInHutchesPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            <Link
              href="/built-ins-and-millwork-refinishing"
              className="hover:underline"
            >
              Built-Ins &amp; Millwork Refinishing
            </Link>{" "}
            / Hutches, Buffets &amp; Bookcases
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Built-in hutch and bookcase refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            These pieces were built into your home. They were never meant to be
            replaced.
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

      {/* No modern equivalent */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Original woodwork that has no modern equivalent.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              The built-in hutches, buffets, and bookcases in St. Louis&rsquo;s
              pre-war homes were built from old-growth lumber — white oak,
              American chestnut, heart pine — and constructed by craftsmen
              working to architectural specifications. The profiles, the glass
              door details, the leaded light inserts, the proportions: these
              were designed for the room they&rsquo;re in. They&rsquo;re
              irreplaceable in any meaningful sense of the word.
            </p>
            <p>
              New cabinetry built to approximate the original is a compromise:
              different wood species, different grain density, machine-cut
              profiles that don&rsquo;t read as period-accurate. The original is
              always better than the reproduction. Refinishing is the only
              approach that preserves it.
            </p>
          </div>
        </div>
      </section>

      {/* What it involves */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What built-in hutch and bookcase refinishing involves.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Built-in pieces are worked on in place — they&rsquo;re structural
              to the home or too large to safely remove. We use appropriate
              solvents and hand tools to strip the existing finish, assess and
              address any surface damage, stain to match or update the existing
              tone, and apply polyurethane.
            </p>
            <p>
              For pieces with glass inserts — hutch doors, leaded glass
              bookcases — we mask carefully around the glass. For pieces with
              multiple components (upper and lower cabinet, separate shelving
              units), we treat the system as a unit so the finish reads
              consistently across all parts.
            </p>
          </div>
        </div>
      </section>

      {/* Dining rooms, libraries, parlors */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Dining rooms, libraries, parlors.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Built-in hutches and buffets are most common in dining rooms;
            built-in bookcases appear in libraries, studies, and living rooms.
            These are the rooms where finish condition is most noticed — formal
            spaces, rooms where guests spend time, rooms that appear in listing
            photos.
          </p>
          <p className="mt-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            A refinished dining room hutch transforms the entire room. The same
            woodwork that looked dark and tired becomes the feature it was
            designed to be.
          </p>
        </div>
      </section>

      {/* Stewardship */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Stewardship — the right framing.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            The people who built these homes invested in quality materials and
            skilled labor because they expected the work to last. Every
            homeowner who has lived there since has been the steward of that
            investment. Refinishing rather than replacing is the act that honors
            it.
          </p>
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
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            EPA Certified for pre-1978 built-ins.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            The finish on built-in cabinetry in pre-1978 homes almost certainly
            contains lead. Sue Wheeler is an EPA Certified Lead Removal. Every
            pre-1978 project includes proper containment, HEPA filtration, and
            documented cleanup. Especially relevant in dining rooms where food
            is present.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Common questions
          </h2>
          <FAQAccordion items={faqItems} />
          <div className="mt-6">
            <Link
              href="/historic-preservation"
              className="text-sm font-sans font-semibold text-[#11B2E8] hover:underline uppercase tracking-widest"
            >
              Historic preservation guide →
            </Link>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Free estimate. No obligation."
        subtext="Sue answers every call personally."
      />
    </>
  );
}
