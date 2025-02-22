import { db } from '@/db/drizzle/client'
import { subscription } from '@/db/drizzle/schema/subscriptions'
import { redis } from '@/db/redis/client'
import { eq } from 'drizzle-orm'

interface SubscribeToEventParams {
  name: string
  email: string
  referrer?: string | null
}

export async function subscribeToEvent({
  email,
  name,
  referrer,
}: SubscribeToEventParams) {
  const [user] = await db
    .select()
    .from(subscription)
    .where(eq(subscription.email, email))

  if (user) {
    return { subscriberId: user.id }
  }

  if (referrer) {
    await redis.zincrby('referral:ranking', 1, referrer)
  }

  const [result] = await db
    .insert(subscription)
    .values({ email, name })
    .returning()

  return { subscriberId: result.id }
}
