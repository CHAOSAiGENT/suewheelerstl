import { defineConfig } from "vitest/config";

/**
 * Root workspace tests.
 *
 * The form-monitor scripts live at the repo root, outside any app, because the
 * GitHub Actions cron invokes them by path (`node scripts/monitor/check.mjs`)
 * and they import only Node built-ins. They need no `@` alias and no app
 * context, so they get their own config rather than being pulled into the
 * site's.
 *
 * The site's own tests run from `apps/site` — see `apps/site/vitest.config.ts`.
 * That separation is load-bearing, not tidiness: `admin/guide/__tests__` reads
 * a real file via `process.cwd()` with an unmocked `readFileSync`, so it only
 * passes when the working directory is `apps/site`. Running one vitest over
 * both would break it.
 */
export default defineConfig({
  test: {
    include: ["scripts/**/*.test.mjs"],
  },
});
