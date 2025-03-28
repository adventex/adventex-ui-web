/*
  Warnings:

  - You are about to drop the column `calendar` on the `Tour` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Month" AS ENUM ('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC');

-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "calendar";

-- CreateTable
CREATE TABLE "Calendar" (
    "id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "dates" TEXT[],
    "tourId" TEXT NOT NULL,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Calendar" ADD CONSTRAINT "Calendar_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
