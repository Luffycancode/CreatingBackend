const mongoose = require('mongoose')
const express = require('express')
const app= express()
const {Product} = require('../models/product')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');



async function allProducts(req,res) {
    try{
    const productstoDisplay = await Product.find({CreatedBy:req.user._id})
    res.render('ProductsHomepage.ejs',{productstoDisplay})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send('Error fetching products');
    }

}

async function editproduct(req,res){

const {productId}= req.body
const product= await Product.findById(productId)
res.render('EditProduct.ejs',{productId: product})

}

async function productEdited(req,res){

try{
    const productId= req.body.productId
    const {ProductImageUrl,ProductName,ProductDescription,ProductPrice}= req.body
    await Product.findByIdAndUpdate(productId,
        {
        ProductImageUrl:ProductImageUrl,
        ProductName:ProductName,
        ProductDescription:ProductDescription,
        ProductPrice:ProductPrice
        })
}

catch(err)
{
    console.log(err)
    res.status(500).send('Error updating product');
}

res.redirect('/api/products')

}




async function deleteproduct(req,res){

const {productId}= req.body
try
{
await Product.findByIdAndDelete(productId)
console.log('Item deleted')
}
catch(err)
{
    console.log(err)
}
res.redirect('/api/products')
}




async function addproduct(req,res){
    const {ProductImageUrl,ProductName,ProductDescription,ProductPrice}=req.body
    try{
        await Product.create({
            ProductImageUrl:ProductImageUrl,
            ProductName:ProductName,
            ProductDescription:ProductDescription,
            ProductPrice:ProductPrice,
            CreatedBy: req.user._id
        })
        console.log('Product has been created')
    }
    catch(err)
    {
        console.log(err)
    }
    res.redirect('/api/products')

}




module.exports={allProducts,addproduct,deleteproduct,editproduct,productEdited}