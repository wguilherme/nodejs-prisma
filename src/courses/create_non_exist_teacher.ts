import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso Elixir",
      description: "Lorem ipsum",
      duration: 220,
      teacher: {
        create: {
          name: "Dr. Leker"       
        }
      }
    },
  })

  console.log(result);
}

main();