const express=require('express')
const users = require('./Users'); 
const server= express()


server.listen(2000,()=>
{
    console.log('Running on 2k')
})



server.get('/',(req,res)=>
{
    res.json('On home page')
})

server.get('/gym',(req,res)=>
{
res.setHeader("Newheader","My headervalue")
res.send("On gym homepage")
})


server.get('/api/v1/users',(req,res)=>
{
    const data =req.query;
    console.log(data)
    const searchedgender=data.gender
    // console.log(searchedgender)

    const filterdata= users.filter((i)=>i.gender==='Male')
    console.log(filterdata)

    res.send(filterdata)

})