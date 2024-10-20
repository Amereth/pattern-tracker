import { events } from '~/server/schemas/events'
import { db } from '~/server/lib/db'
import { occurrences } from '~/server/schema'
import { Occurrence } from '~/server/schemas'

export default defineEventHandler(async (event) => {
  const { name } = (await readBody(event)) as { name: string }

  const resp = await db.insert(events).values({ name }).returning({
    id: events.id,
    name: events.name,
    createdAt: events.createdAt,
  })

  return resp[0]
})
