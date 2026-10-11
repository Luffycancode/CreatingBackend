const express= require('express')
const app= express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));



app.get('/',(req,res)=>
{
res.render('home')
})

app.post('/register',(req,res)=>
{   
    let name= req.body.name
    res.render('welcome',{name:name})
})

app.listen(3000,(err)=>
{
console.log('Running on 3000')
})


