/**
 * Best-effort strip quoted reply text and email signatures.
 * Returns the new content only. If stripping removes everything,
 * returns the original body (better than losing content).
 */
export function stripQuotedText(body: string): string {
  const lines = body.split("\n");
  const cutIndex = lines.findIndex((line) => {
    const trimmed = line.trim();
    if (/^On .+ wrote:$/i.test(trimmed)) return true;
    if (trimmed === "---------- Forwarded message ----------") return true;
    if (/^_{5,}$/.test(trimmed)) return true;
    if (/^-{2,}\s*Original Message\s*-{2,}$/i.test(trimmed)) return true;
    if (trimmed === "-- ") return true;
    if (trimmed === "--") return true;
    return false;
  });

  const stripped =
    cutIndex > 0 ? lines.slice(0, cutIndex).join("\n").trim() : body.trim();

  return stripped.length > 0 ? stripped : body.trim();
}

/**
 * Extract bare email address from a "Display Name <email>" string.
 * Returns the input unchanged if no angle brackets found.
 */
export function extractEmail(from: string): string {
  const match = from.match(/<([^>]+)>/);
  return match ? match[1].toLowerCase() : from.trim().toLowerCase();
}
