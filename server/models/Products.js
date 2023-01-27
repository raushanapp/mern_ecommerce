const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true,unique: true },
    description: { type: String, required: true,minlength:6},
    firstImg: {
        type: String,
        required: true,
       
    },
    secondImg: {
        type: String,
        required: true,
    },
       
    price: { type: Number, required: true },
    starRating: { type: Number,  default: 3 },
    
},{timestamps:true,versionKey:false});

module.exports = mongoose.model("Product", ProductSchema);