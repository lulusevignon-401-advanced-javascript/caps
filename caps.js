'use strict';

const events = require('./lib/events.js');

require('./apps/driver');
require('./apps/vendor');


events.on('pickup', payload => log('pickup', payload));
events.on('in-transit', payload => log('in-transit', payload));
events.on('delivered', payload => log('delivered', payload));

function log(event,payload){
  let time = new Date();
  console.log('EVENT', {event, payload});
}

module.exports = log;