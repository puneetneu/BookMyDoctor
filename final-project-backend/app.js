var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');
var upload = require('express-fileupload');

var doctorController= require('./controllers/doctorController');
var imagecontroller = require('./controllers/imagecontroller');


var app = express();
app.use(upload());
const route=require('./routes/route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',route);

app.use('/doctors', doctorController);
app.use('/img', imagecontroller);

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/healthDB', { useNewUrlParser: true });

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
