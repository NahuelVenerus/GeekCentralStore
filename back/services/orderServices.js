const { Order, User } = require("../models");
const nodemailer = require("nodemailer");

exports.getAllOrders = async () => {
  try {
    const orders = await Order.findAll({
      include: { model: User, as: "user" },
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
    const newOrder = await Order.create(createdOrder);
    return newOrder;
  } catch (error) {
    throw Error(error);
  }
};
