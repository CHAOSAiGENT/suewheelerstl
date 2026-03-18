import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Institutional Wood Refinishing St. Louis | Sue Wheeler",
  description:
    "Wood refinishing for concert halls, churches, universities, and public buildings in St. Louis. EPA Certified. The Sheldon Concert Hall. Sue Wheeler, 36 years.",
};

const faqs = [
  {
    question: "What certifications are required for institutional wood refinishing in pre-1978 buildings?",
    answer:
      "EPA RRP certification for any project that disturbs lead-based paint. For preservation projects, familiarity with Secretary of Interior Standards is required to ensure the work qualifies as a Qualified Rehabilitation Expenditure. We hold EPA certification and work within preservation standards on every applicable project.",
  },
  {
    question: "Can you work while the building is occupied or in operation?",
    answer:
      "Yes — and for most institutional projects, that's a requirement. We section the work, schedule around events and services, and work overnight or on dark days as needed. We coordinate directly with your facilities director and events calendar.",
  },
  {
    question: "Does your work qualify for historic tax credits?",
    answer:
      "It can. Wood refinishing that meets Secretary of Interior Standards can be a Qualified Rehabilitation Expenditure for both the Federal Historic Tax Credit (20% of QREs) and the Missouri HTC (25% of QREs for income-producing properties in St. Louis). We document our work appropriately and can coordinate with your preservation architect or SHPO consultant.",
  },
  {
    question: "We have architects and a GC on this project. Can you work within that structure?",
    answer:
      "Yes. We're accustomed to working within a general contractor / architect / owner structure on institutional projects. We provide scope assessments, written specifications if needed, and documentation at project completion. Preliminary scope consultations are at no charge.",
  },
  {
    question: "How is institutional pricing structured?",
    answer:
      "By scope — square footage, current condition, finish specification, access constraints, and scheduling complexity. Institutional projects are not priced off a residential rate card. Call Sue directly at (314) 367-6054 for a scope conversation.",
  },
];

export default function InstitutionalHubPage() {
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
            Architectural woodwork refinishing for <em>St. Louis&rsquo;s</em> historic buildings and landmark spaces.
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-4 leading-relaxed">
            Some projects are straightforward. And then there are the ones where the wood is 120 years old, the building is on the National Register, and you can&rsquo;t make a mistake because the material is irreplaceable.
          </p>
          <p
            className="text-2xl font-sans font-semibold mb-10"
            style={{ color: "#A65D37", fontFamily: '"Playfair Display", Georgia, serif', fontStyle: "italic" }}
          >
            We do those projects.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Call for an Institutional Inquiry — (314) 367-6054
          </a>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Doors. Pews. Paneling. Casework. Staircases. <em>All of it.</em>
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-10 leading-relaxed max-w-2xl">
            We refinish the architectural woodwork that defines the character of historic and institutional spaces:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <ServiceCard
              title="Historic Venue Restoration"
              description="Concert halls, performance spaces, landmark buildings. The work that can't go wrong."
              href="/institutional-refinishing/historic-venue-restoration"
            />
            <ServiceCard
              title="Church & Religious Facility Woodwork"
              description="Pews, chancel furniture, doors, wainscoting. Work that honors the space."
              href="/institutional-refinishing/church-and-religious-facility-woodwork"
            />
            <ServiceCard
              title="University & Public Building Woodwork"
              description="Casework, paneling, reading rooms, administrative millwork."
              href="/institutional-refinishing/university-and-public-building-woodwork"
            />
          </div>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
            We also refinish in institutional settings: stair treads, risers, spindles, newel posts, railings; auditorium seating woodwork; mantels, columns, corbels, and pilasters; all room trim — baseboards, crown, chair rail, window casings. If it&rsquo;s architectural wood and it&rsquo;s in an institutional building, we know how to work with it.
          </p>
        </div>
      </section>

      {/* Why institutional clients choose Sue Wheeler */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            EPA Certification. Secretary of Interior Standards. <em>36 years in St. Louis.</em>
          </h2>
          <div className="space-y-8">
            <div>
              <h3
                className="text-xl text-[#2A2421] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                EPA Certification — Not Optional for Pre-1978 Buildings
              </h3>
              <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
                Under EPA RRP regulations, any renovation work that disturbs lead-based paint in a pre-1978 institutional building requires a certified renovator. Penalties for non-compliance run up to <strong className="text-[#2A2421]">$37,500 per violation per day</strong> — and the enforcement risk falls on the building operator, not just the contractor. Sue Wheeler is an EPA Certified Lead Renovator. Every pre-1978 project includes proper containment, certified testing, and full documentation that protects your organization and your compliance record.
              </p>
            </div>
            <div>
              <h3
                className="text-xl text-[#2A2421] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                We Know the Secretary of Interior&rsquo;s Standards
              </h3>
              <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
                The Secretary of the Interior&rsquo;s Standards for the Treatment of Historic Properties require the gentlest effective stripping method, preservation of historic finishes where possible, and maintenance of historic character. We work within these standards as a matter of practice. If your project requires compliance for a Federal Historic Tax Credit or Missouri HTC application, we understand what a Qualified Rehabilitation Expenditure is and how our work is documented to support your application.
              </p>
            </div>
            <div>
              <h3
                className="text-xl text-[#2A2421] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                We Work Around Your Schedule
              </h3>
              <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
                Concert halls have performances. Churches have services. Universities have classes. We work in sections, work overnight, and coordinate with your events calendar. The project fits your schedule — not the other way around.
              </p>
            </div>
            <div>
              <h3
                className="text-xl text-[#2A2421] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                We Answer the Phone.
              </h3>
              <p
                className="text-base font-sans leading-relaxed p-5"
                style={{
                  backgroundColor: "#F8F6F1",
                  borderLeft: "3px solid #A65D37",
                  color: "#2A2421",
                  borderRadius: "2px",
                }}
              >
                When you call Sue Wheeler, Sue Wheeler answers. Not a scheduler. Not a subcontractor. The person who will be on the job. For facilities managers used to being bounced through call centers and back to the foreman, this is not a small thing.
              </p>
            </div>
          </div>
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
            When The Sheldon needed a wood specialist, <em>they called Sue.</em>
          </h2>
          <div className="space-y-4 text-base font-sans leading-relaxed mb-8" style={{ color: "#9e9087" }}>
            <p>
              The Sheldon Concert Hall — a City of St. Louis Landmark designed by Louis C. Spiering in 1912 — completed an $11 million renovation. The doors of The Sheldon are original to the building, crafted in materials and techniques of their era, and impossible to replace in kind.
            </p>
            <p>
              The renovation team needed someone with landmark experience, EPA certification, and a documented understanding of preservation standards. They called Sue Wheeler.
            </p>
            <p>
              The work required hand-stripping existing finish layers from doors with over a century of use, addressing structural issues at the wood level, and refinishing to a specification that restored original character while meeting preservation requirements. Completed on schedule. On the landmark standard.
            </p>
            <p style={{ color: "#EBE6DE" }}>
              The Sheldon&rsquo;s doors look exactly like they should — because they are the original doors, refinished right.
            </p>
          </div>
          <Link
            href="/institutional-refinishing/historic-venue-restoration"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest hover:gap-3 transition-all"
            style={{ color: "#11B2E8" }}
          >
            Historic venue restoration <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Common questions from institutional clients.
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock
        heading="Your landmark building deserves the specialist."
        subtext="EPA Certified. Preservation-qualified. 36 years in St. Louis. Sue answers every call personally."
      />
    </>
  );
}
