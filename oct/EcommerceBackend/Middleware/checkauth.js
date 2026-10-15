const {getuser} = require('../service/auth')


function checkauth(req,res,next)
{

const uid=req.cookies.uid
const user= getuser(uid)
if(!user)
{
   return res.redirect('/api/users/login')
}
req.user = user
next()
}

module.exports={checkauth}