import { getRecentRpEvents } from "./getRecentRpEvents";
import { organizeRpEvents } from "./organizeRpEvents";
import { formatOrganizedRpEvents } from "./formatRpEvents";
import { summarizeRp } from "../ai/summarizeRp";

interface GenerateRpSummaryOptions {
  minutes: number;
  planet: string;
}

export async function generateRpSummary({
  minutes = 120,
  planet,
}: GenerateRpSummaryOptions) {
  const events = await getRecentRpEvents({ minutes, planet });

  if (events.length === 0) {
    return "Nenhum evento recente de roleplay foi registrado.";
  }

  const organized = organizeRpEvents(events);
  const formatted = formatOrganizedRpEvents(organized);

  return summarizeRp(formatted);
}
