import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import MatérielTitre from "../assets/MatérielTitre.svg";

function Ajout1() {
  const [stockageBDD, setStockageBDD] = useState();
  const [memoireBDD, setMemoireBDD] = useState();
  const [ponderationBDD, setPonderationBDD] = useState();
  const [antutuBDD, setAntutuBDD] = useState();
  const [categorisationBDD, setCategorisationBDD] = useState();
  const [stockageUser, setStockageUser] = useState();
  const [memoireUser, setMemoireUser] = useState();
  const [ponderationUser, setPonderationUser] = useState();
  const [antutuUser, setAntutuUser] = useState(0);
  const [resultat, setResultat] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/valeurs`)
      .then((response) => response.data)
      .then((data) => setStockageBDD(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/valeurm`)
      .then((response) => response.data)
      .then((data) => setMemoireBDD(data));
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/ponderation`)
      .then((response) => response.data)
      .then((data) => setPonderationBDD(data));
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/valeura`)
      .then((response) => response.data)
      .then((data) => setAntutuBDD(data));
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/phonecategory`)
      .then((response) => response.data)
      .then((data) => setCategorisationBDD(data));
  }, []);

  const sum = (antutu, memoire, stockage, ponde) => {
    const [valA] = antutuBDD.filter(
      (e) => antutu >= e.antutuMin && antutu <= e.antutuMax
    );
    const [valM] = memoireBDD.filter((e) => parseInt(memoire, 10) === e.mem);
    const [valS] = stockageBDD.filter(
      (e) => parseInt(stockage, 10) === e.stockage
    );
    let total;
    if (valA && valM && valS) {
      total = valA.valeur_a + valM.valeur_m + valS.valeur_s;
    } else {
      total = 0;
    }
    const totalPondere = total + (ponde / 100) * total;

    const [result] = categorisationBDD.filter(
      (e) => totalPondere >= e.valTotaleMin && totalPondere <= e.valTotaleMax
    );

    return result?.nomCategorie;
  };
  useEffect(() => {
    if (
      stockageBDD &&
      memoireBDD &&
      ponderationBDD &&
      antutuBDD &&
      categorisationBDD
    ) {
      setResultat(sum(antutuUser, memoireUser, stockageUser, ponderationUser));
    }
  }, [antutuUser, memoireUser, stockageUser, ponderationUser]);

  return (
    <div>
      <Header />
      <div className="backgroundAjout1" />
      <div className="titleAjout1">
        <img
          className="titreAjout1"
          src={MatérielTitre}
          alt="Ajout de matériel"
        />
      </div>
      <div className="bgInputAjout1">
        <h1 className="inputTitleAjout1">Taille de stockage :</h1>
        <select
          className="stockage"
          onChange={(e) => setStockageUser(e.target.value)}
        >
          <option value="0">--Choisissez--</option>
          {stockageBDD?.map((e) => (
            <option value={e.stockage} key={e.stockage}>
              {e.stockage}GB
            </option>
          ))}
        </select>
        <h1 className="inputTitleAjout2">RAM :</h1>
        <select
          className="RAM"
          onChange={(e) => setMemoireUser(e.target.value)}
        >
          <option value="0">--Choisissez--</option>
          {memoireBDD?.map((e) => (
            <option value={e.mem} key={e.mem}>
              {e.mem}GB
            </option>
          ))}
        </select>
        <h1 className="inputTitleAjout3">Indice Antutu :</h1>
        <input
          value={antutuUser}
          className="antutu"
          type="text"
          placeholder="Antutu"
          onChange={(e) => setAntutuUser(e.target.value)}
        />
        <h1 className="inputTitleAjout4">Pondération :</h1>
        <select
          className="pondération"
          onChange={(e) => setPonderationUser(e.target.value)}
        >
          <option value="0">--Choisissez--</option>
          {ponderationBDD?.map((e) => (
            <option value={e.valeurPonderation} key={e.valeurPonderation}>
              {e.valeurPonderation}%
            </option>
          ))}
        </select>
        <div className="grade">
          <h1 className="gradeTitle">Grade du téléphone :</h1>
          <h1 className="gradeResult">{resultat || ". . ."}</h1>
          <h3 className="lienUtile">
            <Link className to="https://www.antutu.com">
              <i>Lien utile : https://www.antutu.com</i>
            </Link>
          </h3>
        </div>
      </div>
      <div className="boutonAjout1">
        <Link className="validerAjout1" to="/">
          VALIDER
        </Link>
      </div>
    </div>
  );
}

export default Ajout1;
