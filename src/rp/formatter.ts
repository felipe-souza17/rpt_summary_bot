import { RpEvent } from "../../generated/prisma/client";

export function formatRpEvents(events: RpEvent[]): string {
  const grouped: Record<string, Record<string, RpEvent[]>> = {};

  for (const event of events) {
    const planet = event.planet;
    const location = event.location;
    if (!grouped[planet]) {
      grouped[planet] = {};
    }

    const groupedBucket = grouped[planet];

    if (!groupedBucket[location]) {
      groupedBucket[location] = [];
    }

    groupedBucket[location].push(event);
  }

  for (const planet of Object.keys(grouped)) {
    for (const location of Object.keys(grouped[planet]!)) {
      grouped[planet]![location]!.sort(
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
      );
    }
  }

  let output = "";

  for (const planet of Object.keys(grouped)) {
    output += `Planeta: ${planet}\n`;

    for (const location of Object.keys(grouped[planet]!)) {
      output += `Local: ${location}\n`;

      for (const event of grouped[planet]![location]!) {
        const time = event.createdAt.toISOString().slice(11, 16);

        output += `[${time}] ${event.character} (${event.type}): ${event.content}\n`;
      }

      output += "\n";
    }
  }

  return output.trim();
}
