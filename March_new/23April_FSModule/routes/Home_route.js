const express= require('express')
const HomeController = require('../controller/Home_Controller')
const Homeroute= express.Router()



Homeroute.get('/home',HomeController)
Homeroute.get('/',HomeController)
Homeroute.get('/about',HomeController)



module.exports=Homeroute