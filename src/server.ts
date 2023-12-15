import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', () => {
  const users = prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('🚀app running on http://localhost:3000')
  })
