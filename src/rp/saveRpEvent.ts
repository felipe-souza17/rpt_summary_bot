import { prisma } from "../db/prisma";
import { ParsedRpMessage } from "./parser";

export async function saveRpEvent(
  parsed: ParsedRpMessage,
  messageId: string,
  channelId: string,
) {
  await prisma.rpEvent.create({
    data: {
      planet: parsed.planet,
      location: parsed.location,
      character: parsed.character,
      type: parsed.type,
      content: parsed.content,
      messageId,
      channelId,
    },
  });
}
