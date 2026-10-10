const express= require('express')

function logger(req,res,next)
{
    console.log('In Middleware')
    next()
}


module.exports={logger}