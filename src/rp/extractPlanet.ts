export function extractPlanetFromText(
  text: string,
  knownPlanets: string[],
): string | null {
  const normalized = text.toLowerCase();

  for (const planet of knownPlanets) {
    if (normalized.includes(planet.toLowerCase())) {
      return planet;
    }
  }

  return null;
}
