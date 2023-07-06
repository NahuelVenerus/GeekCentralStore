const asyncHandler = require("express-async-handler");
const { getAllOrders, addNewOrder } = require("../services/orderServices");
const { sendEmailToUser } = require("../services/mailSenderServices");
const { searchUser } = require("../services/userServices");
const {
  delete_cart,
  getUserShoppingCart,
} = require("../services/shoppingCartServices");

exports.get_all_orders = asyncHandler(async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.status(200).send(orders);
  } catch (error) {
    throw Error(error);
  }
});

exports.get_all_user_orders = asyncHandler(async (req, res) => {
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
    const { id, email } = await searchUser(nickname);
    const cart = await getUserShoppingCart(id);
    const newOrder = await addNewOrder({
      total: total,
      shoppingCartId: shoppingCartId,
      userId: id,
    });
    // console.log("estoy enviando mail a ", email);
    // await sendEmailToUser(email);
    cart.purchased = true;
    cart.save();
    res.status(201).send(newOrder);
  } catch (error) {
    throw Error(error);
  }
});
