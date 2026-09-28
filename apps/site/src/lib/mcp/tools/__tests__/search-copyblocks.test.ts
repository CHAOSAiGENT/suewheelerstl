import { describe, it, expect } from "vitest";
import { searchCopyblocks } from "../search-copyblocks";

describe("searchCopyblocks", () => {
  it("matches on title text, case-insensitively", async () => {
    const result = await searchCopyblocks({ query: "front door" });
    expect(result.blocks.length).toBeGreaterThan(0);
    expect(
      result.blocks.some((b) => b.title.toLowerCase().includes("front door")),
    ).toBe(true);
  });

  // The plan proposed "hand-strip"; the library only ever writes it unhyphenated,
  // so that query matched nothing. "hand strip" appears in 3 block BODIES and in
  // zero titles, which is what makes this a real test of body matching — the
  // second assertion pins that, so the test cannot silently degrade into a
  // duplicate of the title-matching test above.
  it("matches on body text too", async () => {
    const result = await searchCopyblocks({ query: "hand strip" });
    expect(result.blocks.length).toBeGreaterThan(0);
    expect(
      result.blocks.every((b) => !b.title.toLowerCase().includes("hand strip")),
    ).toBe(true);
  });

  it("returns the owning category with each block, so Claude can cite it", async () => {
    const result = await searchCopyblocks({ query: "door" });
    expect(result.blocks[0]).toHaveProperty("categoryLabel");
    expect(result.blocks[0]).toHaveProperty("categoryKey");
  });

  it("returns an empty array rather than throwing when nothing matches", async () => {
    const result = await searchCopyblocks({ query: "zzzznotathing" });
    expect(result.blocks).toEqual([]);
    expect(result.totalMatched).toBe(0);
  });

  it("caps results at the requested limit but reports the true total", async () => {
    const result = await searchCopyblocks({ query: "e", limit: 3 });
    expect(result.blocks.length).toBeLessThanOrEqual(3);
    expect(result.totalMatched).toBeGreaterThanOrEqual(result.blocks.length);
  });

  it("lists categories when given no query, so Claude can browse", async () => {
    const result = await searchCopyblocks({});
    expect(result.categories.length).toBeGreaterThan(0);
    expect(result.categories[0]).toHaveProperty("label");
  });
});
