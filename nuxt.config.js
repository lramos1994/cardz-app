
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.scss'
  ],

  styleResources: {
    scss: '~assets/styles/common/_variables.scss'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/auth',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-fontawesome',
    ['nuxt-buefy', {
      defaultIconPack: 'fas',
      materialDesignIconsHRef: "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
    }],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common';
    }
  },
  axios: {
    baseURL: 'http://cardz.local/api'
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'user/login', method: 'post', propertyName: 'response.token' },
          user: { url: 'user', method: 'get', propertyName: 'response' },
          logout: false
        }
      }
    }
  }
}
