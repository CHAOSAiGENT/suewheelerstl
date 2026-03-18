import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped kitchen cabinet refinishing in St. Louis. Painted, stained, or color-change — restored by Sue Wheeler, 36 years, EPA Certified, BBB A+. Free estimate.",
};

const faqItems = [
  {
    question: "How much does kitchen cabinet refinishing cost in St. Louis?",
    answer:
      "It depends on the number of cabinet doors, drawer fronts, finish type, and condition of the existing finish. We give free estimates — call (314) 367-6054 and describe your kitchen. We'll give you a realistic range before you commit to anything.",
  },
  {
    question: "How long does cabinet refinishing take?",
    answer:
      "Most kitchen cabinet projects run 1–3 weeks from pickup to reinstallation. This includes stripping, any repairs, stain application, and multiple finish coats with proper cure time between them.",
  },
  {
    question: "Can you match my existing cabinet stain?",
    answer:
      "Usually, yes. Stain matching on original wood is part of what we do. We'll assess the existing tone and get as close as possible — and we'll tell you honestly if an exact match isn't achievable so you can decide how to proceed.",
  },
  {
    question: "Do I need to empty my cabinets?",
    answer:
      "For door and drawer front removal, you don't need to empty the boxes — just the shelves immediately inside the doors being removed. We'll let you know specifically what's needed at estimate time.",
  },
  {
    question: "Will refinished cabinets hold up in a kitchen environment?",
    answer:
      "Yes — if finished correctly. Polyurethane is the right finish for kitchen cabinets. It handles heat, humidity, cleaning products, and daily use. Applied correctly over a properly prepared surface, a cabinet refinish should last 10–15 years or longer with basic care.",
  },
];

export default function KitchenCabinetRefinishingPage() {
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
            Kitchen cabinet refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Your original cabinets are almost certainly worth saving. We'll strip them back to bare
            wood, repair what needs repairing, and finish them to last another 30 years — for a
            fraction of the cost of replacement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Kitchen Estimate
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ServiceCard
              title="Painted cabinet refinishing"
              description="Proper prep, priming, and hand-applied finish — not a spray-and-pray job."
              href="/kitchen-cabinet-refinishing/painted-cabinets"
            />
            <ServiceCard
              title="Stained cabinet refinishing"
              description="Hand-strip method preserves wood grain and allows precise stain matching."
              href="/kitchen-cabinet-refinishing/stained-cabinets"
            />
            <ServiceCard
              title="Cabinet color change"
              description="New color. Same cabinets. A fraction of the cost of replacement."
              href="/kitchen-cabinet-refinishing/cabinet-color-change"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Painted. Stained. <em>Color-changed.</em> We do all three.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Wood Refinishing by Sue Wheeler refinishes kitchen cabinets of every finish type —
              painted cabinets being refreshed or color-changed, natural wood cabinets being
              stripped and re-stained, and everything in between. The method is the same regardless:
              hand-strip to bare wood, prepare the surface properly, apply the right finish for how
              the cabinets will be used.
            </p>
            <p>
              What we don't do: spray a new coat over an old one and call it done. That's not
              refinishing. It's painting over a problem. Within a few years the old finish
              telegraphs through the new, the adhesion fails, and you're back where you started —
              or worse.
            </p>
            <p>
              Every cabinet project starts at bare wood. That's what "refinishing" means.
            </p>
          </div>
        </div>
      </section>

      {/* Why Refinish */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The case for <em>keeping</em> your original cabinets.
          </h2>
          <div className="space-y-6">
            {[
              {
                label: "Cost.",
                body: "New kitchen cabinetry runs $15,000–$50,000 or more installed, depending on material and scope. Refinishing the existing cabinet boxes and doors is typically a fraction of that cost — and the result is cabinets that look new because the wood underneath them is solid, original, and correctly prepared.",
              },
              {
                label: "Material.",
                body: "Most kitchen cabinets in pre-1978 St. Louis homes were built from old-growth lumber — wood cut from slower-growing, tighter-grained trees that no longer exist commercially. That wood is denser, harder, and holds finish better than the plantation-grown wood used in today's new cabinetry. When you replace original cabinets, you lose material quality that money cannot buy back.",
              },
              {
                label: "History.",
                body: "Original cabinets were built to fit the specific dimensions of the kitchen. Replacements rarely match precisely. There's always a gap somewhere, a trim piece that doesn't quite align, a proportion that's slightly off. Original cabinets, properly restored, simply fit better.",
              },
            ].map(({ label, body }) => (
              <div key={label} className="flex gap-4">
                <span
                  className="text-[#A65D37] font-sans font-semibold text-sm mt-1 shrink-0"
                >
                  {label}
                </span>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Paint */}
      <section
        className="py-14 px-6 border-l-4"
        style={{ backgroundColor: "#EBE6DE", borderColor: "#11B2E8" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Pre-1978 kitchen? <em>Lead paint is almost certainly present.</em>
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-4">
            In St. Louis City, 89.8% of homes were built before 1978. The cabinets in those
            kitchens were painted or stained with products that contain lead. Stripping those
            cabinets without EPA-certified lead-safe protocols creates lead dust in a room where
            your family prepares food.
          </p>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-4">
            Sue Wheeler is an EPA Certified Lead Renovator. Every cabinet project in a pre-1978
            home is handled with full containment, HEPA filtration, wet-sanding methods, and
            documented cleanup. You get a completion record. You don't have to wonder.
          </p>
          <Link
            href="/faq#lead-paint"
            className="text-sm font-sans font-semibold text-[#11B2E8] hover:underline uppercase tracking-widest"
          >
            More about lead paint and refinishing →
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What cabinet refinishing <em>actually</em> involves.
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Assessment and estimate",
                body: "We look at the cabinets — finish type, wood species, condition of the existing finish, any damage or repairs needed. We give you a written estimate with a real scope.",
              },
              {
                step: "2",
                title: "Removal (board-up method)",
                body: "For most projects, we remove the cabinet doors and drawer fronts, transport them to our shop, and work in a controlled environment. Cabinet boxes typically stay in place. This keeps dust and fumes out of your kitchen and allows us to control humidity and temperature for a better cure.",
              },
              {
                step: "3",
                title: "Stripping",
                body: "Hand-strip to bare wood. No dip tank. Every piece, by hand. This preserves the grain, the profiles, and the integrity of the wood.",
              },
              {
                step: "4",
                title: "Repair",
                body: "Any damage — dings, gouges, cracks, loose joints — is addressed before finishing. We use appropriate fillers and repairs for each material and situation.",
              },
              {
                step: "5",
                title: "Stain (if applicable)",
                body: "For stained cabinets, we match your existing stain or help you choose something new. Stain is applied and wiped to the correct tone before finishing.",
              },
              {
                step: "6",
                title: "Finish",
                body: "Oil-based or water-based polyurethane, selected for the application. Multiple coats, sanded between coats. A kitchen cabinet finish needs to handle heat, humidity, cleaning products, and daily use — we finish accordingly.",
              },
              {
                step: "7",
                title: "Reinstallation",
                body: "Doors and drawer fronts are returned and rehung. Hardware is reinstalled. We leave your kitchen the way we found it — except the cabinets look 30 years newer.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-5">
                <div
                  className="w-8 h-8 shrink-0 flex items-center justify-center text-sm font-sans font-semibold text-white"
                  style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
                >
                  {step}
                </div>
                <div>
                  <h3
                    className="font-sans font-semibold text-[#2A2421] text-sm uppercase tracking-widest mb-1"
                  >
                    {title}
                  </h3>
                  <p className="text-[#6B5E55] font-sans text-base leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Strip &amp; Refinish or <em>Perk Up &amp; Protect?</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6"
              style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
            >
              <h3
                className="font-serif font-semibold text-[#2A2421] text-lg mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Strip &amp; Refinish (S&amp;R)
              </h3>
              <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                Full restoration. Existing finish stripped to bare wood, repairs made, new stain
                and finish applied. For cabinets with failing finish, significant wear, or a major
                color change.
              </p>
            </div>
            <div
              className="p-6"
              style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
            >
              <h3
                className="font-serif font-semibold text-[#2A2421] text-lg mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Perk Up &amp; Protect (PUP)
              </h3>
              <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                Maintenance coat. Light sanding to prepare the surface, fresh finish applied over
                the existing. For cabinets in good structural condition with a solid existing finish
                that just needs refreshing. Faster and less expensive. Not right for every
                situation — we'll tell you honestly which option your cabinets need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl text-[#2A2421] leading-relaxed mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontStyle: "italic" }}
          >
            "We had a contractor tell us our 1940s oak cabinets were beyond saving. Sue came out,
            looked at them for five minutes, and told us they were some of the best original
            cabinets she'd seen. We refinished them. They look incredible."
          </blockquote>
          <p className="text-sm font-sans text-[#6B5E55]">— Homeowner, Webster Groves</p>
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
        heading="Ready to talk about your kitchen?"
        subtext="Free estimates. No obligation. Sue answers every call personally."
      />
    </>
  );
}
