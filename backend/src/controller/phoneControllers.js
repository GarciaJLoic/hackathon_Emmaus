const { findAllPhones, postPhones } = require("../models/phoneManagers");

const getAllPhones = async (req, res) => {
  try {
    const phone = await findAllPhones();
    res.json(phone);
  } catch (error) {
    console.error(error);
  }
};

const insertPhones = async (req, res) => {
  const newPhone = req.body;
  try {
    postPhones(newPhone);
    res.json(newPhone);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllPhones,
  insertPhones,
};
