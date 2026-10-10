const { time } = require('console')
const express= require('express')
const fs= require('fs')



async function logger(req,res,next)
{
    try{
    const {method,url}=req
    const Time= new Date().toISOString()
    let action;

    if (method === 'GET') {action = 'Viewed all users'}
    else if (method === 'POST') {action = 'Created new user'}
    else if (method === 'PATCH' || method === 'PUT') {action = 'Updated user'}
    else if (method === 'DELETE') {action = 'Deleted user'} 
    else {action = 'Other request'}


    const data= ` Method: ${method} \n Requested_Url: ${url} \n Time: ${Time} \n Action: ${action}\n\n`
    
    fs.appendFile('./log.txt',data,(err)=>{
        if(err){console.log(err)}
    })
    next();
    }
    catch(err)
    {
        console.log(err)
    }
}


module.exports=logger