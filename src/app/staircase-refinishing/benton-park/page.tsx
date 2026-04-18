import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTABlock from "@/components/CTABlock";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Benton Park Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped staircase refinishing for Benton Park Victorian cottages and rowhouses. EPA-certified lead removal. 36 years uncovering original fir staircases buried under layers of paint.",
};

const breadcrumbItems = [
  { name: "Home", url: "https://suewheelerstl.com" },
  {
    name: "Staircase Refinishing",
    url: "https://suewheelerstl.com/staircase-refinishing",
  },
  {
    name: "Benton Park",
    url: "https://suewheelerstl.com/staircase-refinishing/benton-park",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com",
  telephone: "(314) 367-6054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Place",
    name: "Benton Park, St. Louis, MO",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5928,
      longitude: -90.2224,
    },
  },
  hasCredential: "EPA Lead-Safe Certified Firm",
  description:
    "Hand-stripping staircase refinishing for Benton Park Victorian cottages and working-class rowhouses. Specializing in original Douglas fir staircases buried under 6–10 layers of paint.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish staircases in Benton Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work throughout Benton Park and have restored staircases in Victorian cottages and rowhouses across the neighborhood. Benton Park is exactly the kind of area where original wood is hiding under generations of paint.",
      },
    },
    {
      "@type": "Question",
      name: "My Benton Park staircase has been painted many times — is the wood worth restoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost always, yes. Paint actually protects wood. The fir under those layers is typically in excellent structural condition — it just needs the paint removed. We assess the wood before committing to a full restoration, but in our experience, Benton Park staircases are almost always worth it.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match a stain across old fir spindles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, though fir is more variable in how it takes stain than oak. We test stain on inconspicuous sections first and blend where needed. With hand-stripping (not dip tanks), we preserve the natural surface texture of the fir, which helps stain penetrate evenly.",
      },
    },
  ],
};

export default function BentonParkStaircaseRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            style={{
              color: "#A65D37",
              fontFamily: '"Playfair Display", Georgia, serif',
            }}
            className="text-sm uppercase tracking-widest mb-4"
          >
            Staircase Refinishing
          </p>
          <h1
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl mb-6 leading-tight"
          >
            Staircase Refinishing in <em>Benton Park</em>
          </h1>
          <p
            style={{ color: "#6B5E55" }}
            className="text-lg mb-8 leading-relaxed"
          >
            Benton Park's Victorian cottages and rowhouses hide some of the
            best-preserved original fir staircases in south St. Louis — often
            buried under six to ten layers of paint. We uncover them by hand,
            never with dip tanks, so the wood and its joinery come back intact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              style={{ backgroundColor: "#11B2E8", color: "#fff" }}
              className="inline-block px-8 py-3 text-base font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:+13143676054"
              style={{ color: "#2A2421" }}
              className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold border border-current rounded hover:opacity-70 transition-opacity"
            >
              <Phone size={18} />
              (314) 367-6054
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood context */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl mb-8"
          >
            What makes Benton Park staircases different
          </h2>
          <div
            style={{ color: "#6B5E55" }}
            className="space-y-5 text-base leading-relaxed"
          >
            <p>
              Benton Park developed primarily between the 1870s and early 1900s
              as a working-class and middle-class residential neighborhood. The
              homes here were built solidly but practically — Victorian cottages
              and attached rowhouses with straight-run staircases, simpler
              turned spindles, and straightforward newel posts. The
              craftsmanship was honest rather than ornate, and the wood used was
              almost universally Douglas fir, which was the standard material
              for interior millwork throughout this era.
            </p>
            <p>
              What distinguishes Benton Park staircases today is their paint
              history. These homes changed hands many times over 120-plus years,
              and each generation of owners added another coat of paint rather
              than stripping back. It is not unusual to find six, eight, or even
              ten distinct paint layers on a Benton Park staircase — each one a
              record of a different decade. The fir beneath is almost always in
              excellent structural condition, because paint is actually
              protective. But uncovering it requires patience and the right
              approach.
            </p>
            <p>
              The turned spindles in Benton Park homes are simpler in profile
              than those found in CWE or Lafayette Square mansions, but they are
              no less vulnerable to dip tank damage. The hide glue at the base
              of every spindle is soluble in the caustic solutions used in dip
              tanks. We remove spindles individually, strip them by hand in the
              shop, and reinstall them with the original joinery intact.
            </p>
            <p>
              Because Benton Park has seen significant renovation activity in
              recent decades, some staircases have a mix of original elements
              and later replacements. We assess each staircase before work
              begins and advise on how best to achieve a cohesive result across
              components of different ages.
            </p>
          </div>
        </div>
      </section>

      {/* Staircase components */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl mb-10"
          >
            Restoring every component of your Benton Park staircase
          </h2>

          <div className="space-y-10">
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Treads &amp; Risers
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Benton Park fir treads are typically narrower than those found
                in grander homes, but the paint accumulation on them is often
                thicker. We strip each tread layer by layer, assessing condition
                as we go. Once down to bare wood, we level the surface, address
                any soft spots, and apply a finish suited to the amount of foot
                traffic the staircase receives. Risers, usually painted, are
                finished to complement the treads.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Spindles &amp; Balusters
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                The turned spindles in Benton Park rowhouses are typically a
                single-profile design — simpler than CWE but still requiring
                individual hand-stripping. We remove each spindle, strip it in
                the shop, and reinstall it. The base joint — the point where the
                spindle meets the tread — is preserved completely. Dip tanks
                would dissolve that joint; our method does not.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Newel Posts
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Benton Park newel posts tend to be square-section with simple
                cap details — sturdy and well-proportioned, but without the
                elaborate carving of larger neighborhood homes. Under
                accumulated paint they are often in near-original condition. We
                strip them by hand, working carefully around any applied
                moldings or panel details that the paint has obscured.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Railings
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Handrails in Benton Park homes are typically a simple rounded or
                oval profile in fir. After decades of hand contact and repeated
                painting, they accumulate a combination of built-up finish and
                wear that requires careful stripping rather than heavy sanding.
                We strip them by hand, along the grain, and finish them to a
                surface that feels as good as it looks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
      <section
        style={{ backgroundColor: "#F8F6F1", borderLeftColor: "#11B2E8" }}
        className="py-14 px-6 border-l-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-2xl mb-5"
          >
            EPA-Certified Lead-Safe Work in Benton Park Homes
          </h2>
          <div
            style={{ color: "#6B5E55" }}
            className="space-y-4 leading-relaxed"
          >
            <p>
              Every Benton Park home built before 1978 is presumed to contain
              lead paint — and virtually all of them were. With six to ten
              layers of paint on a typical staircase, the lead content can be
              substantial, often in the lower layers closest to the original
              wood. We are an EPA-certified lead-safe firm and have decades of
              experience managing lead-paint removal in south St. Louis homes.
            </p>
            <p>
              Our process includes full containment of the work area, wet-method
              stripping where required, and proper disposal of all stripped
              material under EPA RRP protocols. We provide documentation of our
              certification before any work begins, and we discuss scheduling
              with households that include young children or pregnant residents.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-2xl leading-relaxed mb-6 italic"
          >
            "We knew there had to be wood under all that paint — our neighbor
            had the same house and theirs came out beautifully. Sue's team
            stripped ours down to bare fir and it looks like a completely
            different staircase. The grain is gorgeous."
          </blockquote>
          <p
            style={{ color: "#6B5E55" }}
            className="text-sm uppercase tracking-widest"
          >
            — Tom &amp; Kira B., Arsenal Street, Benton Park
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl mb-10"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Do you refinish staircases in Benton Park?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Yes. We work throughout Benton Park and have restored staircases
                in Victorian cottages and rowhouses across the neighborhood.
                Benton Park is exactly the kind of area where original wood is
                hiding under generations of paint.
              </p>
            </div>
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                My Benton Park staircase has been painted many times — is the
                wood worth restoring?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Almost always, yes. Paint actually protects wood. The fir under
                those layers is typically in excellent structural condition — it
                just needs the paint removed. We assess the wood before
                committing to a full restoration, but in our experience, Benton
                Park staircases are almost always worth it.
              </p>
            </div>
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Can you match a stain across old fir spindles?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Yes, though fir is more variable in how it takes stain than oak.
                We test stain on inconspicuous sections first and blend where
                needed. With hand-stripping (not dip tanks), we preserve the
                natural surface texture of the fir, which helps stain penetrate
                evenly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Benton Park staircase."
        subtext="Call (314) 367-6054 or request a free estimate online. We've been restoring south St. Louis staircases since 1989."
      />
    </>
  );
}
