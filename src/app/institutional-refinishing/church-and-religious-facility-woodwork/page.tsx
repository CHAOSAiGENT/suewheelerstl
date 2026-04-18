import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Church Wood Refinishing St. Louis | Pews, Chancel Rails, Doors",
  description:
    "Pew, chancel rail, door, and wainscoting refinishing for St. Louis churches and religious facilities. Grant-eligible. EPA Certified. Sue Wheeler. Call today.",
};

const faqs = [
  {
    question: "Can you refinish pews without disrupting our weekly services?",
    answer:
      "Yes — and that's how we structure every church project. We work in sections, contain and complete work on a section before services, and return seating to use before the congregation arrives. For churches with daily services, the schedule is tighter but manageable. We work that out with your facilities coordinator before we start.",
  },
  {
    question: "Does our church qualify for historic tax credits on this work?",
    answer:
      "It depends on your building's historic status and how the property is used. Churches that are listed on the National Register or in certified historic districts, and have income-producing uses (rental of hall, event space, etc.), may qualify for the Federal HTC. Missouri's state credit has broader eligibility for certain nonprofit structures. We recommend speaking with a preservation architect or SHPO consultant for your specific situation — but we can provide documentation of our work in the format those applications require.",
  },
  {
    question: "The wood in our sanctuary has been painted over several times. Can you return it to original stained wood?",
    answer:
      "Often yes. Stained church woodwork that was painted in a later era can frequently be restored if the original finish and wood surface are intact underneath. We strip and assess before committing to a result. If the original finish isn't recoverable, we'll tell you what the realistic options are.",
  },
  {
    question: "Can you match finish stain across sections that are in different conditions?",
    answer:
      "Yes. Working across sections in different conditions — some worn, some failed, some already repaired with incompatible finishes — is standard on church projects. We document existing stain profiles at the start and match across sections as we work.",
  },
];

export default function ChurchWoodworkPage() {
  return (
    <>
      <FAQSchema items={faqs} />

      {/* Breadcrumb */}
      <div className="px-6 py-4" style={{ backgroundColor: "#F8F6F1", borderBottom: "1px solid rgba(42,36,33,0.08)" }}>
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs font-sans text-[#6B5E55]">
            <Link href="/institutional-refinishing" className="hover:text-[#11B2E8] transition-colors">
              Institutional Refinishing
            </Link>
            <span className="mx-2" style={{ color: "#A65D37" }}>›</span>
            <span style={{ color: "#2A2421" }}>Church &amp; Religious Facility Woodwork</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-6xl text-[#2A2421] mb-6 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Church and religious facility wood refinishing in <em>St. Louis.</em>
          </h1>
          <p
            className="text-xl font-sans mb-10 leading-relaxed italic"
            style={{ color: "#6B5E55", fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            These pews have held a century of prayers. The finish should honor that.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Call for a Church Wood Assessment — (314) 367-6054
          </a>
        </div>
      </section>

      {/* Wood that holds more than finish */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Wood that holds more than finish.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              The woodwork in a historic St. Louis church is not decorative. The pews were built for the congregation. The chancel rail has been touched by generations of worshipers. The doors have opened for every baptism, confirmation, funeral, and Sunday service the building has seen. The wainscoting and panel work define the atmosphere of a space where people come to mark the most significant moments of their lives.
            </p>
            <p>
              When the finish on that wood fails, it reads throughout the sanctuary. The worn pew backs, the dull chancel rail, the scuffed door trim — they tell congregants that the building isn&rsquo;t being cared for. Refinishing tells them it is.
            </p>
          </div>
        </div>
      </section>

      {/* What we do in religious facilities */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What we do in religious facilities.
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Pews and chancel furniture",
                body: "We refinish pews and chancel woodwork in sections, working around your service schedule. Sections of seating are taken out of use during active refinishing and returned before the next service. For churches with weekly services, we develop a room-by-room or section-by-section plan that keeps the sanctuary functional throughout.",
              },
              {
                title: "Chancel rails, altars, and sacristy woodwork",
                body: "This is the most carefully handled work we do. We treat the chancel area with the respect the space requires: proper containment for lead-safe work, careful masking around any sacred objects, and finish specifications selected to honor the material.",
              },
              {
                title: "Doors — entry, sacristy, vestry",
                body: "Original church doors are irreplaceable. We hand-strip and refinish to preserve their profile and character. Board-up method where the door can be removed; on-premise where it can't.",
              },
              {
                title: "Panel wainscoting and wall paneling",
                body: "The full-height paneling that defines a sanctuary interior is some of the finest architectural woodwork in St. Louis. We've refinished paneled sanctuaries, parish halls, and rectory interiors. We match stain profiles across sections and work within the building's historical character.",
              },
              {
                title: "Narthex and common area millwork",
                body: "The trim and millwork in narthex, vestibules, and common areas sets the tone before a visitor enters the sanctuary. We treat it as part of the whole.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5"
                style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
              >
                <h3 className="font-sans font-semibold text-[#2A2421] mb-2">{item.title}</h3>
                <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant eligibility */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Grant eligibility and historic tax credits.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed mb-8">
            <p>
              Many St. Louis religious facilities are in certified historic districts or listed on the National Register, making qualifying rehabilitation work eligible for federal and state historic tax credits. The 2024 rule change expanded eligibility for nonprofits in certain structures — and the Federal Historic Tax Credit is now available on a broader basis for income-producing portions of religious properties.
            </p>
            <p>
              Wood refinishing that meets Secretary of Interior Standards can be a Qualified Rehabilitation Expenditure. Our work is documented to support those applications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/historic-preservation/historic-tax-credits"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
            >
              Historic tax credits guide <ArrowRight size={12} />
            </Link>
            <Link
              href="/historic-preservation/secretary-of-interior-standards"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
            >
              Secretary of Interior Standards <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* EPA */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#2A2421", color: "#EBE6DE" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400, color: "#EBE6DE" }}
          >
            EPA Certified for pre-1978 church buildings.
          </h2>
          <div className="space-y-4 text-base font-sans leading-relaxed" style={{ color: "#9e9087" }}>
            <p>
              The woodwork in St. Louis&rsquo;s historic churches — most of them built between 1860 and 1940 — contains lead paint. Stripping it requires EPA-certified protocols. In a sanctuary where members of all ages are present, proper containment isn&rsquo;t optional. Sue Wheeler is an EPA Certified Lead Removal. Every pre-1978 project includes proper containment and documented cleanup.
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
        heading="Your sanctuary woodwork deserves the right approach."
        subtext="Sue answers every call personally. Preliminary scope consultations at no charge."
      />
    </>
  );
}
