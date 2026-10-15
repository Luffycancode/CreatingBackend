const express= require('express')
const app=express()
const Productrouter= express.Router()
const {allProducts,addproduct,deleteproduct,editproduct,productEdited}= require('../Controllers/product')
const {checkauth}= require('../Middleware/checkauth')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

Productrouter.route('/').get(checkauth,allProducts)

Productrouter.route('/addproduct').get(checkauth,(req,res)=>
{
res.render('Addproduct.ejs')
})

Productrouter.route('/addproduct').post(checkauth,addproduct)

Productrouter.route('/delete').post(checkauth,deleteproduct)

Productrouter.route('/edit').post(checkauth,editproduct)

Productrouter.route('/productEdited').post(checkauth,productEdited)





module.exports={Productrouter}