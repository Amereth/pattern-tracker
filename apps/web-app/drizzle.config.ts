import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
})
