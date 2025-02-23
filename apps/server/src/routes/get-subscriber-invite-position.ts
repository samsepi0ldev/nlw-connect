import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

import { getSubscribeInvitePosition } from '@/functions/get-subscribe-invite-position'

export const getSubscriberInvitePositionRoutes: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/position',
      {
        schema: {
          summary: 'Get subscriber ranmking position',
          tags: ['referral'],
          params: z.object({
            subscriberId: z.string().uuid(),
          }),
          response: {
            200: z.object({
              position: z.number().nullable(),
            }),
          },
        },
      },
      async (req, reply) => {
        const { subscriberId } = req.params

        const result = await getSubscribeInvitePosition({ subscriberId })

        return reply.send(result)
      }
    )
  }
