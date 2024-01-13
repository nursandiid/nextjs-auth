-- DropIndex
DROP INDEX `users_email_idx` ON `users`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `password` VARCHAR(191) NULL;
