// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ignore: ['**/pb/**/*'],
  devtools: { enabled: true },
  modules: [
    'nuxt-windicss',
    'nuxt-icon'
  ],
  build: {
    transpile: [
        /\.js$/,
        /^(?!.*pb).*/
    ]
  }
})
