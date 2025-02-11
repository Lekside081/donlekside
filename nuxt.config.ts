// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'],
    css: [
      '@/Access/input.css',
    ],
    

  compatibilityDate: '2024-09-03',
})