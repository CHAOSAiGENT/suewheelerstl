import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Historic Venue Wood Restoration St. Louis | Sue Wheeler",
  description:
    "Wood restoration for historic concert halls and performance venues in St. Louis. The Sheldon Concert Hall, $11M renovation. EPA Certified. Sue Wheeler. Call today.",
};

const faqs = [
  {
    question: "Does historic venue wood restoration qualify for tax credits?",
    answer:
      "It can. If the venue is an income-producing historic property and the work meets Secretary of Interior Standards, wood restoration can be a Qualified Rehabilitation Expenditure for the Federal Historic Tax Credit (20%) and Missouri HTC (25% in St. Louis). We document our work appropriately for these applications.",
  },
  {
    question: "Can you work within a GC-managed renovation project?",
    answer:
      "Yes. We're accustomed to working within a general contractor / architect / owner structure. We provide written scope assessments, coordinate with other trades, and deliver documentation at project completion. Preliminary consultations at no charge.",
  },
  {
    question: "How do you handle lead paint in a public-access historic building?",
    answer:
      "Full EPA RRP protocol — proper containment, HEPA filtration, certified testing, wet methods, documented cleanup. For venues with ongoing public programming, we work in sections and during access windows so contained work areas don't intersect with occupied spaces.",
  },
  {
    question: "My venue is considering refinishing original doors from the 1880s–1920s. What's the assessment process?",
    answer:
      "We do a walk-through, assess each door's current finish condition, identify any structural issues, and develop a written scope and approach. For preservation projects, we consult on standards compliance as part of that assessment. Preliminary scope consultations are at no charge.",
  },
];

export default function HistoricVenueRestorationPage() {
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
            <span style={{ color: "#2A2421" }}>Historic Venue Restoration</span>
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
            Historic venue wood restoration in <em>St. Louis.</em>
          </h1>
          <p className="text-xl font-sans mb-10 leading-relaxed" style={{ color: "#A65D37" }}>
            The Sheldon Concert Hall. $11 million renovation. They called Sue Wheeler.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Call for a Historic Venue Consult — (314) 367-6054
          </a>
        </div>
      </section>

      {/* Work where getting it wrong isn't an option */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Work where getting it wrong isn&rsquo;t an option.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
            Historic performance venues occupy a unique position in the preservation landscape. The woodwork in a concert hall — the doors, the paneling, the auditorium millwork, the case trim — was selected and installed by craftsmen working at the peak of the building trade, in materials that no longer exist in commercial supply. Getting it wrong means damaging something that cannot be replaced. The standard for this work isn&rsquo;t good. It&rsquo;s exact.
          </p>
        </div>
      </section>

      {/* The Sheldon */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#2A2421", color: "#EBE6DE" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400, color: "#EBE6DE" }}
          >
            The Sheldon Concert Hall.
          </h2>
          <div className="space-y-4 text-base font-sans leading-relaxed" style={{ color: "#9e9087" }}>
            <p>
              In 2025, The Sheldon Concert Hall — a City of St. Louis Landmark designed by architect Louis C. Spiering in 1912 — completed an $11 million renovation. The Sheldon&rsquo;s doors are original to the building. Refinishing them required hand-stripping over a century of accumulated finish layers, addressing wood-level structural conditions, and applying a specification that restored the doors&rsquo; original character while meeting current preservation requirements.
            </p>
            <p>
              The renovation team chose Wood Refinishing by Sue Wheeler.
            </p>
            <p>
              The project was completed on schedule, on the landmark standard, within the constraints of an active renovation project. The Sheldon&rsquo;s doors look exactly as they should: like the original 1912 doors they are, properly maintained.
            </p>
            <p style={{ color: "#EBE6DE", fontStyle: "italic" }}>
              This is the kind of work we do — and it informs how we approach every institutional project, regardless of scale.
            </p>
          </div>
        </div>
      </section>

      {/* What historic venue restoration involves */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What historic venue wood restoration involves.
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Documentation and assessment first.",
                body: "Before stripping begins, we document existing conditions — finish layers, wood condition, existing damage, any previous repairs. This documentation supports preservation compliance and establishes a baseline.",
              },
              {
                title: "Hand-strip only.",
                body: "No dip tanks. No shortcuts that compromise the wood's integrity. Chemical stripping as a supplement to hand methods where volume requires it, but never as the primary approach. The profiles, the grain, the structural integrity of the wood are preserved through the process.",
              },
              {
                title: "Secretary of Interior Standards compliance.",
                body: "For buildings on the National Register or in preservation programs, we work within the Standards: gentlest effective method, retention of historic character, compatibility of new finishes with the existing material.",
              },
              {
                title: "Finish selection for the application.",
                body: "Historic venue wood requires finishes that perform for decades. We select polyurethane specifications appropriate to the use level and the exposure of each surface — entry doors get different specs than interior millwork.",
              },
              {
                title: "Full documentation at completion.",
                body: "Condition reports, materials used, methods, finish specifications. Everything a preservation architect or SHPO consultant needs to support a tax credit application or compliance audit.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5"
                style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
              >
                <div
                  className="shrink-0 w-1.5 self-stretch"
                  style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
                />
                <div>
                  <h3 className="font-sans font-semibold text-sm text-[#2A2421] mb-1">{item.title}</h3>
                  <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EPA */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            EPA Certification for pre-1978 landmark buildings.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-6 leading-relaxed">
            Every significant historic building in St. Louis predates 1978. The woodwork contains lead paint. EPA RRP certification is required for any stripping work — and in a landmark building where public access is ongoing, proper containment isn&rsquo;t optional. Sue Wheeler is an EPA Certified Lead Renovator. All pre-1978 venue projects include certified protocols and documented cleanup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/historic-preservation/secretary-of-interior-standards"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
            >
              Secretary of Interior Standards and wood refinishing <ArrowRight size={12} />
            </Link>
            <Link
              href="/historic-preservation/historic-tax-credits"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
            >
              Historic tax credits guide <ArrowRight size={12} />
            </Link>
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
        heading="Your landmark venue deserves the specialist."
        subtext="Sue answers every call personally. Preliminary scope consultations at no charge."
      />
    </>
  );
}
