const express = require('express')
const mongoose = require('mongoose')


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

const url = 'mongodb://localhost:27017reactMongo';

mongoose.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
    }
   });