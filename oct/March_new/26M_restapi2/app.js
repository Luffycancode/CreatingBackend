const express = require('express')
const fs= require('fs')



const app=express();

console.log(typeof express)
console.log(typeof fs)
console.log(typeof app)



app.listen(3000,()=>
{
    console.log('Running on 3000')
})
// ServerUpdates
app.get('/',(req,res)=>
{
    res.send('hello');
})
