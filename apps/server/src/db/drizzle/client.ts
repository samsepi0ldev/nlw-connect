import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schemas from '@/db/drizzle/schema/subscriptions'
import { env } from '@/env'

const pg = postgres(env.POSTGRES_URL)
export const db = drizzle(pg, {
  schema: schemas,
})
