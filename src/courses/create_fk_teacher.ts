import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso ReactJS",
      description: "Lorem ipsum",
      duration: 300,
      teachersId: "591afa55-9d88-44bf-9ae1-fbf03627c678"
    },
  })

  console.log(result);
}

main();