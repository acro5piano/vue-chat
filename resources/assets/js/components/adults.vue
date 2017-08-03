<template>
  <div class="message-wrap">
    <header class="global-header">
      <h1>幾田さえこ</h1>
    </header>
    <div>
      こんにちは
    </div>
    <div class="input-area">
      <input @keydown.enter="sendMessage" v-model="newMessageContent">
      <button @click="sendMessage">送信</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        messages: [],
        newMessageContent: ''
      }
    },
    mounted () {
      this.$socket.on('message:receive', message => {
        this.messages.push({
          content: message.content,
          sender: 'なぜにゃん',
          fromMe: false,
        })
      })
    },
    methods: {
      sendMessage () {
        if (this.newMessageContent === '') {
          return false
        }
        this.$socket.emit('message:send', this.newMessageContent)
        this.messages.push({
          content: this.newMessageContent,
          sender: 'あなた',
          fromMe: true,
        })
        this.newMessageContent = ''
      },
    },
  }
</script>

