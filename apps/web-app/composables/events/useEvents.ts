import type { Event } from '~/server/schemas'

export const eventsQueryKey = '/api/events/getMany'

export const useEvents = () =>
  useAsyncData<Event[]>(eventsQueryKey, () => $fetch(eventsQueryKey))
