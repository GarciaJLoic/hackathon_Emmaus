const db = require("./db");

const findAllUsers = () => {
  return db.query("SELECT nom, prenom  FROM users");
};
// const findAllUsers = async () => {
//   try {
//     const [users] = await db.query(
//       "SELECT firstname, lastname, email, city, language  FROM users"
//     );
//     return users;
//   } catch (error) {
//     console.error(error);
//   }
// };

const findUserById = (id) => {
  return db.query(
    "SELECT firstname, lastname, email, city, language FROM users WHERE id=?",
    [id]
  );
};

const verifyPassword = (identification) => {
  return db.query(
    `SELECT id, firstname, lastname, email, city, language, hashedPassword FROM users WHERE email=? `,
    [identification.email]
  );
};

const signUp = async (newProfile) => {
  try {
    db.query(
      `INSERT INTO users (nom, prenom, hashedPassword) VALUES (?, ?, ?)`,
      [newProfile.nom, newProfile.prenom, newProfile.hashedPassword]
    );
  } catch (error) {
    console.error(error);
  }
};

const upDateProfile = async (modifiedProfile) => {
  try {
    db.query(`UPDATE users SET hashedPassword = ? WHERE email = ?`, [
      modifiedProfile.hashedPassword,
      modifiedProfile.email,
    ]);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findAllUsers,
  findUserById,
  signUp,
  upDateProfile,
  verifyPassword,
};
