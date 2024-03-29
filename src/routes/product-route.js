
const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");

router.get("/landing", productController.getProductsLanding);
router.get("/", productController.getProducts);
router.get("/:productId", productController.getProductById);

module.exports = router;