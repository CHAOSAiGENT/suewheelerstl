import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Historic Wood Preservation St. Louis | Tax Credits | Sue Wheeler",
  description:
    "Historic preservation wood refinishing in St. Louis. Hand-strip method aligns with NPS Standards. Tax credit guidance. EPA Certified. Sue Wheeler, 36 years. Free consult.",
};

const faqs = [
  {
    question: "Does wood refinishing qualify for historic tax credits?",
    answer:
      "It can — if your property is eligible, the work meets the Secretary of Interior's Standards, and you're using methods that preserve the original material. Hand-stripping is compliant. Dipping may not be. We can help you understand whether your project qualifies, and we document our work in the format that preservation applications require.",
  },
  {
    question: "My home is in the Central West End / Lafayette Square / Soulard. Do I qualify?",
    answer:
      "Those neighborhoods are among St. Louis's most significant certified historic areas. Most properties in them are eligible for at least the Missouri state historic tax credit. The specifics depend on your building's contributing status. A conversation with your SHPO consultant (or with Sue) can clarify your situation quickly.",
  },
  {
    question: "What is a \"Qualified Rehabilitation Expenditure\"?",
    answer:
      "A QRE is a cost incurred for certified rehabilitation work on a certified historic structure. Wood refinishing that meets the Secretary of Interior's Standards — preserving original material, using approved methods — can be a QRE. Replacement of original woodwork with new material generally is not.",
  },
  {
    question: "Can you help me understand whether my project qualifies?",
    answer:
      "We can give you a working understanding of the standards and whether your project direction aligns with them. For a formal credit determination, you'll want to work with a preservation architect or SHPO consultant. We can work with them on the documentation side. Call Sue: (314) 367-6054.",
  },
];

export default function HistoricPreservationHubPage() {
  return (
    <>
      <TrustBar />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-6xl text-[#2A2421] mb-6 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Historic preservation wood refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-10 leading-relaxed">
            Hand-stripped, never dipped. The method the National Park Service recommends — and the one that keeps your project tax-credit eligible.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Free Preservation Consult — (314) 367-6054
          </a>
        </div>
      </section>

      {/* The tax credit angle */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Most homeowners in St. Louis&rsquo;s historic neighborhoods don&rsquo;t know this.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed mb-8">
            <p>
              If your home is in a certified historic district — Central West End, Lafayette Square, Soulard, Compton Heights, Shaw, and a dozen others — there&rsquo;s a real chance a meaningful portion of your wood refinishing project qualifies for historic preservation tax credits.
            </p>
            <p>
              Not a small deduction. Credits. Dollar for dollar against what you owe. The Missouri state program returns{" "}
              <strong className="text-[#2A2421]">25% of qualified rehabilitation expenditures</strong>{" "}
              for owner-occupied homes in St. Louis. Combined with the federal 20% credit for income-producing properties, eligible projects can see{" "}
              <strong className="text-[#2A2421]">45% of costs returned.</strong>
            </p>
            <p>
              Wood refinishing — restoring original doors, staircases, built-ins, and millwork — is exactly the work these programs were designed to support. It preserves the original material. It keeps the historic character. And when it&rsquo;s done right, it qualifies.
            </p>
          </div>
          <Link
            href="/historic-preservation/historic-tax-credits"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
          >
            Historic tax credits: the full guide <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Why Sue's method aligns with standards */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#2A2421", color: "#EBE6DE" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400, color: "#EBE6DE" }}
          >
            Hand-stripping is what the NPS recommends. <em>Dipping tensions the standards — and may cost you credits.</em>
          </h2>
          <div className="space-y-4 text-base font-sans leading-relaxed mb-8" style={{ color: "#9e9087" }}>
            <p>
              The Secretary of the Interior&rsquo;s Standards for Rehabilitation — the rulebook for all certified historic rehabilitations — explicitly call for the gentlest effective stripping method: hand-scraping, hand-sanding, with chemical strippers as a supplement. They do not endorse immersion stripping. A property owner whose contractor dips the woodwork may find those costs challenged as Qualified Rehabilitation Expenditures in a tax credit application.
            </p>
            <p style={{ color: "#EBE6DE" }}>
              Sue Wheeler has never dipped. For 36 years, every door, cabinet, piece of millwork, and staircase component has been stripped by hand. That method isn&rsquo;t just better for the wood. For a project pursuing preservation tax credits, it&rsquo;s the method that holds up to scrutiny.
            </p>
          </div>
          <Link
            href="/historic-preservation/secretary-of-interior-standards"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest hover:gap-3 transition-all"
            style={{ color: "#11B2E8" }}
          >
            NPS Standards and wood refinishing: the full breakdown <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Spoke navigation */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Where to go next.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <ServiceCard
              title="Historic Tax Credits Guide"
              description="Federal 20% + Missouri 25–35%. Who qualifies. What properties qualify. The math in real dollars."
              href="/historic-preservation/historic-tax-credits"
            />
            <ServiceCard
              title="Secretary of Interior's Standards"
              description="What the NPS actually says about stripping historic wood. Why hand-stripping is compliant and dipping isn't."
              href="/historic-preservation/secretary-of-interior-standards"
            />
            <ServiceCard
              title="St. Louis Historic Districts"
              description="Which neighborhoods qualify. What district type you're in. What that means for your credit eligibility."
              href="/historic-preservation/st-louis-historic-districts"
            />
          </div>
        </div>
      </section>

      {/* EPA Certification */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            EPA Certified Lead Renovator — required for preservation-compliant work on pre-1978 wood.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              All of St. Louis&rsquo;s certified historic districts contain homes built before 1978. All of them have lead paint on their original woodwork. A certified rehabilitation that doesn&rsquo;t handle lead paint correctly isn&rsquo;t compliant — and creates health, legal, and documentation exposure.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Renovator. Every pre-1978 project on historic woodwork includes proper containment, HEPA filtration, wet-sanding methods, and documented cleanup. The completion record goes in your property file — and supports your rehabilitation documentation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Common questions.
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock
        heading="Your historic woodwork may qualify for significant tax savings. Let's figure out together."
        subtext="Free preservation consult. Sue answers every call personally."
      />
    </>
  );
}
