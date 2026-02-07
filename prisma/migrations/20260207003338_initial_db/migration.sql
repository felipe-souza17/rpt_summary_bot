-- CreateTable
CREATE TABLE "RpEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "planet" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
