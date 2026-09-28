import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { Client } from "pg";
import { CHECK_CONSTRAINTS, REQUIRED_COLUMNS } from "../db-contract";

/**
 * Schema-drift gate. Asserts the LIVE database agrees with db-contract.ts:
 *   - every CHECK constraint's allowed values equals the contract array
 *   - every column the app depends on actually exists
 *
 * This is the test that would have caught both 2026-06-01 failures (missing
 * `zip` column, and `status='to_bid'` rejected by the CHECK constraint).
 *
 * Self-skips when SUPABASE_DB_URL is not set, so it never breaks a local build
 * or a Vercel build before the secret is added. It becomes enforcing the moment
 * the secret is present. See docs/MIGRATIONS.md.
 */

const DB_URL = process.env.SUPABASE_DB_URL;
const suite = DB_URL ? describe : describe.skip;

if (!DB_URL) {
  // eslint-disable-next-line no-console
  console.warn(
    "[schema-drift] SUPABASE_DB_URL not set — skipping live schema checks. " +
      "Add it (Vercel env + GitHub secret) to enable the drift gate. See docs/MIGRATIONS.md.",
  );
}

/** Extract the quoted values from a `pg_get_constraintdef` CHECK definition. */
function allowedValuesFromConstraintDef(def: string): string[] {
  return [...def.matchAll(/'([^']+)'::text/g)].map((m) => m[1]).sort();
}

suite("schema drift — live database matches db-contract.ts", () => {
  let client: Client;

  beforeAll(async () => {
    // The connection carries the DB password, so TLS ALWAYS verifies the server
    // — we never disable verification. Supabase's pooler presents a chain rooted
    // in the self-signed "Supabase Root 2021 CA", which isn't in Node's default
    // trust store, so we pin it from the committed public cert. SUPABASE_DB_CA
    // overrides the pinned file if a project ever rotates its root.
    const ca =
      process.env.SUPABASE_DB_CA ||
      readFileSync(
        fileURLToPath(
          new URL("../../../certs/supabase-prod-ca-2021.crt", import.meta.url),
        ),
        "utf8",
      );
    client = new Client({
      connectionString: DB_URL,
      ssl: { ca, rejectUnauthorized: true },
    });
    await client.connect();
  });

  afterAll(async () => {
    await client?.end();
  });

  it("CHECK constraints match the contract value arrays", async () => {
    const { rows } = await client.query<{ conname: string; def: string }>(
      `SELECT conname, pg_get_constraintdef(oid) AS def
         FROM pg_constraint
        WHERE conrelid = 'public.submissions'::regclass
          AND contype = 'c'`,
    );
    const byName = new Map(rows.map((r) => [r.conname, r.def]));

    for (const [conname, expected] of Object.entries(CHECK_CONSTRAINTS)) {
      const def = byName.get(conname);
      expect(def, `constraint ${conname} missing from live DB`).toBeDefined();
      expect(
        allowedValuesFromConstraintDef(def!),
        `${conname} allowed values drifted from db-contract.ts`,
      ).toEqual([...expected].sort());
    }
  });

  it("required columns exist on every contracted table", async () => {
    for (const [table, columns] of Object.entries(REQUIRED_COLUMNS)) {
      const { rows } = await client.query<{ column_name: string }>(
        `SELECT column_name FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = $1`,
        [table],
      );
      const present = new Set(rows.map((r) => r.column_name));
      const missing = columns.filter((c) => !present.has(c));
      expect(
        missing,
        `${table} is missing columns the app depends on`,
      ).toEqual([]);
    }
  });
});
