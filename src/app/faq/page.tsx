import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing FAQ | Sue Wheeler St. Louis",
  description:
    "Answers to the most common questions about wood refinishing in St. Louis — dipping, lead paint, cost, timing, and more. From Sue Wheeler, 36 years experience.",
};

const methodFAQs = [
  {
    question: "What is wood refinishing?",
    answer:
      "Refinishing is the process of stripping an existing finish off a wood surface, repairing any damage, applying stain if needed, and sealing with a fresh topcoat. It restores the original wood to like-new or better condition — without replacing it. It is not the same as repainting, which covers the wood with a solid color and hides rather than restores the grain.",
  },
  {
    question: "What is dip-stripping, and why don't you do it?",
    answer:
      "Dip-stripping means submerging a door, cabinet, or other wood piece in a caustic chemical tank to remove the finish quickly. The problem: the process raises the wood grain, softens the carved profiles, dissolves the hide glue used in most pre-1960s joinery, and washes out the natural tonal variation in old-growth wood. Pieces come out looking flat and rough, and they hold new finish poorly. We hand-strip every piece. It takes longer. The wood lasts decades instead of a few years — and it stays true to what the original woodworker made.",
  },
  {
    question: "What finishes do you use?",
    answer:
      "Polyurethane — oil-based or water-based, depending on the application. Oil-based polyurethane builds more depth and amber warmth; water-based dries faster and stays clearer. We recommend the right one for each project. We do not use marine varnish, lacquer, shellac, or tung oil. These finishes are not appropriate for architectural woodwork in interior residential or commercial settings.",
  },
  {
    question: "Do you refinish furniture?",
    answer:
      "No. We work exclusively on architectural woodwork — the pieces built into a home or building: doors, cabinets, staircases, built-ins, and millwork. We don't work on freestanding furniture, dining tables, or antiques.",
  },
  {
    question: 'What is the "board-up" method?',
    answer:
      "For most door and cabinet projects, we remove the pieces from the home, transport them to our shop, refinish them in a controlled environment, then return and reinstall them. This keeps dust, fumes, and disruption out of your living space and lets us control conditions for a better finish. On-premise work is available when removal isn't practical.",
  },
];

const leadPaintFAQs = [
  {
    question: "Does my home have lead paint?",
    answer:
      "If your home was built before 1978, it almost certainly has lead paint somewhere — in the trim, doors, windows, or cabinets. In St. Louis City, 89.8% of homes were built before 1978. In St. Louis County the number is similarly high. Assume it's there until a certified test says otherwise.",
  },
  {
    question: "Is lead paint dangerous to disturb during refinishing?",
    answer:
      "Yes, if handled improperly. Sanding, scraping, or stripping surfaces with lead paint creates lead dust, which is hazardous — especially for children and pregnant women. The EPA's Renovation, Repair, and Painting (RRP) Rule requires that any contractor disturbing paint on pre-1978 homes where children or pregnant women live must be certified and follow lead-safe practices.",
  },
  {
    question: "What does EPA Certified Lead Renovator mean?",
    answer:
      "Sue Wheeler holds EPA Certified Lead Renovator certification. This means she is trained and authorized to perform work on pre-1978 surfaces using the required lead-safe protocols: containment, HEPA vacuuming, wet-sanding methods, proper disposal, and documentation. Every project on a pre-1978 home is fully compliant. You receive a completion record.",
  },
  {
    question: "What happens if I hire someone without EPA certification for a pre-1978 home?",
    answer:
      "Beyond the legal risk to the contractor, the homeowner may bear liability for improper lead work. More practically: lead dust left in your home is a health hazard that doesn't go away on its own. EPA certification isn't a technicality — it's the difference between work that's done safely and work that isn't.",
  },
];

const costFAQs = [
  {
    question: "How much does wood refinishing cost?",
    answer:
      "It depends significantly on the scope, condition, and type of wood. Staircase refinishing in St. Louis typically ranges from $300 to $1,500+ depending on number of treads, spindle count, and condition. Cabinet refinishing varies by door count and finish type. Door refinishing runs differently for a single front door versus a whole-house door project. We give free estimates. Call (314) 367-6054 and describe what you have — we'll give you a real range before you commit to anything.",
  },
  {
    question: "Is refinishing cheaper than replacing?",
    answer:
      "Almost always, yes — significantly. New kitchen cabinets can run $15,000–$50,000 or more. Refinishing existing solid-wood originals is typically a fraction of that. Staircase replacement runs into the tens of thousands; refinishing runs into the hundreds to low thousands. Beyond cost, replacement loses original wood — old-growth lumber that can't be replicated.",
  },
  {
    question: "Do you offer maintenance contracts for commercial spaces?",
    answer:
      "Yes. For restaurants, bars, hotels, and other commercial spaces, we offer annual and multi-year maintenance agreements that keep woodwork in condition and spread the cost predictably. Ask about our commercial maintenance program.",
  },
  {
    question: "What types of projects do you take on?",
    answer:
      "Doors and door frames · Staircases (treads, risers, spindles, newel posts, railings) · Kitchen cabinets (painted, stained, color-change) · Built-in hutches, buffets, and bookcases · All room millwork (wainscoting, crown molding, baseboards, mantels, chair rail, window trim) · Commercial bar tops, tabletops, and wainscoting · Institutional woodwork (concert halls, churches, universities). We do not do floors, decks, furniture, or exterior siding.",
  },
];

const processFAQs = [
  {
    question: "How long does wood refinishing take?",
    answer:
      "It varies by project. A single door can be turned around in 2–4 days. A full kitchen cabinet set typically runs 1–3 weeks. A full staircase, depending on scope and number of spindles, can take 2–4 weeks. We'll give you a realistic timeline with your estimate — we don't make promises we can't keep.",
  },
  {
    question: "Do I need to be home during the work?",
    answer:
      "For board-up projects (doors and cabinets taken to our shop), we typically need access to pick up and drop off. For on-premise work, Sue or a crew member will be on-site and will let you know what access is needed. We're flexible — let us know what works.",
  },
  {
    question: "Will there be dust and fumes in my home?",
    answer:
      "Board-up projects (pieces removed to the shop) generate no dust or fumes in your home. On-premise projects involve stripping and finishing chemicals and some sanding — we contain the work area as tightly as possible and use appropriate ventilation. If you have sensitivities or young children, board-up is almost always the better choice and we'll recommend it accordingly.",
  },
  {
    question: "Do you work on commercial properties outside of business hours?",
    answer:
      "Yes. For restaurants, bars, hotels, and venues, we schedule around your operating hours. If you need bar top work done overnight or on your dark day, we can accommodate that. Reach out and we'll discuss what's possible.",
  },
  {
    question: "How do I get started?",
    answer:
      "Call (314) 367-6054. Sue will ask about your project, give you a sense of the scope and cost, and schedule a time to see the work in person if needed. The estimate is free and there's no obligation.",
  },
];

const preservationFAQs = [
  {
    question: "Can wood refinishing qualify for historic tax credits?",
    answer:
      "Yes, in many cases. The federal Historic Tax Credit program offers a 20% credit on Qualified Rehabilitation Expenditures for income-producing historic properties. Missouri's program adds 25–35% on top for qualifying projects. Combined, that can return 45–55 cents on every dollar of qualifying work. For owner-occupied residential properties, the Missouri Historic Homeowner Credit offers separate eligibility.",
  },
  {
    question: "Does my home need to be in a historic district to qualify?",
    answer:
      "For most federal and state credit programs, yes — the property typically must be a certified historic structure or contributing structure within a registered historic district. Many St. Louis neighborhoods qualify: the Central West End, Lafayette Square, Compton Heights, Tower Grove, Shaw, and others.",
  },
  {
    question: "What does the National Park Service say about refinishing historic wood?",
    answer:
      "The Secretary of the Interior's Standards for Rehabilitation — the guidelines governing certified historic rehabilitations — specifically recommend the 'gentlest method' for removing paint from historic wood: hand-scraping and hand-sanding. Chemical dipping is not recommended and may disqualify a project from tax credit eligibility. Sue Wheeler's hand-strip method is compliant with these standards. A dip-tank contractor's work is not.",
  },
  {
    question: "How do I know if my neighborhood is a historic district?",
    answer:
      "Missouri has both certified historic districts (listed on the National Register of Historic Places) and locally designated historic districts. We've put together a guide to every major St. Louis district and what historic status means for tax credit eligibility.",
  },
];

const allFAQs = [
  ...methodFAQs,
  ...leadPaintFAQs,
  ...costFAQs,
  ...processFAQs,
  ...preservationFAQs,
];

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={allFAQs} />
      <TrustBar />

      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            <em>Frequently asked questions</em> about wood refinishing.
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Thirty-six years of answering the same good questions. Here are the ones we
            hear most.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-14">
          {[
            { label: "The Method", items: methodFAQs, id: "hand-strip" },
            { label: "Lead Paint & EPA", items: leadPaintFAQs, id: "epa-cert" },
            { label: "Cost & Scope", items: costFAQs, id: "cost" },
            { label: "Process & Timing", items: processFAQs, id: "process" },
            {
              label: "Historic Preservation & Tax Credits",
              items: preservationFAQs,
              id: "preservation",
            },
          ].map((cat) => (
            <div key={cat.id} id={cat.id}>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
                {cat.label}
              </p>
              <FAQAccordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-3xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Still have questions?
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-6">
            Call Sue directly — she&rsquo;ll give you a straight answer.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 text-2xl font-sans font-medium text-[#2A2421] hover:text-[#11B2E8] transition-colors mb-6"
          >
            <Phone size={20} />
            (314) 367-6054
          </a>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
