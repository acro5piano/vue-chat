import Vue from 'vue'

require('app.scss')

Vue.prototype.$socket = io()

var app = new Vue({
  el: '#app',
  render: h => h(require('app.vue'))
})
