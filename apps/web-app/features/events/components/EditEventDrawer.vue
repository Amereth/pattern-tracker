<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { useCreateEvent } from '~/composables/events'
import { useDrawerStore } from '~/stores/drawerStore'

const formModel = ref({ name: '' })
const drawer = useDrawerStore()

const open = computed(() => drawer.key === DRAWER_KEYS['events/create'])

const mutate = useCreateEvent()

const toast = useToast()

const onSubmit = async () => {
  const resp = await mutate(formModel.value)

  if (!resp) return

  toast.add({
    severity: 'success',
    summary: 'event created',
  })

  drawer.closeDrawer()
}
</script>

<template>
  <Drawer
    :visible="open"
    :closeOnEscape="false"
    :dismissableMask="false"
    @update:visible="(value) => !value && drawer.closeDrawer()"
    position="right"
    header="create event"
  >
    <form @submit.prevent="onSubmit" class="flex flex-col h-full gap-y-8">
      <IftaLabel>
        <InputText id="name" v-model="formModel.name" class="w-full" />
        <label for="name">name</label>
      </IftaLabel>

      <Button type="submit">create event</Button>
    </form>
  </Drawer>
</template>
