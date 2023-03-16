const {
  findAllConfigMini,
  updateConfigMini,
} = require("../models/configMiniManagers");

const getAllConfigMini = async (req, res) => {
  try {
    const configmini = await findAllConfigMini();
    res.json(configmini);
  } catch (error) {
    console.error(error);
  }
};

const modifiedConfigMini = async (req, res) => {
  const modification = req.body;
  try {
    updateConfigMini(modification);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllConfigMini,
  modifiedConfigMini,
};
