const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/bel20').then(()=>
{
        console.log('Connected to blog_model')
})
.catch((error)=>
{
        console.log('Error issue in blog_model')
})



const blog_Schema= new mongoose.Schema(
    {
        blogTitle: String,
        blogUsername: String,
    }
)

const Blog= mongoose.model('Blog',blog_Schema)

module.exports=Blog