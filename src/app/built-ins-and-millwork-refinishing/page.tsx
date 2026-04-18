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
  title: "Built-In & Millwork Refinishing St. Louis | Sue Wheeler",
  description:
    "Refinishing for built-in hutches, bookcases, buffets, wainscoting, mantels, crown molding and more. Hand-stripped, EPA Certified. St. Louis. Free estimate: (314) 367-6054.",
};

const faqItems = [
  {
    question: "Can you refinish built-ins without removing them from the wall?",
    answer:
      "Yes — and usually that's the only option. Most built-in millwork is structural to the home or too large to remove safely. We work in place, with proper containment and HEPA filtration. For some components — cabinet doors, drawer fronts, removable panels — we'll bring those to the shop for better conditions, then reinstall.",
  },
  {
    question: "Can you match the stain color to my existing woodwork?",
    answer:
      "Usually. Stain matching across existing millwork is one of the more common requests — a dining room hutch that needs to match the door trim, or wainscoting that needs to match the floor. We assess the existing tones and work to get as close as possible. If there's a significant color shift in the original finish due to aging, we'll discuss options with you before we start.",
  },
  {
    question: "How long does built-in refinishing take?",
    answer:
      "It depends on scope. A single hutch or bookcase unit typically runs 3–5 days. A full dining room with wainscoting, hutch, and crown molding might take 1–2 weeks. We'll give you a specific timeline with your estimate.",
  },
  {
    question: "My built-in has some damage — gouges, loose veneer, a cracked panel. Can you fix that too?",
    answer:
      "Often, yes. Minor repairs — filling gouges, stabilizing loose veneer, addressing small cracks — are part of a standard Strip & Refinish. For more significant structural damage, we'll assess and let you know what's realistic before we quote.",
  },
  {
    question: "Does refinishing built-ins qualify for historic tax credits?",
    answer:
      "Possibly. If your home is in a certified historic district and you're doing a qualifying rehabilitation, wood refinishing can be a Qualified Rehabilitation Expenditure. The work needs to align with the Secretary of Interior's Standards — hand-stripping is compliant; dipping typically isn't. We can help you understand whether your project qualifies.",
  },
];

export default function BuiltInsMillworkPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://suewheelerstl.com" }, { name: "Architectural Woodwork Refinishing", url: "https://suewheelerstl.com/built-ins-and-millwork-refinishing" }]} />
      <FAQSchema items={faqItems} />
      <TrustBar />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Built-in refinishing in <em>St. Louis.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            The millwork in your home wasn&rsquo;t put there to be replaced. We make sure it never
            has to be.
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

      {/* What We Refinish */}
      <section className="py-14 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Hutches. Bookcases. Buffets. Wainscoting. Mantels. <em>All of it.</em>
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-8 max-w-2xl">
            When a St. Louis home was built in 1905 or 1925, the millwork wasn&rsquo;t an
            afterthought. It was part of the architecture. The dining room hutch was built into the
            wall. The living room bookcase flanked the fireplace. The wainscoting ran the full
            length of the hallway. None of it was ever meant to come out. That&rsquo;s the work we
            do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <ServiceCard
              title="Built-in hutches, buffets & bookcases"
              description="Dining room built-ins, china cabinets, library bookcases. Original woodwork that has no modern replacement."
              href="/built-ins-and-millwork-refinishing/built-in-hutches-buffets-bookcases"
            />
            <ServiceCard
              title="Room millwork"
              description="Baseboards, crown molding, wainscoting, chair rail, window trim, mantels. The finish that ties a room together."
              href="/built-ins-and-millwork-refinishing/room-millwork"
            />
          </div>
          <div className="p-6" style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] mb-3">
              We also refinish
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {[
                "Fireplace surrounds and overmantels",
                "Window seats and built-in benches",
                "Butler's pantry cabinetry",
                "Built-in desk and office units",
                "Staircase newel surrounds and wainscot paneling",
              ].map((item) => (
                <li key={item} className="text-sm font-sans text-[#6B5E55] leading-relaxed">
                  — {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-sans text-[#6B5E55]">
              If it&rsquo;s wood and it&rsquo;s part of the building, we can refinish it.
            </p>
          </div>
        </div>
      </section>

      {/* Why originals can't be matched */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            You can&rsquo;t buy what&rsquo;s already <em>in your walls.</em>
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Here&rsquo;s something most homeowners don&rsquo;t realize until it&rsquo;s too
              late: the millwork in a pre-WWII St. Louis home is old-growth wood. White oak,
              American chestnut, heart pine, old-growth fir. Tight grain, dense fibers,
              extraordinary durability. The wood that built these houses came from trees that took
              150–200 years to grow. That stock doesn&rsquo;t exist anymore.
            </p>
            <p>
              New wood isn&rsquo;t the same. Modern construction lumber is fast-grown — softer,
              more porous, with wider, looser grain. It doesn&rsquo;t accept stain the same way.
              It doesn&rsquo;t hold up the same way. And it won&rsquo;t look like what was there
              before.
            </p>
            <p>
              When a homeowner replaces a dining room hutch or tears out original wainscoting,
              they&rsquo;re not upgrading. They&rsquo;re trading something irreplaceable for
              something inferior.
            </p>
            <p>
              Refinishing is the only option that preserves what you have. We strip the old finish,
              repair what needs repairing, restain to original or updated color, and seal it with
              polyurethane — oil or water-based, depending on the application. The wood stays. The
              character stays. The value stays.
            </p>
          </div>
        </div>
      </section>

      {/* Hand-stripped never dipped */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            These pieces can&rsquo;t go in a tank. <em>And they shouldn&rsquo;t.</em>
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Built-in woodwork can&rsquo;t be dip-stripped. It&rsquo;s attached to the building.
              Even when individual components can be removed — a cabinet door, a section of
              wainscoting — dipping is the wrong method. Chemical tank stripping raises the wood
              grain, swells profiles, attacks glue joints, and leaves residue in pores that
              interferes with the new finish.
            </p>
            <p>
              We strip by hand. Every piece of millwork, every panel section, every carved profile,
              every linear foot of crown molding — stripped with appropriate solvents, scrapers, and
              detail tools. It takes longer. It&rsquo;s worth it. The grain stays closed. The
              profiles stay sharp. The character of the wood is preserved, not dissolved.
            </p>
            <p>
              This is especially important for carved or profiled millwork. A shallow ogee molding
              or a beaded cabinet door frame has geometry that&rsquo;s irreplaceable if damaged.
              Hand-stripping is the only safe method for that kind of work.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Paint */}
      <section
        className="py-14 px-6 border-l-4"
        style={{ backgroundColor: "#EBE6DE", borderColor: "#11B2E8" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Most St. Louis millwork has <em>lead paint.</em> We handle it correctly.
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Pre-1978 homes — and in St. Louis&rsquo;s historic neighborhoods, that means almost
              everything — have lead paint on their woodwork. Sometimes it&rsquo;s visible. Often
              it&rsquo;s buried under layers of subsequent paint. Either way, stripping it
              incorrectly creates lead dust, which is a serious health hazard, especially in homes
              with children.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal. Millwork refinishing on pre-1978
              surfaces is handled with proper containment, HEPA filtration, wet methods, and
              documented cleanup. You receive a completion record.
            </p>
            <p>
              This matters especially for built-ins and millwork because these surfaces are in
              living spaces — dining rooms, living rooms, hallways, bedrooms. Where your family
              actually spends time.
            </p>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Strip &amp; Refinish or <em>Perk Up &amp; Protect?</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="p-6" style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}>
              <h3
                className="font-serif font-semibold text-[#2A2421] text-lg mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Strip &amp; Refinish (S&amp;R)
              </h3>
              <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                Complete restoration. Strip to bare wood, address any damage, stain if needed,
                finish with polyurethane. For millwork that has failing finish, significant
                discoloration, paint buildup, or hasn&rsquo;t been properly finished in decades.
                Most historic built-ins need this.
              </p>
            </div>
            <div className="p-6" style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}>
              <h3
                className="font-serif font-semibold text-[#2A2421] text-lg mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Perk Up &amp; Protect (PUP)
              </h3>
              <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                Maintenance coat. Light sand and fresh finish over a solid existing base. For
                millwork that is structurally sound, holding its finish, but looking dull, slightly
                worn, or faded. Faster and less expensive. Not right for every situation — we&rsquo;ll
                tell you honestly which applies.
              </p>
            </div>
          </div>
          <p className="text-sm font-sans text-[#6B5E55]">
            Some rooms need a mix: wainscoting that&rsquo;s in decent shape gets PUP while a hutch
            with peeling finish gets S&amp;R. We scope it piece by piece.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl text-[#2A2421] leading-relaxed mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontStyle: "italic" }}
          >
            &ldquo;Our dining room hutch was original to the house — 1912, solid white oak. It had
            been painted over at some point in the 1970s and we thought it was ruined. Sue stripped
            every inch of it by hand, brought the grain back, and matched the stain to our hardwood
            floors. We had no idea what was under there. Now it&rsquo;s the best thing in the
            room.&rdquo;
          </blockquote>
          <p className="text-sm font-sans text-[#6B5E55]">— Homeowner, Compton Heights</p>
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
        heading="Let's talk about your millwork."
        subtext="Free estimate. No obligation. Sue answers every call personally."
      />
    </>
  );
}
