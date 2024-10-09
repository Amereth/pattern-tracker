import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	css: ['./main.css'],
	devtools: { enabled: true },
	modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss', '@nuxt/icon'],
	primevue: {
		options: {
			ripple: false,
			theme: {
				preset: Aura,
			},
		},
	},
})
