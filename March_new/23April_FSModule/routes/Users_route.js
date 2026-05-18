const express=require('express');
const Userroute= express.Router();
const users = require('../Users');
const userController=require('../controller/Users_Controller')
const passwordauthenticate=require('../middleware/passwordauthmiddleware')



Userroute.get('/users',passwordauthenticate,userController.getusergender)
Userroute.get('/users/:userid',passwordauthenticate,userController.getuserid)


module.exports=Userroute;