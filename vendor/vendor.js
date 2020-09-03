'use strict';

require('dotenv').config();

const faker = require('faker');



const io = require('socket.io-client');

const vendorSocket = io.connect('http://localhost:3000/caps');
// console.log('server running on', vendorSocket);

vendorSocket.emit('join', process.env.STORE_NAME);



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









