import { sql, relations } from 'drizzle-orm'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'
import { events } from './events'

export const occurrences = sqliteTable('occurrences', {
  id: integer('id'),
  eventId: integer('event_id').references(() => events.id, {
    onDelete: 'cascade',
  }),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
})

export type Occurrence = {
  id: number
  createdAt: string
}

export const postsRelations = relations(occurrences, ({ one }) => ({
  author: one(events, {
    fields: [occurrences.eventId],
    references: [events.id],
  }),
}))
