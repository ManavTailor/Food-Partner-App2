import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function GET() {
  return prisma.user.findMany();
}

GET();
