const express= require('express')
const users= require('../Users')


function getusergender(req,res)
{
    const searchedgender=req.query.gender


        if(searchedgender)
    {
        if(searchedgender.toLowerCase() === 'male')
        {
            return res.json('Yes, it is male');
        }
        else
         {
            return res.json('Yes, it is female');
        }
    }

    res.json(users);

    // If there is data for gender then proceed with gender identify else show all users
    // using if for same

    // if(searchedgender)
    // {
    //     const filterdata=users.filter((i)=>
    // {
    //     // if(i.gender===searchedgender)
    //     // {
    //     //     // return true
    //     //     return searchedgender
    //     // }
    //     // else{
    //     //      res.json('Not male')
    //     // }
    //         // return false

    //         return i.gender===searchedgender
           
    // })
    // }
    // else
    //     {
    //         res.json(users)
    //     }

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