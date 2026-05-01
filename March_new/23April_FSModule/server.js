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

    // const filterdata= users.filter((i)=>i.gender==='Male')
    // console.log(filterdata)

    // res.send(filterdata)


    const filterdata=users.filter((i)=>
    {
        if(i.gender==='Male')
        {
            return true
        }
            return false
    })


    //also you can do it like this
    // const payload={
    // success: true,
    // data: filterdata,
    // size: filterdata.length
    //                 } and pass the payload obj in res.json
    res.json(
        {
            success: true,
            data:filterdata,
            length:filterdata.length
        }
    )

})


//Now this for URL params


server.get('/api/v1/users/:userid',(req,res)=>
{
    const usrid=Number(req.params.userid) 
    console.log('This is req params')
    console.log(usrid)


    const idd=users.find((i)=>{
        return i.id===usrid
    })

    console.log(typeof(idd))
    
    if(!idd)
    {
        res.status(400).send("Invalid Request")
    }
    else
    {
        res.json(idd)
    }


    //Now to send userid from users list Directly



})