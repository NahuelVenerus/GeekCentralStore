const S = require("sequelize");
const bc = require("bcrypt");
const db = require("../config/db/index");

class User extends S.Model {
  createHash(contrasenia, salt) {
    return bc.hash(contrasenia, salt);
  }
  validatePassword(contrasenia) {
    return this.createHash(contrasenia, this.salt).then(
      (newhash) => newhash === this.contrasenia
    );
  }
}

User.init(
  {
    nombre: { type: S.STRING, require: true },
    nickname: { type: S.STRING, require: true },
    apellido: { type: S.STRING, require: true },
    direccion: { type: S.STRING, require: true },
    codigo_postal: { type: S.INTEGER, require: true },
    ciudad: { type: S.STRING, require: true },
    email: { type: S.STRING, require: true },
    contrasenia: { type: S.STRING, require: true },
    salt: { type: S.STRING },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.addHook("beforeCreate", (user) => {
  const salt = bc.genSaltSync();
  user.salt = salt;
  return user
    .createHash(user.contrasenia, user.salt)
    .then((result) => (user.contrasenia = result))
    .catch((err) => console.log(err));
});

module.exports = User;
