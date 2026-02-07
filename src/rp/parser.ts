import { Message } from "discord.js";

export type RpMessageType = "SAY" | "ACTION" | "NARRATION";

export interface ParsedRpMessage {
  planet: string;
  location: string;
  character: string;
  type: RpMessageType;
  content: string;
}

export function parseRpMessage(message: Message): ParsedRpMessage | null {
  const username = message.author.username;
  const content = message.content.trim();

  const channel = message.channel;

  if (!channel.isTextBased() || !("parent" in channel)) return null;

  const location = channel.name;
  const planet = channel.parent?.name ?? "Sem Planeta";

  if (!content) return null;

  let type: RpMessageType = "SAY";

  if (username.toLowerCase().includes("narra")) {
    type = "NARRATION";
  }

  if (content.startsWith("*") && content.endsWith("*")) {
    type = "ACTION";
  }

  return {
    character: username,
    type,
    content,
    location,
    planet,
  };
}
