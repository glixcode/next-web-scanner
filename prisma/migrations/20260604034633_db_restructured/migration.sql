/*
  Warnings:

  - You are about to drop the column `reportPath` on the `Audit` table. All the data in the column will be lost.
  - You are about to drop the column `htmlPath` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `textPath` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the `Analysis` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `report` to the `Audit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Analysis" DROP CONSTRAINT "Analysis_auditId_fkey";

-- DropForeignKey
ALTER TABLE "Analysis" DROP CONSTRAINT "Analysis_pageId_fkey";

-- AlterTable
ALTER TABLE "Audit" DROP COLUMN "reportPath",
ADD COLUMN     "report" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Page" DROP COLUMN "htmlPath",
DROP COLUMN "textPath",
ADD COLUMN     "content" TEXT;

-- DropTable
DROP TABLE "Analysis";

-- DropEnum
DROP TYPE "AnalysisType";

-- CreateIndex
CREATE INDEX "Page_auditId_idx" ON "Page"("auditId");
