import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion, FAQSchema } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Newel Post Refinishing St. Louis | Sue Wheeler",
  description:
    "Newel post refinishing in St. Louis's historic homes. Architectural statement piece, preservation-minded approach. Sue Wheeler, EPA Certified. Free estimate.",
};

const faqItems = [
  {
    question:
      "My newel post has some carved detail that's been damaged. Can you repair it?",
    answer:
      "Minor surface damage — small cracks, worn edges, superficial checks — can often be addressed as part of a Strip & Refinish. Significant structural damage or missing carved sections is beyond refinishing scope. We assess and advise honestly.",
  },
  {
    question: "Can you match the refinished newel to my existing stair treads?",
    answer:
      "Yes — for full staircase projects this is standard. For newel-only projects where the rest of the stair hasn't been refinished recently, we work to match as closely as possible, accounting for the fact that aged finishes have shifted from their original color.",
  },
  {
    question:
      "My newel post was painted and I want to return it to stained wood. Is that possible?",
    answer:
      "Depends on the wood condition underneath. Many painted newels in historic homes have perfectly intact original stain finish under the paint — they were painted over in a later renovation. We strip and assess before committing to a result.",
  },
];

export default function NewelPostsPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            <Link href="/staircase-refinishing" className="hover:underline">
              Staircase Refinishing
            </Link>{" "}
            / Newel Posts
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Newel post refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            The newel post is the architectural anchor of a historic staircase.
            When it's right, the whole stair is right.
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

      {/* Statement piece */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            The statement piece of the staircase.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              The newel post is the largest, most visible element of most
              historic staircases — and in St. Louis's late-Victorian and
              Edwardian homes, it's often the most architecturally significant.
              Carved box newels, turned column newels, paneled newels with cap
              details: these were built from old-growth lumber, by craftsmen, to
              last.
            </p>
            <p>
              You can't replace them with new wood and get the same result.
              Modern newel post replacements are pine or poplar, machine-routed,
              with profiles that read as copies rather than originals. The
              density is different. The grain is different. The character is
              different.
            </p>
            <p>
              Refinishing is the right choice for any original newel post that's
              structurally sound.
            </p>
          </div>
        </div>
      </section>

      {/* What it involves */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What newel post refinishing involves.
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Newel posts are worked on in place — they're structural to the
              staircase and can't be transported to the shop. We use appropriate
              hand tools and solvents to strip the existing finish, assess and
              address any surface damage (checks, minor cracks, worn areas),
              stain to match or update the existing tone, and apply
              polyurethane.
            </p>
            <p>
              For carved or paneled newels with complex profile work, the detail
              stripping requires patience and specific tools. This is not a job
              that benefits from being rushed.
            </p>
          </div>
        </div>
      </section>

      {/* Matching */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Matching the newel to the rest of the staircase.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            When a newel post is being refinished as part of a full staircase
            project, we coordinate the stain and finish to match the handrail,
            treads, and risers. When the newel is being addressed alone —
            because it's in worse condition than the rest of the stair — we work
            to match the existing finish as closely as possible.
          </p>
        </div>
      </section>

      {/* Historic preservation */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Historic homes — preservation considerations.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-4">
            For homes in certified historic districts, or homes undergoing
            qualifying rehabilitation, the Secretary of Interior's Standards
            favor the gentlest effective treatment for historic wood. Hand
            stripping of original newel posts is compliant; replacement with new
            materials raises standards questions. We're familiar with these
            requirements.
          </p>
          <Link
            href="/historic-preservation"
            className="text-sm font-sans font-semibold text-[#11B2E8] hover:underline uppercase tracking-widest"
          >
            Historic preservation and wood refinishing →
          </Link>
        </div>
      </section>

      {/* EPA */}
      <section
        className="py-14 px-6 border-l-4"
        style={{ backgroundColor: "#F8F6F1", borderColor: "#11B2E8" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            EPA Certified for pre-1978 newel posts.
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
            Sue Wheeler is an EPA Certified Lead Removal. Pre-1978 newel posts
            include lead paint — every project includes proper containment and
            documented cleanup.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
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
