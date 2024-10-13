import { sql, relations } from 'drizzle-orm'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'
import { Event, events } from './events'

export const occurrences = sqliteTable('occurrences', {
  id: integer('id').primaryKey(),
  date: text('date').notNull(),
  eventId: integer('event_id').references(() => events.id, {
    onDelete: 'cascade',
  }),
  createdAt: text('created_at').default(sql`(current_timestamp)`),
})

export type Occurrence = {
  id: number
  date: string
  eventId: Event['id']
  createdAt: string
}

export const postsRelations = relations(occurrences, ({ one }) => ({
  author: one(events, {
    fields: [occurrences.eventId],
    references: [events.id],
  }),
}))
