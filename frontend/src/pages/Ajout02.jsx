// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { useState } from "react";

import Header from "../components/Header";
import Titre from "../assets/MatérielTitre.svg";

function Materiel() {
  const [stockage, setStockage] = useState(16);
  const [ram, setRam] = useState(1);
  const [antutu, setAntutu] = useState(150000);
  const [ponderation, setPonderation] = useState(10);
  const [grade, setGrade] = useState();
  const [remarque, setRemarque] = useState();
  const [maj, setMaj] = useState();
  const [donateur, setDonateur] = useState();
  const [idEmmaus, setIdEmmaus] = useState();
  const [categorie, setCategorie] = useState("2-C");
  const [statut, setStatut] = useState();
  const [constructeur, setConstructeur] = useState();
  const [model, setModel] = useState();
  const [batterie, setBatterie] = useState();
  const [vente, setVente] = useState();
  const [observation, setObservation] = useState();
  const [imei, setImei] = useState();
  const [processeur, setProcesseur] = useState();
  const [android, setAndroid] = useState();
  const [ecran, setEcran] = useState();
  const [resolution, setResolution] = useState();
  const [chargeur, setChargeur] = useState();
  const [operateur, setOperateur] = useState();
  const [couleur, setCouleur] = useState();
  const [ajout, setAjout] = useState(false);
  const handleClick = () => {
    const data = {
      remarque,
      maj,
      donateur,
      idEmmaeusConnect: idEmmaus,
      typeDeMateriel: "smartphone",
      categorie,
      statut,
      constructeur,
      infoBattery: batterie,
      dateDeVente: vente,
      observation,
      gradeEsthetique: grade,
      serieEmei: imei,
      processeur,
      os: android,
      storage: stockage,
      tailleEcran: ecran,
      resolution,
      operateur,
      couleur,
    };
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/phone/insert`, data)
      .then((res) => {
        if (res.status === 200) {
          console.info("Le telephone a bien été ajouté");
        }
      })
      .catch((error) => {
        console.error(error.response.data.validationErrors);
      });
    setAjout((prev) => !prev);
  };
  return (
    <div>
      <Header />
      <div className="backgroundTableauMateriel">
        <img src={Titre} className="Title" alt="titre" />
        <div className="Tableau">
          <div className="tableTableau">
            <div className="option">
              <p className="nomOption">Taille stockage : </p>
              <input
                className="selectInfo"
                type="text"
                value={stockage}
                onChange={(e) => setStockage(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">RAM : </p>
              <input
                className="selectInfo"
                type="text"
                value={ram}
                onChange={(e) => setRam(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Indice Antutu : </p>
              <input
                className="selectInfo"
                type="text"
                value={antutu}
                onChange={(e) => setAntutu(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Pondération : </p>
              <input
                className="selectInfo"
                type="text"
                value={ponderation}
                onChange={(e) => setPonderation(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Grade : </p>
              <input
                className="selectInfo"
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Remarque : </p>
              <input
                className="selectInfo"
                type="text"
                value={remarque}
                onChange={(e) => setRemarque(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">MAJ : </p>
              <input
                className="selectInfo"
                type="text"
                value={maj}
                onChange={(e) => setMaj(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Donateur : </p>
              <input
                className="selectInfo"
                type="text"
                value={donateur}
                onChange={(e) => setDonateur(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">ID Emmaus : </p>
              <input
                className="selectInfo"
                type="text"
                value={idEmmaus}
                onChange={(e) => setIdEmmaus(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Catégorie : </p>
              <input
                className="selectInfo"
                type="text"
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Status : </p>
              <input
                className="selectInfo"
                type="text"
                value={statut}
                onChange={(e) => setStatut(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Constructeur : </p>
              <input
                className="selectInfo"
                type="text"
                value={constructeur}
                onChange={(e) => setConstructeur(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Modèle : </p>
              <input
                className="selectInfo"
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Info batterie : </p>
              <input
                className="selectInfo"
                type="text"
                value={batterie}
                onChange={(e) => setBatterie(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Date de vente : </p>
              <input
                className="selectInfo"
                type="text"
                value={vente}
                onChange={(e) => setVente(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Observation : </p>
              <input
                className="selectInfo"
                type="text"
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">N° série / IMEI : </p>
              <input
                className="selectInfo"
                type="text"
                value={imei}
                onChange={(e) => setImei(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Processeur : </p>
              <input
                className="selectInfo"
                type="text"
                value={processeur}
                onChange={(e) => setProcesseur(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">OS : </p>
              <input
                className="selectInfo"
                type="text"
                value={android}
                onChange={(e) => setAndroid(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Taille écran : </p>
              <input
                className="selectInfo"
                type="text"
                value={ecran}
                onChange={(e) => setEcran(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Résolution : </p>
              <input
                className="selectInfo"
                type="text"
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Chargeur : </p>
              <input
                className="selectInfo"
                type="text"
                value={chargeur}
                onChange={(e) => setChargeur(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Opérateur : </p>
              <input
                className="selectInfo"
                type="text"
                value={operateur}
                onChange={(e) => setOperateur(e.target.value)}
              />
            </div>
            <div className="option">
              <p className="nomOption">Couleur : </p>
              <input
                className="selectInfo"
                type="text"
                value={couleur}
                onChange={(e) => setCouleur(e.target.value)}
              />
            </div>
          </div>
        </div>

        <p>{ajout ? "Le téléphone a bien été ajouté" : ""}</p>
        <button
          type="button"
          className="buttonAjouter"
          onClick={() => handleClick()}
        >
          {" "}
          AJOUTER{" "}
        </button>
      </div>
    </div>
  );
}

export default Materiel;
