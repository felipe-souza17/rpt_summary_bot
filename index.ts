import "dotenv/config";
import { client } from "./src/bot/client";
import "./src/discord/listeners/rpMessageCreate";
import "./src/discord/listeners/summaryRequest";

client.login(process.env.DISCORD_TOKEN);

client.once("ready", () => {
  console.log(`Bot online como ${client.user?.tag}`);
  console.log(`Founded RPT ID: ${process.env.RPT_BOT_ID}`);
});
