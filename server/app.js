require('../server/config/config');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var patientsRoutes=require('./routes/patients');
var app = express();

/**
 * Require Browsersync
 * Development purposes only. Comment out during production.
 */
// var browserSync = require('browser-sync').create();

/**
 * Run Browsersync with server config
 */
// browserSync.init({
//     proxy:"localhost:3000",
//     files: [path.join(__dirname,'..','public')
//     ],
// });

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('view engine','hbs');

// Uncomment to allow cross server setup
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// Routes
// app.use('/patients',patientsRoutes);

// Catch all routes to defer to Angular app

app.use((req, res, next)=> {
  return res.sendFile(path.join(__dirname,'../public','index.html'));
});

module.exports = app;
