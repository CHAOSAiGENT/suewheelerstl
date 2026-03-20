import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free Estimate | Wood Refinishing St. Louis | Sue Wheeler",
  description:
    "Get a free wood refinishing estimate from Sue Wheeler. Call (314) 367-6054 or submit the form. Sue answers every call personally. Metropolitan St. Louis.",
};

export default function ContactPage() {
  return (
    <>
      <TrustBar />

      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — phone + info */}
            <div>
              <h1
                className="text-4xl md:text-5xl text-[#2A2421] mb-4"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
              >
                Get a <em>free estimate.</em>
              </h1>
              <p className="text-lg text-[#6B5E55] font-sans mb-10 leading-relaxed">
                Sue answers every call personally. Tell her what you have — she&rsquo;ll
                tell you what it needs.
              </p>

              {/* Phone — large */}
              <div className="mb-10">
                <a
                  href="tel:3143676054"
                  className="flex items-center gap-3 group"
                >
                  <Phone
                    size={24}
                    className="text-[#11B2E8] shrink-0"
                  />
                  <span
                    className="text-3xl font-sans font-medium text-[#2A2421] group-hover:text-[#11B2E8] transition-colors"
                  >
                    (314) 367-6054
                  </span>
                </a>
                <p className="text-sm text-[#6B5E55] font-sans mt-2 ml-9">
                  Sue Wheeler answers personally. No call centers. No schedulers.
                </p>
              </div>

              {/* Address */}
              <div className="mb-10">
                <h2
                  className="text-xl text-[#2A2421] mb-3"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
                >
                  Where we work.
                </h2>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#11B2E8] mt-0.5 shrink-0" />
                  <div className="text-sm font-sans text-[#6B5E55]">
                    <p className="font-medium text-[#2A2421]">5260 Washington Place</p>
                    <p>St. Louis, MO 63108</p>
                    <p className="mt-2">
                      Metropolitan St. Louis — city neighborhoods and county communities
                      west of the Mississippi. If you&rsquo;re unsure whether we serve
                      your area, call and ask.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="aspect-video bg-[#F8F6F1] overflow-hidden" style={{ borderRadius: "2px" }}>
                <iframe
                  src="https://maps.google.com/maps?q=5260+Washington+Pl,+St.+Louis,+MO+63108&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wood Refinishing by Sue Wheeler location"
                />
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["BBB A+ Accredited", "EPA Certified Lead Renovator", "In Business Since 1989"].map(
                  (c) => (
                    <span
                      key={c}
                      className="text-xs font-sans text-[#6B5E55] bg-[#F8F6F1] px-3 py-1.5"
                      style={{ borderRadius: "2px" }}
                    >
                      {c}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right — form */}
            <div>
              <h2
                className="text-xl text-[#2A2421] mb-6"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
              >
                Or send us a note.
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
