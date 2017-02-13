var bcrypt=require('bcryptjs');

var myHasher=(password,tempUserData,insertTempUser,callback)=>{
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
      return insertTempUser(hash,tempUserData,callback);
    })
})
}
module.exports={myHasher}
