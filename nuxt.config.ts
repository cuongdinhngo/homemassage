// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@nuxtjs/i18n'],
  css: ['~/assets/css/styles.css'],
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/homemassage/' : '/',
    head: {
      title: 'Home Massage',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Home Massage Service' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Farsan&family=Lora:ital,wght@0,400..700;1,400..700&family=Sansita+Swashed:wght@300..900&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
      ],
    },
  },
})