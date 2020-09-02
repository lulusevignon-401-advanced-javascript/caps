// 'use strict';

// const emitter = require('../lib/events');

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
