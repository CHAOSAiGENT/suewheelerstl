import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Staircase refinishing in St. Louis — treads, risers, spindles, newel posts, railings. Hand-stripped, EPA Certified. Sue Wheeler, 36 years. Free estimate: (314) 367-6054.",
};

const faqItems = [
  {
    question: "How long does staircase refinishing take?",
    answer:
      "It depends on scope. A full staircase with treads, risers, spindles, newel post, and railings typically takes 2–4 weeks. Tread-and-riser only projects (no spindles) are faster. We'll give you a specific timeline with your estimate.",
  },
  {
    question: "Can you refinish just the treads and leave the spindles?",
    answer:
      "Yes. We work on whatever components need attention. If the treads are worn but the spindles are in good shape, we can address the treads selectively. We'll tell you honestly whether partial refinishing makes visual and practical sense for your specific staircase.",
  },
  {
    question: "Do I need to avoid using the staircase during refinishing?",
    answer:
      "For some portion of the project, yes — particularly during finish application and cure time. We plan the work to minimize disruption. For homes with a single staircase, we typically stage the work so the staircase is usable within a day or two after final coat application, even if full cure takes longer.",
  },
  {
    question: "Can spindles be dipped to make the process faster?",
    answer:
      "No. Dipping dissolves the glue at the base of turned spindles, loosens them from the tread and rail, and destroys the original profile. There is no shortcut for spindle stripping. We do it by hand.",
  },
  {
    question: "My staircase has ornate carved newel posts. Can you preserve the detail?",
    answer:
      "Yes — that's exactly the kind of work hand-stripping is designed for. We don't use methods that soften or blur carved profiles. Every detail in the original wood stays sharp.",
  },
];

export default function StaircaseRefinishingPage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <TrustBar />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Staircase refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            The staircase is the most visible architectural element in any home. When it looks
            right, the whole house does.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Staircase Estimate
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

      {/* Service Cards */}
      <section className="py-14 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Treads. Risers. Spindles. Newel posts. <em>Railings.</em>
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-8 max-w-2xl">
            A staircase isn't one thing — it's five or six. Most contractors treat it as one. We
            don't. Each component has different wear patterns, different finish requirements, and
            different refinishing challenges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ServiceCard
              title="Stair treads & risers"
              description="High-traffic surfaces. Durability is everything."
              href="/staircase-refinishing/stair-treads-and-risers"
            />
            <ServiceCard
              title="Spindles & balusters"
              description="Intricate profiles. Hand-strip only — no shortcuts possible."
              href="/staircase-refinishing/spindles-and-balusters"
            />
            <ServiceCard
              title="Newel posts"
              description="The architectural anchor. Often carved original old-growth wood."
              href="/staircase-refinishing/newel-posts"
            />
            <ServiceCard
              title="Stair railings"
              description="Safety and beauty. Continuous rail, handrail profiling."
              href="/staircase-refinishing/stair-railings"
            />
          </div>
          <p className="mt-6 text-sm font-sans text-[#6B5E55]">
            We do the full staircase or specific components — whatever the project requires. We'll
            tell you what's worth doing and what can wait.
          </p>
        </div>
      </section>

      {/* Most labor-intensive */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The most <em>labor-intensive</em> refinishing work we do.
          </h2>
          <div className="space-y-6">
            {[
              {
                label: "The spindles.",
                body: "Most staircases have 30–80 or more individual spindles. Each one has to be stripped by hand, sanded, and finished. There is no machine that does this correctly. A dip tank dissolves the glue joints at the base. A brush-and-sand approach leaves buildup in the profiles. Hand-strip, hand-sand, hand-finish — that's what it takes, and that's what we do.",
              },
              {
                label: "The treads.",
                body: "Stair treads are the highest-traffic wood surface in a home. They need a finish built for that abuse — multiple coats of polyurethane, properly cured, on a correctly prepared surface. A thin finish coat over inadequate prep fails within two years. We don't do that.",
              },
              {
                label: "The newel post.",
                body: "In pre-1920 St. Louis homes, newel posts were often turned or carved from old-growth hardwood. They are architectural statements — the exclamation point at the bottom of the staircase. Refinishing one correctly means stripping it carefully, preserving every detail, and choosing a finish that brings out the depth of the wood rather than flattening it.",
              },
              {
                label: "The geometry.",
                body: "A staircase is never flat. Every surface is at an angle, on a curve, or in a tight corner. Good refinishing work on a staircase requires patience, the right tools, and experience with the specific challenges of the form. We've done hundreds of them.",
              },
            ].map(({ label, body }) => (
              <div key={label} className="flex gap-4">
                <span className="text-[#A65D37] font-sans font-semibold text-sm mt-0.5 shrink-0">
                  {label}
                </span>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual return */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            No single project <em>transforms</em> a home more.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              A refinished staircase changes how a home feels to walk into. Buyers notice it first.
              Guests comment on it. Owners who've lived with a worn, dull staircase for years are
              consistently stunned at what the same wood looks like after it's properly refinished.
            </p>
            <p>
              Before-and-after photos don't fully capture it. The texture changes. The depth comes
              back. The color is right in a way it hasn't been in decades.
            </p>
            <p>
              This is why staircase refinishing is often the first thing we recommend when a
              homeowner is trying to decide what to prioritize.
            </p>
          </div>
        </div>
      </section>

      {/* Cost — Version B (no pricing, variables only) */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What does staircase refinishing <em>cost</em> in St. Louis?
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-6">
            Staircase refinishing isn't a flat-rate service — what you pay depends on what's
            actually in scope. A few things we look at before quoting:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              {
                label: "How many treads",
                body: "the primary count variable on any staircase job",
              },
              {
                label: "What components are in scope",
                body: "treads only, or treads plus risers, stringers, railings, spindles, and newel post",
              },
              {
                label: "Condition of the existing finish",
                body: "light wear is different from decades of paint build-up or a prior DIY attempt",
              },
              {
                label: "Whether repairs are needed",
                body: "damaged treads, loose spindles, and split newel posts are scoped separately",
              },
              {
                label: "Lead paint",
                body: "pre-1978 homes require EPA-certified lead-safe protocol, which is part of every job we do on older woodwork",
              },
            ].map(({ label, body }) => (
              <li key={label} className="flex gap-3">
                <span className="text-[#A65D37] font-sans font-semibold text-sm shrink-0 mt-0.5">
                  {label} —
                </span>
                <span className="text-[#6B5E55] font-sans text-sm leading-relaxed">{body}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-4">
            There's no number we can give you before seeing the staircase. But a free estimate
            takes about 15 minutes and there's no commitment.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 text-base font-sans font-medium text-[#2A2421] hover:text-[#11B2E8] transition-colors"
          >
            <Phone size={16} />
            Call (314) 367-6054 — describe what you have, and Sue will tell you what's realistic.
          </a>
        </div>
      </section>

      {/* Lead Paint */}
      <section
        className="py-14 px-6 border-l-4"
        style={{ backgroundColor: "#F8F6F1", borderColor: "#11B2E8" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Pre-1978 staircase? <em>EPA certification matters.</em>
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-4">
            Stair railings, spindles, and newel posts in homes built before 1978 typically have
            lead paint in the existing finish layers. Stripping these surfaces without
            EPA-certified lead-safe protocols generates lead dust.
          </p>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-4">
            Sue Wheeler is an EPA Certified Lead Removal. Lead-safe work on pre-1978 staircases
            is standard for us — documented, contained, and correctly disposed of.
          </p>
          <Link
            href="/faq#lead-paint"
            className="text-sm font-sans font-semibold text-[#11B2E8] hover:underline uppercase tracking-widest"
          >
            Lead paint and wood refinishing FAQ →
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl text-[#2A2421] leading-relaxed mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontStyle: "italic" }}
          >
            "The staircase in our 1905 CWE home hadn't been properly refinished in decades. Every
            contractor told us the spindles were 'too far gone.' Sue refinished every single one.
            The newel post looks like it was turned yesterday."
          </blockquote>
          <p className="text-sm font-sans text-[#6B5E55]">— Homeowner, Central West End</p>
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
        heading="Ready to restore your staircase?"
        subtext="Free estimate. No obligation. Sue answers every call personally."
      />
    </>
  );
}
