const express = require("express");
const {
  delete_product,
  edit_product,
} = require("../controllers/productController");
const {
  see_all_users,
  update_user_data,
  delete_user_account,
} = require("../controllers/userController");
const router = express.Router();

router.delete("/delete-product", delete_product);

router.put("/edit-product", edit_product);

router.get("/get-users", see_all_users);

router.put("/:nickname", update_user_data);

router.delete("/remove/:nickname", delete_user_account);

module.exports = router;
