const { generateToken } = require("../config/token");
const Users = require("../models/User");

exports.searchUser = async (nickname) => {
  try {
    let user = await Users.findOne({ where: { nickname: nickname } });
    return user;
  } catch (error) {
    throw Error(error);
  }
};

exports.createUser = async (userData) => {
  try {
    let newUser = await Users.create(userData);
    return newUser;
  } catch (error) {
    throw Error(error);
  }
};

exports.validateUserPassword = async (user) => {
  try {
    let validatedUser = user.validatePassword(user.contrasenia);
    if (validatedUser) {
      return user;
    }
  } catch (error) {
    throw Error(error);
  }
};

exports.generateCookie = async (payload) => {
  try {
    let cookie = generateToken(payload);
    return cookie;
  } catch (error) {
    throw Error(error);
  }
};