const mongoose= require('mongoose')
const express= require('express')


const userSchema=mongoose.Schema({
UserName:{type:String,required:true},
UserEmail:{type:String,required:true,unique:true},
Userpassword:{type:String,required:true,unique:true},
},{timestamps:true})

const User=mongoose.model('user',userSchema,'Users')

module.exports={User}