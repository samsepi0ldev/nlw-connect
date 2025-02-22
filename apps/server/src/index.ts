import fastifyCors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastify from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import { env } from '@/env'
import { accessInviteLinkRoutes } from '@/routes/access-invite-link'
import { getRankingRoutes } from '@/routes/get-ranking'
import { getSubscriberInviteClickRoutes } from '@/routes/get-subscriber-invite-click'
import { getSubscriberInviteCountRoutes } from '@/routes/get-subscriber-invite-count'
import { getSubscriberInvitePositionRoutes } from '@/routes/get-subscriber-invite-position'
import { subscribeEventRoutes } from '@/routes/subscribe-event-routes'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NLW Connect',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
})

app.register(subscribeEventRoutes)
app.register(accessInviteLinkRoutes)
app.register(getSubscriberInviteClickRoutes)
app.register(getSubscriberInviteCountRoutes)
app.register(getSubscriberInvitePositionRoutes)
app.register(getRankingRoutes)

const PORT = env.PORT

app.listen({ port: PORT }, (err, pathname) => {
  console.log(`🚀 Server running at ${pathname}`)
})
