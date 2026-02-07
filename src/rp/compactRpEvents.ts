import { RpEvent } from "../../generated/prisma/client";

export function compactRpEvents(events: RpEvent[]): RpEvent[] {
  const compacted: RpEvent[] = [];

  for (const event of events) {
    const last = compacted[compacted.length - 1];

    if (
      last &&
      last.planet === event.planet &&
      last.location === event.location &&
      last.character === event.character &&
      last.type === event.type &&
      event.createdAt.getTime() - last.createdAt.getTime() < 60_000
    ) {
      last.content += " " + event.content;
      continue;
    }

    compacted.push({ ...event });
  }

  return compacted;
}
