const express= require ('express');




function HomeController(req,res)
{
    res.send('On home page in homeController');
}








module.exports=HomeController;