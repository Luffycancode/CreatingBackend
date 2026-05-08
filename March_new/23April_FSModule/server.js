const express=require('express')
// const users = require('./Users'); 
const server= express()
// const user_route=require('./routes/user_route')
const HomeController=require('./controller/Home_Controller')
const userController=require('./controller/users_Controller')




//seperating logic here

// server.use('/',user_route)



// Eg of home page routing when used and sent to contoller to control common function

server.get('/home',HomeController)
server.get('/',HomeController)
server.get('/api/v1/users',userController.getusergender)
server.get('/api/v1/users/:userid',userController.getuserid)


// server.get('/api/v1/users',)

server.listen(2000,()=>
{
    console.log('Running on 2k')
})

// server.get('/',(req,res)=>
// {
//     res.send('hi')
// })



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






// Implement controller for data flow



