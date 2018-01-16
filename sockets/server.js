
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use('/', express.static(__dirname + '/public_static'));

io.on('connection', (socket) => {

  console.log('New Client');

  socket.on('new_message', (msg) => {


    io.emit('recvdMsg', msg);

  })
});

app.get('/hello', (e, s)=> {s.send('hellp')})

server.listen(5243, function () {
  console.log('Server Started on http://localhost:' + 5243);
});