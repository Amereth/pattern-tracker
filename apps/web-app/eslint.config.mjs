// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt().overrideRules({
  'vue/no-multiple-template-root': 'off',
})
// Your custom configs here
