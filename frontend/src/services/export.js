// eslint-disable-next-line import/no-extraneous-dependencies
const Papa = require("papaparse");
const fs = require("fs");

const jsonData = [
  {
    remarque: "gloup",
    maj: "jacki",
    donateur: "123456",
    idEmmaeusConnect: "gloup",
    typeDeMateriel: "jacki",
    categorie: "123456",
    statut: "ok",
    constructeur: "gloup",
    infoBattery: "jacki",
    observation: "gloup",
    gradeEsthetique: "jacki",
    serieEmei: "123456",
    processeur: "4",
    os: "ok",
    storage: "gloup",
    tailleEcran: "jacki",
    resolution: "123456",
    chargeur: "gloup",
    operateur: "jacki",
    couleur: "123456",
  },
];
try {
  const csvData = Papa.unparse(jsonData, {
    download: true,
    complete() {
      console.log("a");
    },
  });
  fs.writeFile("./export.csv", csvData, { flag: "w" }, () => {});
} catch (e) {
  console.error(e);
}
