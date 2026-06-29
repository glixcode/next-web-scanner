/*
  Warnings:

  - You are about to drop the column `leadId` on the `Page` table. All the data in the column will be lost.
  - Added the required column `scrappedId` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Page" DROP CONSTRAINT "Page_leadId_fkey";

-- AlterTable
ALTER TABLE "Page" DROP COLUMN "leadId",
ADD COLUMN     "scrappedId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_scrappedId_fkey" FOREIGN KEY ("scrappedId") REFERENCES "ScrappedSummary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
