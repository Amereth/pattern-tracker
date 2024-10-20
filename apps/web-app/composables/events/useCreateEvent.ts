import type { Event } from '~/server/schemas'

export const useCreateEvent = () => {
  const { data } = useNuxtData<Event[]>('/api/events/getMany')

  return (body: { name: string }) =>
    $fetch('/api/events/create', {
      method: 'POST',
      body,

      onResponse({ response }) {
        const event = response._data as Event

        data.value?.push(event)
      },
    })
}
