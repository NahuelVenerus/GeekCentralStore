const express = require("express");
const {
  add_new_product,
  get_all_products,
  product_details,
} = require("../controllers/productController");
const { get_product } = require("../controllers/cartProductController");
const router = express.Router();

router.get("/", get_all_products);

router.get("/:id", product_details);

router.post("/add", add_new_product);

router.post("/:id", get_product);

module.exports = router;
