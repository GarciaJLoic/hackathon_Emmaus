const db = require("./db");

const findPonderation = () => {
  return db.query("SELECT * FROM ponderation");
};

const updatePonderation = async (modification, modifparam) => {
  try {
    db.query(`UPDATE ponderation SET valeurPonderation = ? WHERE id = ?`, [
      modification.valeurPonderation,
      modifparam,
    ]);
  } catch (error) {
    console.error(error);
  }
};
const supprPonderation = (modifparam) => {
  return db.query(`DELETE FROM ponderation WHERE id = ?`, [modifparam]);
};
const insertPonderation = (modification) => {
  return db.query(`INSERT INTO ponderation (valeurPonderation) VALUES (?)`, [
    modification.valeurPonderation,
  ]);
};

module.exports = {
  findPonderation,
  updatePonderation,
  supprPonderation,
  insertPonderation,
};
