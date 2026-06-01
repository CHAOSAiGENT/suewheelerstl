/**
 * DB contract — single source of truth for app↔database agreement.
 *
 * These values mirror CHECK constraints and required columns in the live
 * `submissions` table. They are consumed in two places:
 *   1. `src/lib/types.ts` derives its string-union types from these arrays, so
 *      the app's vocabulary is defined here (one place), not hand-duplicated.
 *   2. `src/lib/__tests__/schema-drift.test.ts` asserts the live database CHECK
 *      constraints and columns match these arrays — failing the build/CI when
 *      code and database drift apart.
 *
 * This file exists because on 2026-06-01 the contact form 500'd twice: a column
 * the code used (`zip`) was never added, and a status value the code inserted
 * (`to_bid`) was not permitted by the live CHECK constraint. See
 * docs/superpowers/specs/2026-06-01-schema-drift-prevention-design.md.
 *
 * When you change the database, change these arrays in the SAME commit.
 */

/** Allowed `submissions.status` values — must equal `submissions_status_check`. */
export const STATUS_VALUES = [
  "to_bid",
  "contacted",
  "bid_sent",
  "on_deck",
  "active",
  "finishing",
  "fully_complete",
  "lost",
] as const;

/** Allowed `submissions.bid_status` values — must equal `submissions_bid_status_check`. */
export const BID_STATUS_VALUES = [
  "none",
  "sent",
  "accepted",
  "declined",
] as const;

/** Allowed `submissions.lost_reason` values — must equal `submissions_lost_reason_check`. */
export const LOST_REASON_VALUES = [
  "price",
  "timing",
  "competitor",
  "unknown",
] as const;

/**
 * Columns the application code depends on existing, per table. The schema-drift
 * test asserts every column listed here is present in the live database. This
 * is what would have caught the missing `zip` column before it shipped.
 *
 * Keep this focused on columns the code reads/writes — it is a safety net, not
 * a full schema mirror (that is what generated `database.types.ts` is for).
 */
export const REQUIRED_COLUMNS: Record<string, readonly string[]> = {
  submissions: [
    "id",
    "created_at",
    "name",
    "phone",
    "email",
    "address",
    "zip",
    "service_types",
    "best_time",
    "timeline",
    "project_description",
    "referral",
    "photo_urls",
    "status",
    "client_token",
    "reply_token",
    "bid_status",
    "lost_reason",
  ],
};

/**
 * Maps each `submissions` CHECK constraint to the contract array it must equal.
 * Used by the schema-drift test.
 */
export const CHECK_CONSTRAINTS: Record<string, readonly string[]> = {
  submissions_status_check: STATUS_VALUES,
  submissions_bid_status_check: BID_STATUS_VALUES,
  submissions_lost_reason_check: LOST_REASON_VALUES,
};
