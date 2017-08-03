<template>
  <router-view></router-view>
</template>

<script>
  import axios from 'axios'

  export default {
    components: {
      messages: require('./components/messages.vue')
    },
  }
</script>

