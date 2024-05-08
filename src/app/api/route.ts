import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function GET() {
  const users = await prisma.user.findMany()
  console.log('users', users)
  return users
}

GET()
