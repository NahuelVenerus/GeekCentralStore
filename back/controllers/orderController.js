const asyncHandler = require("express-async-handler");
const { getAllOrders, addNewOrder } = require("../services/orderServices");
const { sendEmailToUser } = require("../services/mailSenderServices");
const { searchUser } = require("../services/userServices");

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
    const { total, shoppingCartId, nickname } = req.body;
    const user = await searchUser(nickname);
    console.log("user", user);
    const newOrder = await addNewOrder({
      total: total,
      shoppingCartId: shoppingCartId,
      userId: user.id,
    });
    // console.log("estoy enviando mail");
    // await sendEmailToUser(user.email);
    res.status(201).send(newOrder);
  } catch (error) {
    throw Error(error);
  }
});
