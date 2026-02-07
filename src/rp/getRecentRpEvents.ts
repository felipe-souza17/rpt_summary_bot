import { prisma } from "../db/prisma";

interface GetRecentRpEventsOptions {
  minutes?: number;
  planet?: string;
}

export async function getRecentRpEvents({
  minutes = 60,
  planet,
}: GetRecentRpEventsOptions) {
  const since = new Date(Date.now() - minutes * 60 * 1000);

  return await prisma.rpEvent.findMany({
    where: {
      createdAt: {
        gte: since,
      },
      ...(planet ? { planet } : {}),
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}
