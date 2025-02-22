import { env } from '@/env'
import { getRanking } from '@/functions/get-ranking'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const getRankingRoutes: FastifyPluginAsyncZod = async app => {
  app.get(
    '/ranking',
    {
      schema: {
        summary: 'Get ranking',
        tags: ['referral'],
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string().uuid(),
                name: z.string(),
                score: z.number(),
              })
            ),
          }),
        },
      },
    },
    async (req, reply) => {
      const { rankingWithScore } = await getRanking()

      return reply.send({ ranking: rankingWithScore })
    }
  )
}
