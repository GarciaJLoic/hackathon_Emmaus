import { Route, Routes } from "react-router-dom";

import Ajout1 from "./pages/Ajout1";

import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/ajout1"
          element={
            <div>
              <Ajout1 />
              <br />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
