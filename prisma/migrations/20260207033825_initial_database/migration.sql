-- CreateEnum
CREATE TYPE "RpMessageType" AS ENUM ('SAY', 'ACTION', 'NARRATION');

-- CreateTable
CREATE TABLE "RpEvent" (
    "id" TEXT NOT NULL,
    "planet" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "type" "RpMessageType" NOT NULL,
    "content" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RpEvent_pkey" PRIMARY KEY ("id")
);
