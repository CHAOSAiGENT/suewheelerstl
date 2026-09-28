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
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
