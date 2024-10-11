import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/schemas/index.ts',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
})
