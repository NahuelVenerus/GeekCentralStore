const asyncHandler = require("express-async-handler");
const { getAllOrders, addNewOrder } = require("../services/orderServices");

exports.get_all_orders = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    const orders = await getAllOrders(id);
    res.status(200).send(orders);
  } catch (error) {
    throw Error(error);
  }
});

exports.add_new_order = asyncHandler(async (req, res) => {
  try {
    const createdOrder = req.body;
    const newOrder = await addNewOrder(createdOrder);
    console.log("new order", newOrder);
    res.status(201).send(newOrder);
  } catch (error) {
    throw Error(error);
  }
});
