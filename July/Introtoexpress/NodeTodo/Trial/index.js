// // creating server no express

// const http =require('http')

// const server= http.createServer((req,res)=>
// {
// console.log('Server has been created')
// res.write('On home page')
// res.end()
// })

// server.listen(2000,()=>
// {
//     console.log('Running on 2000')
// })



// Using express

const express= require('express')
const app=express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
const list=[]


app.listen('2000',(req,res)=>
{
console.log('Listening on 2k')
})



app.get('/',(req,res)=>
{
    res.render('Home',{list:list})
})



app.post('/register',(req,res)=>
{
    const item= req.body.name;
    list.push(item)
    res.redirect('/')
})

