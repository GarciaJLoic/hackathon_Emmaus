import axios from "axios";
import { useEffect, useState } from "react";
import Antutu from "./Antutu";
import Ram from "./Ram";
import Drive from "./Drive";

function TableauAntutuEtc() {
  const [valeura, setValeura] = useState(null);
  const [valeurm, setValeurm] = useState(null);
  const [valeurs, setValeurs] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/valeura`)
      .then((res) => {
        setValeura(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/valeurm`)
      .then((res) => {
        setValeurm(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/valeurs`)
      .then((res) => {
        setValeurs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="dispoTableau">
      <div className="tableauAntutu">
        <h2 className="poulet">Valeur_A</h2>
        <div className="titreColonne">
          <p className="poulet">Antutu Min</p>
          <p className="poulet">Antutu Max</p>
          <p className="poulet">Valeur A</p>
        </div>
        {valeura
          ? valeura.map((valeur) => (
              <Antutu
                key={valeur.id}
                antutuMin={valeur.antutuMin}
                antutuMax={valeur.antutuMax}
                valeura={valeur.valeur_a}
                setValeura={(e) => setValeura(e)}
              />
            ))
          : null}
        <button type="submit">Valider modification</button>
      </div>
      <div className="tableauRam">
        <h2 className="poulet">Valeur_M</h2>
        <div className="titreColonne">
          <p className="poulet">Ram</p>
          <p className="poulet">Valeur M</p>
        </div>
        {valeurm
          ? valeurm.map((valeur) => (
              <Ram key={valeur.id} mem={valeur.mem} valeurm={valeur.valeurm} />
            ))
          : null}
        <button type="submit">Valider modification</button>
      </div>
      <div className="tableauDrive">
        <h2 className="poulet">Valeur_S</h2>
        <div className="titreColonne">
          <p className="poulet">Stockage</p>
          <p className="poulet">Valeur S</p>
        </div>
        {valeurs
          ? valeurs.map((valeur) => (
              <Drive
                key={valeur.id}
                stockage={valeur.stockage}
                valeurs={valeur.valeur_s}
              />
            ))
          : null}
        <button type="submit">Valider modification</button>
      </div>
    </div>
  );
}

export default TableauAntutuEtc;
