-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'system');

-- CreateTable
CREATE TABLE "UserApiLimit" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserApiLimit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSubscription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "stripe_customer_id" TEXT,
    "stripe_subscription_id" TEXT,
    "stripe_price_id" TEXT,
    "stripe_current_period_id" TIMESTAMP(3),

    CONSTRAINT "UserSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alter" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "seed" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Alter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "alterId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookmarksCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BookmarksCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookmarks" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,
    "tags" TEXT NOT NULL,

    CONSTRAINT "Bookmarks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserApiLimit_userId_key" ON "UserApiLimit"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSubscription_userId_key" ON "UserSubscription"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSubscription_stripe_customer_id_key" ON "UserSubscription"("stripe_customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserSubscription_stripe_subscription_id_key" ON "UserSubscription"("stripe_subscription_id");

-- CreateIndex
CREATE INDEX "Alter_categoryId_idx" ON "Alter"("categoryId");

-- CreateIndex
CREATE INDEX "Message_alterId_idx" ON "Message"("alterId");

-- CreateIndex
CREATE INDEX "Bookmarks_categoryId_idx" ON "Bookmarks"("categoryId");

-- AddForeignKey
ALTER TABLE "Alter" ADD CONSTRAINT "Alter_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_alterId_fkey" FOREIGN KEY ("alterId") REFERENCES "Alter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "BookmarksCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;