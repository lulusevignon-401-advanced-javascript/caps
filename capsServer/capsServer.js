'use strict';

require('dotenv').config();
const net = require('net');
// const { Socket } = require('dgram');


const port = process.env.PORT || 3001;

const server = net.createServer();

// server.on('pickup', payload => logEvent('pickup', payload));
// server.on('in-transit', payload => logEvent('in-transit', payload));
// server.on('delivered', payload => logEvent('delivered', payload));

server.listen(port, () => console.log(`Server up on PORT ${port}`));

let socketPool = {};

server.on('connection', socket =>{
  socket.id = `Socket-ID ${Math.random()}`;
  socketPool[socket.id] = socket;

  // console.log('connection', socketPool);

  socket.on('data', buffer => onMessageReceived(buffer.toString()));

  socket.on('close', () => deleteSocket(socket.id));
});

function onMessageReceived(str){

  // const raw = buffer.toString();

  logEvent(str);
  broadcast(str);
}

function logEvent(str){

  const messageObj = JSON.parse(str);
  const event = messageObj.event;
  const time = new Date();
  const payload = messageObj.payload;

  console.log('EVENT', {event, time, payload});
}

function broadcast(str){
  for (let key in socketPool){
    const socket = socketPool[key];
    socket.write(str);
  }
}

function deleteSocket(id){
  delete socketPool[id];
}