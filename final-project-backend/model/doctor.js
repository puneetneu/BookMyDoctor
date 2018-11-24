const mongoose=require('mongoose');

const DoctorSchema=mongoose.Schema({
  first_name:{
    type:String,
    required:true
  },
  last_name:{
    type:String,
    required:true
  },
  email_id:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:false
  },
  specialization:{
    type:String,
    required:false
  },
  hospitalName:{
    type:String,
    required:false
  }
});

module.exports=mongoose.model('Doctor',DoctorSchema);


