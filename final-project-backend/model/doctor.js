const mongoose = require('mongoose');
 var Doctor = mongoose.model('Doctor',{
        doctor_id: {type :String},
        email: {type: String},
        password: {type: String},
        phone:{type: String},
        firstname : {type : String},
        lastname : {type : String},
        speciality : {type : String},
        gender : {type : String},
        image:{type:String}, 
        degree : {type : String},
        college : {type : String},
        eoc : {type : String},
        eoy : {type : String},
        clinicname : {type : String},
        cliniccity : {type : String},
        clinicaddress : {type : String}    
     
 });



 module.exports= {Doctor};