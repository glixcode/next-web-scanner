-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_leadId_fkey";

-- DropForeignKey
ALTER TABLE "Outreach" DROP CONSTRAINT "Outreach_leadId_fkey";

-- DropForeignKey
ALTER TABLE "Page" DROP CONSTRAINT "Page_scrappedId_fkey";

-- DropForeignKey
ALTER TABLE "ScrappedSummary" DROP CONSTRAINT "ScrappedSummary_leadId_fkey";

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScrappedSummary" ADD CONSTRAINT "ScrappedSummary_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outreach" ADD CONSTRAINT "Outreach_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_scrappedId_fkey" FOREIGN KEY ("scrappedId") REFERENCES "ScrappedSummary"("id") ON DELETE CASCADE ON UPDATE CASCADE;
