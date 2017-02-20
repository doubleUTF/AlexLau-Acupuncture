var mongoose=require('mongoose');

var appointmentSchema=new mongoose.Schema({
  _id:Number,
  calendarId:Number,
  date:Date,
  patientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  },
  physicianId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Physician'
  },
  chiefComplaint:String,
  copay:Number,
  paid:Boolean,
  paymentType:String,
  amountPaid:Number,
  treatmentType:String,
  insuranceAmountPaid:Number,
  notes:String
})

var Appointment=mongoose.model('Appointment',appointmentSchema);

module.exports={Appointment}
