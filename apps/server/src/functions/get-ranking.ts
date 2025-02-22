import { inArray } from 'drizzle-orm'

import { db } from '@/db/drizzle/client'
import { subscription } from '@/db/drizzle/schema/subscriptions'
import { redis } from '@/db/redis/client'

export async function getRanking() {
  const ranking = await redis.zrevrange('referral:ranking', 0, 2, 'WITHSCORES')
  const subscriberIdAndScore = ranking.reduce<Record<string, number>>(
    (acc, curr, i, arr) => {
      if (i % 2 === 0) {
        acc[curr] = Number(arr[i + 1])
      }
      return acc
    },
    {}
  )

  const subscribers = await db
    .select()
    .from(subscription)
    .where(inArray(subscription.id, Object.keys(subscriberIdAndScore)))

  const rankingWithScore = subscribers
    .map(subscriber => {
      return {
        id: subscriber.id,
        name: subscriber.name,
        score: subscriberIdAndScore[subscriber.id],
      }
    })
    .sort((sub1, sub2) => {
      return sub2.score - sub1.score
    })

  return { rankingWithScore }
}
