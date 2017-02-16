var express = require('express');
var router = express.Router();
var _=require('lodash');
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');

var {authenticate}=require('../middleware/authenticate');
const {User}= require('../models/user');

// Not sure if better to protect route server side or client side
// router.get('/dashboard', authenticate, (req,res,next)=>{
//   res.send(_.pick(req.user.toObject(),['_id','email']))
// })

router.post('/signin',(req,res,next)=>{
  User.findOne({email:req.body.email}, (err,user)=>{
    if (err){
      return res.status(500).json({
        title:'An error occured',
        error:err
      });
    }
    if (!user){
      return res.status(401).json({
        title:'Login failed',
        error:{message: 'Invalid login credentials'}
      });
    }
    if (!bcrypt.compareSync(req.body.password,user.password)){
      return res.status(401).json({
        title:'Login failed',
        error:{message: 'Invalid login credentials'}
      });
    }
    var token=jwt.sign({user},process.env.JWT_SECRET,{expiresIn:7200});
    res.status(200).json({
      message:'Successfully logged in',
      token,
      userId:user._id
    })
  });
})
module.exports=router;
