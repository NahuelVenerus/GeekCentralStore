require("dotenv").config();

const Sequelize = require("sequelize");
const db_name = process.env.DB_NAME;
const db_host = process.env.HOST;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

const db = new Sequelize(db_name, db_username, db_password, {
  host: db_host,
  dialect: "postgres",
  logging: false,
});

module.exports = db;
