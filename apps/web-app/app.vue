<script setup lang="ts">
import Menubar from 'primevue/menubar'
import type { MenuItem } from 'primevue/menuitem'
import EditEventDrawer from '~/features/events/components/EditEventDrawer.vue'
import { useDrawerStore } from '~/stores/drawerStore'
import Toast from 'primevue/toast'

const drawer = useDrawerStore()

const menuItems: MenuItem[] = [
  {
    label: 'events',
    icon: 'pi pi-check-circle',
    items: [
      {
        label: 'view',
        icon: 'pi pi-check-circle',
        command: () => navigateTo('/events'),
      },
      {
        label: 'create',
        icon: 'pi pi-plus',
        command: () => drawer.openDrawer('events/create'),
      },
    ],
  },
]
</script>

<template>
  <header>
    <Menubar :model="menuItems" />
  </header>

  <EditEventDrawer />

  <Toast />

  <NuxtPage />
</template>
