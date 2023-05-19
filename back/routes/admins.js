const express = require("express");
const {
  delete_product,
  edit_product,
} = require("../controllers/productController");
const router = express.Router();

router.delete("/delete-product", delete_product);

router.put("/edit-product", edit_product);

module.exports = router;
