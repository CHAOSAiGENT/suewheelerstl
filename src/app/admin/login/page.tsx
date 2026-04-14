"use client";

import { useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const ALLOWED_EMAILS = (
  process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? "sue@suewheelerstl.com"
)
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "unauthorized"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const normalized = email.trim().toLowerCase();
    if (!ALLOWED_EMAILS.includes(normalized)) {
      setStatus("unauthorized");
      return;
    }
    setStatus("sending");
    const supabase = createBrowserSupabaseClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: normalized,
      options: {
        emailRedirectTo: `${SITE_URL}/admin/auth/callback`,
      },
    });
    setStatus(error ? "error" : "sent");
  }

  const inputClass =
    "w-full px-4 py-3 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-[#2A2421] text-sm font-sans focus:outline-none focus:border-[#11B2E8] transition-colors";

  return (
    <div className="min-h-screen bg-[#EBE6DE] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1
            className="text-2xl text-[#2A2421]"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Admin Portal
          </h1>
          <p className="text-sm font-sans text-[#6B5E55] mt-1">
            Wood Refinishing by Sue Wheeler
          </p>
        </div>

        {status === "sent" ? (
          <div
            className="bg-white border p-8 text-center"
            style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
          >
            <p
              className="font-serif italic text-xl text-[#2A2421] mb-2"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Check your email.
            </p>
            <p className="text-sm font-sans text-[#6B5E55]">
              A sign-in link has been sent to {email.trim().toLowerCase()}.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border p-8 space-y-5"
            style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.1)" }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="your@email.com"
                required
                className={inputClass}
                style={{ borderRadius: "2px" }}
              />
            </div>
            {status === "unauthorized" && (
              <p className="text-xs font-sans text-[#A65D37]">
                That email is not authorized to access this portal.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs font-sans text-[#A65D37]">
                Something went wrong. Please try again.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] disabled:opacity-60 transition-colors"
              style={{ borderRadius: "2px" }}
            >
              {status === "sending" ? "Sending…" : "Send Magic Link"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
