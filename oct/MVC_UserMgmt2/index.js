const express= require('express')
const mongoose= require('mongoose')
const app= express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
require('dotenv').config(); 
const {Dbconnect}=require('./config/db')
const {userroute}= require('./routes/user')
const logger= require('./middleware/logger')


Dbconnect()


// app.use(logger)

app.use('/api/users',logger,userroute)



app.listen(process.env.PORT,(err)=>
{
console.log("Running on 3000")
})


