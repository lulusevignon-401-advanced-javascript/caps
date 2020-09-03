'use strict';

require('dotenv').config();

const inquirer = require('inquirer');
const net = require('net');
const faker = require('faker');



const io = require('socket.io-client');

const vendorSocket = io.connect('http://localhost:3000/caps');
// console.log('server running on', vendorSocket);

vendorSocket.emit('join', 'vendorFile');



setInterval(()=>{
    
  const order = {
      time: new Date(),
      storeName: process.env.STORE_NAME || 'Lulu\'s',
      orderID: faker.random.number(), 
      customerName: faker.name.firstName(), 
      address: faker.address.streetAddress(),
  };

  vendorSocket.emit('pickup', (order));       
    
  }, 5000)
  



vendorSocket.on('delivered', (payload)=>{
  console.log('Thank you for delivering', payload.orderID);
})
// client.on('delivered', function (payload) {
//   let event = JSON.parse(payload);
//   console.log(`Thank you for delivering ${event.event}, ${payload.orderID}`);
// });

// const client = new net.Socket();

// const host = process.env.HOST || 'localhost';
// const port = process.env.PORT || 3001;
// client.connect(port, host, () => { 
//   console.log('Vendor successfully connected to', host, ':', port);
// });

// const orders = {
//   event: 'pickup',
//   time: new Date(),
//   payload: {
//   storeName: storeName,
//   orderID: orderID, 
//   customerName: customerName, 
//   address: address,
// }
// } 


// client.on('data', buffer =>{
  
//   setInterval( function(message){
//     socket.send('pickup', newOrder);
//     let payload = JSON.stringify(message);
//      for (let socket in socketPool) {
//      socketPool[socket].write(payload)
//      }
//    }, 5000);
  
// });








