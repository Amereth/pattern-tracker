import { db } from '~/server/lib/db'

export default defineEventHandler(() => db.query.events.findMany())
