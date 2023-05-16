const Sequelize = require("sequelize");
const db = require("../db");

class ProductCarrito extends Sequelize.Model {}

ProductCarrito.init(
  {
    cantidad: { type: Sequelize.INTEGER, defaultValue: 1 },
  },
  { sequelize: db, modelName: "producto_carrito" }
);

module.exports = ProductCarrito;
