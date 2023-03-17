import { Route, Routes } from "react-router-dom";
import TableauAntutuEtc from "@components/TableauAntutuEtc.jsx";
import Home from "./pages/Home";
import Ajout1 from "./pages/Ajout1";

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
      </Routes>
    </div>
  );
}

export default App;
