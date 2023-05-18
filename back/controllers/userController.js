const asyncHandler = require("express-async-handler");
const {
  createUser,
  generateCookie,
  searchUser,
  validateUserPassword,
} = require("../services/userServices");

exports.registrar_usuario = asyncHandler(async (req, res, next) => {
  try {
    const { nickname } = req.body;
    let user = await searchUser(nickname);
    if (user) {
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
    let user = await searchUser(nickname);

    let validatedUser = await validateUserPassword(user);
    const payload = {
      email: validatedUser.email,
      user_name: validatedUser.user_name,
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
