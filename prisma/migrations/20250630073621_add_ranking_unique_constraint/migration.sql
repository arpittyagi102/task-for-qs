/*
  Warnings:

  - A unique constraint covering the columns `[universityId,year]` on the table `Ranking` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ranking_universityId_year_key" ON "Ranking"("universityId", "year");
