/*
  Warnings:

  - You are about to drop the column `areasOfExpertise` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lastQuizTaken` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `quizFrequency` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `enrollment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lecture` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subsubject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `enrollment` DROP FOREIGN KEY `Enrollment_lectureId_fkey`;

-- DropForeignKey
ALTER TABLE `enrollment` DROP FOREIGN KEY `Enrollment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `quiz` DROP FOREIGN KEY `Quiz_creatorId_fkey`;

-- DropForeignKey
ALTER TABLE `quiz` DROP FOREIGN KEY `Quiz_lectureId_fkey`;

-- DropForeignKey
ALTER TABLE `subsubject` DROP FOREIGN KEY `SubSubject_subjectId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `areasOfExpertise`,
    DROP COLUMN `lastQuizTaken`,
    DROP COLUMN `quizFrequency`;

-- DropTable
DROP TABLE `enrollment`;

-- DropTable
DROP TABLE `lecture`;

-- DropTable
DROP TABLE `quiz`;

-- DropTable
DROP TABLE `subject`;

-- DropTable
DROP TABLE `subsubject`;

-- CreateTable
CREATE TABLE `Level` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Level_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `levelId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Answer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `isCorrect` BOOLEAN NOT NULL DEFAULT false,
    `questionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Progress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `levelId` INTEGER NOT NULL,
    `completed` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `Level`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Progress` ADD CONSTRAINT `Progress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Progress` ADD CONSTRAINT `Progress_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `Level`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
