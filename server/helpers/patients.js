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

module.exports={getMongoPatientId}
