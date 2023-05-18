const asyncHandler = require("express-async-handler");
const { searchUser } = require("../services/userServices");
const { createCart } = require("../services/cartServices");

exports.set_user_cart = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const searchedUser = await searchUser(email);
  const newCart = await createCart(searchedUser);
  res.status(201).send(newCart);
});
