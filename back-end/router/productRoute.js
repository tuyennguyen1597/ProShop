import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const productRouter = express.Router()

//@desc     Featch all products
//@route    GET api/products
//@access   Public
productRouter.get('/', asyncHandler (async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}));

//@desc     Featch single product
//@route    GET api/products/:id
//@access   Public
productRouter.get('/:id', asyncHandler (async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
    
}))

export default productRouter