/*
  Warnings:

  - You are about to drop the column `overallScore` on the `Audit` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Audit" DROP COLUMN "overallScore";

-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "auditScore" INTEGER;
