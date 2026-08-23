const express= require('express')
const app= express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); 





app.get('/',(req,res)=>
{
    res.send('This is homepage')
})

app.get('/form',(req,res)=>
{
    res.render('form')
})

app.post('/submit',(req,res)=>
{
    // const data= req.body
    // const { name:data.name, email:Email, age:Age, favcol:FavoriteColor}
    // console.log(req.body)
    const data={
        Name: req.body.FullName,
        Email: req.body.Email,
        Age: req.body.Age,
        FavColour:req.body.FavoriteColor
    }
    res.render('userdetails',{data:data})
})


app.listen('4000',()=>
{
    console.log('Server running on 4000')
})