import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_GEMINI_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY não definida");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const geminiModel = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});
