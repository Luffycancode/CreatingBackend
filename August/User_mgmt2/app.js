const e = require('express');
const express= require('express')
const app= express()
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
let users=[]


app.get('/',(req,res)=>
{
res.render('home',{users})
})

app.post('/newuser',(req,res)=>
{
let {name,email}=req.body
users.push({
    name:name,
    email:email
})
// console.log(users[0])

res.redirect('/')

})


app.post('/delete',(req,res)=>
{
    let userid=req.body.userid
    users.splice(userid,1)
    res.redirect('/')

})

app.post('/edituser',(req,res)=>
{
    let userid=req.body.userid
    const userToEdit = users[userid]; 
    // res.render('edituser',{userid,userToEdit})
    res.render('edituser', { userid: userid, user: userToEdit });
})

app.post('/updateuser', (req, res) => {
    const { userid, name, email } = req.body;
    
    // Update the specific item in the array
    users[userid] = { name, email };
    
    // Redirect back to home to see changes
    res.redirect('/');
});

app.get('/newuser',(req,res)=>
{
res.render('newuser')

})



app.listen(3000,(err)=>
{
if(err){console.log(err)}
else{console.log('Running on 3000')}
})