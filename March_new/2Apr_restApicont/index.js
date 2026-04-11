const express= require('express');

const app=express();

app.get('/',(req,res)=>
{
    res.send('Pixel')
})

// app.get('/api/v1/courses',(req,res)=>
// {
//     // res.send(courses)
//     let offset=req.query.offset
//     let limit=req.query.limit
//     res.send(`Offset is ${offset} and limit is ${limit} and courses are ${JSON.stringify(courses)}`)
//     console.log(req.query)
// })

// app.get('/api/v1/courses',(req,res)=>
// {
//     console.log(req.query)
// })


// app.get('/api/v1/courses',(req,res)=>
// {
//     res.send(courses)
// })



//Learning about PathParmeters



app.get('/api/v1/courses/:courseid',(req,res)=>
{
    // res.send(courses)
    // let offset=req.query.offset
    // let limit=req.query.limit
    // res.send(`Offset is ${offset} and limit is ${limit} and courses are ${JSON.stringify(courses)}`)
    let data=req.params.courseid
    res.send(courses[data])
    console.log(typeof(req.params.courseid))
})


app.listen('3000',()=>
{
console.log('On 3000')
})




const courses = [
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 3,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
]
