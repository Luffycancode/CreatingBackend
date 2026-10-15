const express= require('express')
const mongoose= require('mongoose')
require('dotenv').config();


async function DbConnect() {
    try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Database connected')
    }
    catch(err)
    {
        console.log(err)
    }
}


module.exports=DbConnect