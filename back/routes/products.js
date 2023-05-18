const express = require("express");
const {
  add_new_product,
  get_all_products,
  product_details,
} = require("../controllers/productController");
const router = express.Router();

router.get("/", get_all_products);

router.get("/:id", product_details);

router.post("/add", add_new_product);

module.exports = router;
