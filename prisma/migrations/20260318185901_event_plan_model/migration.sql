-- CreateTable
CREATE TABLE "EventPlan" (
    "id" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "venueName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "estimatedCost" TEXT NOT NULL,
    "whyItFits" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventPlan_pkey" PRIMARY KEY ("id")
);
