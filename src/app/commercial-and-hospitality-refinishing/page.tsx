import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Commercial Wood Refinishing St. Louis | Restaurants, Bars, Hotels",
  description:
    "Wood refinishing for St. Louis restaurants, bars, hotels, and event venues. Off-hours scheduling. Durability finishes. Maintenance contracts. Sue Wheeler, EPA Certified.",
};

const faqs = [
  {
    question: "Can you work around our operating schedule?",
    answer:
      "Yes — and this is typically how we structure commercial jobs. We work overnight, on dark days, or in staged sections so your operation stays open. The specifics depend on your layout and the scope of the project. Call us and we'll work out a schedule before we quote.",
  },
  {
    question: "What's the difference between a residential finish and a commercial finish?",
    answer:
      "Hardness and chemical resistance. Commercial surfaces — especially bar tops and tabletops — take alcohol, cleaning chemicals, heat, and constant physical contact. We use commercial-grade polyurethane or catalyzed conversion varnish for those surfaces. A residential finish would fail within a year in a high-volume bar environment.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes. Bar tops and tabletops typically need maintenance every 2–4 years depending on volume. A maintenance contract schedules and prices that work in advance so you're not scrambling when the finish fails. It's always cheaper to maintain than to defer.",
  },
  {
    question: "We're in a historic building. Does that create complications?",
    answer:
      "Sometimes it adds requirements, but we're familiar with them. EPA certification covers the lead paint compliance side. For buildings on the National Register or in certified historic districts, we're also familiar with Secretary of Interior Standards for wood treatment. We've worked in historic St. Louis buildings for 36 years — including The Sheldon Concert Hall.",
  },
  {
    question: "You refinished The Sheldon Concert Hall?",
    answer:
      "We refinished the doors of The Sheldon Concert Hall during its $11 million renovation. It's one of St. Louis's most significant performance venues and a National Register landmark. We understand what \"irreplaceable\" means when you're talking about historic wood.",
  },
];

export default function CommercialHubPage() {
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
            Commercial wood refinishing for <em>St. Louis&rsquo;s</em> restaurants, bars, and hotels.
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-10 leading-relaxed">
            The wood in your space is working harder than any other surface you own. We keep it looking like it belongs there.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Call for a Commercial Inquiry — (314) 367-6054
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
            Bar tops. Tabletops. Wainscoting. Booths. <em>All of it.</em>
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-10 leading-relaxed max-w-2xl">
            We refinish the architectural woodwork that makes a commercial space feel like itself — not a chain, not a renovation project, but a real place with character.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <ServiceCard
              title="Restaurant & Bar Refinishing"
              description="Bar tops, tabletops, wainscoting, booths, host stands, bar back shelving."
              href="/commercial-and-hospitality-refinishing/restaurant-and-bar-refinishing"
            />
            <ServiceCard
              title="Hotel & Venue Woodwork"
              description="Lobby millwork, event space architectural wood, historic hotel restoration."
              href="/commercial-and-hospitality-refinishing/hotel-and-venue-woodwork"
            />
            <ServiceCard
              title="Commercial Maintenance Contracts"
              description="Scheduled maintenance cycles, predictable budgeting, loyalty pricing."
              href="/commercial-and-hospitality-refinishing/commercial-maintenance-contracts"
            />
          </div>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
            We also work on: interior doors and door trim, mantels and decorative millwork in historic buildings, dining room built-ins, and bar components of all types. If it&rsquo;s architectural wood and it&rsquo;s in a commercial space, we can refinish it.
          </p>
        </div>
      </section>

      {/* Why Commercial Operators Choose Sue Wheeler */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Why St. Louis commercial operators choose Sue Wheeler.
          </h2>

          <div className="space-y-10">
            <div>
              <h3
                className="text-xl text-[#2A2421] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                We schedule around <em>your</em> operating hours.
              </h3>
              <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
                We&rsquo;re not going to shut you down for a week. Most commercial refinishing projects can be staged to work around your schedule. Bar tops and tabletops overnight or on your dark day. Dining rooms in sections so you stay partially open. If you can give us access from 11 PM to 7 AM, we can make it work.
              </p>
            </div>

            <div>
              <h3
                className="text-xl text-[#2A2421] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                We use the right finish for commercial use.
              </h3>
              <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
                There&rsquo;s a real difference between a residential finish and a finish designed for commercial punishment. For bar tops and high-use tabletops, we use commercial-grade polyurethane or catalyzed conversion varnish — finishes with the hardness and chemical resistance to handle what your operation delivers. We spec the finish to the use, not to the price.
              </p>
            </div>

            <div>
              <h3
                className="text-xl text-[#2A2421] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                We don&rsquo;t dip. That matters for old wood.
              </h3>
              <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
                A lot of refinishing shops use a chemical dip tank for stripping — fast, cheap, destructive. Dipping raises grain, opens end grain, and causes warping and checking in older wood. If your bar is in a building from 1920, dipping is the wrong call. We hand-strip every piece. It takes longer. The result is better and it lasts longer.
              </p>
            </div>

            <div>
              <h3
                className="text-xl text-[#2A2421] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                We are <em>not</em> a painting company that does wood.
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
                We are a wood company. 36 years. St. Louis. One owner. Sue answers every call personally — not a scheduler, not a subcontractor. When you need a decision made about how to handle something unusual on your job site, you call Sue and Sue answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EPA Compliance */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#2A2421", color: "#EBE6DE" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400, color: "#EBE6DE" }}
          >
            EPA compliance isn&rsquo;t a niche concern in St. Louis. <em>It&rsquo;s the norm.</em>
          </h2>
          <div className="space-y-4 text-base font-sans leading-relaxed" style={{ color: "#9e9087" }}>
            <p>
              Under EPA Renovation, Repair and Painting (RRP) regulations, any work that disturbs lead-based paint in a pre-1978 commercial building requires a certified renovator on the project. The contractor you hire must be EPA RRP certified — and if they&rsquo;re not, the enforcement risk falls on you as the operator, not just on them.
            </p>
            <p>
              Fines for RRP violations in commercial settings can reach <strong style={{ color: "#EBE6DE" }}>$37,500 per violation per day.</strong>
            </p>
            <p>
              In St. Louis, 89.8% of the city&rsquo;s building stock was built before 1978 — and the commercial buildings in the neighborhoods where the best restaurant locations concentrate (Central West End, Soulard, Grand Center, Maplewood, the Grove) skew even older. EPA compliance isn&rsquo;t something to sort out later.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal. We handle every pre-1978 commercial project with proper containment, certified test procedures, and documented cleanup. When you work with us, you don&rsquo;t have to think about this.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl text-[#2A2421] mb-4 italic"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            &ldquo;We needed our bar top refinished during a Monday dark day and back in service by Tuesday dinner. Sue scheduled it, showed up when she said she would, and we opened on time. The bar top looks better than when we opened. That&rsquo;s all we needed.&rdquo;
          </blockquote>
          <p className="text-sm font-sans text-[#6B5E55]">— Restaurant operator, Maplewood</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Common questions from commercial clients.
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your commercial wood."
        subtext="Sue answers every call personally. No scheduler. No call center. Direct conversation with the person who will be doing the work."
      />
    </>
  );
}
