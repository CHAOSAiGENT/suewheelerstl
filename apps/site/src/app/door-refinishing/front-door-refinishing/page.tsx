import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Front Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Restore your front door's finish — UV damage, weathering, peeling repaired by hand. Sue Wheeler, 36 years, EPA Certified. Curb appeal starts here. Free estimate.",
};

const faqItems = [
  {
    question: "How often does a front door need to be refinished?",
    answer:
      "It depends on the door's exposure. A south- or west-facing door in full sun may need attention every 3–5 years. A covered north-facing door in good condition may go 7–10 years. We'll assess yours and tell you where it stands.",
  },
  {
    question: "Can you match the stain on my door to my interior woodwork?",
    answer:
      "For exterior doors, the finish is going to be different from your interior trim — exterior polyurethane is formulated for UV resistance and weather exposure, which changes the sheen and character. We can get tonally close, but an exact match between exterior and interior finishes isn't realistic or appropriate.",
  },
  {
    question: "Do you refinish just the door slab or the frame too?",
    answer:
      "We can do both — and usually recommend doing the frame when the slab is being done. A refinished door slab next to an unfinished or failing frame looks mismatched. We'll assess the frame condition and quote accordingly.",
  },
  {
    question: "My door has some weathering and minor wood damage. Can you repair it?",
    answer:
      "Minor repairs — surface checks, small cracks, weathered areas — are often handled as part of a standard Strip & Refinish. More significant structural damage gets assessed before we quote.",
  },
];

export default function FrontDoorRefinishingPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            <Link href="/door-refinishing" className="hover:underline">
              Door Refinishing
            </Link>{" "}
            / Front Doors
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Front door refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Your front door takes more sun, weather, and daily contact than any other wood surface
            on your home. The finish has to earn it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Estimate
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

      {/* What a front door goes through */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What a St. Louis front door goes through.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            A front door in St. Louis faces real conditions: summer heat, UV exposure, humidity
            swings from 20% to 90%, hard winters, and daily contact from everyone who enters or
            leaves. Most exterior wood finishes start breaking down in 3–5 years under those
            conditions. When the finish fails, water gets into the wood. The wood swells and
            contracts. The finish peels faster. The cycle accelerates.
          </p>
          <p className="mt-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            A refinished front door with proper UV-resistant polyurethane and correct surface prep
            handles those conditions. A door that's been dipped, or finished over a failing old
            coat, doesn't.
          </p>
        </div>
      </section>

      {/* Board-up */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            The board-up method for front doors.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-4">
            For most front door projects, we remove the door from its hinges, transport it to our
            shop, and refinish it in a controlled environment. Controlled temperature and humidity
            produce a more consistent cure. No chemical smell in your home. No sanding dust in
            your entryway.
          </p>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-4">
            We typically have front doors back and rehung within 3–5 days. If your entry requires
            on-premise work — a door that can't be safely removed, or a commercial building with
            security requirements — we can work on-site.
          </p>
          <Link
            href="/door-refinishing"
            className="text-sm font-sans font-semibold text-[#11B2E8] hover:underline uppercase tracking-widest"
          >
            How the board-up method works →
          </Link>
        </div>
      </section>

      {/* Pre-sale */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Pre-sale front doors.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            A refinished front door is one of the highest-ROI exterior improvements before listing
            a home. It's the first thing a buyer sees. Real estate agents consistently flag worn
            front door finish as a visual negative in listings and showings.
          </p>
          <p className="mt-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            If you're preparing to sell, we can usually turn a front door project in under a week.
          </p>
        </div>
      </section>

      {/* EPA */}
      <section
        className="py-14 px-6 border-l-4"
        style={{ backgroundColor: "#EBE6DE", borderColor: "#11B2E8" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            EPA Certified for pre-1978 front doors.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            The paint on exterior doors in St. Louis's older homes almost certainly contains lead.
            Stripping them without EPA-certified protocols generates lead dust at the entry of your
            home. Sue Wheeler is an EPA Certified Lead Removal. Every pre-1978 door project
            includes proper containment and documented cleanup.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
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
        heading="Free estimate. No obligation."
        subtext="Sue answers every call personally."
      />
    </>
  );
}
