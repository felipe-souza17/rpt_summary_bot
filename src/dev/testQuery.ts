import { getRecentRpEvents } from "../rp/getRecentRpEvents";
import { organizeRpEvents } from "../rp/organizeRpEvents";
import { formatOrganizedRpEvents } from "../rp/formatRpEvents";

async function run() {
  const events = await getRecentRpEvents({ minutes: 180 });
  const organized = organizeRpEvents(events);
  const text = formatOrganizedRpEvents(organized);

  console.log(text);
}

run();
