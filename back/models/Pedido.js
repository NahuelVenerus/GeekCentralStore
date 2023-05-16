const Sequelize = require("sequelize");
const db = require("../db");

class Pedido extends Sequelize.Model {}

Pedido.init(
  {
    total: { type: Sequelize.FLOAT, allowNull: false },
  },
  { sequelize: db, modelName: "pedido" }
);

module.exports = Pedido;
