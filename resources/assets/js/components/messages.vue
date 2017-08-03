<template>
  <div class="message-wrap">

  <header class="global-header">
    <h1>なぜにゃん</h1>
  </header>
    <div v-for="message in messages">
      <div class="message" :class="{'message-sent': message.fromMe, 'message-received': ! message.fromMe}">
          <span class="message-sender">
            {{ message.sender }}
          </span>

        <div class="message-bubble">


          <div class="message-content">
            {{ message.content }}
          </div>

        </div>
      </div>
    </div>
    <div class="input-area">
        <input @keydown.enter="sendMessage" v-model="newMessageContent"></textarea>
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

