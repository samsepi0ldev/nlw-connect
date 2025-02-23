import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

import { getSubscribeInviteCount } from '@/functions/get-subscribe-invite-count'

export const getSubscriberInviteCountRoutes: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/count',
      {
        schema: {
          summary: 'Get subscriber invite count',
          tags: ['referral'],
          params: z.object({
            subscriberId: z.string().uuid(),
          }),
          response: {
            200: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async (req, reply) => {
        const { subscriberId } = req.params

        const result = await getSubscribeInviteCount({ subscriberId })

        return reply.send(result)
      }
    )
  }
