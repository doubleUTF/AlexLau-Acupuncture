var mongoose= require('mongoose');
var validator= require('validator');
const jwt=require('jsonwebtoken');
const _=require('lodash');
// const bcrypt=require('bcryptjs');

var UserSchema=new mongoose.Schema({
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

UserSchema.methods.generateAuthToken=function(){
  var user=this; // instance object
  var access='auth';
  var token=jwt.sign({_id:user._id.toHexString(),access},process.env.JWT_SECRET,{expiresIn:7200});

  user.tokens.push({access,token})
  return user.save().then(()=>{
    return token;
  });
};

UserSchema.statics.findByToken=function(token){
  var User=this; // model object
  var decoded;

  try {
    decoded=jwt.verify(token,process.env.JWT_SECRET);
  } catch (e){
    return Promise.reject();
  }

  return User.findOne({
    '_id':decoded._id,
    'tokens.token':token,
    'tokens.access':'auth'
  });
}

var User=mongoose.model('User', UserSchema)

module.exports={User}
