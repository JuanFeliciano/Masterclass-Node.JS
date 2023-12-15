import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('🚀app running on http://localhost:3000')
  })
