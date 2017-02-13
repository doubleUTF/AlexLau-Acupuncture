var express = require('express');
var router = express.Router();
var _=require('lodash');

var {authenticate}=require('../server/middleware/authenticate');
const {User}= require('../models/user');

router.get('/me', authenticate, (req,res,next)=>{
  res.send(_.pick(req.user.toObject(),['_id','email']))
})

module.exports=router;
