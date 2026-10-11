const express= require('express')
const mongoose= require('mongoose')


const userSchema=mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String}
})

const User= mongoose.model('user',userSchema)

module.exports={User}