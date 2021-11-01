export default {
  target: 'server',

  head: {
    title: 'ar-tv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: 'white',
    height: '3px',
  },

  css: ['@/styles/main.scss'],

  plugins: [{ src: '~/plugins/vue-carousel', mode: 'client' }],

  components: true,

  buildModules: [],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  axios: {
    baseURL: 'https://api.themoviedb.org/3',
  },

  styleResources: {
    scss: ['@/styles/*.scss'],
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
