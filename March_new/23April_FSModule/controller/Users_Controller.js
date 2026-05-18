const express= require('express')
const users= require('../Users')


function getusergender(req,res)
{
    const data =req.query;
    const searchedgender=data.gender
    // console.log(searchedgender)

    const filterdata=users.filter((i)=>
    {
        if(i.gender==='Male')
        {
            // return true
            res.json('Succesfull its a male')
        }
        else{
             res.json('Not male')
        }
            // return false
           
    })
}  





// Getting password in while using userid

function getuserid(req,res)
{
    const usrid=Number(req.params.userid) 

    const idd=users.find((i)=>{
        return i.id===usrid
    })

    console.log(typeof(idd))
    
    if(!idd)
    {
        res.status(400).send("Invalid Request")
    }
    else
    {
        res.json(idd)
    }

}


module.exports={
getusergender,
getuserid
}