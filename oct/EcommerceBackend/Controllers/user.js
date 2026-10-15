const mongoose = require('mongoose')
const express = require('express')
const {v4 : uuidv4} = require('uuid')
const cookieParser= require('cookie-parser')
const {User} = require('../models/user')
const {setuserSessionID}= require('../service/auth')
// const { use } = require('react')
const app =express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs')
app.use(cookieParser())




async function Allusers(req,res)
{
try{
const allusers=await User.find({})
res.json(allusers)
}
catch(err)
{
console.log(err)
}
}

async function CreateUser(req,res)
{
try{
const {UserName,UserEmail,Userpassword}=req.body
console.log(UserName,UserEmail,Userpassword)
await User.create({
    UserName:UserName,
    UserEmail:UserEmail,
    Userpassword:Userpassword
})
res.json('User has been created')
}

catch(err)
{
console.log(err)
}


}

async function Deleteuser(req,res)
{

try{
const userid=req.params.id
await User.findByIdAndDelete(userid)
res.json('User has been deleted')
}
catch(err)
{
console.log(err)
}



}


async function loginuser(req,res) {
    
const {UserEmail,Userpassword}=req.body

const userexist= await User.findOne({UserEmail,Userpassword})


if(!userexist)
{
    console.log('User does not exists')
    res.redirect('/api/users/login')
}
else{
    console.log('User exists')
    const key= uuidv4()
    setuserSessionID(key,userexist)
    res.cookie('uid',key)
    res.redirect('/api/products')
} 

}




module.exports={Allusers,CreateUser,Deleteuser,loginuser}