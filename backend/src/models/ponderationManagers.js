const db = require("./db");

const findPonderation = () => {
  return db.query("SELECT * FROM etat");
};

const updatePonderation = async (modification) => {
  try {
    db.query(`UPDATE ponderation SET hashedPassword = ? `, [
      modification.hashedPassword,
      // modifiedProfile.email,
    ]);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findPonderation,
  updatePonderation,
};
