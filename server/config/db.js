const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', true);
const connectDB = () => {
    return mongoose.connect(process.env.DB_URL, {
        
    })
};

module.exports = connectDB;