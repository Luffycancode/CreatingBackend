const express= require('express')
const app=express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
const users=[];



app.get('/',(req,res)=>
{
res.render('Home',{users:users})
})

app.get('/add-user',(req,res)=>
{
res.render('add-user')

})

app.post('/add-user',(req,res)=>
{
    let {name,email,image}=req.body
    const user=
    {
        name:name,
        email:email,
        image:image
    }

    users.push(user)
    res.redirect('/')
})

app.get('/delete/:id',(req,res)=>
{
const userid=req.params.id
users.splice(userid,1)
res.redirect('/')
})

app.use((req,res)=>
{
res.render('Error')
})



app.listen(3000,()=>
{
    console.log('Listening on port 3000')
})