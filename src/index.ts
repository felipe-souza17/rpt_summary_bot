import "dotenv/config";
import { client } from "./bot/client";
import "./discord/listeners/rpMessageCreate";
import "./discord/listeners/summaryRequest";

client.login(process.env.DISCORD_TOKEN);

client.once("ready", () => {
  console.log(`Bot online como ${client.user?.tag}`);
});
