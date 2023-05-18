const { Carrito } = require("../models");
const { searchUser } = require("./userServices");

exports.getUserShoppingCart = async (id) => {
  try {
    let shoppingCart = await Carrito.findAll({ where: { userId: id } });
    return shoppingCart;
  } catch (error) {}
};

exports.createCart = async () => {
  try {
    const newCart = Carrito.create();
    return newCart;
  } catch (error) {
    throw Error(error);
  }
};
