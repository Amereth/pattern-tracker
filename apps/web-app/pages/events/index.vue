<script setup lang="ts">
import { useEvents } from '~/composables/events'
import { useDeleteEvent } from '~/composables/events/useDeleteEvent'
import type { Event } from '~/server/schemas'

const { data: events } = useEvents()

const deleteEvent = useDeleteEvent()

const confirm = useConfirm()

const confirmDelete = (event, id: Event['id']) =>
  confirm.require({
    target: event?.currentTarget,
    message: 'delete event?',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
      label: 'cancel',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'delete',
    },
    accept: () => deleteEvent(id),
  })
</script>

<template>
  <ConfirmPopup></ConfirmPopup>

  <DataTable :value="events" size="small" class="max-w-96 mx-auto">
    <Column field="id" header="id"></Column>
    <Column field="name" header="name" class="grow"></Column>
    <Column class="w-10" header="actions">
      <template #body="{ data }">
        <div class="flex gap-x-4 w-30">
          <Button size="small" icon="pi pi-pencil" rounded outlined></Button>
          <Button
            @click="confirmDelete($event, data.id)"
            size="small"
            icon="pi pi-trash"
            rounded
            outlined
          ></Button>
        </div>
      </template>
    </Column>
  </DataTable>
</template>
