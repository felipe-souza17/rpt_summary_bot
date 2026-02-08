import { extractPlanetName } from "../utils/planetUtils";

export function extractPlanetsFromText(
  text: string,
  knownPlanets: string[],
): string[] {
  const lower = text.toLowerCase();
  const matches: string[] = [];
  for (const planetLabel of knownPlanets) {
    const planetName = extractPlanetName(planetLabel);
    if (!planetName) continue;

    if (lower.includes(planetName)) {
      matches.push(planetLabel);
    }
  }

  return matches;
}
