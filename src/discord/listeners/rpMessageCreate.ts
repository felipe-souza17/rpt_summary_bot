import { client } from "../../bot/client";
import { parseRpMessage } from "../../rp/parser";
import { saveRpEvent } from "../../rp/saveRpEvent";

client.on("messageCreate", async (message) => {
  if (!message.webhookId) return;
  if (!("parent" in message.channel)) return;
  if (message.channel.parentId == "995481142608265226") return;

  const parsed = parseRpMessage(message);
  if (!parsed) return;

  await saveRpEvent(parsed, message.id, message.channelId);
});
