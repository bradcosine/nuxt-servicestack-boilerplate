const pkg = require('./package')
require('dotenv').config();

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff0000' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
    proxyHeaders: false
  },
  auth: {
    strategies: {
      local:false,
      auth0: {
        domain: process.env.auth0_domain,
        client_id: process.env.auth0_client_id,
        response_type: 'code',
        access_token_endpoint: '/auth/token', //proxied to ServiceStack
        grant_type: 'authorization_code',
        audience: process.env.auth0_audience,
        scope: ['openid', 'profile', 'email'],
        watchLoggedIn: true
      }
    },
    redirect: {
      fullPathRedirect:true,
      logout: `https://${process.env.auth0_domain}/v2/logout?client_id=${process.env.auth0_client_id}&returnTo=${encodeURIComponent(process.env.auth0_return_to)}`
    }
  },
  proxy: {
    '/api': 'http://localhost:5000/',
    '/json': 'http://localhost:5000/',
    '/auth/token':'http://localhost:5000/',
    //'/auth': 'http://localhost:3000/', // could have all /auth/ routes to go servicestack
  },
  vuetify: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push(
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules|\.nuxt)/
        });
    }
  }
}
