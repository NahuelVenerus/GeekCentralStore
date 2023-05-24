const express = require("express");
const {
  add_new_cart_product,
  delete_cart_product,
  edit_cart_product,
} = require("../controllers/cartProductController");
const router = express.Router();

router.post("/add", add_new_cart_product);

router.delete("/remove", delete_cart_product);

router.put("/edit", edit_cart_product);

module.exports = router;
