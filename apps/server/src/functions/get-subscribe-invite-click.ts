import { redis } from '@/db/redis/client'

interface GetSubscriberInviteClick {
  subscriberId: string
}

export async function getSubscribeInviteClick({
  subscriberId,
}: GetSubscriberInviteClick) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
