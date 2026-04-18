import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Door Refinishing St. Louis | Sue Wheeler — Since 1989",
  description:
    "Front doors, interior doors, French doors, pocket doors — hand-stripped and refinished in St. Louis. EPA Certified for pre-1978 homes. Free estimate: (314) 367-6054.",
};

const faqItems = [
  {
    question: "How long does door refinishing take?",
    answer:
      "A single door typically runs 2–4 days from pickup to reinstallation. Larger projects — a full interior door set, or front door with frame — may take longer. We'll give you a specific timeline with your estimate.",
  },
  {
    question: "Can you match the stain on my other woodwork?",
    answer:
      "Usually. Stain matching across existing millwork is standard for interior door projects. We assess the existing tones and get as close as possible. If an exact match isn't achievable — sometimes original finishes have changed color over decades — we'll tell you before we start.",
  },
  {
    question: "Will my front door hold up to weather after refinishing?",
    answer:
      "Yes — if finished correctly. Exterior doors need a UV-resistant polyurethane and proper surface prep. We finish front doors for the exposure they'll face. How long it lasts also depends on the door's orientation and overhang — a south-facing door in full sun will need attention sooner than a covered north-facing one. We'll tell you what to expect.",
  },
  {
    question: "Do you do just the door, or the frame too?",
    answer:
      "Both. We refinish door slabs and frames together when possible — mismatched finishes on slab and frame look wrong. Let us know what you're working with and we'll scope accordingly.",
  },
  {
    question: "Do you work on historic pocket doors?",
    answer:
      "Yes. Pocket doors are one of the signature features of Central West End, Lafayette Square, and other historic St. Louis neighborhoods. They're accessed in place — the door panel is pulled out, worked on as much as possible, then returned. We've done plenty of them.",
  },
];

export default function DoorRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://suewheelerstl.com" }, { name: "Door Refinishing", url: "https://suewheelerstl.com/door-refinishing" }]} />
      <FAQSchema items={faqItems} />
      <TrustBar />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Door refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Every door in your home tells you something about the people who built it. We make sure
            the finish tells the right story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Door Estimate
            </Link>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 text-base font-sans font-medium text-[#2A2421] hover:text-[#11B2E8] transition-colors"
            >
              <Phone size={16} />
              (314) 367-6054
            </a>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-14 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Front doors. Interior doors. French doors. <em>Pocket doors.</em>
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-8 max-w-2xl">
            Doors are the most-handled architectural element in any home. They take UV exposure
            from outside, humidity cycling from inside, daily contact from everyone who uses them,
            and the accumulated grime of decades. A well-refinished door handles all of that and
            looks right doing it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ServiceCard
              title="Front door refinishing"
              description="Curb appeal. UV protection. The first impression of your home."
              href="/door-refinishing/front-door-refinishing"
            />
            <ServiceCard
              title="Interior door refinishing"
              description="Stain consistency, finish matching, original character preserved."
              href="/door-refinishing/interior-door-refinishing"
            />
            <ServiceCard
              title="French door refinishing"
              description="Multi-lite doors with glass. Hand prep required — no shortcuts."
              href="/door-refinishing/french-door-refinishing"
            />
            <ServiceCard
              title="Pocket door refinishing"
              description="The feature that defines a CWE or Lafayette Square home."
              href="/door-refinishing/pocket-door-refinishing"
            />
          </div>
        </div>
      </section>

      {/* Board-up method */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            We take the door to the shop. <em>Not the shop to the door.</em>
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Most contractors refinish doors in place — which means chemical stripper, fumes, and
              dust in your home. We do it differently.
            </p>
            <p>
              For the majority of door projects, we remove the door from its hinges, transport it
              to our shop, strip and finish it in a controlled environment, then return it and hang
              it. The result is better — controlled humidity and temperature produce a more
              consistent cure — and the process is less disruptive for you. No chemical smell
              lingering in your hallway. No sanding dust on your floors.
            </p>
            <p>
              We call this the board-up method. It's the reason four hours of shop time typically
              replaces what would otherwise be a full day on-site.
            </p>
            <p>
              On-premise work is available when removal isn't practical — for very large doors,
              built-in applications, or commercial spaces with scheduling constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Paint */}
      <section
        className="py-14 px-6 border-l-4"
        style={{ backgroundColor: "#F8F6F1", borderColor: "#11B2E8" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Most St. Louis doors have <em>lead paint.</em> We handle it correctly.
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              If your home was built before 1978 — and in St. Louis, that's the overwhelming
              majority of older homes — the paint on your doors almost certainly contains lead.
              Stripping those doors without EPA-certified lead-safe protocols generates lead dust.
              In the room your family walks through every day.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal. Every door project on a pre-1978
              home is handled with proper containment, HEPA filtration, wet-sanding methods, and
              documented cleanup. You receive a completion record for your property file.
            </p>
            <p>
              This is not optional compliance language. This is what correct work on these surfaces
              requires.
            </p>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Strip &amp; Refinish or <em>Perk Up &amp; Protect?</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6" style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}>
              <h3
                className="font-serif font-semibold text-[#2A2421] text-lg mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Strip &amp; Refinish (S&amp;R)
              </h3>
              <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                Complete restoration. Strip to bare wood, repair any damage, stain if needed,
                finish with polyurethane. For doors with failing finish, significant wear, UV
                damage, or major color change. This is the right choice for most doors that haven't
                been properly finished in years.
              </p>
            </div>
            <div className="p-6" style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}>
              <h3
                className="font-serif font-semibold text-[#2A2421] text-lg mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Perk Up &amp; Protect (PUP)
              </h3>
              <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                Maintenance coat. Light sand and fresh finish over a solid existing base. For doors
                that are structurally sound and holding finish, but looking dull or lightly worn.
                Faster, less expensive, not right for every door — we'll tell you which applies to
                yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl text-[#2A2421] leading-relaxed mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontStyle: "italic" }}
          >
            "Our front door was the first thing guests saw — and it was embarrassing. Sue
            refinished it in a week. Now it looks like it came from the 1890s because it did, and
            it shows."
          </blockquote>
          <p className="text-sm font-sans text-[#6B5E55]">— Homeowner, Lafayette Square</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Common questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your doors."
        subtext="Free estimate. No obligation. Sue answers every call personally."
      />
    </>
  );
}
