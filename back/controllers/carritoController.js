const asyncHandler = require("express-async-handler");
const { searchUser } = require("../services/userServices");
const { createCart } = require("../services/carritoServices");

exports.asignar_carrito_a_usuario = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const searchedUser = await searchUser(email);
  const newCart = await createCart(searchedUser);
  res.status(201).send(newCart);
});
