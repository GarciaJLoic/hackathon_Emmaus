import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Upload from "../assets/upload.svg";

export default function Home() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <div className="headerNoRight">
        <div className="headerRight">
          <Link className="administration" to="/">
            Administration
          </Link>
          <Link className="administration" to="/">
            Ajout de materiel
          </Link>
        </div>
        <Link className="headerRightRight" to="/">
          <p className="export">Export CSV</p>
          <img src={Upload} alt="upload" className="upload" />
        </Link>
      </div>
    </div>
  );
}
