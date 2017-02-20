var mongoose= require('mongoose');
var validator= require('validator');
const jwt=require('jsonwebtoken');
const _=require('lodash');
// const bcrypt=require('bcryptjs');

var PhysicianSchema=new mongoose.Schema({
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
  tokens:[{
    access:{
      type:String,
      required:true
    },
    token:{
      type:String,
      required:true
    }
  }]
})

PhysicianSchema.methods.generateAuthToken=function(){
  var physician=this; // instance object
  var access='admin';
  var token=jwt.sign({_id:Physician._id.toHexString(),access},process.env.JWT_SECRET);

  physician.tokens.push({access,token})
  return physician.save().then(()=>{
    return token;
  });
};

PhysicianSchema.statics.findByToken=function(token){
  var physician=this; // model object
  var decoded;

  try {
    decoded=jwt.verify(token,process.env.JWT_SECRET);
  } catch (e){
    return Promise.reject();
  }

  return physician.findOne({
    '_id':decoded._id,
    'tokens.token':token,
    'tokens.access':'admin'
  });
}

PhysicianSchema.methods.removeToken=function(token){
  var physician= this;
  return physician.update({
    $pull:{
      tokens:{token}
    }
  })
};

var Physician=mongoose.model('Physician', PhysicianSchema)

module.exports={Physician}
