import { prisma } from "../db/prisma";

export async function getKnownPlanets(): Promise<string[]> {
  const planets = await prisma.rpEvent.findMany({
    select: {
      planet: true,
    },
    distinct: ["planet"],
  });

  return planets.map((p) => p.planet);
}
