import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Ronildo Professor",
      authorId: "ab1a0dd2-616f-4801-9626-bd3fd2246352",
    },
  })

  console.log(result);
}

main();