const {Patient}=require('../models/patient')
const _=require('lodash');
var checkAlerts=(req,res,next)=>{
    // Get upcoming appointments and append to request body
    var id=req.patient._id
    Patient.findOne({
      _id:id
    }).populate('appointments').then((patient)=>{
      var splitAppointments=_.filter(patient.appointments,(o)=>{
        var date=new Date(o.date)
        return date>=new Date()
      })
      req.upcomingAppointments=_.sortBy(splitAppointments,['date']);
      next();
    }).catch((err)=>{
      res.status(400).json({err:err.toString()})
    })

  // Check profile for completion, return a boolean

  var requiredKeys=['dateOfBirth','address','primaryPhone','gender'];
  var formComplete=requiredKeys.every((k)=>{
    return k in JSON.parse(JSON.stringify(req.patient))
  })
  req.formComplete=formComplete;
}

module.exports={checkAlerts}
