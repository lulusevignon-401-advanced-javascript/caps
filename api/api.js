'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const faker = require('faker');

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/caps');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3003;

app.post('/pickup', (req,res)=>{

  let delivery = (Object.keys(req.body).length && req.body) || {
    store: '1-206-flowers',
    orderID: faker.random.uuid(),
    customer: faker.name.firstName(), 
    address: faker.address.streetAddress(),
  };

  socket.emit('pickup', delivery);

  res.status(200).send('scheduled');

});

app.listen(PORT, () => {
  console.log('listening on port', PORT );
});