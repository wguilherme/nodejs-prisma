import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Curso IA",
      description: "Lorem ipsum",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Joãozinho professor"
          },
          create: {
            name: "Joãozinho professor"
          }
        }
      }
    },
  })

  console.log(result);
}

main();