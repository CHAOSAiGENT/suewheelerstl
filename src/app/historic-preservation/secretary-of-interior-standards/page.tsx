import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Secretary of Interior's Standards & Wood Refinishing St. Louis | Sue Wheeler",
  description:
    "What the NPS actually says about stripping historic wood — and why it matters for your tax credit eligibility. Hand-stripping is compliant. Dipping may not be.",
};

const faqs = [
  {
    question: "Are the Secretary of the Interior's Standards legally binding?",
    answer:
      "For tax credit purposes, yes — effectively. If your project is seeking certification as a certified rehabilitation to claim federal or state historic tax credits, the Standards are the benchmark against which your project is evaluated. A project that doesn't meet the Standards doesn't get certified. A project that isn't certified doesn't qualify for the credits.",
  },
  {
    question: "Do the Standards apply if I'm not seeking tax credits?",
    answer:
      "Not directly. If you're not pursuing credits, the Standards don't legally govern your project. But they're still the most authoritative guidance available on how to treat historic wood correctly — and following them is simply good practice for anyone who wants the work to last and the wood to be preserved.",
  },
  {
    question: "What is a \"certified rehabilitation\"?",
    answer:
      "A certified rehabilitation is a project that has been reviewed and approved by the National Park Service as meeting the Secretary of the Interior's Standards. To claim the federal Historic Tax Credit, your project must be a certified rehabilitation. The certification process runs through SHPO and the NPS in three parts — establishing the building's historic significance, documenting proposed work before construction, and certifying the completed project.",
  },
  {
    question: "Does hand-stripping always comply with the Standards?",
    answer:
      "Hand-stripping is the method the Standards most clearly endorse as the \"gentlest\" approach. It's what the NPS explicitly names as the preferred first step. Done correctly, it is unambiguously compliant. The Standards don't prohibit chemical strippers — they just require that they be used as a supplement to hand methods, not as a primary approach, and that the historic surface be protected from damage.",
  },
  {
    question: "What if the wood is in really bad shape?",
    answer:
      "The Standards allow replacement of \"extensively deteriorated\" sections, in-kind — meaning same material, same profile, same finish. Limited replacement of genuinely deteriorated portions is compliant. Wholesale replacement of elements that could have been repaired is not. The determination of \"beyond repair\" should be made by a professional who understands the Standards — not by a contractor who finds it faster to replace than restore.",
  },
  {
    question: "Where can I read the full Standards?",
    answer:
      "The NPS publishes the Standards and accompanying guidelines on their website. The wood-specific guidelines are detailed and worth reading if you're managing a major historic rehabilitation: nps.gov/crps/tps/rehab-guidelines/wood01.htm. The Standards overview is at nps.gov/orgs/1739/secretary-standards-treatment-historic-properties.htm.",
  },
];

export default function SecretaryOfInteriorStandardsPage() {
  return (
    <>
      <FAQSchema items={faqs} />

      {/* Breadcrumb */}
      <div className="px-6 py-4" style={{ backgroundColor: "#F8F6F1", borderBottom: "1px solid rgba(42,36,33,0.08)" }}>
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs font-sans text-[#6B5E55]">
            <Link href="/historic-preservation" className="hover:text-[#11B2E8] transition-colors">
              Historic Preservation
            </Link>
            <span className="mx-2" style={{ color: "#A65D37" }}>›</span>
            <span style={{ color: "#2A2421" }}>Secretary of Interior&rsquo;s Standards</span>
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
            What the National Park Service says about <em>stripping historic wood.</em>
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-10 leading-relaxed">
            The Secretary of the Interior&rsquo;s Standards for Rehabilitation have specific guidance on wood. If your project is pursuing historic tax credits — or just trying to do the work right — this is what matters.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Preservation Questions? Call Sue — (314) 367-6054
          </a>
        </div>
      </section>

      {/* Why these standards exist */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The rulebook for every certified historic rehabilitation in the country.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              The Secretary of the Interior&rsquo;s Standards for Rehabilitation are the official guidelines published by the National Park Service for appropriate treatment of historic buildings. They&rsquo;re not suggestions. Every project seeking certification as a &ldquo;certified rehabilitation&rdquo; — which is required to claim federal or state historic tax credits — must comply with them.
            </p>
            <p>
              They exist because historic buildings are irreplaceable. Once original material is damaged, destroyed, or removed, it can&rsquo;t be recovered. The Standards are designed to ensure that &ldquo;rehabilitation&rdquo; doesn&rsquo;t mean destroying what makes a building historic in the process of improving it.
            </p>
            <p>
              For wood specifically, the Standards are detailed, specific, and directly relevant to how any contractor approaches your doors, staircases, built-ins, and millwork.
            </p>
          </div>
        </div>
      </section>

      {/* What the standards say */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The NPS guidance on historic wood, translated.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-8 leading-relaxed">
            The Standards&rsquo; guidance on wood breaks into two clear lists: what to do, and what not to do.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6" style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}>
              <h3
                className="font-sans font-semibold text-sm uppercase tracking-widest mb-4"
                style={{ color: "#11B2E8" }}
              >
                What the Standards recommend:
              </h3>
              <ul className="space-y-3">
                {[
                  "Retain and preserve historic wood features that define a building's character — original doors, staircases, built-ins, millwork, wainscoting",
                  "Keep protective coatings (like paint and varnish) on wood surfaces; they prevent moisture damage and are often historically significant",
                  "Use the gentlest method available when removing deteriorated paint or finishes — hand-scraping and hand-sanding first, with chemical strippers as a supplement",
                  "Repair deteriorated wood with limited, in-kind replacement of only the portions that are beyond saving",
                  "Apply compatible new finish systems after proper surface preparation",
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
            </div>

            <div className="p-6" style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}>
              <h3
                className="font-sans font-semibold text-sm uppercase tracking-widest mb-4"
                style={{ color: "#A65D37" }}
              >
                What the Standards explicitly warn against:
              </h3>
              <ul className="space-y-3">
                {[
                  "Removing or significantly changing wood features that contribute to historic character",
                  "Stripping historically painted surfaces to bare wood for a \"natural look\" — the NPS says this directly: it changes the historic character",
                  "Using propane or butane torches on historic wood — destructive",
                  "Using sandblasting or waterblasting on historic wood — destructive and irreversible",
                  "Soaking detachable elements too long in caustic dipping solutions — the NPS specifically warns that oversoaking raises the grain and roughens the surface",
                  "Replacing an entire wood feature when repair with limited replacement would have been sufficient",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-sans text-[#6B5E55]">
                    <span
                      className="shrink-0 w-2 h-2 mt-1.5 rounded-full"
                      style={{ backgroundColor: "#A65D37" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm font-sans text-[#6B5E55] leading-relaxed italic">
            That second list is a direct description of what bad contractors do. And when your project goes before SHPO for tax credit certification, the methods used are part of what gets reviewed.
          </p>
        </div>
      </section>

      {/* Three methods */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Hand-stripping, dipping, and sandblasting — how they stack up against the NPS guidance.
          </h2>

          <div className="space-y-6">
            <div className="p-6" style={{ backgroundColor: "#EBE6DE", borderRadius: "2px", borderLeft: "4px solid #11B2E8" }}>
              <h3
                className="font-sans font-semibold text-[#2A2421] mb-3"
              >
                Hand-stripping: The method the Standards recommend
              </h3>
              <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">
                Strip the finish by hand — scrapers, chemical strippers applied carefully, hand-sanding. Remove only the finish, not the fiber. Work at the pace the wood tolerates. This is what the NPS calls &ldquo;gentlest methods first.&rdquo; It&rsquo;s the approach they explicitly name. It preserves the surface. It protects the wood grain. It keeps the wood alive for another hundred years.
              </p>
              <p className="mt-3 text-sm font-sans font-medium" style={{ color: "#11B2E8" }}>
                Unambiguously consistent with the Standards.
              </p>
            </div>

            <div className="p-6" style={{ backgroundColor: "#EBE6DE", borderRadius: "2px", borderLeft: "4px solid #A65D37" }}>
              <h3
                className="font-sans font-semibold text-[#2A2421] mb-3"
              >
                Dipping: Allowed with safeguards — but with a specific NPS warning
              </h3>
              <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">
                The NPS does allow caustic immersion stripping for detachable elements like doors and shutters, provided it&rsquo;s done with proper safeguards. The warning comes right alongside: <em>&ldquo;Do not allow detachable features to soak too long in caustic solution, since this can raise the grain and roughen the surface of the wood.&rdquo;</em>
              </p>
              <p className="mt-3 text-sm font-sans text-[#6B5E55] leading-relaxed">
                Too long in the tank means damaged wood. Damaged wood means compromised finish adhesion. And a project documentation that lists dipping as its primary method — without evidence of precise controls — may attract scrutiny from SHPO reviewers.
              </p>
              <p className="mt-3 text-sm font-sans font-medium" style={{ color: "#A65D37" }}>
                Permitted with safeguards. NPS warning applies.
              </p>
            </div>

            <div className="p-6" style={{ backgroundColor: "#2A2421", borderRadius: "2px" }}>
              <h3
                className="font-sans font-semibold mb-3"
                style={{ color: "#EBE6DE" }}
              >
                Sandblasting and waterblasting: Not recommended. Full stop.
              </h3>
              <p className="text-sm font-sans leading-relaxed" style={{ color: "#9e9087" }}>
                There&rsquo;s no nuance here. The NPS places sandblasting and waterblasting in the same &ldquo;not recommended&rdquo; category as propane torches. They are destructive, irreversible, and incompatible with preservation of historic wood. A contractor who proposes sandblasting historic woodwork is not working within the Standards — and your project will reflect that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The replacement trap */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Why replacing original wood can cost you your credits — and why refinishing is always the right first move.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              Here&rsquo;s the scenario that plays out in St. Louis historic homes more often than it should: A homeowner decides the original staircase in their Compton Heights Victorian &ldquo;needs to go.&rdquo; The treads are worn. A few spindles are cracked. One newel post has a chip. So they hire a contractor who tears out the whole staircase and installs a new oak one that looks — roughly — like the original.
            </p>
            <p>Three things have happened:</p>
            <div className="space-y-4 mt-4">
              {[
                {
                  label: "First",
                  text: "the original material is gone. Old-growth wood, dense and irreplaceable, is in a dumpster. The patina that took 120 years to develop is gone. No modern replacement matches what was there.",
                },
                {
                  label: "Second",
                  text: "the replacement may not qualify as a QRE. The Standards require repair unless the element is beyond repair. An element that could have been refinished and restored doesn't qualify for tax credit purposes when it's replaced instead.",
                },
                {
                  label: "Third",
                  text: "the project's overall certification may be at risk. SHPO reviewers look at the whole rehabilitation. A pattern of unnecessary replacement signals that the project isn't following the Standards.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-4"
                  style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
                >
                  <span className="font-sans font-bold text-sm shrink-0" style={{ color: "#A65D37" }}>{item.label}:</span>
                  <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              The right answer for those worn treads, cracked spindles, and chipped newel post: strip them by hand, fill the cracks with epoxy filler, repair the chip, stain them, seal them. They look beautiful. They&rsquo;re original. They qualify.
            </p>
          </div>
        </div>
      </section>

      {/* Compatible finishes */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The Standards don&rsquo;t require 19th-century shellac. But they do have requirements.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>A compatible finish system is one that is:</p>
            <ul className="space-y-2">
              {[
                "Visually appropriate for the historic character of the building — the sheen level, the tone, and the color are consistent with the historic appearance",
                "Chemically compatible with the historic substrate — it bonds properly and doesn't cause damage over time",
                "Applied after proper surface preparation — the old finish properly removed, the surface correctly sanded and cleaned",
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
            <p className="mt-4">
              Modern polyurethane — oil-based or water-based — qualifies when applied correctly. The Standards don&rsquo;t require you to replicate an 1890s finish formula. They require you to use a finish system that&rsquo;s appropriate and compatible.
            </p>
            <p>
              Sue Wheeler uses oil-based or water-based polyurethane exclusively — appropriate for historic residential woodwork, durable, and compatible with the original substrate in every case she encounters in St. Louis&rsquo;s historic homes.
            </p>
          </div>
        </div>
      </section>

      {/* How Sue's method aligns */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#2A2421", color: "#EBE6DE" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400, color: "#EBE6DE" }}
          >
            Thirty-six years of doing this the way the NPS recommends.
          </h2>
          <p className="text-base font-sans mb-6 leading-relaxed" style={{ color: "#9e9087" }}>
            Sue Wheeler&rsquo;s approach to wood refinishing aligns with the Secretary of the Interior&rsquo;s Standards in every material respect:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Hand-stripping — gentlest method, always the starting point",
              "Chemical strippers — used as a supplement to hand methods, not as the primary approach",
              "No dipping — on any element. Not doors, not panels, not detachable millwork",
              "No sandblasting — never. Not historical, not effective, not compliant",
              "Repair before replace — epoxy fill, custom patch, in-kind section replacement when truly necessary",
              "Polyurethane finishes only — oil-based or water-based, applied after proper prep",
              "Documentation — work methods and materials available for preservation application packages",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm font-sans" style={{ color: "#9e9087" }}>
                <span
                  className="shrink-0 w-2 h-2 mt-1.5 rounded-full"
                  style={{ backgroundColor: "#11B2E8" }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base font-sans leading-relaxed" style={{ color: "#9e9087" }}>
            This isn&rsquo;t a recent adjustment. It&rsquo;s how she&rsquo;s worked since 1989 — in the Central West End, Soulard, Lafayette Square, Shaw, Compton Heights, and every other historic neighborhood where St. Louis&rsquo;s original architectural woodwork lives.
          </p>
          <p className="mt-4 text-base font-sans leading-relaxed" style={{ color: "#EBE6DE" }}>
            When The Sheldon Concert Hall needed its doors refinished as part of an $11 million renovation, they called Sue. A 113-year-old City Landmark doesn&rsquo;t give that work to someone whose method might cause damage or create certification problems.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Common questions about the Standards.
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock
        heading="Have questions about whether your project approach aligns with the Standards?"
        subtext="Sue Wheeler understands these guidelines because she's been working within them for 36 years. She answers every call personally."
      />
    </>
  );
}
