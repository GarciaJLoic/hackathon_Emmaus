const db = require("./db");

const findPhoneCategory = () => {
  return db.query("SELECT * FROM phonecategory");
};

const updatePhoneCategory = async (modification) => {
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
  findPhoneCategory,
  updatePhoneCategory,
};
