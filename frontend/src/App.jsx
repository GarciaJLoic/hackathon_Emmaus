import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Ajout1 from "./pages/Ajout1";

import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajout1" element={<Ajout1 />} />
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
