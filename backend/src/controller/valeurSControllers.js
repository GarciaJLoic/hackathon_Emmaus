const {
  findValeurS,
  updateValeurS,
  addStorage,
} = require("../models/valeurSManagers");

const getValeurS = async (req, res) => {
  try {
    const [valeurS] = await findValeurS();
    res.json(valeurS);
  } catch (error) {
    console.error(error);
  }
};

const modifiedValeurS = async (req, res) => {
  const modification = req.body;
  const modifparam = req.params.id;
  try {
    updateValeurS(modification, modifparam);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

const createNewStorage = async (req, res) => {
  const newStorage = req.body;
  try {
    addStorage(newStorage);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getValeurS,
  modifiedValeurS,
  createNewStorage,
};
