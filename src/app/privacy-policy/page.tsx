import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Wood Refinishing by Sue Wheeler",
  description:
    "Privacy policy for suewheelerstl.com — Wood Refinishing by Sue Wheeler, LLC. How we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 px-6 bg-[#EBE6DE]">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-3xl md:text-4xl text-[#2A2421] mb-2"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm font-sans text-[#6B5E55] mb-10">
          Wood Refinishing by Sue Wheeler, LLC · 5260 Washington Place, St. Louis, MO
          63108 · (314) 367-6054 · Last updated: March 2026
        </p>

        <div className="space-y-10 text-base font-sans text-[#6B5E55] leading-relaxed">
          <div>
            <h2
              className="text-xl text-[#2A2421] mb-3"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
            >
              What Information We Collect
            </h2>
            <p className="mb-3">
              When you use this website or contact us, we may collect the following
              information:
            </p>
            <p className="font-medium text-[#2A2421] mb-1">
              Information you provide directly:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Your name, phone number, and email address when you submit a contact or
                estimate request form
              </li>
              <li>Any project details you include in a message or form submission</li>
              <li>Information you share when you call us directly</li>
            </ul>
            <p className="font-medium text-[#2A2421] mb-1">
              Information collected automatically:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Basic analytics data (pages visited, time on site, general geographic
                region) via standard web analytics tools
              </li>
              <li>
                Technical data such as browser type and device type, collected
                automatically by our hosting provider
              </li>
            </ul>
            <p>
              We do not collect payment information through this website. We do not use
              tracking pixels for advertising purposes. We do not sell your data to third
              parties.
            </p>
          </div>

          <div>
            <h2
              className="text-xl text-[#2A2421] mb-3"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
            >
              How We Use Your Information
            </h2>
            <p className="mb-3">We use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Respond to your estimate request or inquiry</li>
              <li>Schedule and conduct an in-person estimate</li>
              <li>Follow up on a project quote</li>
              <li>Communicate about an active or completed project</li>
            </ul>
            <p className="mb-3">
              We use anonymized analytics data only to understand which pages are most
              useful and to improve the site.
            </p>
            <p>
              We do not use your contact information for marketing purposes beyond direct
              follow-up on your inquiry. We do not add you to email lists without
              explicit opt-in.
            </p>
          </div>

          <div>
            <h2
              className="text-xl text-[#2A2421] mb-3"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
            >
              How We Store and Protect Your Information
            </h2>
            <p className="mb-3">
              Contact form submissions are delivered directly to our business email. We
              do not maintain a database of customer contact information beyond what
              exists in our business email and project files.
            </p>
            <p className="mb-3">
              We do not store credit card or financial account information. We do not use
              third-party CRM platforms that retain your data beyond our control.
            </p>
            <p>
              Our website is hosted on a secure platform (HTTPS). Standard industry
              security practices are in place.
            </p>
          </div>

          <div>
            <h2
              className="text-xl text-[#2A2421] mb-3"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
            >
              Third-Party Services
            </h2>
            <p className="mb-3">
              This website may use the following third-party services:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-[#2A2421]">Google Maps</strong> — embedded map
                on the contact page. Google&rsquo;s privacy policy governs their data
                collection.
              </li>
              <li>
                <strong className="text-[#2A2421]">Web analytics</strong> — we may use
                privacy-focused analytics tools to understand site traffic.
              </li>
              <li>
                <strong className="text-[#2A2421]">Email delivery</strong> — contact
                form submissions are routed via an email delivery service.
              </li>
            </ul>
          </div>

          <div>
            <h2
              className="text-xl text-[#2A2421] mb-3"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
            >
              Your Rights
            </h2>
            <p className="mb-3">
              You may request that we delete any personal information we hold about you
              by contacting us at (314) 367-6054 or{" "}
              <a href="mailto:info@suewheelerstl.com" className="text-[#11B2E8]">
                info@suewheelerstl.com
              </a>
              . We will respond within 30 days.
            </p>
            <p>
              Because we do not maintain marketing lists or databases, deletion requests
              are simple — we will remove your contact information from our records upon
              request.
            </p>
          </div>

          <div>
            <h2
              className="text-xl text-[#2A2421] mb-3"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
            >
              Contact
            </h2>
            <p>
              Questions about this policy? Contact Sue Wheeler directly at{" "}
              <a href="tel:3143676054" className="text-[#11B2E8]">
                (314) 367-6054
              </a>{" "}
              or{" "}
              <a href="mailto:info@suewheelerstl.com" className="text-[#11B2E8]">
                info@suewheelerstl.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
