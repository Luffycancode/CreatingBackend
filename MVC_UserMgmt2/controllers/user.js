const express= require('express')
const mongoose= require('mongoose')
const app= express()
const {User}= require('../models/user');
// const { useId } = require('react');
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 



async function getusers(req,res)
{
    try{
        const data= await User.find({})
        res.json(data)
    }
    catch(err)
    {
        res.json(err)
    }
}

async function createuser(req,res)
{
    try{

        const { Name,Age,Email }=req.body
        await User.create
        ({
            Name: Name,
            Age: Age,
            Email: Email
        })
        res.json('User has been created')
    }
    catch(err)
    {
        res.json(err)
    }

}


async function getIUserByID(req,res)
{
    try{

        const userid=req.params.userid
        const user= await User.findById(userid)
        res.json(user)
    }
    catch(err)
    {
        res.json(err)
    }    
}

async function deleteUser(req,res)
{
    try{

        const userid=req.params.userid
        await User.findByIdAndDelete(userid)
        res.json('User has been deleted')
    }
    catch(err)
    {
        res.json(err)
    }    
}


async function updateUser(req,res)
{
    try{

        const userid=req.params.userid
        const user= await User.findById(userid)
        if(!user){res.json('User does not exist')}
        else{
        const {Name,Age,Email}=req.body
        const user= await User.findByIdAndUpdate(userid,{
            Name:Name,
            Age:Age,
            Email:Email
        })
        res.json('User has been Updated')
        }
    }
    catch(err)
    {
        res.json(err)
    }    
}




module.exports={getusers,createuser,getIUserByID,deleteUser,updateUser}