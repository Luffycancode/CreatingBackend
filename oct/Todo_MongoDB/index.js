const express= require('express')
const mongoose= require('mongoose')
const app = express()
app.set('view engine', 'ejs');
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))
app.use(express.urlencoded({ extended: true })); 

mongoose.connect('mongodb+srv://Cluster74999:omkar@backendnode.bauceb8.mongodb.net/Todo?appName=BackendNode').then(()=>{
    console.log('Database connected')
    }).catch((err)=>{
        console.log(err)
    })


const toDoSchema = mongoose.Schema({
    title:{type:String,required:true,unique:true},
    desc:{type:String},
    check:{type:Boolean,default:false}
},{timestamps:true})


const Todo = mongoose.model('item',toDoSchema)


app.get('/toDoHome',async(req,res)=>{
    let todos= await Todo.find({check: false})
    res.render('ui',{todos})
    // return res.json(data)

})

app.post('/toDo',async(req,res)=>
{
    let {title}=req.body
    let item = await Todo.create({
        title: title
    })
    res.redirect('/toDoHome')
})

app.post('/marked',async(req,res)=>
{
    let {id}=req.body
    let updatedata= await Todo.findByIdAndUpdate(id,{check:true})
    res.redirect('/toDoHome')
})


app.post('/completed',async(req,res)=>
{
    let todos= await Todo.find({check: true})
    res.render('completed',{todos})
})

app.post('/delete',async(req,res)=>
{
    let {id}= req.body
    let deletedata= await Todo.findByIdAndDelete(id)
    res.redirect('/toDoHome')
})


app.listen(3000,(err)=>
{
if(err){console.log(err)}
else{console.log('Connected on 3000')}
})

