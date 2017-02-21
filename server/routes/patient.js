var express = require('express');
var router = express.Router();
var _=require('lodash');
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
var crypto=require('crypto');
var qs=require('qs');

var {authenticate}=require('../middleware/authenticate');
const {Patient}= require('../models/patient');

// This route is to get patient info
router.get('/me', authenticate, (req,res,next)=>{
  var patientInfo=_.pick(req.patient,['firstName','lastName','email','phone'])
  return res.status(200).json({
    message:'Successfully logged in',
    patientInfo
  })
})

router.post('/signin',(req,res,next)=>{
  Patient.findOne({email:req.body.email}, (err,patient)=>{
    if (err){
      return res.status(500).json({
        title:'An error occured',
        error:err
      });
    }
    if (!patient){
      return res.status(401).json({
        title:'Login failed',
        error:{message: 'Invalid login credentials'}
      });
    }
    if (!bcrypt.compareSync(req.body.password,patient.password)){
      return res.status(401).json({
        title:'Login failed',
        error:{message: 'Invalid login credentials'}
      });
    }

    patient.generateAuthToken().then((token)=>{
      res.header('x-auth',token).status(200).json({
        message:'Successfully logged in',
        token,
        patientId:patient._id
      })
    });
  });
})

router.delete('/token', authenticate, (req,res,next)=>{
  req.patient.removeToken(req.token).then(()=>{
    res.status(200).json({
      message:'Logged out'
    })
  },()=>{
    res.status(400).json({
      message:'Error logging out'
    })
  })
})

// Acuity webhook routes
router.post('/newAppointment',(req,res,next)=>{

  var hasher=crypto.createHmac('sha256',process.env.ACUITY_API_KEY);
  hasher.update(qs.stringify(req.body));
  var hash=hasher.digest('base64');

  if (hash!==req.header('X-Acuity-Signature')){
    console.error('This message was forged!')
    res.status(401).json({
      msg:'Forged hash detected'
    })
  }
  res.end('Good to go')
})

router.post('/removeAppointment',(req,res,next)=>{
  console.log(req.body);
  return res.status(200).send({
    text:'remove appointment route reached'
  })
})

router.get('/',(req,res,next)=>{
  res.redirect('patient/signin')
})
module.exports=router;
