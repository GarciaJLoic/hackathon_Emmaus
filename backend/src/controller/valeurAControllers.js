const { findValeurA, updateValeurA } = require("../models/valeurAManagers");

const getValeurA = async (req, res) => {
  try {
    const [ValeurA] = await findValeurA();
    res.json(ValeurA);
  } catch (error) {
    console.error(error);
  }
};

const modifiedValeurA = async (req, res) => {
  const modification = req.body;
  const modifparam = req.params.id;
  try {
    updateValeurA(modification, modifparam);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getValeurA,
  modifiedValeurA,
};
