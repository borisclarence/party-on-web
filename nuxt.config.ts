// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Bienvenue sur Party-on',
      meta: [
        { name: 'description', content: 'Bienvenue sur votre application' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  }
})