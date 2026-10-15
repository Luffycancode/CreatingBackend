const mongoose= require('mongoose')
const express= require('express')


const productSchema=mongoose.Schema({
ProductImageUrl:{type:String,required:true},
ProductName:{type:String,required:true},
ProductDescription:{type:String,required:true},
ProductPrice:{type:String,required:true},
CreatedBy:{type:mongoose.Schema.Types.ObjectId,
    ref:'Users'

}
})

const Product = mongoose.model('product', productSchema, 'myProducts');

module.exports={Product}