import { redis } from '@/db/redis/client'

interface AccessInviteLinkParams {
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId,
}: AccessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
