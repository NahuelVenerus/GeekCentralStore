const { ShoppingCart } = require("../models");

exports.getUserShoppingCart = async (id) => {
  try {
    let shoppingCart = await ShoppingCart.findAll({ where: { userId: id } });
    return shoppingCart;
  } catch (error) {}
};

exports.createCart = async () => {
  try {
    const newCart = ShoppingCart.create();
    return newCart;
  } catch (error) {
    throw Error(error);
  }
};
