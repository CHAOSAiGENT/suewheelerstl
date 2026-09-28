"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { Submission } from "@/lib/types";

const SERVICE_TYPES = [
  "Kitchen Cabinets",
  "Interior Doors",
  "Exterior Doors",
  "Staircases",
  "Built-ins",
  "Perk Up & Protect",
  "Other",
];

interface Props {
  onClose: () => void;
  onCreated: (submission: Submission) => void;
}

export function NewLeadModal({ onClose, onCreated }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceError, setServiceError] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");

  function toggleService(s: string) {
    setServiceError(false);
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selectedServices.length === 0) {
      setServiceError(true);
      return;
    }
    setStatus("saving");
    try {
      const res = await fetch("/api/admin/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          address: address || undefined,
          project_description: projectDescription,
          service_types: selectedServices,
        }),
      });
      const json = await res.json();
      if (res.ok && json.submission) {
        onCreated(json.submission);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-[#2A2421] text-sm font-sans placeholder-[#9e9087] focus:outline-none focus:border-[#11B2E8] transition-colors";
  const labelClass =
    "block text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-1.5";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl"
        style={{ borderRadius: "2px" }}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[rgba(42,36,33,0.08)]">
          <h2
            className="text-xl text-[#2A2421]"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            New Lead
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-[#9e9087] hover:text-[#2A2421] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name */}
          <div>
            <label className={labelClass}>
              Name <span className="text-[#A65D37]">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className={inputClass}
              style={{ borderRadius: "2px" }}
            />
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>
                Phone <span className="text-[#A65D37]">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(314) 000-0000"
                className={inputClass}
                style={{ borderRadius: "2px" }}
              />
            </div>
            <div>
              <label className={labelClass}>
                Email <span className="text-[#A65D37]">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@email.com"
                className={inputClass}
                style={{ borderRadius: "2px" }}
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className={labelClass}>Address / Neighborhood</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Central West End, 63108"
              className={inputClass}
              style={{ borderRadius: "2px" }}
            />
          </div>

          {/* Service types */}
          <div>
            <p className={labelClass}>
              What needs work? <span className="text-[#A65D37]">*</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              {SERVICE_TYPES.map((s) => {
                const checked = selectedServices.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={[
                      "px-3 py-2 text-xs font-sans font-semibold uppercase tracking-widest border transition-colors text-left",
                      checked
                        ? "bg-[#11B2E8] border-[#11B2E8] text-white"
                        : "bg-[#F8F6F1] border-[rgba(42,36,33,0.15)] text-[#6B5E55] hover:border-[#11B2E8] hover:text-[#11B2E8]",
                    ].join(" ")}
                    style={{ borderRadius: "2px" }}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            {serviceError && (
              <p className="mt-1.5 text-xs font-sans text-[#A65D37]">
                Please select at least one service.
              </p>
            )}
          </div>

          {/* Project description */}
          <div>
            <label className={labelClass}>
              Project Description <span className="text-[#A65D37]">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Describe the work needed."
              className={inputClass}
              style={{ borderRadius: "2px", resize: "vertical" }}
            />
          </div>

          {status === "error" && (
            <p className="text-xs font-sans text-[#A65D37]">
              Something went wrong. Please try again.
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={status === "saving"}
              className="flex-1 px-6 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] disabled:opacity-60 transition-colors"
              style={{ borderRadius: "2px" }}
            >
              {status === "saving" ? "Creating…" : "Create Lead"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-[rgba(42,36,33,0.15)] text-[#6B5E55] text-sm font-sans font-medium uppercase tracking-widest hover:border-[#2A2421] hover:text-[#2A2421] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
