const mongoose=require('mongoose');

const AppointmentSchema=mongoose.Schema({
  user_id:{
    type:String,
    required:true
  },
  doctor_id:{
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


