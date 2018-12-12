const mongoose=require('mongoose');

// appointment schema
const AppointmentSchema=mongoose.Schema({
  customerID:{
    type:String,
    required:true
  },
  doctorID:{
    type:String,
    required:true
  },
  appointment_date:{
    type:String,
    required:true
  },
  appointment_time:{
    type:Number,
    required:true
  },
  appointment_value:{
<<<<<<< HEAD
    type:String,
    required:true
  },
  doctor_name:{
    type:String,
    required:true
=======
    type:String,
    required:true
  }
  ,customer_name:{
    type:String,
    required:true
  },
  doctor_name:{
    type:String,
    required:true
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
  },
  prescription:String
});

module.exports=mongoose.model('Appointment',AppointmentSchema);


