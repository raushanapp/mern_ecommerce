const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        minlenght: 6
    }
},{timestamps:true,versionKey:false});

module.exports = mongoose.model("User", UserSchema);
