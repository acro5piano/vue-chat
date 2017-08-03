const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const express = require('express')

// view engine setup
app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', function(socket){
  console.log('a user connected')
  socket.on('disconnect', function(){
    console.log('user disconnected')
  })
})

app.get('/send', function(req, res) {
  io.emit('message', req.query.text)
  res.send('message sent')
})

module.exports = app;

['./app/routes', './app/exceptions/handler'].forEach(file => {
  require(file)(app)
})

http.listen(3001, function(){
  console.log('listening on *:3001')
})
