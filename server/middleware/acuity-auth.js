var crypto=require('crypto');
var qs=require('qs');

var acuityAuth=(req,res,next)=>{
  var hasher=crypto.createHmac('sha256',process.env.ACUITY_API_KEY);
  hasher.update(qs.stringify(req.body));
  var hash=hasher.digest('base64');

  if (hash!==req.header('X-Acuity-Signature')){
    res.status(401).json({
      msg:'Forged hash detected'
    })
  }
  next();
}

module.exports={acuityAuth}
