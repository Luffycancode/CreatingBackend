const express= require('express')
const users= require('../Users')

function getusergender(req,res)
{
    const data =req.query;
    console.log(data)
    const searchedgender=data.gender
    // console.log(searchedgender)

    // const filterdata= users.filter((i)=>i.gender==='Male')
    // console.log(filterdata)

    // res.send(filterdata)


    const filterdata=users.filter((i)=>
    {
        if(i.gender==='Male')
        {
            return true
        }
            return false
    })
}  




function getuserid(req,res)
{
    const usrid=Number(req.params.userid) 
    console.log('This is req params')
    console.log(usrid)


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


    // Now to send userid from users list Directly



}


module.exports={
getusergender,
getuserid
}