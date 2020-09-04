'use strict';

require('dotenv').config();

const {v4:uuid} = require('uuid');
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

const messages = {
// waiting for messages to queue

};


const caps = io.of('/caps');

caps.on('connection', (socket)=>{

  console.log('CAPS ROOM', socket.id);

  socket.on('join', room =>{
    console.log('joined', room);
    socket.join(room);
  });

  socket.on('received', orderID =>{
    //delete messages

    delete messages[orderID];
    console.log('deleting', orderID, messages);
  });

  socket.on('getAll', () =>{
    for(let id in messages){
      const payload = messages[id];
      caps.emit('pickup', payload);
    }
  });

  socket.on('pickup', (payload) =>{

    messages[payload.orderID] = payload;

    logIt('pickup', payload);
    caps.emit('pickup', payload);
    // console.log('pickup order', payload);
    console.log('pickup order', Object.keys(messages).length);
    // console.log('Event', payload);
  });

  socket.on('in-transit', (payload) =>{
    logIt('in-transit', payload);
    caps.to(process.env.STORE_NAME).emit('in-transit', payload);
    console.log('in-transit order', payload);
    // console.log('Event', payload);
  });

  socket.on('delivered', (payload) =>{
    logIt('delivered', payload);
    caps.to(process.env.STORE_NAME).emit('delivered', payload);
    console.log('delivered order', payload);
    // console.log('Event', payload);
  });

});

function logIt(event, payload){
  let time = new Date();
  console.log({time, event, payload});
}