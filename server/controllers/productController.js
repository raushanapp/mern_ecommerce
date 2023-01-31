const Product = require("../models/Products");
// create product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        await product.save();
        return res.status(201).json({
            success: true,
            product:product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error:error.message
        })
    }
};

// get all products
const getAllProducts = async(req,res) => {
    
    try {
        const products = await Product.find({}).lean().exec();
        const totalProducts = await Product.find({}).countDocuments().lean().exec();
        if (!products.length) {
            return res.status(404).json({
                success: false,
                products:"No Products"
            })
        }
        return res.status(200).json({
            success: true,
            products: products,
            totalProducts:totalProducts
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error:error.message
        })
    }
};
// get single products by id
const getSingleProducts = async (req, res) => {
    const {id} = req.params
    // console.log(id)
    try {
        const product = await Product.findById({ _id: id }).lean().exec();
        // console.log(product,"prooo....")
        if (!product) {
            return res.status(404).json({
                success: false,
                product:"No Product with id"
            })
        }
        
        return res.status(200).json({
            success: true,
            product:product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error:error.message
        })
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProducts
}