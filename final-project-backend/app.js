var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var upload = require('express-fileupload');

var doctorController= require('./controllers/doctorController');
var imagecontroller = require('./controllers/imagecontroller');
var customercontroller= require('./controllers/customerController');
var loginAuthenticationController=require('./controllers/loginAuthenticationController');
var signupController=require('./controllers/signupController');

var app = express();

app.use(upload());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/doctor', doctorController);
app.use('/img', imagecontroller);
app.use('/customer', customercontroller);
app.use('/login', loginAuthenticationController);
app.use('/signup',signupController);

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
