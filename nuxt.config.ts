// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/scss/app.scss'],
  runtimeConfig: {
    accessKey: process.env.ACCESS_KEY,
  },
});
