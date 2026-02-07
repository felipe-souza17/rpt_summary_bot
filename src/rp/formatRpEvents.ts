import { OrganizedRpEvents } from "./organizeRpEvents";

export function formatOrganizedRpEvents(organized: OrganizedRpEvents): string {
  const blocks: string[] = [];

  for (const [planet, locations] of Object.entries(organized)) {
    blocks.push(`PLANETA: ${planet}`);

    for (const [location, events] of Object.entries(locations)) {
      blocks.push(`  LOCAL: ${location}`);

      for (const event of events) {
        const time = event.createdAt.toISOString();

        switch (event.type) {
          case "SAY":
            blocks.push(`    [${time}] ${event.character}: "${event.content}"`);
            break;
          case "ACTION":
            blocks.push(`    [${time}] *${event.character} ${event.content}*`);
            break;
          case "NARRATION":
            blocks.push(`    [${time}] [NARRAÇÃO] ${event.content}`);
            break;
        }
      }
    }

    blocks.push("");
  }

  return blocks.join("\n");
}
