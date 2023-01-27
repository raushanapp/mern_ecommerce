const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const createAuthUser = async (req, res) => {
    try {
        const isExistEamil = await User.findOne({ emai: req.body.email });
        if (!isExistEamil) return res.status(500).json({ success: false, user: "User has been already registered" });
        if (req.body.username === "" || req.body.email === "" || req.body.password ==="") {
            return res.status(500).json({
                success: false,
                user: "All field must be populated"
            })
        };

        const hashPassword = await bcrypt.hash(req.body.password, 10);

        const user = await User.create({ ...req.body, password: hashPassword });
        await user.save();

        const { password, ...others } = user._doc;
        // consoling here
        // console.log(password, "password", others, "Others");

        const token = createToken(others);
        return res.status(201).json({
            success: true,
            user: others,
            token:token
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:error.message
        })
    }
};

const loginAuthUser = async (req, res) => {
    const { email, password:userPass } = req.body;
    try {
        if (email === "" || userPass === "") {
            return res.status(500).json({
                success: false,
                user: "All field must be populated"
            });
        }
        const user = await User.findOne({ email });
        if (!user) return res.status(500).json({ success: false, user: "Invalid credentails" });
        const comparePass = await bcrypt.compare(userPass, user.password);
        if (!comparePass) return res.status(500).json({ success: false, user: "Invalid credentails" });
        
        const { password, ...others } = user._doc;
        const token = createToken(user);
        // console.log("login token", token);
        res.status(200).json({
            success: true,
            others:others,
            token: token
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:error.message
        })
    }
}

function createToken(user) {
    const payload = {
        id: user._id.toString(),
        email: user.email
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:"1h"});
    return token;
};

module.exports = {
    createAuthUser,
    loginAuthUser
}