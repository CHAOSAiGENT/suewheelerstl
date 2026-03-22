import { Resend } from "resend";
// Fallback to "placeholder" so the constructor doesn't throw during build.
// All send() calls are guarded by `if (process.env.RESEND_API_KEY)` checks.
export const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
