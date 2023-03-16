import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Ajout1 from "./pages/Ajout1";
import Header from "./components/Header";
import ConfigMini from "./components/ConfigMini";

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
        <Route path="/header" element={<Header />} />
        <Route path="/configmini" element={<ConfigMini />} />
      </Routes>
    </div>
  );
}

export default App;
