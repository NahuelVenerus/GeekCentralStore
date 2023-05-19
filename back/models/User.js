const S = require("sequelize");
const bc = require("bcrypt");
const db = require("../config/db/index");

class User extends S.Model {
  createHash(password, salt) {
    return bc.hash(password, salt);
  }
  validatePassword(password) {
    return this.createHash(password, this.salt).then(
      (newhash) => newhash === this.password
    );
  }
}

User.init(
  {
    name: { type: S.STRING, require: true },
    nickname: { type: S.STRING, require: true, unique: true },
    lastname: { type: S.STRING, require: true },
    address: { type: S.STRING, require: true },
    zip_code: { type: S.INTEGER, require: true },
    city: { type: S.STRING, require: true },
    email: { type: S.STRING, require: true, validate: { isEmail: true } },
    password: { type: S.STRING, require: true },
    is_admin: { type: S.BOOLEAN, defaultValue: false },
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
    .createHash(user.password, user.salt)
    .then((result) => (user.password = result))
    .catch((err) => console.log(err));
});

module.exports = User;
