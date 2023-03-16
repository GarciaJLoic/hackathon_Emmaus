const {
  findPhoneCategory,
  updatePhoneCategory,
} = require("../models/phoneCategoryManagers");

const getPhoneCategory = async (req, res) => {
  try {
    const [phoneCategory] = await findPhoneCategory();
    res.json(phoneCategory);
  } catch (error) {
    console.error(error);
  }
};

const modifiedPhoneCategory = async (req, res) => {
  const modification = req.body;
  const modifparam = req.params.id;
  try {
    updatePhoneCategory(modification, modifparam);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getPhoneCategory,
  modifiedPhoneCategory,
};
