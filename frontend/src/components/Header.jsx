// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

import React, { useEffect, useState } from "react";

import Logo from "../assets/logo.svg";
import Upload from "../assets/upload.svg";

export default function Home() {
  const [dataBDD, setDataBDD] = useState();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/phone`)
      .then((response) => response.data)
      .then(([data]) => setDataBDD(data));
  }, []);
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
        {/* <Link  to="/"> */}
        <div className="headerRightRight">
          {dataBDD ? (
            <CSVLink
              data={dataBDD}
              separator=","
              filename="myData.csv"
              enclosingCharacter=""
            >
              <p className="export">Export CSV</p>
            </CSVLink>
          ) : (
            <p className="export">Export CSV</p>
          )}
        </div>
        <img src={Upload} alt="upload" className="upload" />
      </div>
    </div>
  );
}
