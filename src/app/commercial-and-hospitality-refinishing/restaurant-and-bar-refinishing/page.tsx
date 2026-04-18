import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Restaurant & Bar Wood Refinishing St. Louis | Sue Wheeler",
  description:
    "Bar tops, tabletops, wainscoting, booths refinished for St. Louis restaurants and bars. Off-hours scheduling. Durability finishes. Sue Wheeler, EPA Certified. Call today.",
};

const faqs = [
  {
    question: "Can you refinish our bar top overnight so we don't lose service?",
    answer:
      "Yes — overnight bar top projects are standard for us. We come in after close, strip and refinish, and you open the next evening with a cured finish. Timing depends on the bar top size and current condition. We'll scope it during the estimate.",
  },
  {
    question: "What's the best finish for a high-volume bar top?",
    answer:
      "For heavy-use bar tops, we recommend catalyzed conversion varnish or commercial-grade polyurethane — finishes with hardness ratings designed for alcohol exposure, heat, and constant cleaning. We spec the finish to your volume and use case, not to a standard package.",
  },
  {
    question: "How long does a refinished bar top last?",
    answer:
      "With the right commercial finish and appropriate use, 3–5 years before a maintenance coat is needed is typical for a busy operation. Lower-volume bars and restaurants may go longer. A maintenance contract keeps the schedule predictable.",
  },
  {
    question: "Our restaurant is in a pre-1978 building. Does that create issues?",
    answer:
      "It adds an EPA compliance layer that we handle. We're certified, we maintain the required protocols, and we document everything. You don't have to manage the compliance side — that's on us.",
  },
  {
    question: "Can you work on a restaurant that's currently open?",
    answer:
      "Yes, with the right staging. For large dining rooms or multi-bar operations, we work in sections to keep part of the space operational. We work that plan out before we start so there are no surprises.",
  },
];

export default function RestaurantBarPage() {
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
            <span style={{ color: "#2A2421" }}>Restaurant &amp; Bar Refinishing</span>
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
            Restaurant and bar wood refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-10 leading-relaxed">
            Back in service by Monday. That&rsquo;s the standard we work to.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Schedule a Commercial Consult — (314) 367-6054
          </a>
        </div>
      </section>

      {/* Surfaces */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The surfaces that define your dining room.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-8 leading-relaxed">
            A restaurant&rsquo;s wood surfaces are doing two jobs simultaneously: functional and atmospheric. Your bar top has to handle alcohol, heat, constant wiping, and thousands of elbows per week — and it has to look like it belongs in the room while doing it. When the finish fails, guests notice before they&rsquo;ve ordered.
          </p>
          <p className="text-base font-sans text-[#6B5E55] mb-8 leading-relaxed">
            We refinish every wood surface in a restaurant or bar:
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Bar tops",
                body: "The highest-abuse surface in any establishment. We strip to bare wood, address any structural damage, and apply commercial-grade polyurethane or catalyzed conversion varnish with the hardness rating and chemical resistance to handle your operation. Not a residential finish. The right finish for the surface.",
              },
              {
                title: "Tabletops",
                body: "We refinish in place or in our shop depending on volume and schedule. For high-volume restaurants doing 20+ tables, we work in phases so you're never taking more seats off the floor than you can absorb.",
              },
              {
                title: "Wainscoting & wall paneling",
                body: "Strip, repair, refinish. Back to the character the room was designed with.",
              },
              {
                title: "Booths & booth caps",
                body: "The wood caps and frames of booth seating take constant contact. We strip and refinish booth components to extend their life and restore the visual finish.",
              },
              {
                title: "Host stands",
                body: "The first thing every guest touches. We refinish host stands in a single business day, usually while you're closed.",
              },
              {
                title: "Bar back shelving & cabinets",
                body: "Always in view, often neglected. We strip years of cleaning product buildup and seal with a finish that holds up to the environment behind the bar.",
              },
              {
                title: "Interior doors & door trim",
                body: "Restaurant doors take constant impact. We refinish doors, frames, and trim to keep the entry consistent with the rest of the space.",
              },
              {
                title: "Mantels & historic millwork",
                body: "For St. Louis restaurants in historic buildings, original mantels, columns, and millwork are part of the brand. We work with that material correctly.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5"
                style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
              >
                <h3
                  className="font-sans font-semibold text-[#2A2421] mb-2"
                >
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Scheduling around your operation.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-6 leading-relaxed">
            We don&rsquo;t shut you down for a week. Most restaurant and bar refinishing projects can be staged around your schedule:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { label: "Dark day work", body: "We come in when you're closed, finish the project, and you open the next day." },
              { label: "Overnight work", body: "Off-hours access from 11 PM to 7 AM covers most bar top and tabletop projects." },
              { label: "Phased dining room work", body: "We work in sections so part of your dining room stays open." },
            ].map((item) => (
              <li key={item.label} className="flex gap-3 text-sm font-sans text-[#6B5E55]">
                <span
                  className="shrink-0 w-2 h-2 mt-1.5 rounded-full"
                  style={{ backgroundColor: "#A65D37" }}
                />
                <span>
                  <strong className="text-[#2A2421]">{item.label}</strong> — {item.body}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
            The specifics depend on your layout, the scope of work, and your operating schedule. We work that out with you before we quote — scheduling feasibility is part of the estimate conversation.
          </p>
        </div>
      </section>

      {/* Maintenance cycle */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The maintenance cycle conversation.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-6 leading-relaxed">
            Bar tops and tabletops on a high-volume operation need attention every 2–4 years. Waiting until the finish has fully failed means a more extensive strip job, more downtime, and a higher cost. A maintenance coat on a finish that&rsquo;s showing early wear is faster, cheaper, and less disruptive than a full restoration on a finish that&rsquo;s been ignored for eight years.
          </p>
          <p className="text-base font-sans text-[#6B5E55] mb-6 leading-relaxed">
            We offer maintenance contracts that schedule and price future work in advance. Predictable budget line. No scrambling when the finish finally goes.
          </p>
          <Link
            href="/commercial-and-hospitality-refinishing/commercial-maintenance-contracts"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
          >
            Commercial maintenance contracts <ArrowRight size={12} />
          </Link>
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
            EPA Certified for pre-1978 commercial buildings.
          </h2>
          <div className="space-y-4 text-base font-sans leading-relaxed" style={{ color: "#9e9087" }}>
            <p>
              If your building was constructed before 1978 — and the most interesting restaurant locations in St. Louis largely are — the existing wood surfaces may have lead paint in their finish history. EPA RRP regulations require a certified renovator on the project. The enforcement risk for non-compliance falls on the building operator, not just the contractor. Fines reach{" "}
              <strong style={{ color: "#EBE6DE" }}>$37,500 per violation per day.</strong>
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal. We handle every pre-1978 project with proper containment and documented cleanup.
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
        heading="Sue answers every call personally."
        subtext="No scheduler. No call center. Direct conversation with the person doing the work."
      />
    </>
  );
}
