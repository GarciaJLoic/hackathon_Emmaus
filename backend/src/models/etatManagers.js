const db = require("./db");

const findEtat = () => {
  return db.query("SELECT * FROM etat");
};

const insertEtat = (modification) => {
  return db.query(`INSERT INTO etat (etat) VALUES (?)`, [modification.etat]);
};

const updateEtat = async (modification, modifparam) => {
  try {
    db.query(`UPDATE etat SET etat = ? WHERE id = ?`, [
      modification.etat,
      modifparam,
    ]);
  } catch (error) {
    console.error(error);
  }
};
const supprEtat = (modifparam) => {
  return db.query(`DELETE FROM etat WHERE id = ?`, [modifparam]);
};
module.exports = {
  findEtat,
  insertEtat,
  updateEtat,
  supprEtat,
};
