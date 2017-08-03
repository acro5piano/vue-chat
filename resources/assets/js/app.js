import Vue from 'vue'

require('app.scss')

var app = new Vue({
  el: '#app',
  render: h => h(require('app.vue'))
})
