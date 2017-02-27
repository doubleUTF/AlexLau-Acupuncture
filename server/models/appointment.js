var mongoose=require('mongoose');

var appointmentSchema=new mongoose.Schema({
  _id:Number,
  acuityCalendarId:Number,
  date:Date,
  patientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  },
  physicianId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Physician'
  },
  completed:Boolean,
  chiefComplaint:String,
  copay:Number,
  paid:String,
  paymentType:String,
  amountPaid:Number,
  appointmentTypeId:Number,
  insuranceAmountPaid:Number,
  notes:String,
  workInjury:Boolean,
  autoInjury:Boolean,
})

var Appointment=mongoose.model('Appointment',appointmentSchema);

module.exports={Appointment}
