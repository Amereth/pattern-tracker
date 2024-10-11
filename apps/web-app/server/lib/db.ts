import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import * as schema from '../schemas'

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN!,
})

export const db = drizzle(client, { schema })
