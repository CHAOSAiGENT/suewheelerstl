import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Painted Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Expert painted cabinet refinishing in St. Louis. Proper prep, priming, and hand-applied finish — not a spray-and-pray job. Sue Wheeler, EPA Certified. Free estimate.",
};

const faqItems = [
  {
    question: "Can you paint over my existing stained cabinets?",
    answer:
      "Yes. Stained-to-painted is one of the most common transitions we do. The key is a full strip of the existing stain and finish, proper primer for the species, then paint. Skipping the strip creates adhesion problems down the road.",
  },
  {
    question: "What kind of paint do you use?",
    answer:
      "Polyurethane-based finish — oil or water-based depending on the application and the client's preferences. We don't use wall paint on cabinetry. Cabinet finishes need to handle repeated contact, cleaning, and humidity cycling. They require the right product for the surface.",
  },
  {
    question: "How long does painted cabinet refinishing take?",
    answer:
      "For an average kitchen, plan on 5–10 business days from start to reinstallation. The timing depends on cabinet count, the number of coats required, and cure time between coats.",
  },
  {
    question: "My cabinets were painted by a previous owner. Can you fix them?",
    answer:
      "Usually. This is common in older St. Louis homes — original stained cabinets that were painted at some point, often poorly. We assess what's there, strip it down, and start clean. Sometimes there are surprises underneath (multiple layers, filler, damage) — we'll tell you what we find before we proceed.",
  },
];

export default function PaintedCabinetsPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            <Link href="/kitchen-cabinet-refinishing" className="hover:underline">
              Kitchen Cabinet Refinishing
            </Link>{" "}
            / Painted Cabinets
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Painted cabinet refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            The difference between painted cabinets that last and painted cabinets that peel is
            almost entirely in the prep.
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

      {/* Painted cabinets done right */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Painted cabinets done right — or done over.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Most painted cabinet jobs fail within a few years. Finish peeling at the edges. Paint
              chipping around handles. Brush marks you notice more every time you open a door. The
              problem is almost never the paint itself. It's what happened — or didn't happen —
              before the paint went on.
            </p>
            <p>
              Proper painted cabinet refinishing starts with a full strip back to bare wood. Not a
              scuff-sand, not a light coat over the existing finish. A real strip, by hand, so the
              surface is clean and the new primer has something to bond to. Then appropriate primer
              for the substrate — different wood species take primer differently, and original
              kitchen cabinetry in St. Louis homes covers a wide range. Then a finish coat applied
              correctly.
            </p>
            <p>The result holds. It doesn't peel at the corners in year two.</p>
          </div>
        </div>
      </section>

      {/* What we do differently */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What we do differently.
          </h2>
          <div className="space-y-6">
            {[
              {
                label: "We strip first.",
                body: "Painting over an existing finish — even a lightly sanded one — creates a bond that's only as good as the weakest layer underneath. We strip to bare wood and start clean.",
              },
              {
                label: "We use the right primer.",
                body: "Stain-blocking, adhesion-promoting primer selected for the wood species and the finish going over it. This step is where most paint jobs cut corners.",
              },
              {
                label: "We don't rush the cure.",
                body: "Paint that's applied too fast over insufficiently cured primer fails early. We let each layer set properly before the next one goes on.",
              },
              {
                label: "EPA Certified for pre-1978 homes.",
                body: "If your kitchen cabinets were built before 1978, they may have lead paint underneath whatever finish is on them now. Sue Wheeler is an EPA Certified Lead Removal. Every project on a pre-1978 surface is handled with proper containment and documented cleanup.",
              },
            ].map(({ label, body }) => (
              <div key={label} className="flex gap-4">
                <span
                  className="text-[#A65D37] font-sans font-semibold text-sm mt-0.5 shrink-0"
                >
                  {label}
                </span>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S&R vs PUP */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Strip &amp; Refinish or Perk Up &amp; Protect?
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              If your painted cabinets are peeling, chipping, showing brush marks, or were painted
              over an original stained finish — they need{" "}
              <strong className="text-[#2A2421]">Strip &amp; Refinish</strong>. Full strip, prime,
              paint.
            </p>
            <p>
              If your painted cabinets are in structurally solid condition and holding their finish
              but looking dull or scuffed —{" "}
              <strong className="text-[#2A2421]">Perk Up &amp; Protect</strong> may be appropriate.
              Light prep, fresh topcoat. We'll tell you honestly which applies when we see them.
            </p>
          </div>
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
