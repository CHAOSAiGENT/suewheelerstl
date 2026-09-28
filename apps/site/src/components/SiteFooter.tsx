import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#F8F6F1",
        borderTop: "4px solid #11B2E8",
        color: "#2A2421",
      }}
    >
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Business info */}
          <div>
            <p
              className="font-serif italic text-2xl mb-1 text-[#2A2421]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Sue Wheeler
            </p>
            <p className="text-xs uppercase tracking-widest text-[#6B5E55] mb-4 font-sans">
              Wood Refinishing · St. Louis
            </p>
            <div className="space-y-2 text-sm text-[#6B5E55] font-sans">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-[#11B2E8] shrink-0" />
                <span>
                  900 S Boyle Ave
                  <br />
                  St. Louis, MO 63110
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#11B2E8] shrink-0" />
                <a
                  href="tel:3143676054"
                  className="text-[#11B2E8] hover:text-[#0e96c4] transition-colors font-medium"
                >
                  (314) 367-6054
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6B5E55] mb-4 font-sans">
              Services
            </p>
            <ul className="space-y-2 text-sm font-sans">
              {[
                ["Kitchen Cabinet Refinishing", "/kitchen-cabinet-refinishing"],
                ["Door Refinishing", "/door-refinishing"],
                ["Staircase Refinishing", "/staircase-refinishing"],
                [
                  "Architectural Woodwork",
                  "/built-ins-and-millwork-refinishing",
                ],
                ["Perk Up & Protect", "/perk-up-and-protect"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#2A2421] hover:text-[#11B2E8] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6B5E55] mb-4 font-sans">
              Resources
            </p>
            <ul className="space-y-2 text-sm font-sans">
              {[
                ["Historic Preservation", "/historic-preservation"],
                ["Portfolio", "/portfolio"],
                ["Reviews", "/reviews"],
                ["FAQ", "/faq"],
                ["About Sue", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#2A2421] hover:text-[#11B2E8] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Credentials */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6B5E55] mb-4 font-sans">
              Credentials
            </p>
            <ul className="space-y-3 text-sm font-sans">
              <li className="flex items-start gap-2">
                <span className="text-[#11B2E8] mt-0.5">✓</span>
                <span>EPA Certified Lead Removal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#11B2E8] mt-0.5">✓</span>
                <span>
                  Featured in{" "}
                  <em
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    St. Louis Magazine
                  </em>{" "}
                  — &ldquo;Perfect Finish&rdquo;
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#11B2E8] mt-0.5">✓</span>
                <span>Sue Answers Every Call Personally</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#11B2E8] mt-0.5">✓</span>
                <span>Est. 1989 · St. Louis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B5E55] font-sans">
          <span>© 2026 Wood Refinishing by Sue Wheeler, LLC</span>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-[#2A2421] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-[#2A2421] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
