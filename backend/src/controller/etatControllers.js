const {
  findEtat,
  updateEtat,
  insertEtat,
  supprEtat,
} = require("../models/etatManagers");

const getEtat = async (req, res) => {
  try {
    const etat = await findEtat();
    res.json(etat);
  } catch (error) {
    console.error(error);
  }
};

const addEtat = async (req, res) => {
  const modification = req.body;
  try {
    insertEtat(modification);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

const modifiedEtat = async (req, res) => {
  const modification = req.body;
  const modifparam = req.params.id;
  try {
    updateEtat(modification, modifparam);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

const deleteEtat = async (req, res) => {
  const modifparam = req.params.id;
  try {
    supprEtat(modifparam);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getEtat,
  addEtat,
  modifiedEtat,
  deleteEtat,
};
