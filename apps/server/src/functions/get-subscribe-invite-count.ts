import { redis } from '@/db/redis/client'

interface GetSubscriberInviteCount {
  subscriberId: string
}

export async function getSubscribeInviteCount({
  subscriberId,
}: GetSubscriberInviteCount) {
  const count = await redis.zscore('referral:ranking', subscriberId)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
