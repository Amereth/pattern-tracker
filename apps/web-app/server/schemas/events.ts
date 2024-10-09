import { sqliteTable, integer } from 'drizzle-orm/sqlite-core'

export const events = sqliteTable('events', {
	id: integer('id').primaryKey(),
})
