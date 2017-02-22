var express = require('express');
var router = express.Router();
var _=require('lodash');
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
const {mongoose}=require('../db/mongoose');
var nev=require('email-verification')(mongoose);
var AcuityScheduling=require('acuityscheduling');
var nodemailer=require('nodemailer');
var _=require('lodash');
const {authenticate}=require('../middleware/authenticate');
const {acuityAuth}=require('../middleware/acuity-auth');
const {Patient}= require('../models/patient');
const {Appointment}=require('../models/appointment');
const {nevConfig}=require('../config/nev');

// Acuity Configuration
var acuity=AcuityScheduling.basic({
  "userId":process.env.ACUITY_USER_ID,
  "apiKey":process.env.ACUITY_API_KEY
})

// Node Email Verification Configuration
nev.configure(nevConfig, (err,options)=>{
  if (err) {
    console.log(err);
    return;
  }
  console.log('Node email verification configured: '+(typeof options==='object'));
});

nev.generateTempUserModel(Patient, (err,tempUserModel)=>{
  if (err) {
    console.log(err);
    return;
  }
  console.log('Generated temp user model: '+ (typeof tempUserModel==='function'));
});

// Real app route, commenting out for testing purposes
// app.post('/register',(req,res,next)=>{
//   var body=_.pick(req.body,['email','firstName','lastName','password'])
//   var patient= new Patient(body);
//
//   nev.createTempUser(patient,(err,existingPersistentUser,newTempUser)=>{
//     if (err){
//       return res.status(404).send('Error: creating temp user failed');
//     }
//
//     if (existingPersistentUser){
//       return res.json({
//         msg:'This account is already registered.'
//       })
//     }
//
//     if (newTempUser){
//       var URL=newTempUser[nev.options.URLFieldName];
//       nev.sendVerificationEmail(patient.email,URL,(err,info)=>{
//         if (err){
//           return res.status(404).send('Error: sending verification email failed');
//         }
//         res.json({
//           msg:'An email has been sent to you. Please check it to verify your account.',
//           info
//         });
//       })
//     } else{
//       res.json({
//         msg:'You have already signed up. Please check your email to verify your account.'
//       })
//     }
//   })
// });

router.get('/email-verification/:URL',(req,res)=>{
  var url=req.params.URL;

  nev.confirmTempUser(url,(err,patient)=>{
    if (user){
      nev.sendConfirmationEmail(patient.email,(err,info)=>{
        if (err){
          return res.status(404).send('Error: sending confirmation email failed');
        }
        user.generateAuthToken().then((token)=>{
          res.header('x-auth',token).status(200).send(
            _.pick(patient.toObject(),['_id','email'])
          );
        });
      })
    } else {
      return res.status(404).send('Error: confirming temp user failed');
    }
  })
})

// Test routes
router.post('/register',(req,res,next)=>{
  var body=_.pick(req.body,['email','firstName','lastName','password'])
  var patient= new Patient(body)
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(patient.password,salt,(err,hash)=>{
      patient.password=hash
      patient.save().then(()=>{
        return patient.generateAuthToken().then((token)=>{
          res.header('x-auth',token).send({token,patientId:patient._id})
        }).catch((err)=>{
          res.status(400).send(err);
        })
      })
    })
  })
})

// This route is to get patient info
router.get('/me', authenticate, (req,res,next)=>{
  var patientInfo=_.pick(req.patient,['firstName','lastName','email','phone'])
   res.status(200).json({
    message:'Successfully logged in',
    patientInfo
  })
})

router.post('/signin',(req,res,next)=>{
  Patient.findOne({email:req.body.email}, (err,patient)=>{
    if (err){
       res.status(500).json({
        title:'An error occured',
        error:err
      });
    }
    if (!patient){
       res.status(401).json({
        title:'Login failed',
        error:{message: 'Invalid login credentials'}
      });
    }
    if (!bcrypt.compareSync(req.body.password,patient.password)){
       res.status(401).json({
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

router.get('/appointments', authenticate, (req,res,next)=>{
  id=req.patient._id;
  Patient.findOne({
    _id:id
  }).populate('appointments').then((patient)=>{
    res.status(200).json({
      appointments:patient.appointments
    })
  }).catch((e)=>{
    res.status(400).json(e)
  })
})

// Acuity webhook routes
router.post('/acuity/new',acuityAuth,(req,res,next)=>{

  var appointmentId=req.body.id;

  acuity.request(`/appointments/${appointmentId}`,(err,response,acuityAppointment)=>{
    if (err) res.status(400).json({msg:'Bad request'})

    var email=acuityAppointment.email;
    console.log(email);
    Patient.findByEmail(email).then((patient)=>{
      var appointment=new Appointment({
        _id:appointmentId,
        acuityCalendarId:acuityAppointment.calendarID,
        date:acuityAppointment.datetime,
        patientId:patient._id.toHexString(),
        copay:70,
        paid:acuityAppointment.paid
      })
      appointment.save().then(()=>{
        patient.appointments.push(appointment);
        patient.save().then(()=>{
          res.status(200).json({
          msg:'Appointment successfully saved',
          appointment
        }).catch((e)=>{
          res.status(404).json({
            msg:'Error saving appointment to user list'
          })
        })
        })
      }).catch((e)=>{
        res.status(400).json({
          msg:'Error saving appointment',
          error:e
        })
      })
    }).catch((e)=>{
      res.status(404).json({
        msg:'Patient email not in database',
      })
    })
  })
})

router.post('/acuity/remove',acuityAuth,(req,res,next)=>{
  console.log(req.body);
  res.status(200).send({
    text:'remove appointment route reached'
  })
})

router.post('/acuity/reschedule',acuityAuth,(req,res,next)=>{
  console.log(req.body);
  res.status(200).send({
    text:'Reschedule appointment reached'
  })
})
router.post('/acuity/any', acuityAuth, (req,res,next)=>{
  console.log(req.body);
  res.status(200).send({
    text:'Appointment event occured'
  })
})

// Fallback route
router.get('/',(req,res,next)=>{
  res.redirect('patients/signin')
})
module.exports=router;
