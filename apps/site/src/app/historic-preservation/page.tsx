import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Historic Home Wood Refinishing St. Louis | Sue Wheeler",
  description:
    "Wood refinishing for St. Louis historic homes. Hand-strip method aligns with NPS Standards. EPA Certified Lead Removal. 36 years. Free estimate: (314) 367-6054.",
};

const faqs = [
  {
    question: "Does Sue's method comply with preservation standards?",
    answer:
      "Yes. The Secretary of the Interior's Standards for Rehabilitation call for the gentlest effective stripping method — hand-scraping and hand-sanding. Sue Wheeler has always stripped by hand. Chemical dip-stripping is not endorsed by the Standards and compromises wood integrity.",
  },
  {
    question: "My home is in a historic district. Does that affect the work?",
    answer:
      "Historic district status means your home's original material and character are worth preserving — and that work should be consistent with the Standards for Rehabilitation. Sue's method is preservation-compliant. Call Sue to discuss your specific home: (314) 367-6054.",
  },
  {
    question: "Is lead paint a concern in historic homes?",
    answer:
      "In St. Louis, virtually all pre-1978 homes have lead paint on woodwork surfaces. EPA RRP regulations require a Certified Lead Removal for any work disturbing those surfaces. Sue Wheeler is EPA Certified. Every project on a pre-1978 home uses proper containment, HEPA filtration, and documented cleanup.",
  },
  {
    question: "Why is hand-stripping better for historic wood than dipping?",
    answer:
      "Dip-stripping immerses the piece in caustic chemicals. It raises the wood grain, softens carved profiles, dissolves hide glue in joints, and strips out the tonal variation in old-growth wood. For an original door, turned newel post, or paneled built-in — that damage is permanent. Hand-stripping preserves what makes the piece worth keeping.",
  },
];

export default function HistoricPreservationHubPage() {
  return (
    <>
      <TrustBar />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-6xl text-[#2A2421] mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Historic preservation wood refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-10 leading-relaxed">
            Hand-stripped, never dipped. The method the National Park Service
            recommends — and the standard Sue Wheeler has held for 36 years.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Free Preservation Consult — (314) 367-6054
          </a>
        </div>
      </section>

      {/* Why it matters for historic homes */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            The woodwork in historic St. Louis homes is <em>irreplaceable.</em>
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              Homes in the Central West End, Lafayette Square, Benton Park,
              Compton Heights, and Shaw were built from old-growth lumber —
              denser, tighter-grained wood than anything available today. The
              doors, staircases, built-ins, and millwork in these homes have
              density and character that modern materials cannot replicate.
            </p>
            <p>
              Refinishing preserves the original material. Replacement loses it
              permanently. That distinction matters for the character of the
              home, for its historic integrity, and for any preservation review.
            </p>
            <p>
              Sue Wheeler has been refinishing historic woodwork in St. Louis
              for 36 years. She knows what these houses were built with, how
              that wood ages, and what it takes to restore it properly.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sue's method aligns with standards */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#2A2421", color: "#EBE6DE" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#EBE6DE",
            }}
          >
            Hand-stripping is what the NPS recommends.{" "}
            <em>Dipping compromises the wood and the standards.</em>
          </h2>
          <div
            className="space-y-4 text-base font-sans leading-relaxed mb-8"
            style={{ color: "#9e9087" }}
          >
            <p>
              The Secretary of the Interior&rsquo;s Standards for Rehabilitation
              — the guidelines for certified historic rehabilitations —
              explicitly call for the gentlest effective stripping method:
              hand-scraping, hand-sanding, with chemical strippers as a
              supplement. They do not endorse immersion stripping. Dipping
              compromises the wood grain, softens profiles, and dissolves glue
              joints in original millwork.
            </p>
            <p style={{ color: "#EBE6DE" }}>
              Sue Wheeler has never dipped. For 36 years, every door, cabinet,
              piece of millwork, and staircase component has been stripped by
              hand. That method is better for the wood — and it&rsquo;s what
              preservation standards recommend.
            </p>
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest hover:gap-3 transition-all"
            style={{ color: "#11B2E8" }}
          >
            FAQ: hand-stripping vs. dipping <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Spoke navigation */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Where to go next.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <ServiceCard
              title="Staircase Refinishing"
              description="Treads, spindles, newel posts, railings — the most visually significant woodwork in a historic home, done properly."
              href="/staircase-refinishing"
            />
            <ServiceCard
              title="Doors & Frames"
              description="Original doors are irreplaceable. We remove, strip, refinish in our shop, and reinstall. Hardware intact."
              href="/door-refinishing"
            />
            <ServiceCard
              title="Architectural Woodwork"
              description="Built-in hutches, wainscoting, crown molding, mantels, pocket door frames — the millwork that defines the room."
              href="/built-ins-and-millwork-refinishing"
            />
          </div>
        </div>
      </section>

      {/* EPA Certification */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            EPA Certified Lead Removal — required for preservation-compliant
            work on pre-1978 wood.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              All of St. Louis&rsquo;s certified historic districts contain
              homes built before 1978. All of them have lead paint on their
              original woodwork. A certified rehabilitation that doesn&rsquo;t
              handle lead paint correctly isn&rsquo;t compliant — and creates
              health, legal, and documentation exposure.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal. Every pre-1978
              project on historic woodwork includes proper containment, HEPA
              filtration, wet-sanding methods, and documented cleanup. The
              completion record goes in your property file — and supports your
              rehabilitation documentation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Common questions.
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock
        heading="Your historic woodwork may qualify for significant tax savings. Let's figure out together."
        subtext="Free preservation consult. Sue answers every call personally."
      />
    </>
  );
}
