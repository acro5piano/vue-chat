module.exports = function (io) {
  io.on('connection', function(socket){
    // socket.io log
    console.log('a user connected')
    socket.on('disconnect', function(){
      console.log('user disconnected')
    })

    // message broadcast
    socket.on('message:send', data => {
      socket.broadcast.emit('message:receive', { content: data });
    })
  })
}

