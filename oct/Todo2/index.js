const express= require('express')
const mongoose= require('mongoose')
const app= express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb+srv://Cluster74999:unknownpassword@cluster0.i8f1edh.mongodb.net/Todo2?appName=Cluster0').then(()=>{console.log('Connected database')}).catch((err)=>{console.log(err)})


const listSchema=mongoose.Schema({
    item:{type:String,required:true,unique:true},
    check:{type:Boolean,default:false}
})


const Item= mongoose.model('item',listSchema);



app.get('/Completeditems',async(req,res)=>
{

const data= await Item.find({check:true})
res.render('ui',{data})
})



app.get('/toDoList',async(req,res)=>
{

const data= await Item.find({check:false})
res.render('ui',{data})
})


app.post('/todoadd',async(req,res)=>{

const listItem=req.body.item

try{
const item= await Item.create({
    item:listItem
})

console.log('To do list item added')

}catch(err)
{
console.log(err)
}
 
res.redirect('/toDoList')

})




app.post('/delete',async (req,res)=>
{
    const id=req.body.id
    const data=await Item.findByIdAndDelete(id)
    console.log('Item deleted')

    res.redirect('/toDoList')
})


app.post('/completed',async (req,res)=>
{
    const id=req.body.id
    const data= await Item.findByIdAndUpdate(id,{check:true},{new:true})
    console.log(data)
    console.log('Item completed')

    res.redirect('/toDoList')
})





app.listen(3000,(err)=>
{
    if(err){console.log(err)}
    else{console.log('Running on 3000')}
})
