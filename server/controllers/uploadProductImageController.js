const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename);
    }
})

const upload = multer({
    storage: storage
});

const uploadProductImage = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "image upload successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
};

module.exports = {
    uploadProductImage,
    upload
}