import axios from "axios";
import { useEffect, useState } from "react";

function Categorisation() {
  const [valTotalMins, setValTotalMins] = useState();
  const [valTotalMaxs, setValTotalMaxs] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/phonecategory`)
      .then((res) => {
        setValTotalMins(res.data);
        setValTotalMaxs(res.data);
      });
    //   .then((res) => res.data);
    //   .then(([data]) => {
    //     setValTotalMins(data.valTotalMin);
    //     setValTotalMaxs(data.valTotalMax);
    //   });
  }, []);

  return (
    <div className="categorisation">
      <h3 className="titre">Catégorisation des smartphones</h3>
      <div className="tableCateg">
        <div className="tableColonne">
          <h3 className="titreColonne">Val total min :</h3>
          {valTotalMaxs
            ? valTotalMaxs.map((valTotaleMin) => (
                <input
                  className="inputCateg"
                  type="text"
                  value={valTotaleMin.valTotaleMin}
                />
              ))
            : null}
          {/* {console.log(valTotalMins.valTotalMin)} */}
        </div>
        <div className="tableColonne">
          <h3 className="titreColonne">Val total max :</h3>
          {valTotalMins
            ? valTotalMins.map((valTotaleMax) => (
                <input
                  className="inputCateg"
                  type="text"
                  value={valTotaleMax.valTotaleMax}
                />
              ))
            : null}
        </div>
        <div className="tableColonne">
          <h3 className="titreColonne">Catégorie :</h3>
          <input className="inputCateg" id="categ1" type="text" value="1-HC" />
          <input className="inputCateg" id="categ2" type="text" value="2-C" />
          <input className="inputCateg" id="categ3" type="text" value="3-B" />
          <input className="inputCateg" id="categ4" type="text" value="4-A" />
          <input
            className="inputCateg"
            id="categ5"
            type="text"
            value="5-Prenium"
          />
        </div>
      </div>
      <button type="button" className="buttonAjouter">
        {" "}
        AJOUTER{" "}
      </button>
    </div>
  );
}

export default Categorisation;
