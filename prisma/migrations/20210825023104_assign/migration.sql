/*
  Warnings:

  - You are about to drop the column `name` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Task` DROP COLUMN `name`,
    ADD COLUMN `assignedId` VARCHAR(191),
    ADD COLUMN `description` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `ponctuation` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `title` VARCHAR(191) NOT NULL DEFAULT 'New task';

-- AddForeignKey
ALTER TABLE `Task` ADD FOREIGN KEY (`assignedId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
