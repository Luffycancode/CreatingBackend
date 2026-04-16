const express= require('express')

const app=express();


// Now let get the data and practice middleware

//Implemnting the middleware for security or bridge

const logger=(req,res,next)=>
{
    // res.send('From logger').   Never do this if want res to send from get req. This will be end req here only
    console.log('In middleware')
    next()
    
}

//Upper function is similar to following one easy
// function logger()
// {

// }




// app.get('/',(req,res)=>
// {
//     res.send('12345')
// })

// -> with middleware

app.get('/',logger,(req,res)=>
{
    const parm=req.query;
    console.log(parm)
    res.send('12345')
})



app.get('/courses/:courseid',logger,(req,res)=>

{

    // const data= req.params;
    const data=courses.find((item)=>{return item.id===parseInt(req.params.courseid)})
    if(!data)
    {
        return res.status(404).send('Course does not exist')
    }

    else
    {
        res.send(data)
    }
    
})



//Starting with server creation on 5000
app.listen(3000,()=>
{
    console.log('Server on 3K')
})


const courses=[

{
    course:'nodejs',
    id:1,
    rating:5,
    Price:5000
},
{
    course:'java',
    id:2,
    rating:55,
    price:2000
},
{
    course:'javaScript',
    id:3,
    rating:55444,
    price:20002
}
]