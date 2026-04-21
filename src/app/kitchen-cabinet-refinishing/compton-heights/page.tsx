import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Compton Heights Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Restoring Arts & Crafts kitchen cabinets in Compton Heights — quarter-sawn oak, painted-over fir, thick raised-panel doors stripped by hand. EPA Certified. Free estimate — (314) 367-6054.",
};

const breadcrumbItems = [
  { name: "Home", url: "https://suewheelerstl.com" },
  {
    name: "Kitchen Cabinet Refinishing",
    url: "https://suewheelerstl.com/kitchen-cabinet-refinishing",
  },
  {
    name: "Compton Heights",
    url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/compton-heights",
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
    name: "Compton Heights, St. Louis, MO",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5978,
      longitude: -90.2458,
    },
  },
  description:
    "Restoring Arts & Crafts and Colonial Revival kitchen cabinetry in Compton Heights since 1989. Specializing in quarter-sawn oak and painted-over original fir. EPA Certified Lead Renovator.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish kitchen cabinets in Compton Heights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sue Wheeler has been working in Compton Heights homes for over 36 years. The neighborhood's Arts & Crafts and Colonial Revival kitchens — with their quarter-sawn oak and painted fir cabinetry — are exactly the kind of work we specialize in.",
      },
    },
    {
      "@type": "Question",
      name: "My Compton Heights kitchen has Arts & Crafts cabinets painted over — can you restore the natural wood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and it's some of the most rewarding work we do. Thick Arts & Crafts cabinet doors with raised panels strip beautifully — the profiles that give them character are only enhanced once the paint is removed and the original wood grain is visible again. We hand-strip each piece and apply a stain that honors the original Arts & Crafts aesthetic.",
      },
    },
    {
      "@type": "Question",
      name: "Is quarter-sawn oak harder to match for stain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quarter-sawn oak has a distinctive ray fleck pattern that standard flat-sawn oak doesn't. Matching a stain on quarter-sawn requires understanding how that figure affects absorption. Sue has matched quarter-sawn oak stains in Compton Heights kitchens for decades and custom-blends on-site to get it right.",
      },
    },
  ],
};

export default function ComptonHeightsKitchenCabinetPage() {
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
            className="text-xs uppercase tracking-widest font-sans mb-4"
            style={{ color: "#A65D37" }}
          >
            Kitchen Cabinet Refinishing — Compton Heights
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen Cabinet Refinishing in <em>Compton Heights</em>
          </h1>
          <p
            className="text-lg font-sans mb-8 max-w-2xl"
            style={{ color: "#6B5E55" }}
          >
            Compton Heights Arts &amp; Crafts kitchens were built with
            quarter-sawn oak and solid fir — wood that has spent decades under
            layers of paint. We strip it by hand and bring the natural grain
            back to the surface, exactly as it was meant to look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-white font-sans font-medium rounded"
              style={{ backgroundColor: "#11B2E8" }}
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 px-8 py-4 font-sans font-medium rounded border"
              style={{ color: "#2A2421", borderColor: "#2A2421" }}
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
            className="text-3xl md:text-4xl mb-8"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What makes Compton Heights kitchen cabinets worth refinishing
          </h2>
          <div className="space-y-6 font-sans" style={{ color: "#6B5E55" }}>
            <p>
              Compton Heights was developed between 1895 and 1915, at the height
              of the Arts &amp; Crafts movement. The homes here — Colonial
              Revival and Craftsman bungalows — were built with an attention to
              material quality that shows up in the kitchen cabinetry. Better
              homes got quarter-sawn oak: a cut that produces distinctive ray
              fleck figure and exceptional dimensional stability. Most kitchens
              got solid fir, which in its old-growth form is as stable and
              beautiful a cabinet material as existed at the time.
            </p>
            <p>
              Arts &amp; Crafts cabinet doors are characterized by thick, simple
              raised panels and honest joinery — no applied ornament, just the
              material itself. When those doors are stripped of decades of
              paint, the profiles that define them become visible again. The
              wood grain in old-growth fir is tight and even. The figure in
              quarter-sawn oak is unmistakable. These details can't be purchased
              in any new cabinetry at any price point.
            </p>
            <p>
              Compton Heights homeowners are increasingly choosing to restore
              rather than replace. Many have come to us specifically wanting to
              reverse a previous owner's decision to paint the cabinets — to get
              back to the natural stained wood that the Arts &amp; Crafts
              aesthetic calls for. We hand-strip each door and drawer front,
              assess the wood, and apply the stain that fits the room.
            </p>
            <p>
              Refinishing those cabinets costs 60 to 80 percent less than
              replacement, with none of the disruption of demolition. More
              importantly, it keeps the original wood in place — wood that
              cannot be replicated by anything on the market today.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What we do with your kitchen cabinets
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Door &amp; Drawer Front Refinishing
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Every door and drawer front is removed and taken to our shop for
                hand-stripping. We do not use dip tanks — dipping raises the
                wood grain and destroys the adhesion of any subsequent finish.
                For Arts &amp; Crafts doors with raised panels and detailed
                profiles, hand-stripping is the only way to clean every surface
                without damaging the profile edges.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Cabinet Box &amp; Frame Work
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Cabinet boxes and face frames are stripped, sanded, and
                refinished in your kitchen. We protect surrounding surfaces
                throughout. The finished result is uniform from doors to frames
                — no visible transitions between what went to the shop and what
                was done in place.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Color Changes
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                The most common request in Compton Heights is paint-to-stain
                conversion — restoring painted cabinets back to natural wood. We
                also handle stain-to-paint transitions and stain-to-stain color
                changes. Every color change starts with a complete strip of the
                existing finish so the new application bonds properly and lasts.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Stain Matching
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Quarter-sawn oak absorbs stain differently than flat-sawn oak or
                fir — the ray fleck pattern affects how color reads across the
                surface. Sue custom-blends stains on-site and tests on an
                inconspicuous panel before committing to the full kitchen. After
                36 years of working with historic St. Louis cabinetry, she has
                matched every stain profile that appears in Arts &amp; Crafts
                and Colonial Revival kitchens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
      <section
        style={{
          backgroundColor: "#F8F6F1",
          borderLeftWidth: "4px",
          borderLeftStyle: "solid",
          borderLeftColor: "#11B2E8",
        }}
        className="py-14 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            EPA Certified for pre-1978 kitchen work in Compton Heights
          </h2>
          <div className="space-y-4 font-sans" style={{ color: "#6B5E55" }}>
            <p>
              Every Compton Heights home was built well before 1978 — which
              means lead paint is presumed present under EPA regulations.
              Kitchen cabinets that have been painted repeatedly over the
              decades almost certainly contain lead layers. Stripping without
              proper containment protocols creates health risks for everyone in
              the home.
            </p>
            <p>
              Sue Wheeler holds EPA Lead-Safe Certification, required by federal
              law for any contractor disturbing paint in pre-1978 homes. We
              follow all required containment, cleanup, and waste disposal
              procedures on every job. Your family is protected, and the work is
              fully documented for any future disclosure or inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl md:text-2xl italic mb-6"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            "The previous owners had painted over beautiful quarter-sawn oak
            cabinets — I couldn't believe it when Sue showed me what was
            underneath. She stripped everything by hand and the ray fleck grain
            is just stunning. The kitchen finally looks like the house it
            belongs in."
          </blockquote>
          <p className="font-sans text-sm" style={{ color: "#6B5E55" }}>
            — Patricia H., homeowner, Compton Heights
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Do you refinish kitchen cabinets in Compton Heights?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Yes. Sue Wheeler has been working in Compton Heights homes for
                over 36 years. The neighborhood's Arts &amp; Crafts and Colonial
                Revival kitchens — with their quarter-sawn oak and painted fir
                cabinetry — are exactly the kind of work we specialize in.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                My Compton Heights kitchen has Arts &amp; Crafts cabinets
                painted over — can you restore the natural wood?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Yes, and it's some of the most rewarding work we do. Thick Arts
                &amp; Crafts cabinet doors with raised panels strip beautifully
                — the profiles that give them character are only enhanced once
                the paint is removed and the original wood grain is visible
                again. We hand-strip each piece and apply a stain that honors
                the original Arts &amp; Crafts aesthetic.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Is quarter-sawn oak harder to match for stain?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Quarter-sawn oak has a distinctive ray fleck pattern that
                standard flat-sawn oak doesn't. Matching a stain on quarter-sawn
                requires understanding how that figure affects absorption. Sue
                has matched quarter-sawn oak stains in Compton Heights kitchens
                for decades and custom-blends on-site to get it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Compton Heights cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
