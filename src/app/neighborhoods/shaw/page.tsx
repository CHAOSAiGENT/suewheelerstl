import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Shaw St. Louis | Sue Wheeler",
  description:
    "Wood refinishing in Shaw — brick row houses, original woodwork, built-in hutches. Shaw Neighborhood certified local historic district. Sue Wheeler, EPA Certified.",
};

export default function ShawPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Wood Refinishing in Shaw
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Brick row houses and two-flats built between 1890 and 1920 —
            built-in hutches that punch above the exterior, original doors
            painted shut, original fir treads under carpet. Sue Wheeler knows
            the difference between what's worth saving and what isn't.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Shaw is a neighborhood of brick row houses, two-flats, and modest
            single-family homes built primarily between 1890 and 1920. It's a
            different architectural character than the Central West End or
            Lafayette Square — tighter lots, narrower houses, woodwork that's
            utilitarian in some rooms and surprisingly refined in others.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            The dining rooms in Shaw's single-family homes often have built-in
            hutches or buffets that punch above what you'd expect from the
            exterior. The staircases in the two-flats are typically simple but
            solid — original fir treads, painted railings, newel posts that have
            been covered over and forgotten. The doors are frequently original,
            frequently painted shut.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked in Shaw throughout her career. She knows the
            difference between a row house that's been renovated well and one
            that's had shortcuts taken, and she'll tell you honestly what's
            worth restoring.
          </p>
        </div>
      </section>

      {/* What We Do Most Often */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What We Do Most Often in Shaw
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Shaw projects often involve built-ins that have been obscured by
            decades of paint — and doors that have been ignored for just as
            long.
          </p>
          <ul className="space-y-6">
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Built-in hutches and buffets
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Shaw's dining room built-ins are frequently painted over —
                sometimes multiple layers of latex over oil over shellac. Under
                that is often quartersawn oak or chestnut with profile detail
                that's still perfectly intact. We strip by hand, repair any
                damage, and refinish to match the room's millwork or flooring.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Both exterior and interior doors in Shaw homes are frequently
                original and frequently worth saving. Front doors especially
                have been painted over until you can barely close them. We
                remove, strip, and refinish in our shop.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Staircase refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                The staircases in Shaw's row houses and two-flats tend toward
                the simple side — but original fir treads and solid newel posts
                are worth restoring properly rather than painting over again.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/built-ins-and-millwork-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Built-Ins &amp; Millwork Refinishing →
            </Link>
            <Link
              href="/built-ins-and-millwork-refinishing/built-in-hutches-buffets-bookcases/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Built-In Hutches, Buffets &amp; Bookcases →
            </Link>
            <Link
              href="/door-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Door Refinishing →
            </Link>
          </div>
        </div>
      </section>

      {/* Historic District */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Historic District &amp; EPA Requirements
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            The Shaw Neighborhood is a{" "}
            <strong>Certified Local Historic District</strong>. Sue's hand-strip
            method is compliant with the Secretary of the Interior's Standards
            for Rehabilitation.
          </p>
          <div className="mb-6">
            <Link
              href="/historic-preservation/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Historic Preservation Guide →
            </Link>
          </div>
          <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-4 rounded">
            <p className="text-[#2A2421] font-sans text-sm leading-relaxed">
              <strong>EPA note:</strong> Nearly all Shaw housing stock predates
              1978. Many homes have multiple lead paint layers, particularly on
              woodwork. EPA RRP regulations require a Certified Lead Renovator
              for work that disturbs those layers. Sue Wheeler is EPA Certified.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            From a Shaw Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We bought a two-flat in Shaw and the doors had been painted so
              many times they barely opened. Sue took them off, stripped them in
              her shop, and they came back looking original. She also did the
              built-in buffet in the dining room — stripped off three coats of
              paint and the oak underneath was perfect."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">
              — Homeowner, Shaw
            </cite>
          </blockquote>
        </div>
      </section>

      {/* CTA text section */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Get a Free Estimate for Your Shaw Home
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Sue Wheeler answers every call personally:{" "}
            <a
              href="tel:3143676054"
              className="text-[#A65D37] font-semibold hover:underline"
            >
              (314) 367-6054
            </a>
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            She'll look at your built-ins, your doors, your millwork — and tell
            you what's under the paint and what it will take to bring it back.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-[#A65D37] text-white font-sans font-medium px-6 py-3 rounded hover:bg-[#8f4f2e] transition-colors"
          >
            Request a Free Estimate →
          </Link>
          <p className="text-[#6B5E55] font-sans text-sm mt-6">
            EPA Certified Lead Renovator. Est. 1989. St. Louis Magazine —
            "Perfect Finish."
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
