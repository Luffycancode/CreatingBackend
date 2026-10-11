const express=require('express');
const router= express.Router();
const Authroute=require('../controller/Auth_controller');
// const { route } = require('./Users_route');


router.post('/register',Authroute.registerUser)
router.post('/login',Authroute.loginUser)






// Userroute.get('/users',passwordauthenticate,userController.getusergender)
// Userroute.get('/users/:userid',passwordauthenticate,userController.getuserid)


module.exports=router;