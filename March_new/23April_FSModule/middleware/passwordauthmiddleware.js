// const password='Hello1234';
require('dotenv').config()
const PASSWORD= process.env.password
function passwordauthenticate(req,res,next)
{

//Password feature using 

const pass=req.headers.authorization;
// console.log(pass)

if(pass===PASSWORD)
{
    next()
}
else
{
    res.status(400).json('Wrong password');
}
}


module.exports=passwordauthenticate
