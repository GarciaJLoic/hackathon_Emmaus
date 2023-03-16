const {
  findPonderation,
  updatePonderation,
  supprPonderation,
  insertPonderation,
} = require("../models/ponderationManagers");

const getPonderation = async (req, res) => {
  try {
    const [ponderation] = await findPonderation();
    res.json(ponderation);
  } catch (error) {
    console.error(error);
  }
};

const modifiedPonderation = async (req, res) => {
  const modification = req.body;
  const modifparam = req.params.id;
  try {
    updatePonderation(modification, modifparam);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

const deletePonderation = async (req, res) => {
  const modifparam = req.params.id;
  try {
    supprPonderation(modifparam);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};
const addPonderation = async (req, res) => {
  const modification = req.body;
  try {
    insertPonderation(modification);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getPonderation,
  modifiedPonderation,
  deletePonderation,
  addPonderation,
};
