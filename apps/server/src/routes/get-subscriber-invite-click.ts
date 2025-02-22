import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

import { getSubscribeInviteClick } from '@/functions/get-subscribe-invite-click'

export const getSubscriberInviteClickRoutes: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/click',
      {
        schema: {
          summary: 'Get subscriber invite click',
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

        const result = await getSubscribeInviteClick({ subscriberId })

        return reply.send(result)
      }
    )
  }
