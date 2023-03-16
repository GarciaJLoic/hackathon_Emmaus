// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { useEffect, useState } from "react";

function ConfigMini() {
  const [android, setAndroid] = useState();
  const [ram, setRam] = useState();
  const [stockage, setStockage] = useState();
  const [ecran, setEcran] = useState();
  const [reseau, setReseau] = useState();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/configmini`)
      .then((res) => res.data)
      .then(([data]) => {
        setAndroid(data.android);
        setRam(data.ram);
        setStockage(data.stockage);
        setEcran(data.ecran);
        setReseau(data.reseau);
      });
  }, []);

  const handleClick = () => {
    const data = {
      android,
      ram,
      stockage,
      ecran,
      reseau,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/configmini/update`, data)
      .then((res) => {
        if (res.status === 200) {
          console.info("La config a bien été modifié");
        }
      })
      .catch((error) => {
        console.error(error.response.data.validationErrors);
      });
  };

  return (
    <div className="cadreBlur">
      <h3 className="titreConfig">Configuration Minimale</h3>
      <div className="encart">
        <p className="titreEncart">Version Android :</p>
        <input
          className="inputEncart"
          type="text"
          value={android}
          onChange={(e) => setAndroid(e.target.value)}
        />
      </div>
      <div className="encart">
        <p className="titreEncart">RAM :</p>
        <input
          className="inputEncart"
          type="text"
          value={ram}
          onChange={(e) => setRam(e.target.value)}
        />
      </div>
      <div className="encart">
        <p className="titreEncart">Mémoire :</p>
        <input
          className="inputEncart"
          type="text"
          value={stockage}
          onChange={(e) => setStockage(e.target.value)}
        />
      </div>
      <div className="encart">
        <p className="titreEncart">Écran :</p>
        <input
          className="inputEncart"
          type="text"
          value={ecran}
          onChange={(e) => setEcran(e.target.value)}
        />
      </div>
      <div className="encart">
        <p className="titreEncart">Réseau :</p>
        <input
          className="inputEncart"
          type="text"
          value={reseau}
          onChange={(e) => setReseau(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="bouttonMaj"
        onClick={() => handleClick()}
      >
        METTRE À JOUR
      </button>
    </div>
  );
}

export default ConfigMini;
