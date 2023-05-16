const asyncHandler = require("express-async-handler");
const Users = require("../models/User");
const { generateToken } = require("../config/token");
const { Carrito } = require("../models");

exports.registrar_usuario = asyncHandler(async (req, res, next) => {
  Users.findOne({ where: { nickname: req.body.nickname } }).then((user) => {
    if (user) {
      alert("el usuario ya existe");
      res.sendStatus(400);
    } else {
      Users.create(req.body).then((user) => res.status(201).send(user));
    }
  });
});

exports.logear_usuario = asyncHandler(async (req, res, next) => {
  const { nickname, contrasenia } = req.body;
  Users.findOne({ where: { nickname } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(contrasenia).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        nombre: user.nombre,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

exports.deslogear_usuario = asyncHandler(async (req, res, next) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

exports.mostrar_carrito_usuario = asyncHandler(async (req, res, next) => {
  Carrito.findAll({ where: { userId: req.params.id } })
    .then((carrito) => res.status(200).send(carrito))
    .catch((err) => console.log(err));
});

exports.actualizar_datos_usuario = asyncHandler(async (req, res, next) => {
  Users.update(req.body, {
    where: {
      nickname: req.params.nickname,
    },
    returning: true,
  })
    .then(([affectedRows, updated_user]) => {
      res.status(200).send(updated_user[0]);
    })
    .catch(next);
});
