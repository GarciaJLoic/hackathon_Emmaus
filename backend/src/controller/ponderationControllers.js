const {
  findPonderation,
  updatePonderation,
} = require("../models/ponderationManagers");

const getPonderation = async (req, res) => {
  try {
    const ponderation = await findPonderation();
    res.json(ponderation);
  } catch (error) {
    console.error(error);
  }
};

const modifiedPonderation = async (req, res) => {
  const modification = req.body;
  try {
    updatePonderation(modification);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getPonderation,
  modifiedPonderation,
};
