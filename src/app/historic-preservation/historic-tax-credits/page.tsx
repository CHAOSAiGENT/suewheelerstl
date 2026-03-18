import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Historic Tax Credits St. Louis | Wood Refinishing Guide | Sue Wheeler",
  description:
    "Federal 20% + Missouri 25–35% historic tax credits can return up to 45% of qualifying wood refinishing costs. Which STL homes qualify? Sue Wheeler explains.",
};

const faqs = [
  {
    question: "Does wood refinishing qualify as a qualified rehabilitation expenditure?",
    answer:
      "Yes, in most cases. Refinishing original doors, staircases, built-ins, and millwork — stripping the old finish, repairing damaged sections, staining, and sealing — preserves the historic fabric of the building. It qualifies as a QRE when done in compliance with the Secretary of the Interior's Standards. What may not qualify: replacing original woodwork with new material when the original could have been repaired.",
  },
  {
    question: "Can I qualify if my home is my primary residence?",
    answer:
      "Yes — for the Missouri state credit. The Missouri state historic tax credit is available for owner-occupied residential properties. The federal 20% credit is limited to income-producing properties. So if you live in your historic home, you can potentially receive 25% of your qualified wood restoration costs back as a state tax credit.",
  },
  {
    question: "What's the difference between a deduction and a credit?",
    answer:
      "A deduction reduces your taxable income. A credit reduces your tax bill directly. A $10,000 credit means $10,000 less owed — dollar for dollar. Historic preservation tax credits are credits, not deductions.",
  },
  {
    question: "Nonprofits weren't eligible before. What changed?",
    answer:
      "In August 2024, Missouri expanded the state program to include nonprofit organizations. If your nonprofit owns a certified historic structure, the 25% state credit now applies to qualifying rehabilitation work. Governmental entities remain ineligible. The federal credit has separate rules for nonprofits — consult your tax advisor.",
  },
  {
    question: "When should I contact SHPO?",
    answer:
      "Before you do anything. SHPO offers advisory consultations at no cost — call 573-751-7860. Getting their informal read on your property's eligibility and your proposed approach before you submit anything can prevent costly mistakes later. The most important rule: do not start work before your Part 2 application is approved.",
  },
  {
    question: "Does the dipping method affect credit eligibility?",
    answer:
      "Potentially yes. The Secretary of the Interior's Standards call for the gentlest effective method — hand-scraping and hand-sanding, with chemical strippers as a supplement. Dipping is permitted for detachable elements with proper safeguards, but the NPS specifically warns against soaking too long (which raises the grain and damages the surface). A project that documents dipping as its primary method may attract scrutiny during SHPO review. Hand-stripping — Sue Wheeler's method — is the approach most clearly aligned with the Standards.",
  },
  {
    question: "My house is in Lafayette Square. Do I qualify?",
    answer:
      "Lafayette Square is one of St. Louis's most significant historic neighborhoods and is designated as a Local Historic District. It is not currently a Certified Local Historic District, so certification eligibility requires SHPO confirmation for each property. Many individual properties in Lafayette Square are listed on the National Register or are contributing structures in an NR district. Call SHPO at 573-751-7860, or call Sue — she's worked in Lafayette Square for decades and can give you a working read on likely eligibility.",
  },
];

export default function HistoricTaxCreditsPage() {
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
            <span style={{ color: "#2A2421" }}>Historic Tax Credits</span>
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
            Historic tax credits and your wood refinishing project in <em>St. Louis.</em>
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-10 leading-relaxed">
            In St. Louis, your original woodwork isn&rsquo;t just beautiful. In the right circumstances, it can help you qualify for significant tax savings — dollar for dollar.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Call Sue with Questions — (314) 367-6054
          </a>
        </div>
      </section>

      {/* Credits not deductions */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Credits, not deductions. Real money back.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              Most homeowners in St. Louis&rsquo;s historic neighborhoods have heard the phrase &ldquo;historic tax credits&rdquo; but don&rsquo;t understand what they mean in practice. Here&rsquo;s the plain version:
            </p>
            <p>
              A <strong className="text-[#2A2421]">tax credit</strong> is not a deduction. A deduction reduces your taxable income. A credit reduces your tax bill directly — dollar for dollar against what you owe. A $10,000 tax credit means $10,000 less in taxes owed, not $10,000 less in taxable income.
            </p>
            <p>
              The Missouri state historic tax credit returns <strong className="text-[#2A2421]">25% of qualified rehabilitation expenditures</strong> for owner-occupied homes in St. Louis City. On a $40,000 wood restoration project in Soulard or the Central West End, that&rsquo;s potentially <strong className="text-[#2A2421]">$10,000 back</strong>. On a $100,000 project, it&rsquo;s $25,000.
            </p>
            <p>
              For income-producing properties — rental buildings, commercial spaces, mixed-use — the federal 20% credit stacks on top. Combined, that&rsquo;s <strong className="text-[#2A2421]">45% of costs returned</strong> on a qualifying project.
            </p>
            <p>
              Wood refinishing — restoring original doors, staircases, built-ins, and millwork — is exactly the work these programs were designed to support. It preserves the original material. When it&rsquo;s done correctly, it qualifies.
            </p>
          </div>
        </div>
      </section>

      {/* The two programs */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The federal credit and the Missouri state credit.
          </h2>

          <div className="space-y-10">
            <div>
              <h3
                className="text-xl text-[#2A2421] mb-4"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                The Federal Historic Tax Credit: 20% for income-producing properties
              </h3>
              <div className="space-y-3 text-base font-sans text-[#6B5E55] leading-relaxed">
                <p>
                  The federal Historic Tax Credit has been in place since 1976. It offers a <strong className="text-[#2A2421]">20% credit on qualified rehabilitation expenditures (QREs)</strong> for certified historic structures — and it applies only to income-producing properties. If your historic home is your primary residence, this one doesn&rsquo;t apply to you directly. If you own a rental building, a commercial space, or a mixed-use property in a historic district, it may apply significantly.
                </p>
                <ul className="space-y-2 mt-4">
                  {[
                    "The building must be a certified historic structure — either individually listed on the National Register, or a contributing structure in a certified historic district",
                    "The rehabilitation must follow the Secretary of the Interior's Standards",
                    "Qualified expenditures must exceed the greater of $5,000 or the adjusted basis of the building (the \"substantial rehabilitation\" test)",
                    "The credit is claimed ratably over 5 years — 4% per year. Unused credits carry back one year or forward twenty",
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
                <p className="mt-4">
                  The application runs through the National Park Service in three parts: confirming historic significance (Part 1), documenting proposed work before construction begins (Part 2), and certifying completed work (Part 3). <strong className="text-[#2A2421]">Part 2 approval before you break ground is non-negotiable</strong> — expenses incurred before Part 2 approval may not qualify.
                </p>
              </div>
            </div>

            <div>
              <h3
                className="text-xl text-[#2A2421] mb-4"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                The Missouri State Historic Tax Credit: 25% for owner-occupied homes — and everyone else
              </h3>
              <div className="space-y-3 text-base font-sans text-[#6B5E55] leading-relaxed">
                <p>
                  Missouri&rsquo;s state program, administered by the Department of Economic Development and the State Historic Preservation Office (SHPO), is the one that opens the door for homeowners.
                </p>
                <ul className="space-y-2 mt-4">
                  {[
                    "25% of qualified rehabilitation expenditures for projects in St. Louis City and Kansas City",
                    "35% of QREs for projects elsewhere in Missouri (non-LIHTC projects)",
                    "Available for both commercial and owner-occupied residential properties — unlike the federal credit",
                    "Nonprofits became eligible in August 2024 — churches, arts organizations, and community development entities now qualify",
                    "Can be combined with the federal credit for income-producing properties",
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
            </div>
          </div>
        </div>
      </section>

      {/* The math */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What 45% actually means — with real numbers.
          </h2>

          <div className="mb-10">
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-[#6B5E55] mb-4">
              For a rental or commercial property in a St. Louis historic district:
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#2A2421", color: "#EBE6DE" }}>
                    <th className="text-left px-4 py-3">Project Cost</th>
                    <th className="text-right px-4 py-3">Federal (20%)</th>
                    <th className="text-right px-4 py-3">Missouri (25%)</th>
                    <th className="text-right px-4 py-3 font-bold">Combined Return</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cost: "$50,000", federal: "$10,000", mo: "$12,500", combined: "$22,500" },
                    { cost: "$100,000", federal: "$20,000", mo: "$25,000", combined: "$45,000" },
                    { cost: "$200,000", federal: "$40,000", mo: "$50,000", combined: "$90,000" },
                  ].map((row, i) => (
                    <tr
                      key={row.cost}
                      style={{ backgroundColor: i % 2 === 0 ? "#EBE6DE" : "#F8F6F1" }}
                    >
                      <td className="px-4 py-3 text-[#2A2421]">{row.cost}</td>
                      <td className="px-4 py-3 text-right text-[#6B5E55]">{row.federal}</td>
                      <td className="px-4 py-3 text-right text-[#6B5E55]">{row.mo}</td>
                      <td className="px-4 py-3 text-right font-bold" style={{ color: "#A65D37" }}>{row.combined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-[#6B5E55] mb-4">
              For an owner-occupied home in a St. Louis historic district (Missouri state credit only):
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#2A2421", color: "#EBE6DE" }}>
                    <th className="text-left px-4 py-3">Project Cost</th>
                    <th className="text-right px-4 py-3">Missouri (25%)</th>
                    <th className="text-right px-4 py-3 font-bold">Return</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cost: "$20,000", mo: "25%", back: "$5,000 back" },
                    { cost: "$40,000", mo: "25%", back: "$10,000 back" },
                    { cost: "$80,000", mo: "25%", back: "$20,000 back" },
                  ].map((row, i) => (
                    <tr
                      key={row.cost}
                      style={{ backgroundColor: i % 2 === 0 ? "#EBE6DE" : "#F8F6F1" }}
                    >
                      <td className="px-4 py-3 text-[#2A2421]">{row.cost}</td>
                      <td className="px-4 py-3 text-right text-[#6B5E55]">{row.mo}</td>
                      <td className="px-4 py-3 text-right font-bold" style={{ color: "#A65D37" }}>{row.back}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs font-sans text-[#6B5E55] mt-3">
              These are credits — not deductions. Every dollar in the &ldquo;return&rdquo; column comes off your tax bill directly.
            </p>
          </div>
        </div>
      </section>

      {/* Who qualifies */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Three property types that can qualify.
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Owner-occupied residential homeowners",
                body: "You own and live in the home as your primary residence. The home is a certified historic structure or a contributing building in a certified historic district. Missouri state credit only — 25% of QREs in St. Louis.",
              },
              {
                title: "Commercial and rental property owners",
                body: "An income-producing property — commercial, mixed-use, or residential rental — in a certified historic district. The property must be a certified historic structure. Stacks both the 20% federal and 25% Missouri state credits for a 45% combined benefit in St. Louis.",
              },
              {
                title: "Nonprofit organizations (as of August 2024)",
                body: "Missouri expanded state credit eligibility to nonprofit organizations in August 2024. If your nonprofit owns a certified historic structure and undertakes a qualifying rehabilitation, the 25% state credit now applies. Governmental entities remain ineligible. Federal credit eligibility for nonprofits is limited — consult your tax advisor.",
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
                  <h3 className="font-sans font-semibold text-[#2A2421] mb-2">{item.title}</h3>
                  <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which properties qualify */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What makes a building eligible — the three categories.
          </h2>
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "Individually listed on the National Register of Historic Places",
                body: "The building itself carries a National Register listing. This is the most direct form of eligibility. Many significant buildings throughout St. Louis City qualify this way, including commercial landmarks, institutional buildings, and prominent residences.",
              },
              {
                num: "2",
                title: "Contributing structure in a certified historic district",
                body: "The building sits within a federally certified historic district and is identified as a \"contributing structure\" — meaning it retains the character-defining features that make the district historically significant. This is how the majority of historic district homes in St. Louis qualify. You don't need an individual listing. District membership plus contributing status is enough.",
              },
              {
                num: "3",
                title: "Certified local historic district (Missouri state credit)",
                body: "For the Missouri state program, eligibility may extend to structures in locally certified historic districts, subject to SHPO review and approval. St. Louis City has eight Certified Local Historic Districts and ten Local Historic Districts — properties in the certified districts have the strongest claim.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-5 p-5"
                style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
              >
                <div
                  className="shrink-0 w-8 h-8 flex items-center justify-center text-sm font-sans font-bold text-white"
                  style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-[#2A2421] mb-2">{item.title}</h3>
                  <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/historic-preservation/st-louis-historic-districts"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
            >
              Which St. Louis neighborhoods qualify? Full district guide <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why refinishing qualifies */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Method matters. This is the part most contractors don&rsquo;t tell you.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed mb-6">
            <p>
              The National Park Service&rsquo;s Secretary of the Interior&rsquo;s Standards for Rehabilitation — the rulebook for all certified historic rehabilitations — state explicitly that you should:
            </p>
            <ul className="space-y-2">
              {[
                "Retain and preserve historic wood features that define a building's character",
                "Repair deteriorated elements, using limited in-kind replacement only when repair is not feasible",
                "Use the gentlest methods when removing deteriorated finishes: hand-scraping, hand-sanding, with chemical strippers as a supplement",
                "Not replace a major feature when repair with limited replacement would have sufficed",
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
            <p className="mt-4">
              Replacing original woodwork — even with matching wood and profile — may not qualify as a Qualified Rehabilitation Expenditure. If the Standards required repair and you replaced instead, those costs may be challenged. Refinishing the original wood qualifies. The historic material stays. The character stays. The credits apply.
            </p>
            <p>
              This is why method matters. And it&rsquo;s why Sue Wheeler&rsquo;s hand-stripping approach — never dipped, never sandblasted — isn&rsquo;t just good for the wood. It&rsquo;s what the program requires.
            </p>
          </div>
          <Link
            href="/historic-preservation/secretary-of-interior-standards"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
          >
            Full breakdown: what the NPS Standards say about wood <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Application process */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Three steps. One rule that nobody tells you until it&rsquo;s too late.
          </h2>
          <div className="space-y-6">
            <div
              className="flex gap-5 p-5"
              style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
            >
              <div
                className="shrink-0 w-8 h-8 flex items-center justify-center text-sm font-sans font-bold text-white"
                style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
              >
                1
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2A2421] mb-2">Establish that your building is historic (Part 1)</h3>
                <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">
                  Submit documentation showing that your building is either individually listed on the National Register of Historic Places, or a contributing structure in a certified historic district. For many St. Louis properties, this documentation already exists. SHPO can confirm your status. This step typically takes one to three months.
                </p>
              </div>
            </div>
            <div
              className="flex gap-5 p-5"
              style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
            >
              <div
                className="shrink-0 w-8 h-8 flex items-center justify-center text-sm font-sans font-bold text-white"
                style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
              >
                2
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2A2421] mb-2">Document your proposed work — before you start (Part 2)</h3>
                <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">
                  Before construction begins, submit photos of existing conditions, a description of proposed work, and materials specifications. The NPS and SHPO review this against the Secretary of the Interior&rsquo;s Standards. Get this approval before touching anything.
                </p>
              </div>
            </div>
            <div
              className="p-5 border-l-4"
              style={{ backgroundColor: "#2A2421", borderColor: "#A65D37", borderRadius: "2px", color: "#EBE6DE" }}
            >
              <p className="text-sm font-sans font-semibold mb-1">The rule nobody mentions:</p>
              <p className="text-sm font-sans leading-relaxed" style={{ color: "#9e9087" }}>
                Do not start work before Part 2 is approved. Expenses incurred before approval may not qualify as QREs. The credits disappear. This rule is unambiguous and unforgiving.
              </p>
            </div>
            <div
              className="flex gap-5 p-5"
              style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
            >
              <div
                className="shrink-0 w-8 h-8 flex items-center justify-center text-sm font-sans font-bold text-white"
                style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
              >
                3
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2A2421] mb-2">Certify completed work (Part 3)</h3>
                <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">
                  After the project is done, submit final photos and documentation showing the work was completed as proposed. Once certified, you claim the credit on your federal return (IRS Form 3468) and your Missouri state return.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm font-sans text-[#6B5E55] leading-relaxed">
            For the Missouri state program, contact SHPO early and often. SHPO offers technical consultations on Tuesday afternoons and Thursday mornings by appointment — call{" "}
            <a href="tel:5737517860" className="underline hover:text-[#11B2E8] transition-colors">573-751-7860</a>.
          </p>
        </div>
      </section>

      {/* EPA certification */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            EPA certification isn&rsquo;t a tax credit requirement. But in St. Louis, it&rsquo;s effectively required.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              The historic tax credit programs don&rsquo;t require an EPA-certified contractor. That&rsquo;s the technical answer.
            </p>
            <p>
              The practical answer: in St. Louis, where 89.8% of City housing was built before 1978, almost every historic woodwork project involves lead-containing finishes. Under the EPA&rsquo;s Renovation, Repair, and Painting (RRP) Rule, contractors disturbing more than six square feet of lead paint in a pre-1978 home must be EPA Certified Lead Renovators.
            </p>
            <p>
              Hiring an uncertified contractor to strip lead-painted woodwork in a pre-1978 home creates real legal and health liability — and the incomplete documentation can complicate your tax credit application.
            </p>
            <p>
              Sue Wheeler is EPA Certified. The lead-safe work documentation generated on every pre-1978 project is proper, complete, and available to include in your application package.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Common questions about historic tax credits.
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock
        heading="Your historic woodwork may qualify for significant tax savings. The first step is a conversation."
        subtext="Sue Wheeler has been working in St. Louis's historic neighborhoods since 1989. EPA Certified. She refinished the doors of The Sheldon Concert Hall. She answers every call personally."
      />
    </>
  );
}
