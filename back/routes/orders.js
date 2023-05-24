const express = require("express");
const router = express.Router();
const {
  add_new_order,
  get_all_orders,
  get_all_user_orders,
} = require("../controllers/orderController");

router.post("/create", add_new_order);

router.get("/:id", get_all_user_orders);

router.get("/", get_all_orders);

module.exports = router;
