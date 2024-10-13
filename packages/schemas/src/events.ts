import { relations, sql } from 'drizzle-orm'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'
import { occurrences } from './occurrences'

export const events = sqliteTable('events', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: text('created_at').default(sql`(current_timestamp)`),
})

export type Event = {
  id: number
  name: string
  createdAt: string
}

export const eventRelations = relations(events, ({ many }) => ({
  occurrences: many(occurrences),
}))
