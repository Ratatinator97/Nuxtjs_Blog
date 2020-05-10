const axios = require('axios');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap" }

    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fa923f', height: '5px', duration: '50000', throttle: 0 },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/date.js'
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
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    apiKey: 'AIzaSyDb-ZMqBH6ZU22dThScSpXEv9epJnGZW2o'
  },
  router: {
    base: '/Nuxtjs_Blog/'
  },
  // generate: {
  //   routes: function () {
  //     return axios.get('https://nuxt-blog-429ca.firebaseio.com/posts.json')
  //       .then(res => {
  //         const routes = [];
  //         for (const key in res.data) {
  //           routes.push({ route: '/posts/' + key, payload: { postData: res.data[key] } })
  //         }
  //         return routes
  //       });
  //   }
  // }
}
