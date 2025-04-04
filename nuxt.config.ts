// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})