const http= require('http')
const fs= require('fs')
const express= require('express')
const app= express()
// let ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
// const server=http.createServer((req,res)=>
// {
//     res.end('In server')

// })

// server.listen(3000,()=>
// {
//     console.log('hahah')

// })

app.get('/',(req,res)=>
{
res.send('<h1>On local home page</h1>')
})

app.post('/register',(req,res)=>
{
    const name= req.body.Username
    res.render('RegisterDone',{name})
})

app.get('/home',(req,res)=>
{
    res.render('index')
})

app.get('/about',(req,res)=>
{
    res.render('about')
})

app.use((req,res)=>
{
res.render('404')
})

app.listen(3000,(req,res)=>
{
console.log('Running on port 5000')
})
