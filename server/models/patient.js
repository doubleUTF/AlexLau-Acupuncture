var mongoose= require('mongoose');
var validator= require('validator');
const jwt=require('jsonwebtoken');
const _=require('lodash');
// const bcrypt=require('bcryptjs');

var PatientSchema=new mongoose.Schema({
  email:{
    required:true,
    type:String,
    minlength:5,
    trim:true,
    unique:true,
    validate:{
      validator:validator.isEmail,
      message:'{VALUE} is not a valid e-mail'
    }
  },
  firstName:{
    required:true,
    type:String
  },
  lastName:{
    required:true,
    type:String
  },
  password:{
    required:true,
    type:String,
    minlength:6
  },
  phone:{
    mobile:Number,
    home:Number
  },
  gender:String,
  pregnant:Boolean,
  dob:Date,
  address:{
    street:String,
    city:String,
    state:String,
    zip:Number
  },
  insurances:[{
    groupName:String,
    id:String,
    payerId:String
  }],
  emergencyContact:{
    name:String,
    phone:Number
  },
  appointments:[{
    type:Number,
    unique:true,
    ref:'Appointment'
  }],
  signedDisclosure:Boolean,
  tokens:[{
    access:{
      type:String,
      required:true
    },
    token:{
      type:String,
      required:true
    },
    createdAt:Date
  }]
})

PatientSchema.methods.generateAuthToken=function(){
  var patient=this; // instance object
  var access='auth';
  var token=jwt.sign({_id:patient._id.toHexString(),access},process.env.JWT_SECRET);

  patient.tokens.push({access,token,createdAt:new Date()})
  return patient.save().then(()=>{
    return token;
  });
};

// I am considering placing tokens array into its own collection to
// utilize MongoDB's TTL feature which will auto remove expired tokens
// from DB.
PatientSchema.statics.findByToken=function(token){
  var Patient=this; // model object
  var decoded;

  try {
    decoded=jwt.verify(token,process.env.JWT_SECRET);
  } catch (e){
    return Promise.reject();
  }

  return Patient.findOne({
    '_id':decoded._id,
    'tokens.token':token,
    'tokens.access':'auth'
  });
}

PatientSchema.methods.removeAppointment=function(appointmentId){
  var patient=this;
  return patient.update({
    $pull:{
      appointments:appointmentId
    }
  })
}

PatientSchema.methods.removeToken=function(token){
  var patient= this;
  return patient.update({
    $pull:{
      tokens:{token}
    }
  })
};

var Patient=mongoose.model('Patient', PatientSchema)

module.exports={Patient}
