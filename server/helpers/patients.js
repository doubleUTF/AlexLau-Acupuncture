var _=require('lodash');

function getMongoPatientId(appointment){
  var formObjects=appointment.forms;
  var fieldObj=_.find(formObjects,(obj)=>{
    return obj.name='Patient Information'
  })
  var mongoField=_.find(fieldObj.values,(obj)=>{
    return obj.name='MongoDB ObjectId'
  })
  return mongoField.value
}

function getUpcomingAppointments(appointmentsArray){
  return _.filter(appointmentsArray,(o)=>{
    var date=new Date(o.date)
    return date>=new Date()
  })
}

function getPastAppointments(appointmentsArray){
  return _.filter(appointmentsArray,(o)=>{
    var date=new Date(o.date)
    return date<new Date()
  })
}

module.exports={getMongoPatientId, getUpcomingAppointments,
getPastAppointments}
