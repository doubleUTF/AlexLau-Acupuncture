const {Patient}= require('../models/patient');
var authenticate=(req,res,next)=>{
  var token=req.header('x-auth');

  Patient.findByToken(token).then((patient)=>{
    if (!patient){
      return Promise.reject();
    }

    req.patient=patient;
    req.token=token;
    next();
  }).catch((e)=>{
    return res.status(401).json({
      title:'Login failed',
      error:'Invalid login credentials'
    })
    // .redirect('signin');
  });
}

module.exports={authenticate};
