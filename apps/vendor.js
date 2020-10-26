'use strict';

require('dotenv').config();
const emitter = require('../lib/events');
const faker = require('faker');


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


emitter.on('delivered', (payload) =>{
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
});

function start(){
  setInterval(()=>{
    emitter.emit('pickup', orders);
  }, 5000);
}

start();
module.exports = { start };


