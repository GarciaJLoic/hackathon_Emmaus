const db = require("./db");

const findAllConfigMini = () => {
  return db.query("SELECT * FROM configmini");
};

const updateConfigMini = (modification) => {
  db.query(
    `UPDATE configmini SET android = ?, ram = ?, stockage = ?, ecran = ?, reseau = ?`,
    [
      modification.android,
      modification.ram,
      modification.stockage,
      modification.ecran,
      modification.reseau,
    ]
  );
};

// const addNewConfigMini = (newConfigMini) => {
//   return db.query("INSERT INTO configmini (android, ram, stockage, ecran, reseau) VALUES (?, ?, ?, ?, ?)", [
//     newConfigMini.android,
//     newConfigMini.ram,
//     newConfigMini.stockage,
//     newConfigMini.ecran,
//     newConfigMini.reseau,
//   ]);
// };

module.exports = {
  findAllConfigMini,
  updateConfigMini,
  // addNewConfigMini,
};
