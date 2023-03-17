const {
  findAllUsers,
  findUserById,
  signUp,
  verifyPassword,
  upDateProfile,
} = require("../models/usersManagers");

const getAllUsers = async (req, res) => {
  try {
    const users = await findAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await findUserById(id);
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};

const postUser = async (req, res) => {
  const newProfile = req.body;
  try {
    signUp(newProfile);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

const getUserWithPasswordAndPassToNext = async (req, res, next) => {
  const identification = req.body;
  try {
    const userDb = await verifyPassword(identification);
    const [firstUserDb] = userDb;
    req.userDb = firstUserDb;
    // req.userDb = userDb[0];
    next();
  } catch (error) {
    console.error(error);
  }
};

const upDateUser = async (req, res) => {
  const modifiedProfile = req.body;
  try {
    upDateProfile(modifiedProfile);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  upDateUser,
  getUserWithPasswordAndPassToNext,
};
