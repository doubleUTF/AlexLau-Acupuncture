var _=require('lodash');

function getMongoPatientId(appointment,formName){
  var formObjects=appointment.forms;
  var fieldObj=_.find(formObjects,(obj)=>{
    return obj.name===formName
  })
  if (!fieldObj){
    return console.error(new Error('Could not find form name: ' + formName))
  }

  var mongoField=_.find(fieldObj.values,(obj)=>{
    return obj.name='MongoDB ObjectId'
  })
  return mongoField.value
}

module.exports={getMongoPatientId}
