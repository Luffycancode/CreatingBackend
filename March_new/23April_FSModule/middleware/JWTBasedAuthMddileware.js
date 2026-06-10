const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET=process.env.JWT_SECRET

const jwtbasedAuthMiddleware=(req,res,next)=>
{
    const headers= req.headers
    const authorization= headers.authorization
    const token= authorization?.split(" ")[1];

    try{
    const decode= jwt.verify(token,JWT_SECRET,(error,decode)=> 
    {
        if(error)
        {
            return res.status(401).json({
            message: "Unauthorized",
            success: false
            })
        }
        else{
            console.log(decode)
            next()
        }

    })
}catch(error)
{
            return res.status(401).json({
            message: "Unauthorized",
            success: false})
}
}



module.exports = jwtbasedAuthMiddleware