import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Cabinet Color Change St. Louis | Wood Refinishing by Sue Wheeler",
  description:
    "Update your kitchen cabinet color without replacing the boxes. Expert color-change refinishing in St. Louis. Sue Wheeler, EPA Certified. Free estimate: (314) 367-6054.",
};

const faqItems = [
  {
    question: "Can I go from stained to painted cabinets?",
    answer:
      "Yes — it's one of the most common transitions. Full strip of the existing stain and finish, primer selected for the wood species, then paint. The important step is the strip — painting over a stain finish without stripping creates adhesion problems within a few years.",
  },
  {
    question:
      "I want to update my oak cabinets to a gray tone. Is that possible with a stain?",
    answer:
      "Yes. Gray-toned and greige stains applied over properly prepped oak produce a good result — the grain reads through but the color is contemporary. The specific tone depends on the species, the grain, and the stain selection. We'll show you options.",
  },
  {
    question: "Will a color change affect the value of my home?",
    answer:
      "Usually positively. Updated kitchen cabinet color is consistently flagged by real estate agents as a high-ROI improvement for pre-sale prep. The specific impact depends on the neighborhood and buyer expectations in that area.",
  },
  {
    question: "How long does a color-change project take?",
    answer:
      "For an average kitchen, 5–10 business days from start to reinstallation. Stain-to-paint transitions take slightly longer due to additional prep and primer stages.",
  },
];

export default function CabinetColorChangePage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            <Link
              href="/kitchen-cabinet-refinishing"
              className="hover:underline"
            >
              Kitchen Cabinet Refinishing
            </Link>{" "}
            / Cabinet Color Change
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Cabinet color change in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            New color. Same cabinets. A fraction of the cost of replacement.
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

      {/* You don't need new cabinets */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            You don't need new cabinets. You need a new finish.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              If your kitchen's cabinet boxes are solid — structurally intact,
              doors hanging right, drawers that work — there's no reason to
              replace them. The boxes are fine. What you want to change is the
              color.
            </p>
            <p>
              Cabinet color-change refinishing does exactly that. We strip the
              existing finish, prepare the surface for the new color, and apply
              the finish you want — stained in a different tone, painted in a
              new color, or taken from orange-honey oak to a more contemporary
              natural look. The bones stay. The look changes completely.
            </p>
            <p>
              Cabinet replacement in a St. Louis kitchen costs $15,000–$50,000
              or more depending on scope and materials. Color-change refinishing
              costs a fraction of that and produces a result that reads as new
              to anyone who walks in.
            </p>
          </div>
        </div>
      </section>

      {/* Transition types */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Stain-to-stain. Stain-to-paint. Paint-to-paint.
          </h2>
          <div className="space-y-6">
            {[
              {
                label: "Stain color update",
                body: "Changing from a dated 1990s honey-oak to a richer walnut, espresso, or gray tone. The wood grain remains visible; the color shifts entirely. Very common request.",
              },
              {
                label: "Stain-to-paint",
                body: "Converting original stained cabinets to a painted finish. Full strip, appropriate primer for the wood species, painted topcoat. Requires more prep than a stain-to-stain change, but the result is clean and durable when done correctly.",
              },
              {
                label: "Paint color update",
                body: "Existing painted cabinets, different color. Strip the old paint, reprime, repaint. Not a simple coat-over — we strip first so the new color bonds to the surface and not to a failing old coat.",
              },
            ].map(({ label, body }) => (
              <div
                key={label}
                className="p-6"
                style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
              >
                <h3
                  className="font-serif italic text-[#2A2421] text-lg mb-2"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {label}
                </h3>
                <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
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
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            EPA Certified for pre-1978 kitchens.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Pre-1978 kitchen cabinets frequently have lead paint somewhere in
            their finish history — sometimes buried under layers of subsequent
            work. Stripping them requires EPA-certified lead-safe protocols. Sue
            Wheeler is an EPA Certified Lead Removal. Every pre-1978
            color-change project is handled with proper containment and
            documented cleanup.
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
        </div>
      </section>

      <CTABlock
        heading="Free estimate. No obligation."
        subtext="Sue answers every call personally."
      />
    </>
  );
}
