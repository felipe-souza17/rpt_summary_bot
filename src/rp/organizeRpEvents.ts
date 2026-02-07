import { RpEvent } from "../../generated/prisma/client";

export interface OrganizedRpEvents {
  [planet: string]: {
    [location: string]: RpEvent[];
  };
}

export function organizeRpEvents(events: RpEvent[]): OrganizedRpEvents {
  const result: OrganizedRpEvents = {};

  for (const event of events) {
    const planet = event.planet;
    const location = event.location;

    if (!result[planet]) {
      result[planet] = {};
    }

    const planetBucket = result[planet];

    if (!planetBucket[location]) {
      planetBucket[location] = [];
    }

    planetBucket[location].push(event);
  }

  for (const planet of Object.keys(result)) {
    const planetBucket = result[planet];
    if (!planetBucket) continue;

    for (const location of Object.keys(planetBucket)) {
      const locationBucket = planetBucket[location];
      if (!locationBucket) continue;

      locationBucket.sort(
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
      );
    }
  }

  return result;
}
