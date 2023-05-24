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
    let validatedUser = user.validatePassword(user.password);
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

exports.updateUserData = async (userChanges, nickname) => {
  try {
    let updatedUser = await Users.update(userChanges, {
      where: {
        nickname: nickname,
      },
      returning: true,
    });
    return updatedUser[1][0];
  } catch (error) {
    throw Error(error);
  }
};

exports.getAllUsers = async () => {
  try {
    let registeredUsers = await Users.findAll();
    return registeredUsers;
  } catch (error) {
    throw Error(error);
  }
};

exports.deleteUserAccount = async (nickname) => {
  try {
    await Users.destroy({
      where: { nickname: nickname },
    });
  } catch (error) {
    throw Error(error);
  }
};
