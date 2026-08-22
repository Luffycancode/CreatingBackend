const express= require('express')
const app= express()
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
const tasks=[];


app.get('/',(req,res)=>
{
    res.render('home',{tasks:tasks})
})


app.post('/Newitem',(req,res)=>
{
    let task= {title: req.body.item};
    tasks.push(task)
    res.redirect('/')
    
})
app.listen(2000,(req,res)=>
{
console.log('Listening on port 2000')
})