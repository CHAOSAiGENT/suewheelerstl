"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const referralOptions = [
  "Google",
  "Neighbor referral",
  "Nextdoor",
  "Realtor",
  "Returning client",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      project: (form.elements.namedItem("project") as HTMLTextAreaElement).value,
      referral: (form.elements.namedItem("referral") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#F8F6F1] p-8 text-center" style={{ borderRadius: "2px" }}>
        <p
          className="font-serif italic text-2xl text-[#2A2421] mb-3"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          We&rsquo;ve got your message.
        </p>
        <p className="text-sm font-sans text-[#6B5E55]">
          Sue will be in touch within one business day. If you need to reach her
          sooner, call{" "}
          <a href="tel:3143676054" className="text-[#11B2E8]">
            (314) 367-6054
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-[#2A2421] text-sm font-sans placeholder-[#9e9087] focus:outline-none focus:border-[#11B2E8] transition-colors";

  const labelClass =
    "block text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name <span className="text-[#A65D37]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className={inputClass}
          style={{ borderRadius: "2px" }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-[#A65D37]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(314) 000-0000"
            className={inputClass}
            style={{ borderRadius: "2px" }}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-[#A65D37]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className={inputClass}
            style={{ borderRadius: "2px" }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className={labelClass}>
          Address / Neighborhood
        </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="e.g. Central West End, 63108"
          className={inputClass}
          style={{ borderRadius: "2px" }}
        />
      </div>

      <div>
        <label htmlFor="project" className={labelClass}>
          What would you like refinished? <span className="text-[#A65D37]">*</span>
        </label>
        <textarea
          id="project"
          name="project"
          required
          rows={4}
          placeholder="Describe your project — doors, cabinets, staircase, etc. Include what you know about the current condition."
          className={inputClass}
          style={{ borderRadius: "2px", resize: "vertical" }}
        />
      </div>

      <div>
        <label htmlFor="referral" className={labelClass}>
          How did you hear about us?
        </label>
        <select
          id="referral"
          name="referral"
          className={inputClass}
          style={{ borderRadius: "2px" }}
        >
          <option value="">Select one (optional)</option>
          {referralOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] disabled:opacity-60 transition-colors"
        style={{ borderRadius: "2px" }}
      >
        <Send size={14} />
        {status === "submitting" ? "Sending…" : "Send My Request"}
      </button>

      {status === "error" && (
        <p className="text-sm font-sans text-[#A65D37] text-center">
          Something went wrong. Please call{" "}
          <a href="tel:3143676054" className="underline">
            (314) 367-6054
          </a>{" "}
          directly.
        </p>
      )}

      <p className="text-xs font-sans text-[#6B5E55] text-center">
        We typically respond within one business day. If you need to reach us sooner,
        call{" "}
        <a href="tel:3143676054" className="text-[#11B2E8]">
          (314) 367-6054
        </a>
        .
      </p>
    </form>
  );
}
