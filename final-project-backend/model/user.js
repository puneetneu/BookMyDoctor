const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
<<<<<<< HEAD
=======
//user schema
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
 var UserSchema = mongoose.Schema({
        email:{type : String, unique: true},
        password:{type : String},
        firstname : {type : String},
        lastname : {type : String},
        typeofUser:{type:String},
        phonenumber:{type:String},    
 });

 UserSchema.plugin(uniqueValidator);
 module.exports = mongoose.model('User', UserSchema);