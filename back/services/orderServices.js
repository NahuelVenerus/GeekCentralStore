const asyncHandler = require("express-async-handler");
const { Order } = require("../models");

exports.getAllOrders = asyncHandler(async (id) => {
  try {
    const orders = await Order.findAll({
      where: { userId: id },
    });
    return orders;
  } catch (error) {
    throw Error(error);
  }
});

exports.addNewOrder = asyncHandler(async (createdOrder) => {
  try {
    const newOrder = await Order.create(createdOrder);
    return newOrder;
  } catch (error) {
    throw Error(error);
  }
});
