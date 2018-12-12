const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
<<<<<<< HEAD
=======

//doctor schema
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
 var DoctorSchema = mongoose.Schema({
        doctorID:{type: String},
        email:{type : String, unique: true},
        password:{type : String},
        firstname : {type : String},
        lastname : {type : String},
        typeofUser:{type:String},
        phonenumber:{type:String},
        speciality : {type : String},
        gender : {type : String},
        image:{type:String}, 
        degree : {type : String},
        college : {type : String},
        eoc : {type : String},
        eoy : {type : String},
        clinicname : {type : String},
        cliniccity : {type : String},
        clinicaddress : {type : String},
<<<<<<< HEAD
        timing:{type:Object,require:false},
=======
        timing:{type:Object},
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
        location:{type:Object},
        fees:{type:Number}
 });

 DoctorSchema.plugin(uniqueValidator);
 module.exports = mongoose.model('Doctor', DoctorSchema);