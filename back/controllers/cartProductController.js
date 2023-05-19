const asyncHandler = require("express-async-handler");
const { searchUser } = require("../services/userServices");
const { getProduct } = require("../services/productServices");
const {
  getUserShoppingCart,
  createShoppingCart,
} = require("../services/shoppingCartServices");
const {
  add_new_cart_product,
  edit_cart_product,
  delete_cart_product,
} = require("../services/cartProductServices");

exports.add_new_cart_product = asyncHandler(async (req, res) => {
  try {
    const { nickname, id, quantity } = req.body;
    const newCartProduct = await add_new_cart_product(quantity);

    const foundUser = await searchUser(nickname);
    let userShoppingCart = await getUserShoppingCart(foundUser.id);
    if (!userShoppingCart) {
      userShoppingCart = await createShoppingCart();
    }
    const foundProduct = await getProduct(id);
    userShoppingCart.setUser(foundUser);
    newCartProduct.setProduct(foundProduct);
    newCartProduct.setShopping_cart(userShoppingCart);

    console.log("user", foundUser);
    console.log("product", foundProduct);
    console.log("cart", userShoppingCart);

    res.status(201).send(newCartProduct);
  } catch (error) {
    throw Error(error);
  }
});

exports.delete_cart_product = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    await delete_cart_product(id);
    res.sendStatus(202);
  } catch (error) {
    throw Error(error);
  }
});

exports.edit_cart_product = asyncHandler(async (req, res) => {
  try {
    const { id, quantity } = req.body;
    console.log("body", req.body);
    const updatedCartProduct = await edit_cart_product(id, quantity);
    console.log("updatedCart", updatedCartProduct);
    res.status(200).send(updatedCartProduct);
  } catch (error) {
    throw Error(error);
  }
});
