const db = require("./db");

const findPhoneCategory = () => {
  return db.query("SELECT * FROM phonecategory");
};

const updatePhoneCategory = async (modification, modifparam) => {
  try {
    db.query(
      `UPDATE phonecategory SET nomCategorie = ?, valTotaleMin = ?, valTotaleMax = ? WHERE id = ?`,
      [
        modification.nomCategorie,
        modification.valTotaleMin,
        modification.valTotaleMax,
        modifparam,
      ]
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findPhoneCategory,
  updatePhoneCategory,
};
