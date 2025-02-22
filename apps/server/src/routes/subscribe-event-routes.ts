import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

import { subscribeToEvent } from '@/functions/subscribe-to-event'

export const subscribeEventRoutes: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Subscribes someone to the event',
        tags: ['subscriptions'],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().uuid().nullish(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string().uuid(),
          }),
        },
      },
    },
    async (req, reply) => {
      const { name, email, referrer } = req.body

      const result = await subscribeToEvent({ email, name, referrer })

      return reply.status(201).send(result)
    }
  )
}
