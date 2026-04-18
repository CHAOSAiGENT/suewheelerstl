import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "University Wood Refinishing St. Louis | WashU, SLU, Public Buildings",
  description:
    "Casework, paneling, and library woodwork refinishing for St. Louis universities and public buildings. EPA Certified. NPS Standards. Sue Wheeler. Call today.",
};

const faqs = [
  {
    question: "Can you work in a library or building that's open to the public?",
    answer:
      "Yes. We section the work and contain active refinishing areas separately from occupied space. For libraries with daily patron access, we work in areas that can be temporarily closed (individual rooms, sections of stacks, after-hours in main reading rooms) while the rest of the building stays open.",
  },
  {
    question: "Does our university building qualify for historic tax credits?",
    answer:
      "It depends on the building's historic status and how the property generates income. Many university buildings on the National Register in income-producing use (conference centers, event spaces, rental facilities) qualify for the Federal HTC. Missouri's program has broader eligibility provisions. We recommend consulting a preservation architect or SHPO consultant, and we provide documentation to support those applications.",
  },
  {
    question: "Our facilities team changes frequently. How do you ensure continuity on long or phased projects?",
    answer:
      "Written scope documentation and specifications at every phase. We document current conditions, work performed, materials, and finish specs in a format your facilities team can use regardless of staff turnover. For ongoing maintenance, we recommend a maintenance contract that defines the schedule and scope in writing.",
  },
  {
    question: "Can you coordinate with a general contractor on a larger renovation project?",
    answer:
      "Yes. We work within GC-managed projects regularly. We can provide written specifications for the wood refinishing scope, coordinate access and sequencing with other trades, and deliver completion documentation in the format the GC or owner requires.",
  },
];

export default function UniversityPublicBuildingPage() {
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
            <span style={{ color: "#2A2421" }}>University &amp; Public Building Woodwork</span>
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
            University and public building wood refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-10 leading-relaxed">
            The casework in your reading room isn&rsquo;t furniture. It&rsquo;s architecture. Treat it accordingly.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Call for a Facilities Consult — (314) 367-6054
          </a>
        </div>
      </section>

      {/* Institutional wood that defines the building */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Institutional wood that defines the building.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              University buildings, public libraries, government facilities, and civic institutions in St. Louis share a common characteristic: they were built to last, and their woodwork was part of that intention. The reading room casework at a Carnegie-era library, the paneled offices of an early 20th-century administrative building, the auditorium millwork of a university chapel — these aren&rsquo;t decorative choices. They are the building.
            </p>
            <p>
              When institutional wood reaches the end of its current finish cycle, the choice isn&rsquo;t between refinishing and replacement. Replacement with new materials that match the original isn&rsquo;t possible. The wood species, the density, the profile detail — none of it exists in commercial supply. Refinishing is the only path that preserves what&rsquo;s there.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What we do in university and public buildings.
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Library and reading room casework",
                body: "Built-in shelving, reading tables, case trim, and surround work in library settings. We work in sections around library hours and program schedules.",
              },
              {
                title: "Administrative and office paneling",
                body: "Full-height paneling, wainscoting, and millwork in faculty offices, administrative suites, and boardrooms. We match stain profiles across sections and document specifications for future maintenance.",
              },
              {
                title: "Auditorium and chapel woodwork",
                body: "Stage surrounds, pew and seating woodwork, chancel elements, balcony millwork. We refinish in sections around event and service schedules.",
              },
              {
                title: "Corridor and common area millwork",
                body: "The trim and millwork in high-traffic circulation spaces takes constant contact. We use durability finishes rated for the use level.",
              },
              {
                title: "Historic building entry woodwork",
                body: "Entry doors, vestibule millwork, and lobby surround in buildings that make a statement before a visitor reaches the interior.",
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

      {/* Working with architects, GCs */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Working with architects, GCs, and facilities directors.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-6 leading-relaxed">
            Most institutional wood refinishing projects involve a team: a facilities director managing operations, an architect specifying the work, sometimes a GC coordinating trades. We&rsquo;re accustomed to working within that structure.
          </p>
          <p className="text-base font-sans text-[#6B5E55] mb-4 leading-relaxed">We provide:</p>
          <ul className="space-y-2 mb-6">
            {[
              "Preliminary scope assessments at no charge",
              "Written specifications if required by the architect",
              "Coordination with other trades on the project schedule",
              "Full documentation at project completion (condition reports, materials, methods, finish specs)",
              "EPA certification records for lead-safe compliance audits",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm font-sans text-[#6B5E55]">
                <span
                  className="shrink-0 w-2 h-2 mt-1.5 rounded-full"
                  style={{ backgroundColor: "#11B2E8" }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
            For buildings undergoing qualifying rehabilitation, our documentation is structured to support Federal and Missouri Historic Tax Credit applications.
          </p>
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
            EPA Certified for pre-1978 university and public buildings.
          </h2>
          <div className="space-y-4 text-base font-sans leading-relaxed" style={{ color: "#9e9087" }}>
            <p>
              The construction dates of St. Louis&rsquo;s most significant university and civic buildings — WashU&rsquo;s Brookings Hall (1902), the St. Louis Central Library (1912), SLU&rsquo;s DuBourg Hall (1888) — mean that every one of them carries lead paint in its finish history. EPA RRP certification is required for any stripping work. In buildings with ongoing public access, proper containment is especially critical.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal. Every pre-1978 institutional project includes certified protocols and documented cleanup.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/historic-preservation/secretary-of-interior-standards"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest hover:gap-3 transition-all"
              style={{ color: "#11B2E8" }}
            >
              Secretary of Interior Standards <ArrowRight size={12} />
            </Link>
            <Link
              href="/historic-preservation/historic-tax-credits"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest hover:gap-3 transition-all"
              style={{ color: "#11B2E8" }}
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
        heading="Let's talk about your building's woodwork."
        subtext="Sue answers every call personally. Preliminary scope consultations at no charge."
      />
    </>
  );
}
