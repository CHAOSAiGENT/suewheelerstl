import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // Mirrors the `@/*` -> `src/*` path alias in tsconfig.json. Previously unset:
  // it happened to work because every `@/`-prefixed import reached by a test was
  // also `vi.mock`ed, so it never had to resolve. Real (unmocked) `@/` imports —
  // e.g. `@/lib/auth/admin-guard` — need the alias.
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Vitest cannot transform JSX without this. tsconfig.json sets
  // `"jsx": "preserve"` because Next.js requires it — which leaves JSX in the
  // oxc transform's output for Vite's ssrTransformScript to choke on
  // ("Unexpected JSX expression"). The suite never hit it because, until
  // 2026-10-10, no test had ever imported a module containing JSX.
  //
  // Without this line, any route or component written as .tsx is untestable,
  // and the failure looks like a parse error in the file under test rather
  // than a missing config.
  oxc: {
    jsx: { runtime: "automatic" },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts", "scripts/**/*.test.mjs"],
  },
});
