import type { Metadata } from "next";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "Does My Woodwork Need a Full Refinish — or Something Lighter? | Sue Wheeler Wood Refinishing",
  description:
    "Not every piece of dull, worn woodwork needs to be stripped back to bare wood. Here is how to tell the difference — and what the lighter option actually involves.",
  openGraph: {
    title: "Does My Woodwork Need a Full Refinish — or Something Lighter?",
    description:
      "Not every piece of dull, worn woodwork needs to be stripped back to bare wood. Here is how to tell the difference — and what the lighter option actually involves.",
    url: "https://suewheelerstl.com/blog/does-my-woodwork-need-a-full-refinish",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Does My Woodwork Need a Full Refinish — or Something Lighter?",
  description:
    "Not every piece of dull, worn woodwork needs to be stripped back to bare wood. Here is how to tell the difference — and what the lighter option actually involves.",
  url: "https://suewheelerstl.com/blog/does-my-woodwork-need-a-full-refinish",
  datePublished: "2026-04-19",
  dateModified: "2026-04-19",
  author: {
    "@type": "Person",
    name: "Sue Wheeler",
    jobTitle: "Owner",
  },
  publisher: {
    "@type": "Organization",
    name: "Wood Refinishing by Sue Wheeler LLC",
    url: "https://suewheelerstl.com",
  },
};

const faqItems = [
  {
    question: "Can you do the lighter maintenance option on exterior doors?",
    answer:
      "Yes, if the existing finish has not failed. Exterior surfaces take more UV and moisture stress than interior woodwork, so the finish degrades faster. Whether a maintenance coat is appropriate depends on the current state of the existing finish — not just its age. Sue evaluates every exterior door individually before recommending an approach.",
  },
  {
    question: "How long does the lighter maintenance option last?",
    answer:
      "With normal care, five to ten years is realistic. Because the underlying wood and original finish remain intact, the surface is in better condition going into each subsequent maintenance cycle than it would be after repeated full strips. The cumulative effect of maintaining rather than stripping is a piece that holds up better over decades.",
  },
  {
    question:
      "What if I get the lighter maintenance option and it turns out I needed a full refinish?",
    answer:
      "If the existing finish cannot hold a new coat — whether due to adhesion failure or continued peeling — it becomes apparent quickly, and a full refinish is the next step. Sue will tell you at the evaluation if this is a real risk for your specific piece. The maintenance approach is only recommended when the existing finish is genuinely sound enough to support it.",
  },
];

export default function DoesMyWoodworkNeedFullRefinishPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "Does My Woodwork Need a Full Refinish — or Something Lighter?",
            url: "https://suewheelerstl.com/blog/does-my-woodwork-need-a-full-refinish",
          },
        ]}
      />
      <FAQSchema items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-4">
            Wood Refinishing
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl text-[#2A2421] mb-6 leading-tight"
          >
            Does my woodwork need a <em>full refinish</em> — or something
            lighter?
          </h1>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed max-w-2xl">
            Most homeowners assume refinishing means one thing: strip to bare
            wood and start over. There is actually a spectrum. Where your
            woodwork falls on that spectrum determines what the right call is —
            and stripping unnecessarily wastes a finish that still has years of
            life in it.
          </p>
          <p className="text-sm font-sans text-[#6B5E55] mt-4">
            By Sue Wheeler · April 2026 · 6 min read
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            The Full Picture
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What a full refinish actually involves
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            A full refinish means removing everything down to bare wood.
            Chemical stripper is applied, worked in, and removed by hand — no
            shortcuts, no dip tanks. Every layer of old finish comes off. The
            wood is then cleaned, sanded, and prepared from scratch before stain
            and new finish coats go on.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            This is the right approach when the finish has failed — peeling,
            cracking, or worn through to bare wood in multiple areas. It is also
            the right approach when the color needs a complete change, or when
            decades of paint and grime have built up to the point where there is
            no sound finish left to work with. You cannot maintain what is not
            there.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            A full refinish takes longer and costs more than a maintenance
            approach. On old-growth woodwork — a pre-1960 door, a Victorian
            staircase, a set of original kitchen cabinets — it is absolutely
            worth doing when the situation calls for it. The result is a surface
            that looks and performs like new, on wood that cannot be replicated.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            The question is whether the situation calls for it. Stripping a
            finish that is still intact and bonded removes something that did
            not need to be removed. That is the distinction worth understanding.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            When Less Is More
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            When stripping is not the answer
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Dull finish that responds to a proper cleaning is not failed finish.
            It is finish that has not been cleaned in a while. Light surface
            scratches that have not broken through the finish film are cosmetic
            — the finish is still protecting the wood beneath them. Faded color
            on a piece that still has an intact, bonded clear coat is a case
            where the protective layer is still doing its job, even if the
            visual result is tired.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Worn areas on a stair tread or a heavily used door surface can look
            alarming. If the wear has not broken through to raw wood — if there
            is still finish on the surface, still bonded, even if thinned —
            there is something left to work with. Stripping it and starting over
            discards that existing finish and everything it represents: years of
            cure, adhesion developed over time, a surface that has settled into
            the wood.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            The common mistake is treating cosmetic wear as structural failure.
            They look similar. They are not the same thing, and the correct
            response is different.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            The Lighter Option
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            What the maintenance approach is — and what it involves
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            When the existing finish is sound and bonded, it is possible to
            apply fresh finish coats on top of it — reviving the color,
            restoring the sheen, and adding a new protective layer — without
            stripping back to bare wood. The process involves cleaning the
            surface thoroughly, lightly abrading it to create mechanical
            adhesion for the new coats, and applying fresh finish. No harsh
            chemicals. No bare wood exposure. No full strip-and-start-over
            timeline.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            The result looks fully refinished. Fresh finish coats restore color
            depth, even out the sheen, and protect the surface going forward.
            Someone looking at the piece after the work is done will not be able
            to tell it was not stripped. The difference is under the surface —
            the existing finish, which was still sound, is still there.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            The timeline is significantly shorter than a full refinish. No
            drying and cleaning phases after chemical stripper. No waiting for
            bare wood to equalize before stain goes on. The project moves from
            preparation straight to finishing.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            This approach is appropriate for a specific set of conditions. It is
            not a universal shortcut — it only works when the foundation is
            genuinely there. That is why every piece gets evaluated in person
            before a recommendation is made.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            The Diagnostic
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            How to tell which your woodwork needs
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-8">
            You do not need professional tools to make a reasonable initial
            assessment. These are the things to look for.
          </p>
          <div className="space-y-4">
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-3"
              >
                The fingernail test
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                Run your fingernail firmly across the surface. If finish flakes
                off or peels away, the finish has failed — it has lost adhesion
                to the wood beneath it. A full refinish is indicated. If your
                nail scratches the finish but it stays in place and bonded, the
                finish is intact. The maintenance approach may be appropriate.
              </p>
            </div>
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-3"
              >
                Worn areas and raw wood
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                Look closely at high-contact areas: the center of a stair tread,
                the edge of a door where hands grip it, the face of a cabinet
                door near the pull. If you can see bare, unfinished wood —
                lighter in color, with visible grain and no sheen — the finish
                is gone in those spots. Patchwork is possible on small areas,
                but widespread bare wood is a full-refinish signal.
              </p>
            </div>
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-3"
              >
                Corners and edges
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                Peeling almost always starts at corners and edges — where the
                finish film is thinnest and where moisture and mechanical stress
                concentrate. Check the corners of door panels, the edges of
                stair treads, and the joints on cabinet doors. Peeling at
                corners means the finish has failed. Intact corners with a dull
                or faded flat surface suggest the finish is still bonded.
              </p>
            </div>
            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-3"
              >
                Overall dullness vs. localized failure
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                If the whole piece looks uniformly dull and flat — no peeling,
                no bare spots, no flaking — the finish has oxidized and dulled
                but is likely still intact. A uniform surface is a good sign.
                Uneven failure — areas that are peeling while others are fine —
                indicates that adhesion has broken down selectively, which
                typically means the whole finish is compromised and needs to
                come off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Why It Matters
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-6"
          >
            Why this matters for old-growth woodwork
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            The finish on a pre-1960 door or staircase did not develop
            overnight. It has decades of cure behind it. The wood beneath it is
            old-growth — denser, more stable, more resistant to moisture and
            wear than anything commercially available today. When that finish is
            still sound, stripping it unnecessarily removes something that took
            a long time to develop and that is genuinely part of the character
            of the piece.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-5">
            Conservation-minded work preserves what is working and addresses
            what is not. On a piece of genuine old-growth woodwork, that is not
            just an economic argument — it is the correct approach to an
            irreplaceable material. Stripping it down because it looks tired,
            when it is actually sound, is the kind of decision that feels
            thorough but is actually wasteful.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
            Every piece Sue works on gets evaluated for where it actually falls
            on this spectrum. The recommendation follows the condition of the
            specific piece — not a default preference for one approach over
            another.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-10"
          >
            Common questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6"
              >
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  {item.question}
                </h3>
                <p className="font-sans text-[#6B5E55] leading-relaxed text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        heading="Not sure which your woodwork needs?"
        subtext="Sue evaluates every job in person before recommending anything. Free estimate — (314) 367-6054."
      />
    </>
  );
}
