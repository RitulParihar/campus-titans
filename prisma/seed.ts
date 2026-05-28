import { PrismaClient } from "@prisma/client";
import { colleges } from "./seed/colleges";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.deleteMany();

  for (const college of colleges) {
    await prisma.college.create({
      data: college,
    });
  }

  console.log("Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });