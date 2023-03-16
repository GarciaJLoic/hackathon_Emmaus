const db = require("./db");

const findEtat = () => {
  return db.query("SELECT * FROM etat");
};

const updateEtat = async (modification) => {
  try {
    db.query(`UPDATE etat SET hashedPassword = ? `, [
      modification.hashedPassword,
      // modifiedProfile.email,
    ]);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findEtat,
  updateEtat,
};
