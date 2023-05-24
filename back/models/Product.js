const Sequelize = require("sequelize");
const db = require("../config/db/index");

class Product extends Sequelize.Model {}

Product.init(
  {
    name: { type: Sequelize.STRING, allowNull: false },
    price: { type: Sequelize.FLOAT, allowNull: false },
    description: { type: Sequelize.STRING, defaultValue: "" },
    rating: { type: Sequelize.FLOAT, defaultValue: 0 },
    image: {
      type: Sequelize.STRING,
      defaultValue:
        "https://www.webstoresl.com/sellercenter/assets/images/no-product-image.png",
    },
    total_sales: { type: Sequelize.INTEGER, defaultValue: 0 },
    category: { type: Sequelize.ARRAY(Sequelize.STRING), defaultValue: [] },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
