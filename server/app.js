require('../server/config/config');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _=require('lodash');
var nodemailer=require('nodemailer');

const {mongoose}=require('./db/mongoose');
var nev=require('email-verification')(mongoose);
const {nevConfig}=require('./config/nev');
const {User}= require('../models/user');
var userRoutes=require('../routes/user');
var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Uncomment to allow cross server setup
// app.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
//   next();
// });

// Node Email Verification
nev.configure(nevConfig, (err,options)=>{
  if (err) {
    console.log(err);
    return;
  }
  console.log('Node email verification configured: '+(typeof options==='object'));
});

nev.generateTempUserModel(User, (err,tempUserModel)=>{
  if (err) {
    console.log(err);
    return;
  }
  console.log('Generated temp user model: '+ (typeof tempUserModel==='function'));
});

app.post('/register',(req,res,next)=>{
  var body=_.pick(req.body,['email','firstName','lastName','password'])
  var user= new User(body);

  nev.createTempUser(user,(err,existingPersistentUser,newTempUser)=>{
    if (err){
      return res.status(404).send('Error: creating temp user failed');
    }

    if (existingPersistentUser){
      return res.json({
        msg:'This account is already registered.'
      })
    }

    if (newTempUser){
      var URL=newTempUser[nev.options.URLFieldName];
      nev.sendVerificationEmail(user.email,URL,(err,info)=>{
        if (err){
          return res.status(404).send('Error: sending verification email failed');
        }
        res.json({
          msg:'An email has been sent to you. Please check it to verify your account.',
          info
        });
      })
    } else{
      res.json({
        msg:'You have already signed up. Please check your email to verify your account.'
      })
    }
  })
});

app.get('/email-verification/:URL',(req,res)=>{
  var url=req.params.URL;

  nev.confirmTempUser(url,(err,user)=>{
    if (user){
      nev.sendConfirmationEmail(user.email,(err,info)=>{
        if (err){
          return res.status(404).send('Error: sending confirmation email failed');
        }
        user.generateAuthToken().then((token)=>{
          res.header('x-auth',token).status(200).send(
            _.pick(user.toObject(),['_id','email'])
          );
        });
      })
    } else {
      return res.status(404).send('Error: confirming temp user failed');
    }
  })
})
app.use('/user',userRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.redirect('/')
});

module.exports = app;
