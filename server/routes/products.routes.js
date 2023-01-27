const { createProduct, getAllProducts, getSingleProducts } = require("../controllers/productController");
const verifyToken = require("../middlewares/auth");
const express = require("express");
const router = express.Router();
// create product post
router.post("/create", verifyToken, createProduct);
// get all products
router.get("/", getAllProducts);
// get single product by id

router.get("/:id", getSingleProducts);

module.exports = router;