const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    if (!req.headers.authorization) return res.status(403).json({ success: false, message: "Invalid Authorized" });
    if (req.headers.authorization.startsWith("Bearer ")) {
        const token = req.headers.authorization.split(" ")[1] //get the second el which is the token itself (first el is "Bearer" string)
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if (err) {
                res.status(403).json({
                    success: false,
                    message:"Wrong token or expired token."
                })
            }
            else {
                req.user = data // an object with the id and email of the user
                next();
            }
        })
    }
}
module.exports = verifyToken;