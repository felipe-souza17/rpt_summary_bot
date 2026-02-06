import "dotenv/config";
import { client } from "./bot/client";

client.login(process.env.DISCORD_TOKEN);
