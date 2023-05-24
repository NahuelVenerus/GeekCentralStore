const express = require("express");
const router = express.Router();
const { getAllCarts } = require("../services/shoppingCartServices");

router.get("/", getAllCarts);

module.exports = router;
