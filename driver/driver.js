'use strict';

const inquirer = require('inquirer');
const net = require('net');

const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3001;
client.connect(port, host, () => { 
  console.log('Driver successfully connected to', host, ':', port);
});


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
//     emitter.emit('delivered', order);
//   }, 3000);
// }
