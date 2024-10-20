// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import drizzle from 'eslint-plugin-drizzle'

export default withNuxt()
  .overrideRules({
    'vue/no-multiple-template-root': 'off',
    'no-unused-vars': 'warn',
  })
  .prepend({
    extends: [{ drizzle }],
  })

// Your custom configs here
