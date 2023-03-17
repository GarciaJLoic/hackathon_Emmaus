// eslint-disable-next-line import/no-extraneous-dependencies
import { CSVLink } from "react-csv";
import Algo from "../components/Algo";

export default function Home() {
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
  return (
    <div className="algo">
      <Algo />
      <CSVLink
        data={jsonData}
        separator=","
        filename="myData.csv"
        enclosingCharacter=""
      >
        <button>Export CSV</button>
      </CSVLink>
    </div>
  );
}
