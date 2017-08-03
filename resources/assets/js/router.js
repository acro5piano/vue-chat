import VueRouter from 'vue-router'

module.exports = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('./components/messages.vue')
    },
    {
      path: '/adults/:id',
      component: require('./components/adults.vue')
    },
  ]
})
