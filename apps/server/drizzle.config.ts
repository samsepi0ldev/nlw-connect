import { env } from '@/env'
import type { Config } from 'drizzle-kit'

export default {
  schema: './src/db/drizzle/schema/*',
  out: './src/db/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
} as Config
