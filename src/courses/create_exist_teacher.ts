import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso IA 2022",
      description: "Lorem ipsum",
      duration: 250,
      teacher: {
        connect: {
          id: "cb944182-0d7a-4309-b039-eaa6ab277dcc"       
        }
      }
    },
  })

  console.log(result);
}

main();