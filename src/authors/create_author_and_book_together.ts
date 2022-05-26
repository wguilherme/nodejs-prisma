import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Robert C. Martin",
      books: {
        create: {
          name: "Clean Code",
        }
      }
    },
  })

  console.log(result);
}

main();