import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All standard crawlers — full access
      { userAgent: "*", allow: "/" },
      // OpenAI — ChatGPT search citations
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // Anthropic / Claude
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Google — Gemini and AI Overviews
      { userAgent: "Google-Extended", allow: "/" },
      // Microsoft — Copilot via Bing
      { userAgent: "Bingbot", allow: "/" },
      // Block Common Crawl (training scraper, not a search/citation bot)
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: "https://suewheelerstl.com/sitemap.xml",
  };
}
