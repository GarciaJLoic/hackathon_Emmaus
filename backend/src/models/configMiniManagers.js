const db = require("./db");

const findAllConfigMini = () => {
  return db.query("SELECT * FROM configmini");
};

const updateConfigMini = (modification) => {
  db.query(`UPDATE configmini SET hashedPassword = ? WHERE email = ?`, [
    modification.hashedPassword,
    //   modifiedProfile.email,
  ]);
};

module.exports = {
  findAllConfigMini,
  updateConfigMini,
};
