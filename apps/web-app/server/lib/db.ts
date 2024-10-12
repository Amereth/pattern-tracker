import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import * as schema from '@pattern-tracker/schemas/schema'

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN!,
})

export const db = drizzle(client, { schema })
