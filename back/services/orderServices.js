const { Order, User, ShoppingCart } = require("../models");
const nodemailer = require("nodemailer");

exports.getAllOrders = async () => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: User, as: "user" },
        { model: ShoppingCart, as: "shopping_cart" },
      ],
    });
    return orders;
  } catch (error) {
    throw Error(error);
  }
};

exports.getAllUserOrders = async (id) => {
  try {
    const orders = await Order.findAll({
      where: { userId: id },
      include: { model: User, as: "user" },
    });
    return orders;
  } catch (error) {
    throw Error(error);
  }
};

exports.addNewOrder = async (createdOrder) => {
  try {
    const { total, shopping_cartId, userId } = createdOrder;
    const newOrder = await Order.create({
      total: total,
      shopping_cartId: shopping_cartId,
      userId: userId,
    });
    return newOrder;
  } catch (error) {
    throw Error(error);
  }
};
