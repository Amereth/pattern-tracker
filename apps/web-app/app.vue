<script setup lang="ts">
import Menubar from 'primevue/menubar'
import type { MenuItem } from 'primevue/menuitem'

const menuItems: MenuItem[] = [
  {
    label: 'Events',
    icon: 'pi pi-check-circle',
    items: [
      {
        label: 'Add Event',
        icon: 'pi pi-plus',
        command: () => navigateTo('/add-event'),
      },
    ],
  },
]
</script>

<template>
  <header>
    <Menubar :model="menuItems" />
  </header>

  <NuxtPage />
</template>
