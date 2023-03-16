import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Connection from "../assets/connection.svg";

export default function Home() {
  return (
    <div className="backgroundHome">
      <div className="blurHome">
        <img src={Logo} alt="Emmaus Connect" className="logo" />
        <div className="blurConnection">
          <img
            src={Connection}
            alt="titre connection"
            className="connectionTitre"
          />
          <div className="identification">
            <p className="nomInput">Identifiant :</p>
            <input type="text" className="enterInput" />
          </div>
          <div className="identification">
            <p className="nomInput">Mot de passe :</p>
            <input type="password" className="enterInput" />
          </div>
          <Link className="validation" to="/">
            VALIDER
          </Link>
        </div>
      </div>
    </div>
  );
}
