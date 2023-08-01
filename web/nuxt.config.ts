// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-windicss',
    'nuxt-icon',
    '@sidebase/nuxt-auth'
  ],
})
