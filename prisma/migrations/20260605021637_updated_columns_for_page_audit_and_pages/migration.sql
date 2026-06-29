/*
  Warnings:

  - You are about to drop the column `report` on the `Audit` table. All the data in the column will be lost.
  - Added the required column `content` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Audit" DROP COLUMN "report";

-- AlterTable
ALTER TABLE "Page" DROP COLUMN "content",
ADD COLUMN     "content" JSONB NOT NULL;
