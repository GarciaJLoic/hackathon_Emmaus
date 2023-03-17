// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from "react-router-dom";
import TableauAntutuEtc from "@components/TableauAntutuEtc.jsx";
import Home from "./pages/Home";
import Ajout1 from "./pages/Ajout1";
import Header from "./components/Header";
import ConfigMini from "./components/ConfigMini";
import Materiel from "./pages/Ajout02";
import Admin from "./pages/Admin";

import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajout1" element={<Ajout1 />} />
        <Route path="/tableauantutu" element={<TableauAntutuEtc />} />
        {/* <Route
          path="/ajout1"
          element={
            <div>
              <Ajout1 />
              <br />
            </div>
          }
        /> */}
        <Route path="/header" element={<Header />} />
        <Route path="/configmini" element={<ConfigMini />} />
        <Route path="/Materiel02" element={<Materiel />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
