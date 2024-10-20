import type { Event } from '~/server/schemas'

export const useDeleteEvent = () => {
  const { data } = useNuxtData<Event[]>('/api/events/getMany')

  const toast = useToast()

  return (id: Event['id']) =>
    $fetch('/api/events/delete', {
      method: 'DELETE',
      query: { id },

      onResponse() {
        data.value = data.value?.filter((event) => event.id === id) ?? null

        toast.add({
          severity: 'info',
          summary: 'event deleted',
        })
      },
    })
}
