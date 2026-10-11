const express=require('express');
const Userroute= express.Router();
const users = require('../Users');
const userController=require('../controller/Users_Controller')
const passwordauthenticate=require('../middleware/passwordauthmiddleware');
const jwtbasedAuthMiddleware = require('../middleware/JWTBasedAuthMddileware');


// Modifying this route to get all users using JWT token
// Userroute.get('/users',passwordauthenticate,userController.getusergender)

Userroute.get('/users/:userid',passwordauthenticate,userController.getuserid)

// Using JWT
Userroute.get('/users',jwtbasedAuthMiddleware,userController.getusergender)





module.exports=Userroute;