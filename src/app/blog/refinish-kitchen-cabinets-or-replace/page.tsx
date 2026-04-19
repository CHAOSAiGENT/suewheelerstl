import type { Metadata } from "next";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "Refinish Your Kitchen Cabinets or Replace Them? | Sue Wheeler Wood Refinishing",
  description:
    "Most St. Louis kitchens have original cabinets worth keeping. Here is what you give up when you replace — and what refinishing actually delivers.",
  openGraph: {
    title: "Refinish Your Kitchen Cabinets or Replace Them?",
    description:
      "Most St. Louis kitchens have original cabinets worth keeping. Here is what you give up when you replace — and what refinishing actually delivers.",
    url: "https://suewheelerstl.com/blog/refinish-kitchen-cabinets-or-replace",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Refinish Your Kitchen Cabinets or Replace Them?",
  description:
    "Most St. Louis kitchens have original cabinets worth keeping. Here is what you give up when you replace — and what refinishing actually delivers.",
  url: "https://suewheelerstl.com/blog/refinish-kitchen-cabinets-or-replace",
  datePublished: "2026-04-19",
  dateModified: "2026-04-19",
  author: {
    "@type": "Person",
    name: "Sue Wheeler",
    jobTitle: "Owner",
  },
  publisher: {
    "@type": "Organization",
    name: "Wood Refinishing by Sue Wheeler LLC",
    url: "https://suewheelerstl.com",
  },
};

const faqItems = [
  {
    question: "Can you change the color of my cabinets when you refinish them?",
    answer:
      "Yes. Stain color change and paint are both options. The surface is stripped and prepared fresh, so the new color is applied correctly — to bare, properly prepared wood — rather than being painted over an existing finish. The result holds up like a proper finish should, because it was applied like one.",
  },
  {
    question:
      "My cabinets are a mix of original and replacement doors — can you make them match?",
    answer:
      "Often yes, depending on the wood species involved. Matching stain across different species or different generations of material is part of the work. Sue will tell you at the estimate whether a close match is achievable or whether a unifying painted finish makes more sense than trying to match stain across incompatible grain patterns.",
  },
  {
    question: "How long will refinished cabinets hold up in a kitchen?",
    answer:
      "A properly applied polyurethane finish on correctly prepared wood handles kitchen conditions — heat, humidity, cleaning products, daily use — without issue. Ten to fifteen years with basic care before another refinish is needed is realistic. The underlying wood, being old-growth solid wood rather than MDF or particleboard, does not degrade the way modern cabinet materials do. The finish wears; the material underneath does not.",
  },
];

export default function RefinishKitchenCabinetsOrReplacePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "Refinish Your Kitchen Cabinets or Replace Them?",
            url: "https://suewheelerstl.com/blog/refinish-kitchen-cabinets-or-replace",
          },
        ]}
      />
      <FAQSchema items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-4">
            Wood Refinishing
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl text-[#2A2421] mb-6 leading-tight"
          >
            Refinish your kitchen cabinets — <em>or replace them?</em>
          </h1>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed max-w-2xl">
            This is the question homeowners ask when they are tired of looking
            at their kitchen. The answer almost always points to refinishing —
            not because it is cheaper (it is), but because what you would be
            replacing the originals with is almost certainly inferior material.
          </p>
          <p className="text-sm font-sans text-[#6B5E55] mt-4">
            By Sue Wheeler · April 2026 · 6 min read
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            What You Actually Have
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What your original cabinets actually are
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Pre-1960 homes in St. Louis were built with old-growth solid wood
            throughout — and that includes the kitchen cabinets. Douglas fir,
            white oak, and chestnut were common. These were trees that grew for
            150 to 300 years before they were cut. The resulting wood has tight
            grain — sometimes 20 to 40 growth rings per inch versus the 4 to 6
            rings per inch in modern plantation lumber. That difference is not
            cosmetic. Tight grain means greater density, better dimensional
            stability, superior resistance to moisture, and a harder surface
            that takes and holds finish better.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            These materials are no longer commercially available. Old-growth
            timber is not sold at lumber yards. What exists in your kitchen is
            what exists — it cannot be ordered or replicated from a catalogue.
            When homeowners choose to replace original cabinets, they are
            permanently removing a category of material from their house that
            cannot be put back.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            Most original kitchen cabinets in St. Louis also have solid-wood box
            construction — not plywood or particleboard carcasses with veneer
            faces. That matters for longevity and for refinishing. A solid-wood
            box can be refinished properly, repeatedly, for decades. An MDF-core
            box has a finite number of times it can tolerate moisture exposure
            before the material begins to fail at the edges.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            What Replacement Actually Is
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What replacement actually delivers
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            A new cabinet box in a different material. In most cases, that
            material is MDF or particleboard with a veneer face — or, at the
            higher end, plywood carcasses with solid-wood doors. MDF swells at
            cut edges when exposed to moisture, which happens in kitchens.
            Particleboard is worse. Neither material has the resistance to
            humidity cycling that solid old-growth wood does.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            The cabinet industry calls replacing original solid-wood cabinets
            with contemporary product lines an upgrade. It is more accurate to
            call it a substitution. The new boxes may have more features —
            soft-close hinges, pull-out shelves, better hardware — but the
            substrate material is not superior to what was removed. In most
            cases it is significantly inferior.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            The cost difference compounds this. Full kitchen cabinet replacement
            — stock, semi-custom, or custom — runs from the mid-teens into the
            hundreds of thousands of dollars depending on the project.
            Refinishing the existing cabinets costs a fraction of that and
            results in a kitchen that looks and functions like new, built on
            superior material.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            What Refinishing Delivers
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What refinishing actually delivers
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            The same cabinet box and door profile, with the surface restored.
            The doors come off and go to the shop. They are stripped back to
            bare wood, sanded, and prepared correctly. Stain goes on if the
            color is changing. Then multiple coats of polyurethane finish — a
            finish that handles heat, humidity, cleaning products, and daily
            contact — are applied with proper cure time between each coat.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            The result looks new. The doors come back with a consistent finish
            across every surface. The grain reads clearly. The color is even.
            There is no indication the cabinets were built in 1932 unless the
            homeowner tells you — and old-growth wood under a fresh finish has a
            visual depth that new wood simply does not have. The grain pattern,
            the character of the material, the way it takes light — these are
            properties of old-growth timber that no contemporary cabinet product
            can replicate.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            The cabinet boxes stay in place throughout the work. The kitchen
            remains accessible. The doors are off while they are being finished,
            but the shelves and the space are there. The disruption is real but
            it is manageable.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            When Refinishing Is Not the Answer
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            When refinishing is not the right call
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            If the cabinet boxes themselves are structurally compromised — water
            damage that has penetrated through the substrate, delaminating MDF,
            severe warping from sustained moisture exposure — refinishing the
            doors will not fix a broken box. The doors will look good; the boxes
            they hang from will still be failing. That is a situation where
            replacement is the correct call.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            If a previous owner already replaced the original cabinets with
            contemporary product, the case for refinishing is weaker. There is
            no old-growth material to preserve. The question becomes whether the
            existing cabinets are worth refinishing on their own terms — which
            depends on their condition and material.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            Sue evaluates both the doors and the boxes at the estimate. If the
            boxes are the problem, she will say so. She does not recommend
            refinishing work that will not hold up, and she does not recommend
            replacement when the existing material is worth keeping.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            The Layout Question
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            Solving the right problem
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Most homeowners who think they want new cabinets actually want a
            better-looking kitchen. A refinish delivers that. The kitchen looks
            and feels transformed — new finish, potentially new color, clean and
            consistent surfaces — without touching the layout or the structure.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Homeowners who need more storage, a different layout, or a
            completely reconfigured kitchen are solving a different problem. A
            new finish on the existing layout does not create cabinet space that
            is not there or move a refrigerator to a better position. If the
            layout is the actual problem, refinishing is not the answer to it —
            though it may still make sense as part of a larger project.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            Being honest about which problem you are solving saves homeowners
            from spending money on the wrong solution. The estimate conversation
            is where that gets sorted out.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-10"
          >
            Common questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6"
              >
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  {item.question}
                </h3>
                <p className="font-sans text-[#6B5E55] leading-relaxed text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's look at your kitchen cabinets."
        subtext="Free estimate. Sue evaluates every job in person before recommending anything — (314) 367-6054."
      />
    </>
  );
}
