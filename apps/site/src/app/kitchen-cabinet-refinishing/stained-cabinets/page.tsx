import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Stained Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Natural wood cabinet refinishing in St. Louis. Hand-strip method preserves wood grain and allows precise stain matching. Sue Wheeler, 36 years. Free estimate: (314) 367-6054.",
};

const faqItems = [
  {
    question: "Can you match my cabinets to my hardwood floors?",
    answer:
      "We try — and we're usually close. Stain matching is part of what we do on stained cabinet projects where other woodwork is in the room. The challenge is that original finishes shift color over decades, so \"the same stain\" won't produce the same result. We assess what's there and get as close as technically possible.",
  },
  {
    question: "My cabinets are oak with a very orange tone from the 1990s. Can you update the color?",
    answer:
      "Yes. That orange-honey tone from 90s oak cabinets is one of the most common refinishing requests. We strip the old finish, neutralize the grain, and apply a more contemporary stain. It's not a paint job — the grain still shows — but the color reads completely differently.",
  },
  {
    question: "What finish goes over the stain?",
    answer:
      "Polyurethane — oil or water-based depending on the application. It's the right finish for kitchen surfaces. We don't use wax or Danish oil on kitchen cabinetry — they don't hold up to cleaning, heat, or humidity.",
  },
  {
    question: "How long do refinished stained cabinets last?",
    answer:
      "With proper prep and a quality polyurethane topcoat, 10–15 years before the finish needs attention is a reasonable expectation — longer if the cabinets are treated well. Perk Up & Protect maintenance work extends that further.",
  },
];

export default function StainedCabinetsPage() {
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
            / Stained Cabinets
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Stained cabinet refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            The grain in your original oak or cherry cabinets is the point. We make sure it
            survives the process.
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

      {/* Grain preservation */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Original wood grain is irreplaceable. Treat it that way.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Stained kitchen cabinets in St. Louis's older homes are almost always solid wood or
              solid-wood-faced — oak, cherry, maple, walnut. The grain in these materials developed
              over decades or centuries. It's tight, dense, and visually distinctive in a way that
              modern cabinet lumber can't replicate.
            </p>
            <p>
              Dip stripping destroys that. Submerging wood in a caustic chemical tank raises the
              grain fibers, opens the pores, and permanently changes the surface texture. The stain
              that goes on afterward looks blotchy and uneven because the wood itself has been
              damaged.
            </p>
            <p>
              Hand stripping preserves the grain. We remove the old finish layer by layer with
              appropriate solvents and detail tools, keeping the surface intact. The new stain
              penetrates cleanly and evenly. The result looks like the wood it actually is — not
              like a wood-adjacent surface that's been processed.
            </p>
          </div>
        </div>
      </section>

      {/* Stain matching */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Stain matching across your existing woodwork.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            One of the most common requests on stained cabinet projects: match the refinished
            cabinets to the existing hardwood floors, door trim, or other millwork. This is a
            skill that takes years to develop.
          </p>
          <p className="mt-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            We assess the existing tones — accounting for the fact that original finishes have
            often shifted color over decades due to UV exposure and oxidation — and work to get as
            close as possible. When an exact match isn't achievable, we discuss options before we
            start. You don't get surprised at the end.
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
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            EPA Certified for pre-1978 kitchens.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            If your home was built before 1978, the finish on your cabinets may contain lead.
            Stripping those cabinets generates lead dust. Sue Wheeler is an EPA Certified Lead
            Renovator — every pre-1978 project is handled with proper containment, HEPA filtration,
            and documented cleanup.
          </p>
        </div>
      </section>

      {/* S&R vs PUP */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Strip &amp; Refinish or Perk Up &amp; Protect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6" style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}>
              <h3
                className="font-serif font-semibold text-[#2A2421] text-lg mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Strip &amp; Refinish
              </h3>
              <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                Full restoration. Strip to bare wood, stain, finish. For cabinets with worn or
                failing finish, significant color change, or any surface damage. This is the right
                choice for most stained cabinets that haven't been properly finished in years.
              </p>
            </div>
            <div className="p-6" style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}>
              <h3
                className="font-serif font-semibold text-[#2A2421] text-lg mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Perk Up &amp; Protect
              </h3>
              <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                Light prep and fresh topcoat over a solid existing finish. For cabinets that are in
                good structural condition and holding their finish but looking dull. We'll tell you
                which applies.
              </p>
            </div>
          </div>
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
