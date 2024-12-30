/*
  Warnings:

  - You are about to drop the column `completed` on the `progress` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `progress` DROP FOREIGN KEY `Progress_levelId_fkey`;

-- DropForeignKey
ALTER TABLE `progress` DROP FOREIGN KEY `Progress_userId_fkey`;

-- AlterTable
ALTER TABLE `progress` DROP COLUMN `completed`,
    ADD COLUMN `answerId` INTEGER NULL,
    ADD COLUMN `isCorrect` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `questionId` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- DropTable
DROP TABLE `user`;
