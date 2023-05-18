const Sequelize = require("sequelize");
const db = require("../config/db/index");

class ShoppingCart extends Sequelize.Model {}

ShoppingCart.init({}, { sequelize: db, modelName: "shopping_cart" });

module.exports = ShoppingCart;
