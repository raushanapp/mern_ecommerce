const { upload, uploadProductImage } = require("../controllers/uploadProductImageController");
const verifyToken = require("../middlewares/auth");
const express = require("express");
const router = express.Router();

// post image routes

router.post("/firstImg", verifyToken, upload.single("firstImg"), uploadProductImage);
router.post("/secondImg", verifyToken, upload.single("secondImg"), uploadProductImage);
module.exports = router;