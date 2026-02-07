import { client } from "../../bot/client";
import { prisma } from "../../db/prisma";
import { formatRpEvents } from "../../rp/formatter";
import { summarizeRp } from "../../ai/summarizeRp";
import { getKnownPlanets } from "../../rp/planetService";
import { extractPlanetFromText } from "../../rp/extractPlanet";
import { chunkMessage } from "../../utils/chunckMessage";
import { compactRpEvents } from "../../rp/compactRpEvents";

function isRecapIntent(text: string): boolean {
  const t = text.toLowerCase();

  return (
    t.includes("o que aconteceu") ||
    t.includes("resumo") ||
    t.includes("recap") ||
    t.includes("ultimas 24") ||
    t.includes("últimas 24")
  );
}

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const mentioned = message.mentions.has(client.user!.id);
  if (!mentioned) return;

  const content = message.content.replace(/<@!?(\d+)>/, "").trim();

  if (!isRecapIntent(content)) {
    await message.reply("Não entendi o pedido 😭");
    return;
  }

  await message.reply(`Um momento ${message.author.displayName}!`);

  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const events = await prisma.rpEvent.findMany({
    where: {
      createdAt: { gte: since },
    },
    orderBy: { createdAt: "asc" },
  });

  if (events.length === 0) {
    await message.reply("Nada relevante ocorreu nas últimas 24 horas.");
    return;
  }

  const compacted = compactRpEvents(events);
  const formatted = formatRpEvents(compacted);
  const summary = await summarizeRp(formatted);
  const parts = chunkMessage(summary);

  for (const part of parts) {
    await message.reply(part);
  }
});
