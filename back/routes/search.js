const express = require("express");
const router = express.Router();
const { get_product_by_name } = require("../controllers/productController");

router.get("/:name", get_product_by_name);

module.exports = router;
