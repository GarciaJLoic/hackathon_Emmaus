const db = require("./db");

const findValeurS = () => {
  return db.query("SELECT * FROM valeur_s");
};

const updateValeurS = async (modification, modifparam) => {
  try {
    db.query(`UPDATE valeur_s SET valeur_s = ?, stockage = ? WHERE id = ? `, [
      modification.valeur_s,
      modification.storage,
      modifparam,
    ]);
  } catch (error) {
    console.error(error);
  }
};

const addStorage = (newStorage) => {
  return db.query("INSERT INTO valeur_s (stockage, valeur_s) VALUES (?, ?)", [
    newStorage.storage,
    newStorage.valeur_s,
  ]);
};

module.exports = {
  findValeurS,
  updateValeurS,
  addStorage,
};
