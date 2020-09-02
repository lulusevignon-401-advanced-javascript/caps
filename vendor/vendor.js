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

let storeName = process.env.STORE_NAME;
let customerName = faker.name.firstName();
let orderID = faker.random.number();
let address = faker.address.streetAddress();

const orders = {
  storeName: storeName,
  orderID: orderID, 
  customerName: customerName, 
  address: address,
};


// emitter.on('delivered', (payload) =>{
//   console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
// });

// function start(){
//   setInterval(()=>{
//     emitter.emit('pickup', orders);
//   }, 5000);
// }

// start();
