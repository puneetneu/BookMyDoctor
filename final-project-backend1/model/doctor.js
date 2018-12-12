const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
 var DoctorSchema = mongoose.Schema({
        doctorID:{type: String},
        email:{type : String, unique: true},
        password:{type : String},
        firstname : {type : String,require:true},
        lastname : {type : String,require:true},
        typeofUser:{type:String},
        phonenumber:{type:String},
        speciality : {type : String,require:true},
        gender : {type : String},
        image:{type:String}, 
        degree : {type : String},
        college : {type : String},
        eoc : {type : String},
        eoy : {type : String},
        clinicname : {type : String},
        cliniccity : {type : String},
        clinicaddress : {type : String},
        timing:{type:Object,require:false},
        location:{type:Object}
 });

 DoctorSchema.plugin(uniqueValidator);
 module.exports = mongoose.model('Doctor', DoctorSchema);