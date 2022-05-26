import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // SELECT * FROM COURSES LIMIT 1
  // SELECT * FROM COURSES ORDER BY ID DESC LIMIT 1
  const result = await prisma.courses.update({
    where: {
      id: "19146b18-ecaf-49aa-bff4-80b6557700c7"
    },
    data: {
      duration: 500
    }
  })
  console.log(result)

}

main();