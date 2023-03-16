import { Link } from "react-router-dom";
import MatérielTitre from "../assets/MatérielTitre.svg";

function Ajout1() {
  return (
    <div>
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
        <select className="stockage">
          <option value="16GB">16GB</option>
          <option value="32GB">32GB</option>
          <option value="64GB">64GB</option>
          <option value="128GB">128GB</option>
          <option value="256GB">256GB</option>
          <option value="512GB">512GB</option>
        </select>
        <h1 className="inputTitleAjout2">RAM :</h1>
        <select className="RAM">
          <option value="1GB">1GB</option>
          <option value="2GB">2GB</option>
          <option value="3GB">3GB</option>
          <option value="4GB">4GB</option>
          <option value="6GB">6GB</option>
          <option value="8GB">8GB</option>
          <option value="12GB">12GB</option>
          <option value="16GB">16GB</option>
        </select>
        <h1 className="inputTitleAjout3">Indice Antutu :</h1>
        <select className="antutu">
          <option value="10000">10000</option>
          <option value="20000">20000</option>
          <option value="30000">30000</option>
          <option value="40000">40000</option>
        </select>
        <h1 className="inputTitleAjout4">Pondération :</h1>
        <select className="pondération">
          <option value="1">-100%</option>
          <option value="2">-50%</option>
          <option value="3">-10%</option>
          <option value="4">-5%</option>
          <option value="4">0%</option>
          <option value="4">5%</option>
          <option value="4">10%</option>
        </select>
        <Link className="validerAjout1" to="/">
          VALIDER
        </Link>
      </div>
    </div>
  );
}

export default Ajout1;
