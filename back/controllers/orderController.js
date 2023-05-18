const asyncHandler = require("express-async-handler");
const { Order, User } = require("../models");

exports.get_all_orders = asyncHandler(async (req, res) => {
  User.findOne({ where: { nickname: req.body.nickname } }).then((user) => {
    Order.findAll({ where: { userId: user.dataValues.id } }).then((orders) =>
      res.status(200).send(orders)
    );
  });
});

exports.add_new_order = asyncHandler(async (req, res) => {
  Order.create(req.body).then((order) => res.status(201).send(order));
});
