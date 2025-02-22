import { redis } from '@/db/redis/client'

interface GetSubscriberInvitePosition {
  subscriberId: string
}

export async function getSubscribeInvitePosition({
  subscriberId,
}: GetSubscriberInvitePosition) {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)

  if (rank === null) {
    return {
      position: null,
    }
  }

  return {
    position: rank + 1,
  }
}
