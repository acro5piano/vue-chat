import Vue from 'vue'
import VueRouter from 'vue-router'

require('app.scss')
const router = require('./router.js')

Vue.prototype.$socket = io()

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  router,
  render: h => h(require('app.vue'))
})
