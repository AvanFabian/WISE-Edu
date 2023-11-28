import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handle(req:any, res:any) {
  const { name, email } = req.body
  const result = await prisma.user.create({
    data: {
      email,
      name,
    },
  })
  res.json(result)
}