"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Send, Paperclip, X } from "lucide-react";

// Sue's shop: 900 S Boyle Ave, St. Louis, MO 63110
const SHOP_LAT = 38.6307;
const SHOP_LNG = -90.2154;
const BIAS_RADIUS = 32187; // 20 miles in meters

const SERVICE_TYPES = [
  "Kitchen Cabinets",
  "Interior Doors",
  "Exterior Doors",
  "Staircases",
  "Built-ins",
  "Perk Up & Protect",
  "Other",
];

const REFERRAL_OPTIONS = [
  "Google",
  "Neighbor referral",
  "Nextdoor",
  "Realtor",
  "Returning client",
  "Other",
];

const BEST_TIME_OPTIONS = [
  { value: "morning", label: "Morning (8–11am)" },
  { value: "afternoon", label: "Afternoon (11am–3pm)" },
  { value: "evening", label: "Evening (3–6pm)" },
  { value: "anytime", label: "Anytime" },
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "Just exploring",
];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

type PhotoEntry = {
  file: File;
  path: string | null; // null = still uploading or failed
  error: boolean;
};

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [token, setToken] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceError, setServiceError] = useState(false);
  const [photos, setPhotos] = useState<PhotoEntry[]>([]);
  const [photoError, setPhotoError] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const addressRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Google Places Autocomplete
  const initAutocomplete = useCallback(() => {
    if (!addressRef.current || autocompleteRef.current) return;
    if (!window.google?.maps?.places) return;

    const ac = new google.maps.places.Autocomplete(addressRef.current, {
      types: ["address"],
      componentRestrictions: { country: "us" },
      fields: ["formatted_address", "address_components"],
    });

    ac.setBounds(
      new google.maps.Circle({
        center: { lat: SHOP_LAT, lng: SHOP_LNG },
        radius: BIAS_RADIUS,
      }).getBounds()!,
    );

    ac.addListener("place_changed", () => {
      const place = ac.getPlace();
      if (place.formatted_address) {
        setAddress(place.formatted_address);
      }
      const zipComponent = place.address_components?.find((c) =>
        c.types.includes("postal_code"),
      );
      if (zipComponent) {
        setZip(zipComponent.short_name);
      }
    });

    autocompleteRef.current = ac;
  }, []);

  useEffect(() => {
    // If Google Maps script is already loaded
    if (window.google?.maps?.places) {
      initAutocomplete();
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    if (!apiKey) return;

    // Check if script tag already exists
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      // Script exists but hasn't loaded yet — wait for it
      const interval = setInterval(() => {
        if (window.google?.maps?.places) {
          initAutocomplete();
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onload = () => initAutocomplete();
    document.head.appendChild(script);
  }, [initAutocomplete]);

  async function uploadPhoto(file: File): Promise<string | null> {
    try {
      const res = await fetch("/api/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType: file.type || "image/jpeg" }),
      });
      if (!res.ok) return null;
      const { signedUrl, path } = await res.json();

      const uploadRes = await fetch(signedUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type || "image/jpeg" },
        body: file,
      });
      return uploadRes.ok ? path : null;
    } catch (err) {
      console.error("[upload] photo upload failed", err);
      return null;
    }
  }

  function toggleService(service: string) {
    setServiceError(false);
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  }

  async function handlePhotos(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    setPhotoError(false);

    const slots = 3 - photos.length;
    if (slots <= 0) return;
    const toAdd = files.slice(0, slots);

    // Add as "uploading" immediately so UI updates
    const entries: PhotoEntry[] = toAdd.map((file) => ({
      file,
      path: null,
      error: false,
    }));
    setPhotos((prev) => [...prev, ...entries]);

    // Upload concurrently, update state as each resolves
    await Promise.all(
      toAdd.map(async (file) => {
        const path = await uploadPhoto(file);
        setPhotos((prev) => {
          const next = [...prev];
          const idx = next.findIndex(
            (e) => e.file === file && e.path === null && !e.error,
          );
          if (idx !== -1) {
            next[idx] = { file, path, error: path === null };
          }
          return next;
        });
      }),
    );
  }

  function removePhoto(idx: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
    setPhotoError(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (selectedServices.length === 0) {
      setServiceError(true);
      return;
    }

    // Block if any photo is still uploading
    const uploading = photos.some((p) => p.path === null && !p.error);
    if (uploading) return;

    const hasFailed = photos.some((p) => p.error);
    if (hasFailed) {
      setPhotoError(true);
      return;
    }
    setPhotoError(false); // clear if proceeding normally

    setStatus("submitting");

    const form = e.currentTarget;
    const fd = new FormData(form);

    selectedServices.forEach((s) => fd.append("service_types", s));

    // Send paths as JSON string — no raw files
    const uploadedPaths = photos
      .filter((p) => p.path !== null)
      .map((p) => p.path as string);
    if (uploadedPaths.length > 0) {
      fd.append("photo_paths", JSON.stringify(uploadedPaths));
    }

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json();
      if (res.ok) {
        setToken(json.token ?? null);
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
      <div
        className="bg-[#F8F6F1] p-8 text-center"
        style={{ borderRadius: "2px" }}
      >
        <p
          className="font-serif italic text-2xl text-[#2A2421] mb-3"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          We&rsquo;ve got your message.
        </p>
        <p className="text-sm font-sans text-[#6B5E55] mb-6">
          Sue will be in touch within one business day. If you need to reach her
          sooner, call{" "}
          <a href="tel:3143676054" className="text-[#11B2E8]">
            (314) 367-6054
          </a>
          .
        </p>
        {token && (
          <a
            href={`/my-request/${token}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#11B2E8] text-[#11B2E8] text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#11B2E8] hover:text-white transition-colors"
            style={{ borderRadius: "2px" }}
          >
            Track My Request
          </a>
        )}
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-[#2A2421] text-sm font-sans placeholder-[#9e9087] focus:outline-none focus:border-[#11B2E8] transition-colors";
  const labelClass =
    "block text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
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

      {/* Phone + Email */}
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
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
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

      {/* Address + Zip */}
      <div className="grid grid-cols-[1fr_120px] gap-4">
        <div>
          <label htmlFor="address" className={labelClass}>
            Address
          </label>
          <input
            ref={addressRef}
            id="address"
            name="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Start typing your address…"
            className={inputClass}
            style={{ borderRadius: "2px" }}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="zip" className={labelClass}>
            Zip Code
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            value={zip}
            onChange={(e) =>
              setZip(e.target.value.replace(/\D/g, "").slice(0, 5))
            }
            placeholder="63110"
            maxLength={5}
            className={inputClass}
            style={{ borderRadius: "2px" }}
          />
        </div>
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
                  "px-3 py-2.5 text-xs font-sans font-semibold uppercase tracking-widest border transition-colors text-left",
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

      {/* Best time + Timeline */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="best_time" className={labelClass}>
            Best time to call
          </label>
          <select
            id="best_time"
            name="best_time"
            className={inputClass}
            style={{ borderRadius: "2px" }}
          >
            <option value="">Any time</option>
            {BEST_TIME_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            className={inputClass}
            style={{ borderRadius: "2px" }}
          >
            <option value="">Not sure yet</option>
            {TIMELINE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project description */}
      <div>
        <label htmlFor="project" className={labelClass}>
          Tell us about the project <span className="text-[#A65D37]">*</span>
        </label>
        <textarea
          id="project"
          name="project"
          required
          rows={4}
          placeholder="Describe what you have and its current condition — finish type, colour, any damage or repairs needed."
          className={inputClass}
          style={{ borderRadius: "2px", resize: "vertical" }}
        />
      </div>

      {/* Photos */}
      <div>
        <p className={labelClass}>
          Photos{" "}
          <span className="text-[#9e9087] normal-case font-normal tracking-normal">
            (optional — up to 3)
          </span>
        </p>
        <label
          className="flex items-center gap-2 px-4 py-3 bg-[#F8F6F1] border border-dashed border-[rgba(42,36,33,0.2)] text-[#6B5E55] text-sm font-sans cursor-pointer hover:border-[#11B2E8] hover:text-[#11B2E8] transition-colors"
          style={{ borderRadius: "2px" }}
        >
          <Paperclip size={14} />
          <span>
            {photos.length === 0
              ? "Attach photos"
              : `${photos.length}/3 attached`}
          </span>
          <input
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={handlePhotos}
            disabled={
              photos.length >= 3 ||
              photos.some((p) => p.path === null && !p.error)
            }
          />
        </label>
        {photos.length > 0 && (
          <ul className="mt-2 space-y-1">
            {photos.map((entry, i) => (
              <li
                key={`${entry.file.name}-${entry.file.lastModified}-${entry.file.size}`}
                className="flex items-center justify-between px-3 py-1.5 bg-[#F8F6F1] border border-[rgba(42,36,33,0.1)]"
                style={{ borderRadius: "2px" }}
              >
                <span
                  className={[
                    "text-xs font-sans truncate max-w-[80%]",
                    entry.error ? "text-[#A65D37]" : "text-[#6B5E55]",
                  ].join(" ")}
                >
                  {entry.error
                    ? `${entry.file.name} — upload failed`
                    : entry.path === null
                      ? `${entry.file.name} — uploading…`
                      : entry.file.name}
                </span>
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="text-[#9e9087] hover:text-[#A65D37] transition-colors"
                  aria-label="Remove photo"
                >
                  <X size={12} />
                </button>
              </li>
            ))}
          </ul>
        )}
        {photoError && (
          <p className="mt-1.5 text-xs font-sans text-[#A65D37]">
            One or more photos failed to upload. Remove them and try again, or
            submit without photos.
          </p>
        )}
      </div>

      {/* Referral */}
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
          {REFERRAL_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={
          status === "submitting" ||
          photos.some((p) => p.path === null && !p.error)
        }
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] disabled:opacity-60 transition-colors"
        style={{ borderRadius: "2px" }}
      >
        <Send size={14} />
        {photos.some((p) => p.path === null && !p.error)
          ? "Uploading photos…"
          : status === "submitting"
            ? "Sending…"
            : "Send My Request"}
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
        We typically respond within one business day. If you need to reach us
        sooner, call{" "}
        <a href="tel:3143676054" className="text-[#11B2E8]">
          (314) 367-6054
        </a>
        .
      </p>
    </form>
  );
}
