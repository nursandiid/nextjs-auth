/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `verification_token` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `verification_token_token_key` ON `verification_token`(`token`);
