const { ShoppingCart, User } = require("../models");

exports.getUserShoppingCart = async (id) => {
  try {
    let shoppingCart = await ShoppingCart.findOne({
      where: { userId: id },
      include: { model: User, as: "user" },
    });
    return shoppingCart;
  } catch (error) {
    throw Error(error);
  }
};

exports.createShoppingCart = async () => {
  try {
    const newCart = await ShoppingCart.create();
    return newCart;
  } catch (error) {
    throw Error(error);
  }
};

exports.getAllCarts = async () => {
  try {
    const carts = await ShoppingCart.findAll({
      include: { model: User, as: "user" },
    });
    return carts;
  } catch (error) {
    throw Error(error);
  }
};