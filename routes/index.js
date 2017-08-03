module.exports = function (app, io) {
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  setInterval(() => {
    io.emit('message', 'hello')
  }, 1000);
}
