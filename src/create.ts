import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Curso 5",
      description: "Descrição 4",
    },
  })

  console.log(result);
}

main();