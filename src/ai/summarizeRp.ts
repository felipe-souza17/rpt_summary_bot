import { geminiModel } from "./gemini";
import { buildSummaryPrompt } from "./prompts/summaryPrompt";

export async function summarizeRp(formattedRpLog: string): Promise<string> {
  const prompt = buildSummaryPrompt(formattedRpLog);

  const result = await geminiModel.generateContent({
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      temperature: 0.35,
    },
  });
  const response = result.response;

  return response.text();
}
