const { findEtat, updateEtat } = require("../models/etatManagers");

const getEtat = async (req, res) => {
  try {
    const etat = await findEtat();
    res.json(etat);
  } catch (error) {
    console.error(error);
  }
};

const modifiedEtat = async (req, res) => {
  const modification = req.body;
  try {
    updateEtat(modification);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getEtat,
  modifiedEtat,
};
