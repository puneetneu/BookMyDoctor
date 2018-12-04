const mongoose=require('mongoose');

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
    type:String,
    required:true
  }
});

module.exports=mongoose.model('Appointment',AppointmentSchema);


