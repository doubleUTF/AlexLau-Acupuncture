var mongoose= require('mongoose');
var validator= require('validator');

var UserSchema=mongoose.schema({
  email:{
    required:true,
    type:String,
    minlength:5,
    trim:true,
    unique:true,
    validate:{
      validator=validator.isEmail,
      message:'{VALUE} is not a valid e-mail'
    }
  },
  password:{
    
  }
})
