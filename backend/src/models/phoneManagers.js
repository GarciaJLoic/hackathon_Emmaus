const db = require("./db");

const findAllPhones = () => {
  return db.query("SELECT * FROM phone");
};

const postPhones = (newPhone) => {
  return db.query(
    "INSERT INTO phone (remarque, maj, donateur, idEmmaeusConnect, typeDeMateriel, categorie, statut, constructeur, infoBattery, dateDeVente, observation, gradeEsthetique, serieEmei, processeur, os, storage, tailleEcran, resolution, chargeur, operateur, couleur) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      newPhone.remarque,
      newPhone.maj,
      newPhone.donateur,
      newPhone.idEmmaeusConnect,
      newPhone.typeDeMateriel,
      newPhone.categorie,
      newPhone.statut,
      newPhone.constructeur,
      newPhone.infoBattery,
      newPhone.dateDeVente,
      newPhone.observation,
      newPhone.gradeEsthetique,
      newPhone.serieEmei,
      newPhone.processeur,
      newPhone.os,
      newPhone.storage,
      newPhone.tailleEcran,
      newPhone.resolution,
      newPhone.chargeur,
      newPhone.operateur,
      newPhone.couleur,
    ]
  );
};

module.exports = {
  findAllPhones,
  postPhones,
};
