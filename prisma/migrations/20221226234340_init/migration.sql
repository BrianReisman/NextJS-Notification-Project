-- CreateTable
CREATE TABLE "UpcomingGrantNotification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "grantName" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "maxGrantAmount" INTEGER NOT NULL,
    "dismissed" BOOLEAN NOT NULL
);
