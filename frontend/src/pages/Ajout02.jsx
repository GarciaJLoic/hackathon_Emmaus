import React from "react";
import Header from "../components/Header";
import Titre from "../assets/MatérielTitre.svg";

function Materiel() {
  return (
    <div>
      <Header />
      <div className="backgroundTableauMateriel">
        <img src={Titre} className="Title" alt="titre" />
        <div className="Tableau">
          <div className="tableTableau">
            <div className="option">
              <p className="nomOption">Taille stockage : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">RAM : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Indice Antutu : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Pondération : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Grade : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Remarque : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">MAJ : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Donateur : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">ID Emmaus : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Catégorie : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Status : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Constructeur : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Modèle : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Info batterie : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Date de vente : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Observation : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">N° série / IMEI : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Processeur : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">OS : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Taille écran : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Résolution : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Chargeur : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Opérateur : </p>
              <input className="selectInfo" type="text" />
            </div>
            <div className="option">
              <p className="nomOption">Couleur : </p>
              <input className="selectInfo" type="text" />
            </div>
          </div>
        </div>
        <button type="button" className="buttonAjouter">
          {" "}
          AJOUTER{" "}
        </button>
      </div>
    </div>
  );
}

export default Materiel;
