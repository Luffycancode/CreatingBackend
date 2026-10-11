const express=require('express')
const server= express()
const mongoose=require('mongoose')
require('dotenv').config()
const PORT= process.env.PORT
const homeroute=require('./routes/Home_route')
const userroute=require('./routes/Users_route')
const authroute=require('./routes/Auth_route')
// const user=require('./Models/User_models')

server.use(express.json());


//router logic impplemtation here
// Here / the common logic seperates use case for routing
server.use('/',homeroute)
server.use('/api/v1',userroute)
server.use('/api/v1/auth',authroute)


const dbURI= "mongodb://localhost:27017/";
const dbName= "bel20";
const dbConnectString= dbURI+dbName;
mongoose.connect(dbConnectString).then(()=>{
    console.log('Connected to DB')
})
.catch((err)=>{
    console.log('Error connecting to DB',err)
})


server.listen(PORT,()=>
{
    console.log('Running on 2k')
})



// Now having target to seperate logic of routing and middleware

// project/
// │
// ├── routes/
// │   └── userRoutes.js
// │
// ├── controllers/
// │   └── userController.js
// │
// ├── Users.js
// ├── app.js

// Logic
// Client → Route → Controller → Response




