const express = require("express");
const router = express.Router();
const {
  add_new_order,
  get_all_orders,
} = require("../controllers/orderController");

router.post("/create", add_new_order);

router.get("/", get_all_orders);

module.exports = router;
