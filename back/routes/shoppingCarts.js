const express = require("express");
const router = express.Router();
const { set_user_cart } = require("../controllers/shoppingCartController");

router.post("/", set_user_cart);

module.exports = router;
