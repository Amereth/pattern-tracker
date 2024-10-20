import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['./main.css'],
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  primevue: {
    options: {
      ripple: false,
      theme: {
        preset: Aura,
      },
    },
  },
})
