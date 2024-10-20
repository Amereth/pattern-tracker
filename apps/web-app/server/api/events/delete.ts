import { events } from '~/server/schemas/events'
import { db } from '~/server/lib/db'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const { id: _id } = getQuery(event)

  const id = Number(_id)

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'id is required',
    })
  }

  db.delete(events).where(eq(events.id, id)).execute()
})
