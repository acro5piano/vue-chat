import VueRouter from 'vue-router'

module.exports = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('./components/message_list.vue')
    },
    {
      path: '/messages/:id',
      component: require('./components/messages.vue')
    },
    {
      path: '/adults/:id',
      component: require('./components/adults.vue')
    },
    {
      path: '/analysis',
      component: require('./components/analysis.vue')
    },
    {
      path: '/profile',
      component: require('./components/profile.vue')
    },
  ]
})
