import { defineStore } from 'pinia'

export const DRAWER_KEYS = { 'events/create': 'events/create' } as const

type DrawerKey = keyof typeof DRAWER_KEYS

export const useDrawerStore = defineStore<
  'drawerStore',
  { key: DrawerKey | undefined },
  {},
  {
    openDrawer: (key: DrawerKey) => void
    closeDrawer: () => void
  }
>('drawerStore', {
  state: () => ({
    key: undefined,
  }),
  actions: {
    openDrawer(key: DrawerKey) {
      this.key = key
    },
    closeDrawer() {
      this.key = undefined
    },
  },
})
