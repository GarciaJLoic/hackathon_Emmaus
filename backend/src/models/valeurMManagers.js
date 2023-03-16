const db = require("./db");

const findValeurM = () => {
  return db.query("SELECT * FROM valeur_m");
};

const updateValeurM = async (modification, modifparam) => {
  try {
    db.query(`UPDATE valeur_m SET valeur_m = ?, mem = ? WHERE id = ? `, [
      modification.valeur_m,
      modification.mem,
      modifparam,
    ]);
  } catch (error) {
    console.error(error);
  }
};

const addMemories = (newmemories) => {
  return db.query("INSERT INTO valeur_m (mem, valeur_m) VALUES (?, ?)", [
    newmemories.mem,
    newmemories.valeur_m,
  ]);
};

module.exports = {
  findValeurM,
  updateValeurM,
  addMemories,
};
