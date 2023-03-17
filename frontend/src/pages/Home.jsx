import { useState } from "react";
import Logo from "../assets/logo.svg";
import Connection from "../assets/connection.svg";

export default function Home() {
  const [identifiant, setIdentifiant] = useState("");
  const [mdp, setMdp] = useState("");

  const login = () => {
    if (identifiant === "Marc" && mdp === "emmaus123") {
      window.location = "/ajout1";
    } else {
      setIdentifiant("");
      setMdp("");
    }
  };

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
            <input
              type="text"
              className="enterInput"
              onChange={(e) => setIdentifiant(e.target.value)}
              value={identifiant || ""}
            />
          </div>
          <div className="identification">
            <p className="nomInput">Mot de passe :</p>
            <input
              type="password"
              className="enterInput"
              onChange={(e) => setMdp(e.target.value)}
              value={mdp || ""}
            />
          </div>
          <p className="validation" onClick={(e) => login(e)}>
            {" "}
            Valider
          </p>
        </div>
      </div>
    </div>
  );
}
