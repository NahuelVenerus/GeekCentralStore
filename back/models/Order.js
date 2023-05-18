const Sequelize = require("sequelize");
const db = require("../config/db/index");

class Order extends Sequelize.Model {}

Order.init(
  {
    total: { type: Sequelize.FLOAT, allowNull: false },
  },
  { sequelize: db, modelName: "order" }
);

module.exports = Order;
