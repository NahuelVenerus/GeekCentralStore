const S = require("sequelize");
const db = require("../db/index");
const bc = require("bcrypt");

class User extends S.Model {
  createHash(contraseña, salt) {
    return bc.hash(contraseña, salt);
  }

  validatePassword(contraseña) {
    return this.createHash(contraseña, this.salt).then(
      (newhash) => newhash === this.password
    );
  }
}

User.init(
  {
    nombre: { type: S.STRING, require: true },
    apellido: { type: S.STRING, require: true },
    direccion: { type: S.STRING, require: true },
    codigo_postal: { type: S.INTEGER, require: true },
    ciudad: { type: S.STRING, require: true },
    email: { type: S.STRING, require: true },
    contraseña: { type: S.STRING, require: true },
    // id_cupon: { type: S.INTEGER },
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
    .createHash(user.contraseña, user.salt)
    .then((result) => (user.contraseña = result))
    .catch((err) => console.log(err));
});

module.exports = User;
