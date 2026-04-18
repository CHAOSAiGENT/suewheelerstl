import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Commercial Wood Maintenance Contracts St. Louis | Sue Wheeler",
  description:
    "Annual and multi-year wood maintenance contracts for St. Louis restaurants, bars, and hotels. Predictable budgeting, loyalty pricing. Sue Wheeler. Call today.",
};

const faqs = [
  {
    question: "How often should a restaurant bar top be maintained?",
    answer:
      "For a high-volume operation, every 2–3 years is typical. Moderate-volume operations may go 3–4 years. A lot depends on the finish specification, cleaning chemicals in use, and the physical volume on the surface. We assess and advise at the start of each contract cycle.",
  },
  {
    question: "What's the difference between a maintenance coat and a full refinish?",
    answer:
      "A maintenance coat (Perk Up & Protect) is light prep and a fresh topcoat on a finish that's still structurally sound. A full refinish (Strip & Refinish) takes the surface back to bare wood. Maintenance coats are faster, less expensive, and less disruptive — they're appropriate when the base finish is still holding. Full refinishing is required when the finish has failed or significant damage is present.",
  },
  {
    question: "Can we add surfaces to the contract over time?",
    answer:
      "Yes. Contracts can be structured to add surfaces as you expand or as other areas reach their maintenance window. We update the scope and pricing when that happens.",
  },
  {
    question: "Do contracts work for multi-location operators?",
    answer:
      "Yes — and it's often where a contract structure provides the most value. Consolidated scheduling, consistent documentation, and single-point-of-contact coordination across locations. Call us to discuss how to structure that.",
  },
];

export default function CommercialMaintenancePage() {
  return (
    <>
      <FAQSchema items={faqs} />

      {/* Breadcrumb */}
      <div className="px-6 py-4" style={{ backgroundColor: "#F8F6F1", borderBottom: "1px solid rgba(42,36,33,0.08)" }}>
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs font-sans text-[#6B5E55]">
            <Link href="/commercial-and-hospitality-refinishing" className="hover:text-[#11B2E8] transition-colors">
              Commercial &amp; Hospitality
            </Link>
            <span className="mx-2" style={{ color: "#A65D37" }}>›</span>
            <span style={{ color: "#2A2421" }}>Commercial Maintenance Contracts</span>
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
            Commercial wood maintenance contracts in <em>St. Louis.</em>
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-10 leading-relaxed">
            Regular maintenance is always cheaper than deferred maintenance. A contract makes the schedule — and the budget — predictable.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Request a Maintenance Proposal — (314) 367-6054
          </a>
        </div>
      </section>

      {/* The math */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The math on commercial wood maintenance.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              A bar top refinish that costs $3,000 and lasts five years is $600 per year of service life. A bar top that gets ignored for eight years, fails completely, needs a more intensive restoration, and costs $6,000 — that&rsquo;s $750 per year, and you also dealt with a failing finish for the last three years of that cycle. Guests noticed. Staff noticed. It cost you before it cost you money.
            </p>
            <p>
              Regular, scheduled maintenance keeps finishes in the window where a light prep and fresh topcoat is all that&rsquo;s needed. Once a finish has failed — peeling, gone tacky, chipped through to bare wood — the project scope jumps significantly. The difference between a maintenance coat and a full restoration is usually 3–4x in both time and cost.
            </p>
            <p>
              A maintenance contract locks in the schedule and the price before either of those escalate.
            </p>
          </div>
        </div>
      </section>

      {/* What a contract covers */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What a maintenance contract covers.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-8 leading-relaxed">
            We offer annual and multi-year maintenance agreements for commercial wood surfaces. A typical contract covers:
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Scheduled condition assessment",
                body: "We inspect your wood surfaces at the start of each contract cycle and document current condition. This gives you a baseline and flags anything that needs attention before it becomes a full project.",
              },
              {
                title: "Perk Up & Protect maintenance coat",
                body: "Light prep and fresh polyurethane topcoat on surfaces within the maintenance window. Extends the finish life without the cost and downtime of a full Strip & Refinish.",
              },
              {
                title: "Priority scheduling",
                body: "Contract clients get first access to our schedule, including preferred off-hours and dark day slots.",
              },
              {
                title: "Loyalty pricing",
                body: "Multi-year contract pricing is lower per-service than individual project pricing.",
              },
              {
                title: "Documentation",
                body: "Condition reports at each visit. Useful for capital planning and for properties with preservation or compliance requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5"
                style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
              >
                <div
                  className="shrink-0 w-1.5 self-stretch"
                  style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
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

      {/* When a contract makes sense */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            When a maintenance contract makes sense.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-6 leading-relaxed">
            A maintenance contract is the right structure for:
          </p>
          <div className="space-y-4">
            {[
              {
                title: "High-volume bars and restaurants",
                body: "Bar tops and tabletops on busy operations need attention every 2–3 years. A contract removes the decision-making from the cycle.",
              },
              {
                title: "Hotels and event venues",
                body: "Lobby and event space woodwork is maintained on a rolling schedule alongside other property upkeep. Contracts align with annual capital budgets.",
              },
              {
                title: "Multi-location operators",
                body: "Operators with more than one location benefit from a single point of contact and consolidated scheduling across properties.",
              },
              {
                title: "Historic buildings with compliance requirements",
                body: "Properties that require EPA-certified and documentation-grade work on a recurring basis benefit from a contractor relationship that already understands the requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5"
                style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
              >
                <h3 className="font-sans font-semibold text-sm text-[#2A2421] mb-1">{item.title}</h3>
                <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it doesn't cover */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What a contract doesn&rsquo;t cover.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              A maintenance contract covers scheduled surface maintenance on surfaces that are within the maintenance window — surfaces with a solid finish base that needs refreshing. It doesn&rsquo;t cover full Strip &amp; Refinish on surfaces that have failed, structural repairs, or emergency work outside the contract schedule. Those are scoped separately.
            </p>
            <p>
              We assess condition at the start of each contract term and tell you clearly what&rsquo;s covered under maintenance and what would require separate project scope.
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
            Common questions.
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock
        heading="Request a maintenance proposal."
        subtext="Sue answers every call personally. Let's build a maintenance schedule that works for your operation."
      />
    </>
  );
}
