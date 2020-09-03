'use strict';

require('dotenv').config();

const inquirer = require('inquirer');
const net = require('net');


const io = require('socket.io-client');

const driverSocket = io.connect('http://localhost:3000/caps');


driverSocket.emit('join', 'driverFile');


driverSocket.on('pickup', (payload) => {
  
  setTimeout(() =>{
    console.log('picking up', payload.orderID);
    driverSocket.emit('in-transit', payload.orderID);
  }, 1500);

  
  setTimeout(()=>{
    console.log('Delivered', payload.orderID);
    driverSocket.emit('Delivered', payload.orderID);
  }, 3000);

});


// const client = new net.Socket();

// const host = process.env.HOST || 'localhost';
// const port = process.env.PORT || 3001;
// client.connect(port, host, () => { 
//   console.log('Driver successfully connected to', host, ':', port);
// });

// client.on('data', buffer =>{
//   let raw = buffer.toString();
//   let order = JSON.parse(raw);
//   if(order.event === 'pickup'){
//     pickupOrder(order);
//   }
// });

// function pickupOrder(order){
//   setTimeout(() =>{
//     let newOrder = {
//       event: 'in-transit',
//       payload: order.payload,
//     };
//     console.log('picking up', newOrder.payload.orderID);
//   }, 1000);
// } 


// emitter.on('pickup', inTransitHandler);
// emitter.on('in-transit', deliveredHandler);

// function inTransitHandler(order){
//   setTimeout(()=>{
//     console.log(`DRIVER: picked up ${order.orderID}`);
//     emitter.emit(`in-transit`, order);
//   }, 1000);
 
// }

// function deliveredHandler(order){
//   setTimeout(()=>{
//     console.log(`DRIVER: delivered ${order.orderID}`);
//     socket.emit('delivered', order);
//   }, 3000);
// };
