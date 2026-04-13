import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Pocket Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Pocket door refinishing in St. Louis's historic homes. CWE, Lafayette Square, Compton Heights. In-wall hardware, surface access only. EPA Certified. Free estimate.",
};

const faqItems = [
  {
    question: "Can you refinish a pocket door without taking it out of the wall?",
    answer:
      "Yes — that's usually how we do it. The door is pulled from the pocket to the extent the track allows, and we work the accessible surfaces in place. In some cases, full removal from the track is possible for better access; we assess each door individually.",
  },
  {
    question: "My pocket doors were painted over at some point. Can you get back to the original stain?",
    answer:
      "Often yes, but it depends on how many paint layers are present and the condition of the original finish underneath. We strip and assess before committing to a result. If the original finish isn't recoverable, we'll discuss options.",
  },
  {
    question: "Can you do both pocket doors in a set to match?",
    answer:
      "Yes, and we recommend it. Pocket door pairs that don't match finish perfectly are noticeable every time the doors are open. We do sets together so they read as a matched pair.",
  },
  {
    question: "My pocket door is stuck in the wall — it won't slide out. Can you still refinish it?",
    answer:
      "This is a mechanical issue (hardware, track, or clearance) that would need to be addressed before refinishing is possible. If the door won't slide, we'd need to assess why before scoping the refinishing work.",
  },
];

export default function PocketDoorRefinishingPage() {
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
            / Pocket Doors
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Pocket door refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Pocket doors are one of the defining features of St. Louis's historic homes. We
            refinish them in place — carefully.
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

      {/* Historic architecture */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            A signature of St. Louis's historic architecture.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Pocket doors were standard in late 19th and early 20th century St. Louis
              construction. The homes of{" "}
              <Link href="/neighborhoods/central-west-end" className="text-[#11B2E8] hover:underline">
                Central West End
              </Link>
              ,{" "}
              <Link href="/neighborhoods/lafayette-square" className="text-[#11B2E8] hover:underline">
                Lafayette Square
              </Link>
              , Compton Heights, Tower Grove, and Shaw often have them in parlors, dining rooms,
              and between formal spaces. They're a structural feature of the architecture — you
              can't remove them without significant work — and they're a character feature that
              defines these rooms.
            </p>
            <p>
              When pocket doors are in poor condition — finish worn, wood darkened, paint applied
              over original stain — it reads throughout the whole room. When they're right, they're
              quietly remarkable.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            How pocket door refinishing works.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Pocket doors can't be transported to the shop — the hardware is built into the wall.
              We work on them in place, which requires a different approach than board-up door work.
            </p>
            <p>
              The door panel is pulled from the pocket as far as it will travel. We work on the
              accessible surfaces with appropriate solvents and hand tools, strip the finish, stain,
              and apply a new polyurethane topcoat. The process is methodical — it takes longer per
              door than a standard slab job — but the result is a door that looks like it belongs
              in the room it was built for.
            </p>
            <p>
              In some cases, the door can be fully removed from the track for better access. We
              assess each situation and proceed with the method that gives the best result with the
              least risk to the hardware and the wall.
            </p>
          </div>
        </div>
      </section>

      {/* Hardware preservation */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Preserving original pocket door hardware.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Pocket door hardware in St. Louis's historic homes is often original — brass pulls,
            mortise locks, original track systems. We work around it carefully. We're not replacing
            hardware or rebuilding pockets; we're refinishing the wood surface while leaving the
            mechanical elements intact.
          </p>
          <p className="mt-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            If hardware is in poor condition and the client wants it addressed, we can recommend
            specialists — but that's a separate scope from what we do.
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
            EPA Certified for pre-1978 pocket doors.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            The finish on pocket doors in pre-1978 homes almost certainly contains lead. Because
            pocket doors are worked on in place, containment and HEPA filtration are especially
            important. Sue Wheeler is an EPA Certified Lead Removal. Every pre-1978 pocket door
            project includes proper containment and documented cleanup.
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
