/*
  Warnings:

  - You are about to drop the column `auditId` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the `Audit` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `groqMessage` to the `Page` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groqReponse` to the `Page` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leadId` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Audit" DROP CONSTRAINT "Audit_leadId_fkey";

-- DropForeignKey
ALTER TABLE "Page" DROP CONSTRAINT "Page_auditId_fkey";

-- DropIndex
DROP INDEX "Page_auditId_idx";

-- AlterTable
ALTER TABLE "Page" DROP COLUMN "auditId",
DROP COLUMN "content",
ADD COLUMN     "groqMessage" JSONB NOT NULL,
ADD COLUMN     "groqReponse" JSONB NOT NULL,
ADD COLUMN     "leadId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Audit";

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
