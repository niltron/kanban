/*
  Warnings:

  - You are about to drop the `Column` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Column` DROP FOREIGN KEY `Column_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_ibfk_1`;

-- DropTable
DROP TABLE `Column`;

-- DropTable
DROP TABLE `Task`;

-- CreateTable
CREATE TABLE `column` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('ACTIVE', 'ARCHIVED') NOT NULL DEFAULT 'ACTIVE',
    `boardId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL DEFAULT 'New task',
    `description` VARCHAR(191) NOT NULL DEFAULT '',
    `ponctuation` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('ACTIVE', 'ARCHIVED') NOT NULL DEFAULT 'ACTIVE',
    `columnId` VARCHAR(191) NOT NULL,
    `assignedId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `column` ADD FOREIGN KEY (`boardId`) REFERENCES `board`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task` ADD FOREIGN KEY (`columnId`) REFERENCES `column`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task` ADD FOREIGN KEY (`assignedId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
