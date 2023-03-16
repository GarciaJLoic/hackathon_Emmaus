const db = require("./db");

const findValeurA = () => {
  return db.query("SELECT * FROM valeur_a");
};

const updateValeurA = async (modification, modifparam) => {
  try {
    db.query(`UPDATE valeur_a SET valeur_a = ? WHERE id = ? `, [
      modification.valeur_a,
      modifparam,
    ]);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findValeurA,
  updateValeurA,
};
