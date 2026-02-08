export function extractPlanetName(label: string): string | null {
  const match = label.match(/ \|\s*Sistema\s+([^|]+)\s*\|/i);
  if (!match || !match[1]) return null;

  return match[1].trim().toLowerCase();
}
