const express= require ('express');




function HomeController(req,res)
{
    res.send('On home page in homeController. Here the Response is for  /,/home,/about  ');
}








module.exports=HomeController;