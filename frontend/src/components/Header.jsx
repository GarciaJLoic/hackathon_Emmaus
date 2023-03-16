import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Home() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <div className="headerRight">
        <Link className="administration" to="/">
          Administration
        </Link>
        <Link className="administration" to="/">
          Ajout de materiel
        </Link>
        <Link className="administration" to="/">
          Export CSV
        </Link>
      </div>
    </div>
  );
}
