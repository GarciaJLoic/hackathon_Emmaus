const {
  findValeurM,
  updateValeurM,
  addMemories,
} = require("../models/valeurMManagers");

const getValeurM = async (req, res) => {
  try {
    const [ValeurM] = await findValeurM();
    res.json(ValeurM);
  } catch (error) {
    console.error(error);
  }
};

const modifiedValeurM = async (req, res) => {
  const modification = req.body;
  const modifparam = req.params.id;
  try {
    updateValeurM(modification, modifparam);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

const createNewMemories = async (req, res) => {
  const newmemories = req.body;
  try {
    addMemories(newmemories);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getValeurM,
  modifiedValeurM,
  createNewMemories,
};
