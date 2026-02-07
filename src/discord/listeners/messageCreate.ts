import { client } from "../../bot/client";
import { parseRpMessage } from "../../rp/parser";
import { saveRpEvent } from "../../rp/saveRpEvent";

client.on("messageCreate", async (message) => {
  if (!message.webhookId) return;

  const parsed = parseRpMessage(message);
  if (!parsed) return;

  await saveRpEvent(parsed, message.id, message.channelId);
  console.log(parsed);
});
