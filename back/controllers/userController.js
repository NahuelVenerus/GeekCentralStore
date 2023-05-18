const asyncHandler = require("express-async-handler");
const { Carrito } = require("../models");
const {
  searchUser,
  validateUserPassword,
  generateCookie,
  createUser,
  updateUserData,
} = require("../services/userServices");

exports.registrar_usuario = asyncHandler(async (req, res, next) => {
  try {
    const { nickname } = req.body;

    let searchedUser = await searchUser(nickname);

    if (searchedUser) {
      res.status(400).send("user already exist");
    } else {
      let user_data = req.body;
      let newUser = await createUser(user_data);
      res.status(200).send(newUser);
    }
  } catch (error) {
    next(error);
  }
});

exports.logear_usuario = asyncHandler(async (req, res, next) => {
  try {
    let { nickname } = req.body;
    let searchedUser = await searchUser(nickname);

    let validatedUser = await validateUserPassword(searchedUser);
    const payload = {
      email: validatedUser.email,
      nickname: validatedUser.nickname,
    };

    let userCookie = await generateCookie(payload);

    res.cookie("token", userCookie);

    res.status(200).send(payload);
  } catch (error) {
    next(error);
  }
});

exports.deslogear_usuario = asyncHandler(async (req, res, next) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

exports.actualizar_datos_usuario = asyncHandler(async (req, res, next) => {
  try {
    const { nickname } = req.params;
    let userChanges = req.body;
    let updatedUser = await updateUserData(userChanges, nickname);

    res.status(200).send(updatedUser);
  } catch (error) {
    throw Error(error);
  }
});

exports.mostrar_carrito_usuario = asyncHandler(async (req, res, next) => {
  Carrito.findAll({ where: { userId: req.params.id } })
    .then((carrito) => res.status(200).send(carrito))
    .catch((err) => console.log(err));
});
