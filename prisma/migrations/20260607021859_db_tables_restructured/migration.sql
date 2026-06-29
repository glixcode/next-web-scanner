-- CreateTable
CREATE TABLE "ScrappedSummary" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "totalUrls" INTEGER,
    "completed" INTEGER,
    "creditUsed" INTEGER,

    CONSTRAINT "ScrappedSummary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScrappedSummary" ADD CONSTRAINT "ScrappedSummary_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
