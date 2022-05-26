import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Lekker Paul 2",
      books: {
        createMany: {
          data:[
            {name: "How to start coding 2"},
            {name: "How to increase your productivity 2"},
          ]
        }
      }
    },
  })

  console.log(result);
}

main();