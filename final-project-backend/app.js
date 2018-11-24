var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

const route=require('./routes/route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',route);

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/finalproject', { useNewUrlParser: true });

//on success

mongoose.connection.on('connected',()=>{
  console.log('connected to db');
})

mongoose.connection.on('error',(err)=>{
  if(err){
    console.log(err);
  }
})

module.exports = app;
