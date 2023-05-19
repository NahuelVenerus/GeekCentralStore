const asyncHandler = require("express-async-handler");
const { searchUser } = require("../services/userServices");
const { getProduct } = require("../services/productServices");
const { createCart } = require("../services/cartServices");
const {
  add_new_cart_product,
  edit_cart_product,
  delete_cart_product,
} = require("../services/cartProductServices");

exports.add_new_cart_product = asyncHandler(async (req, res) => {
  const { nickname, id, quantity } = req.body;
  const newCartProduct = await add_new_cart_product(quantity);

  const foundUser = await searchUser(nickname);
  const foundProduct = await getProduct(id);
  const newCart = await createCart();

  newCart.setUser(foundUser);
  newCartProduct.setProduct(foundProduct);
  newCartProduct.setShopping_cart(newCart);

  res.status(201).send(newCartProduct);
});

exports.delete_cart_product = asyncHandler(async (req, res) => {
  const { id } = req.body;
  await delete_cart_product(id);
  res.sendStatus(202);
});

exports.edit_cart_product = asyncHandler(async (req, res) => {
  const { id, quantity } = req.body;
  const updatedCartProduct = await edit_cart_product(id, quantity);
  res.status(200).send(updatedCartProduct);
});
