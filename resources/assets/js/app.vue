<template>
  <div>
    <div v-for="message in messages">
      <div class="message" :class="{'message-sent': message.fromMe, 'message-received': ! message.fromMe}">
        <div class="message-sender">
          {{ message.sender }}
        </div>
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

<style>
.message {
  padding: 20px;
  margin-bottom: 30px;
  border: solid 1px #ccc;
  border-radius: 5px;
}
.message-sent {
  text-align: right;
}
.message-sender {
  color: #ccc;
}
</style>
