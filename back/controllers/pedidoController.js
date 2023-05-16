const asyncHandler = require("express-async-handler");
const { Pedido, User } = require("../models");

exports.ver_pedidos = asyncHandler(async (req, res) => {
  User.findOne({ where: { nickname: req.body.nickname } }).then((user) => {
    Pedido.findAll({ where: { userId: user.dataValues.id } }).then((pedidos) =>
      res.status(200).send(pedidos)
    );
  });
});

exports.crear_pedido = asyncHandler(async (req, res) => {
  Pedido.create(req.body).then((pedido) => res.status(201).send(pedido));
});
