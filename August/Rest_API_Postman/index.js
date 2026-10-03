const express =require('express')
const app = express()
const fs = require('fs')
const users= require('./MOCK_DATA.json');
// const { use } = require('react');
// const { json } = require('stream/consumers');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());







app.get('/api/users',(req,res)=>
{
    res.send(users)
})


app.get('/users',(req,res)=>
{
    res.render('ui',{users})
})


// app.get('/users/:id',(req,res)=>
// {
//     const userid= Number(req.params.id)
//     userfind= users.find(user=>user.id==userid)
//     return res.json({
//         //i should use userfind here but keeping for worst case
//         UserName: users[userid].first_name,
//         UserlastName: users[userid].last_name,
//         gender: users[userid].gender
//     })
// })



app.post('/users',(req,res)=>
{
let user= req.body
users.push(user)
fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>
{
    if(err){console.log(err)}
})
// console.log("USER:", user)
// console.log("USERS:", users)

return res.json('User added')
})



// app.patch('/users/:id',(req,res)=>
// {
// let user=req.params
// let verify=users.find(i=>i.id===Number(user.id))

// if(!verify)
// {
// return res.json('User not found')
// }
// // else
// // {   

//     let data={...verify,...req.body}
//     let location= users.findIndex(i=>i.id===Number(user.id))
//     users[location]=data
//     fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>
//     {
//         if(err){console.log(err)}
//     })
    
  
// return res.json('User added')
// })



// Try in morning
// app.delete('/users/:id',(req,res)=>
// {

// })

// app.delete('/users/:id',(req,res)=>
// {
// let userid=req.params.id;
// let verify=users.find(i=>i.id === Number(userid))
// if(!verify)
// {
// return res.json('User not found')
// }

// const finaluseridTodelete= users.findIndex(i=>i.id===verify.id)

// users.splice(finaluseridTodelete,1)

// fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>
// {
//     if(err){console.log(err)}
// })

// return res.json('User deleted')
// })


app.route('/users/:id')
.get((req,res)=>
{
    const userid= Number(req.params.id)
    userfind= users.find(user=>user.id==userid)
    return res.json({
        //i should use userfind here but keeping for worst case
        UserName: users[userid].first_name,
        UserlastName: users[userid].last_name,
        gender: users[userid].gender
    })
})
.patch((req,res)=>
{
let user=req.params
let verify=users.find(i=>i.id===Number(user.id))
if(!verify)
{
return res.json('User not found')
}
    let data={...verify,...req.body}
    let location= users.findIndex(i=>i.id===Number(user.id))
    users[location]=data
    fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>
    {
        if(err){console.log(err)}
    })
    
  
return res.json('User added')
})
.delete((req,res)=>
{
let userid=req.params.id;
let verify=users.find(i=>i.id === Number(userid))
if(!verify)
{
return res.json('User not found')
}

const finaluseridTodelete= users.findIndex(i=>i.id===verify.id)

users.splice(finaluseridTodelete,1)

fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>
{
    if(err){console.log(err)}
})

return res.json('User deleted')
})






app.listen(3000, (err)=>
{
if(err){console.log(err)}
else{console.log('Server running on 3000')}
}) 