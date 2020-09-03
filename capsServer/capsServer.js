'use strict';

require('dotenv').config();
// const net = require('net');
// const { Socket } = require('dgram');

const io = require('socket.io')(process.env.PORT || 3001);
// console.log('server running on', io);

// io.on('connection', (socket) => {
//   console.log('CONNECTED', socket.id);

//   socket.on('pickup', (payload) => {
//     console.log('ready for pickup', payload);
//     io.emit('pickup', payload);
//   });

//   socket.on('in-transit', (payload) => {
//     io.emit('in-transit', payload);
//   });

//   socket.on('delivered', (payload) => {
//     io.emit('delivered', payload);
//   });

// }); 


const caps = io.of('/caps');

caps.on('connection', (socket)=>{

  console.log('CAPS ROOM', socket.id);

  socket.on('join', room =>{
    console.log('joined', room);
    socket.join(room);
  });

  socket.on('pickup', (payload) =>{
    caps.to('vendorFile').emit('pickup', payload);
    console.log('pickup order', payload);
    // console.log('Event', payload);
  });

  socket.on('in-transit', (payload) =>{
    caps.to('driverFile').emit('in-transit', payload);
    console.log('in-transit order', payload);
    // console.log('Event', payload);
  });

  socket.on('delivered', (payload) =>{
    caps.to('driverFile').emit('delivered', payload);
    console.log('delivered order', payload);
    // console.log('Event', payload);
  });

});
