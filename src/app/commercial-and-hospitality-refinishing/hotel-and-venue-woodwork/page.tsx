import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Hotel & Event Venue Wood Refinishing St. Louis | Sue Wheeler",
  description:
    "Lobby woodwork, event space millwork, historic hotel refinishing in St. Louis. Off-hours scheduling. EPA Certified. Sue Wheeler, 36 years. Call for a venue consult.",
};

const faqs = [
  {
    question: "Can you work around our event bookings?",
    answer:
      "Yes — your event calendar drives the project schedule. We identify access windows, dark periods, and low-occupancy blocks and build the work plan around them. We've done this enough times that the coordination isn't the hard part.",
  },
  {
    question: "We have a historic hotel with original millwork. Can you assess what's restorable vs. what needs replacement?",
    answer:
      "Yes. This is part of what we do on hotel assessments. We walk the property, assess current finish condition, identify what can be refinished and what has structural issues beyond finish scope, and give you a prioritized plan. We'll tell you honestly what's worth restoring and what isn't.",
  },
  {
    question: "Our event space gets set up and torn down weekly. What finish holds up to that?",
    answer:
      "Commercial-grade polyurethane or catalyzed conversion varnish for high-contact surfaces. We spec the finish to the use — event space wainscoting that gets bumped by chairs every weekend needs a different spec than a lobby panel that's just being looked at. We make that call based on what's there and how it's used.",
  },
  {
    question: "Do you do lobby bar woodwork?",
    answer:
      "Yes. Lobby bars are covered under our restaurant and bar refinishing work — bar tops, back bar shelving, millwork surround. Same approach, adapted to the hotel context.",
  },
];

export default function HotelVenuePage() {
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
            <span style={{ color: "#2A2421" }}>Hotel &amp; Venue Woodwork</span>
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
            Hotel and event venue wood refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-10 leading-relaxed">
            Lobby woodwork sets the atmosphere before a guest says a word. It should look like the property deserves the room rate.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Call for a Venue Consult — (314) 367-6054
          </a>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The wood in a hotel lobby works harder than it looks.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              Lobby millwork in a well-designed hotel — the reception desk surround, the paneling, the case trim, the bar millwork if there&rsquo;s a lobby bar — is part of the brand. Guests read it immediately. When it&rsquo;s right, it disappears into the atmosphere. When it&rsquo;s worn, oxidized, or chipped, it&rsquo;s the first thing they photograph for the bad review.
            </p>
            <p>
              Hotel woodwork also takes serious use. Lobby floors, elevator surrounds, and corridor millwork take daily contact. Event space wood — chairs, wainscoting, stage platforms, bar components — gets set up, torn down, and used hard every time the space books.
            </p>
            <p>
              We refinish hotel and venue woodwork with finishes selected for the level of use each surface takes, on a schedule designed to minimize disruption to your operations and guests.
            </p>
          </div>
        </div>
      </section>

      {/* Event calendar */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Working around your event calendar.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              Hotel and venue refinishing has to fit into the gaps in your booking schedule. We work from your calendar — identifying access windows, dark days, and low-occupancy periods to stage the work. For large lobby or event space projects, we develop a phased plan so the property stays partially operational throughout.
            </p>
            <p>
              This requires more coordination than a standard residential project. We&rsquo;re used to it.
            </p>
          </div>
        </div>
      </section>

      {/* Historic hotels */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Historic hotels and landmark buildings.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed mb-8">
            <p>
              St. Louis has an extraordinary stock of historic hotel and event buildings — many of them on the National Register, many with original woodwork that&rsquo;s been in the building since construction. The architecture in these spaces is irreplaceable, and the refinishing approach has to reflect that.
            </p>
            <p>
              We&rsquo;re familiar with Secretary of Interior Standards for wood treatment, EPA certification requirements for pre-1978 lead paint, and the documentation that preservation-focused projects require. We&rsquo;ve worked in St. Louis landmark buildings, including The Sheldon Concert Hall during its $11 million renovation. We understand what &ldquo;irreplaceable&rdquo; means in this context.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/institutional-refinishing/historic-venue-restoration"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
            >
              Institutional refinishing for landmark venues <ArrowRight size={12} />
            </Link>
            <Link
              href="/historic-preservation"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
            >
              Historic preservation and tax credits <ArrowRight size={12} />
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
            EPA Certified for pre-1978 hotel buildings.
          </h2>
          <div className="space-y-4 text-base font-sans leading-relaxed" style={{ color: "#9e9087" }}>
            <p>
              The majority of St. Louis&rsquo;s historic hotel and event venue buildings predate 1978. EPA RRP regulations require a certified renovator for any work disturbing lead-based paint in these buildings. The compliance responsibility, and the enforcement risk, falls on the property operator.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal. We handle pre-1978 venue projects with proper containment and documented cleanup.
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
        heading="Let's talk about your venue."
        subtext="Sue answers every call personally. Call for a venue consult."
      />
    </>
  );
}
