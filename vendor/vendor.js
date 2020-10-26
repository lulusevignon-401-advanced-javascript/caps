'use strict';

require('dotenv').config();

const inquirer = require('inquirer');
const net = require('net');
const faker = require('faker');

const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3001;
client.connect(port, host, () => { 
  console.log('Vendor successfully connected to', host, ':', port);
});

let storeName = process.env.STORE_NAME || 'Lulu\'s';
let customerName = faker.name.firstName();
let orderID = faker.random.number();
let address = faker.address.streetAddress();

const orders = {
  event: 'pickup',
  time: new Date(),
  payload: {
  storeName: storeName,
  orderID: orderID, 
  customerName: customerName, 
  address: address,
}
} 


client.on('data', buffer =>{
  
  setInterval( function(message){
    socket.send('pickup', newOrder);
    let payload = JSON.stringify(message);
     for (let socket in socketPool) {
     socketPool[socket].write(payload)
     }
   }, 5000);
  
});




client.on('delivered', function (payload) {
  let event = JSON.parse(payload);
  console.log(`Thank you for delivering ${event.event}, ${payload.orderID}`);
});





