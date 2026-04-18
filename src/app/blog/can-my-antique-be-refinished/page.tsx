import type { Metadata } from "next";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "Can My Antique Be Refinished? A Practical Guide | Sue Wheeler Wood Refinishing",
  description:
    "Most antique furniture can be refinished — but a few conditions determine whether it's the right call. Here's how to think about it before you call.",
  openGraph: {
    title: "Can My Antique Be Refinished? A Practical Guide",
    description:
      "Most antique furniture can be refinished — but a few conditions determine whether it's the right call. Here's how to think about it before you call.",
    url: "https://suewheelerstl.com/blog/can-my-antique-be-refinished",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Can My Antique Be Refinished? A Practical Guide",
  description:
    "Most antique furniture can be refinished — but a few conditions determine whether it's the right call. Here's how to think about it before you call.",
  url: "https://suewheelerstl.com/blog/can-my-antique-be-refinished",
  datePublished: "2026-04-18",
  dateModified: "2026-04-18",
  author: {
    "@type": "Person",
    name: "Sue Wheeler",
    jobTitle: "Owner, Wood Refinishing by Sue Wheeler LLC",
  },
  publisher: {
    "@type": "Organization",
    name: "Wood Refinishing by Sue Wheeler, LLC",
    url: "https://suewheelerstl.com",
  },
  about: {
    "@type": "LocalBusiness",
    "@id": "https://suewheelerstl.com/#business",
  },
};

const faqItems = [
  {
    question: "Will refinishing hurt the value of my antique?",
    answer:
      "It depends on what kind of antique you have. For museum-quality pieces with documented provenance — furniture that is catalogued, attributed to a specific maker, and traded by serious collectors — the original surface is part of the historical record, and any refinishing should involve a conservator rather than a refinisher. But that describes a small fraction of antique furniture. For the grandmother's dining table, the 1920s dresser you bought at an estate sale, the mahogany sideboard from your parents' house — these are usable antiques. Their original finish has usually failed, been painted over, or been damaged beyond saving. A correct, period-appropriate refinish does not diminish that kind of value. A cracked, peeling, or amateur-painted surface does.",
  },
  {
    question:
      "My piece has been painted over. Is the original finish recoverable?",
    answer:
      "Paint can be stripped down to bare wood — that is straightforward. What lies under the paint depends on the original wood condition, which on genuinely old pieces is almost always excellent. Old-growth walnut, mahogany, cherry, and oak were cut from slower-growing trees with tighter grain than what is available today. When the paint comes off, the wood underneath is typically beautiful. We strip everything by hand — no dip tanks, which swell wood joints and destroy veneer — so the piece comes through the process intact. Once we are at bare wood, we can discuss the appropriate finish for the era and use of the piece.",
  },
  {
    question: "How do I know if my piece is solid wood or veneer?",
    answer:
      "Look at the edges and the back. On a solid wood piece, the grain pattern continues around corners — the top surface and the edge will show continuous grain. On a veneered piece, you will see a visible seam or layering at the edge where the thin face veneer meets the substrate. The back of drawers and the underside of a case piece will also often show the substrate clearly. If you are uncertain, bring the piece in — we can tell you at a glance. Knowing whether a piece is solid or veneered matters because veneer in good condition refinishes beautifully, but veneer with lifting, bubbling, or missing patches requires a different conversation about what the result will look like.",
  },
  {
    question:
      "Can you refinish a piece that has missing inlay or brass hardware?",
    answer:
      "Inlay restoration is a separate discipline from refinishing — it involves cutting, fitting, and gluing new materials into precise channels, and it is specialty work beyond what we do. That said, we can absolutely refinish a piece that has existing inlay in good condition; we work carefully around it and the inlay typically looks dramatically better once the surrounding wood is restored. Brass hardware — pulls, escutcheons, hinges — is removed before refinishing and reattached when the finish is cured. If hardware is missing, we can discuss options, but sourcing period-appropriate hardware is typically something the owner handles separately.",
  },
];

export default function CanMyAntiqueBeRefinishedPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "Can My Antique Be Refinished?",
            url: "https://suewheelerstl.com/blog/can-my-antique-be-refinished",
          },
        ]}
      />
      <FAQSchema items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero / intro */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-4">
            Furniture Refinishing
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl text-[#2A2421] mb-6 leading-tight"
          >
            Can my <em>antique</em> be refinished?
          </h1>
          <p className="text-[#6B5E55] font-sans leading-relaxed text-lg mb-6">
            Most antiques that come through the door are refinishable. The
            question worth asking isn&rsquo;t whether it can be done —
            it&rsquo;s whether refinishing is the right decision for your
            particular piece, and what the work actually involves. Those are
            different questions, and both have real answers.
          </p>
          <p className="text-sm font-sans text-[#6B5E55]">April 18, 2026</p>
        </div>
      </section>

      {/* The short answer */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-4"
          >
            The short answer: probably yes
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            Structural soundness is the primary test. If the joints hold, the
            legs don&rsquo;t wobble, the drawers work, and the wood itself is
            intact, refinishing is almost always viable. Full stop. The
            condition of the finish sitting on top of the wood — whether
            it&rsquo;s cracked shellac, faded lacquer, chipped paint, or cloudy
            polyurethane — has nothing to do with whether the piece can be
            saved. The finish is a coating. It is entirely separate from the
            structural and material value of the piece underneath.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            Stripping a finish off a sound antique is not destructive. Done
            correctly — by hand, with appropriate solvents matched to the
            existing finish, without dip tanks or aggressive mechanical abrasion
            — stripping is the correct way to restore an old piece. Dip tanks
            are what destroy antique furniture: the heat, water, and caustic
            chemistry swell glue joints, raise grain, and turn veneer into a
            bubbling ruin. We don&rsquo;t dip. We hand-strip everything, which
            is slower and more expensive per hour, but the only method that
            actually works on furniture worth caring about.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            The one meaningful exception: museum-quality pieces with
            historically significant original finishes should be evaluated by a
            conservator, not a refinisher. If a piece belongs in a museum — if
            its documented provenance, maker attribution, and original surface
            are part of its scholarly and market value — then the original
            finish is a primary document, not a coating to be removed. That
            describes a genuinely small category of antique furniture. For
            everything else — the pieces people use, inherit, find at estate
            sales, and pass down through families — refinishing is almost always
            the right call when the finish has failed.
          </p>
        </div>
      </section>

      {/* What we look at */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421]"
          >
            What we look for before quoting antique furniture work
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            An evaluation isn&rsquo;t a formality. There are four things we
            actually examine before we can give you an honest quote, because
            each of them affects the scope of work, the timeline, and what the
            finished piece will realistically look like.
          </p>

          {/* Structural integrity */}
          <div>
            <h3
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-xl text-[#2A2421] mb-3"
            >
              Structural integrity
            </h3>
            <p className="text-[#6B5E55] font-sans leading-relaxed">
              Joints, legs, drawers, and case construction. A piece that&rsquo;s
              racked — leaning out of square because the joints have failed —
              needs repair before refinishing. Trying to refinish a structurally
              compromised piece is a waste of money: the finish can&rsquo;t hold
              what the joints won&rsquo;t. We do furniture repair as part of our
              service, so a loose joint or a failed tenon isn&rsquo;t a
              deal-breaker — it&rsquo;s just additional work that goes into the
              quote. What we want to establish before anything else is: is this
              piece sound, or does it need to be made sound first?
            </p>
          </div>

          {/* Veneer condition */}
          <div>
            <h3
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-xl text-[#2A2421] mb-3"
            >
              Veneer condition
            </h3>
            <p className="text-[#6B5E55] font-sans leading-relaxed">
              Solid old-growth wood is almost always refinishable without
              complication. Veneered pieces require a closer look. Veneer in
              good condition — flat, adhered, without lifting at the edges or
              around joints — refinishes beautifully and is nothing to be
              concerned about. The grain on old-growth veneered pieces is often
              extraordinary: matched crotch mahogany, book-matched walnut burl,
              quartersawn oak with prominent medullary rays. Stripping carefully
              and refinishing brings all of that back.
            </p>
            <p className="text-[#6B5E55] font-sans leading-relaxed mt-4">
              Where it gets complicated is veneer that is lifting, bubbling, or
              missing patches. Minor lifting at an edge can sometimes be
              addressed — we can re-glue and clamp lifted sections. Significant
              veneer loss or delamination across a large surface is a different
              problem, and we will tell you honestly what a refinished piece
              with significant veneer issues will look like. Sometimes the
              answer is that refinishing is still worth doing. Sometimes the
              condition of the veneer limits what&rsquo;s achievable. You
              deserve a straight answer before you commit.
            </p>
          </div>

          {/* Wood species */}
          <div>
            <h3
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-xl text-[#2A2421] mb-3"
            >
              Wood species and grain
            </h3>
            <p className="text-[#6B5E55] font-sans leading-relaxed">
              Old-growth walnut, mahogany, cherry, and oak are what antique
              American and European furniture is almost always made of, and they
              respond beautifully to refinishing. These species were cut from
              trees that grew slowly over decades or centuries — the rings are
              tight, the grain is even, the figure is rich. The wood you find
              under the failed finish on a genuine antique piece is almost
              always better than anything you can buy today. Revealing it is the
              point of the whole exercise.
            </p>
            <p className="text-[#6B5E55] font-sans leading-relaxed mt-4">
              Some imported pieces made from tropical hardwoods are more
              variable — the species matters, and some require different
              finishing approaches. If you have a piece of uncertain origin or
              unusual wood, we&rsquo;ll identify what it is before quoting. The
              species doesn&rsquo;t make a piece unrefinishable; it affects the
              finishing approach and finish selection.
            </p>
          </div>

          {/* Current finish type */}
          <div>
            <h3
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-xl text-[#2A2421] mb-3"
            >
              Current finish type
            </h3>
            <p className="text-[#6B5E55] font-sans leading-relaxed">
              What&rsquo;s on the piece now determines how we get it off — and
              that affects both the timeline and the approach. Shellac, which
              was the dominant finish on American furniture through roughly
              1940, strips easily with denatured alcohol. Lacquer, common from
              the 1920s onward, is solvent-stripped. Old-school varnish responds
              to chemical strippers. Oil and wax finishes are addressed
              mechanically and chemically in combination.
            </p>
            <p className="text-[#6B5E55] font-sans leading-relaxed mt-4">
              Old polyurethane — slapped on over original finish by a previous
              owner who wanted a quick fix — is the most labor-intensive to
              remove. It cannot be chemically softened the way shellac can. It
              has to be mechanically stripped, carefully and by hand, which
              takes more time. If your piece has a thick, plastic-looking finish
              that was applied in the 1970s or &rsquo;80s over what was
              obviously a period piece, expect the quote to reflect that. The
              piece is still worth saving — the extra work is just real.
            </p>
          </div>
        </div>
      </section>

      {/* Lead paint */}
      <section className="py-14 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-[#11B2E8] pl-8 space-y-6">
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421]"
            >
              Pre-1940 antiques and lead paint
            </h2>
            <p className="text-[#6B5E55] font-sans leading-relaxed">
              If the piece was made before 1940, assume the finish contains
              lead. That assumption holds whether the existing surface looks
              like paint or like a clear or tinted varnish. Lead was added to
              paint and to many varnishes as a drying agent — it accelerated
              curing and improved adhesion and hardness. It was widely used and
              broadly considered beneficial until the evidence against it became
              undeniable. It is present in a huge percentage of pre-1940
              furniture finishes, regardless of how the finish looks.
            </p>
            <p className="text-[#6B5E55] font-sans leading-relaxed">
              We are EPA Certified for lead-safe work practices under the
              Renovation, Repair, and Painting Rule. That certification is not a
              marketing distinction — it is a legal qualification that governs
              how we handle lead-containing materials. When we strip a pre-1940
              piece, we use proper containment, HEPA filtration, wet methods
              that suppress dust, and correct disposal of all lead-bearing
              waste. This is not a footnote to the refinishing process. It is
              the refinishing process, done correctly. A refinisher who is not
              EPA Certified and is stripping pre-1940 furniture without these
              controls is creating a lead exposure hazard — for themselves, for
              you, and for whoever else occupies the space.
            </p>
            <p className="text-[#6B5E55] font-sans leading-relaxed">
              If you have a pre-1940 antique you want refinished, ask any
              contractor you speak with for their EPA Certification number and
              verify it. The EPA&rsquo;s certification search tool is publicly
              available. This matters more than price.
            </p>
          </div>
        </div>
      </section>

      {/* Refinishing and value */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421]"
          >
            Refinishing and antique value
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            The collector&rsquo;s concern about refinishing is real but narrowly
            applicable. Yes — for a documented, museum-quality piece with an
            intact original surface, the original finish is part of its
            provenance and removing it diminishes its market value to serious
            collectors. That argument is legitimate and worth taking seriously
            when it applies. The mistake is generalizing it to all antique
            furniture.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            The vast majority of antique furniture in American homes — the
            dining tables, dressers, armoires, sideboards, and chairs that have
            been passed down through families or acquired at estate sales — is
            usable antique furniture, not investment-grade collectibles. These
            pieces have original finishes that have cracked, darkened, been
            painted over by previous owners, or simply given out after eighty or
            a hundred years of use. A failed finish is not a historical
            document. It&rsquo;s a failed finish. Replacing it with a correct,
            period-appropriate surface restores the piece to something like its
            original condition — which is what &ldquo;restoration&rdquo;
            actually means.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            What period-appropriate means in practice: for pre-1940 American
            furniture, we use shellac, which was the dominant interior wood
            finish through that era. For early American pieces, oil finishes are
            often correct. Lacquer is appropriate for mid-century work. We do
            not apply polyurethane to a Federal period highboy or a Victorian
            parlor chair. The finish selection is matched to the era and use of
            the piece because that&rsquo;s how the work is done correctly, and
            because the result looks right in a way that anachronistic finishes
            never do.
          </p>
        </div>
      </section>

      {/* Antique pieces we work on */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421]"
          >
            Antique pieces we work on regularly
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            Over 36 years of refinishing work — since 1989 — we&rsquo;ve worked
            on the full range of antique furniture that shows up in St. Louis
            homes. This city has a remarkable stock of Victorian-era and
            early-twentieth-century housing, and the furniture that comes out of
            those houses is consistently excellent material. The pieces we see
            most often:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#6B5E55] font-sans leading-relaxed pl-2">
            <li>Dining tables — pedestal, trestle, extension, gate-leg</li>
            <li>Dining chairs and armchairs, including sets</li>
            <li>Dressers, chests of drawers, and highboys</li>
            <li>Armoires and wardrobes</li>
            <li>Sideboards and buffets</li>
            <li>Secretary desks and drop-front desks</li>
            <li>Library tables and writing tables</li>
            <li>Parlor chairs and settees with wood frames</li>
            <li>Grandfather clock cases</li>
            <li>Fireplace mantels with furniture-quality wood</li>
            <li>Framed mirrors with ornate wood or gilt frames</li>
          </ul>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            If you have something that doesn&rsquo;t fit neatly on that list,
            bring it in. We&rsquo;ve seen a lot of unusual pieces over the
            years. If it&rsquo;s wood, it&rsquo;s almost certainly something we
            can evaluate — and if we can&rsquo;t take the work, we&rsquo;ll tell
            you that honestly and point you toward whoever can.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421]"
          >
            Questions we hear most often
          </h2>

          {faqItems.map((item, i) => (
            <div key={i} className="space-y-3">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421]"
              >
                {item.question}
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Bring your antique in for an evaluation."
        subtext="Free estimate. No pressure. Sue looks at every piece personally before quoting — (314) 367-6054."
      />
    </>
  );
}
