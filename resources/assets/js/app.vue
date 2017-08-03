<template>
  <div>
    <div v-for="message in messages">
      <div class="message" :class="{'message-sent': message.fromMe, 'message-receive': ! message.fromMe}">
        {{ message.content }}
      </div>
    </div>
    <input @keydown.enter="sendMessage" v-model="newMessageContent">
    <button @click="sendMessage">送信</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        // messages: [],
        messages: [{
          fromMe: false,
          content: 'hello',
        },{
          fromMe: true,
          content: 'hello',
        }],
        newMessageContent: ''
      }
    },
    mounted () {
      this.$socket.on('message:receive', message => {
        this.messages.push({
          content: message.content,
          fromMe: false,
        })
      })
    },
    methods: {
      sendMessage () {
        this.$socket.emit('message:send', this.newMessageContent)
        this.messages.push({
          content: this.newMessageContent,
          fromMe: true,
        })
        this.newMessageContent = ''
      },
    },
  }
</script>
<style>
.message-sent {
  text-align: right;
}
</style>
