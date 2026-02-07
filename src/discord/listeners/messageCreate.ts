import { client } from "../../bot/client";
import { parseRpMessage } from "../../rp/parser";

client.on("messageCreate", (message) => {
  if (!message.webhookId) return;

  const parsed = parseRpMessage(message);
  if (!parsed) return;

  console.log(parsed);
});
