const { Carrito } = require("../models");

exports.getUserShoppingCart = async (id) => {
  try {
    let shoppingCart = await Carrito.findAll({ where: { userId: id } });
    return shoppingCart;
  } catch (error) {}
};
