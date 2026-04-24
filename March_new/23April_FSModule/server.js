const express=require('express')

const server= express()

server.listen(2000,()=>
{
    console.log('Running on 2k')
})



server.get('/',(req,res)=>
{
    res.send('On home page')
})