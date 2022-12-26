-- CreateTable
CREATE TABLE "words" (
    "id" SERIAL NOT NULL,
    "word" CHAR(255) NOT NULL,
    "length" INTEGER NOT NULL,

    CONSTRAINT "words_pkey" PRIMARY KEY ("id")
);
