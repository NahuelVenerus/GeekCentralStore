const asyncHandler = require("express-async-handler");
const { Carrito, User } = require("../models");

exports.asignar_carrito_a_usuario = asyncHandler(async (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      Carrito.create()
        .then((carrito) => carrito.setUser(user))
        .then((carrito) => res.status(201).send(carrito));
    })
    .catch((err) => console.log(err));
});
