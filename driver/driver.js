'use strict';

require('dotenv').config();
const inquirer = require('inquirer');



const io = require('socket.io-client');
const driverSocket = io.connect('http://localhost:3000/caps');


// driverSocket.emit('join', 'driverFile');

driverSocket.emit('getAll');

driverSocket.on('pickup', (payload) => {
  
  driverSocket.emit('received', payload.orderID);

  setTimeout(() =>{
    console.log('picking up', payload.orderID);
    driverSocket.emit('in-transit', payload);
  }, 1500);


  setTimeout(()=>{
    console.log('delivered', payload.orderID);
    driverSocket.emit('delivered', payload);
  }, 3000);

});







