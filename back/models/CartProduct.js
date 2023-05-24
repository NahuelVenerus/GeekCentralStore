const Sequelize = require("sequelize");
const db = require("../config/db/index");

class CartProduct extends Sequelize.Model {}

CartProduct.init(
  {
    quantity: { type: Sequelize.INTEGER, defaultValue: 1 },
  },
  { sequelize: db, modelName: "cart_product" }
);

module.exports = CartProduct;
