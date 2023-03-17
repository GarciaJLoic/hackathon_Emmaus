import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TableauAntutuEtc from "@components/TableauAntutuEtc";
import Categorisation from "../components/Categorisation";
import Header from "../components/Header";
import Titre from "../assets/titreAdmin.svg";

function Admin() {
  return (
    <div className="admin">
      <Header />
      <div className="admin">
        <img src={Titre} alt="titre" />
        <Carousel>
          <Categorisation />
          <TableauAntutuEtc />
        </Carousel>
      </div>
    </div>
  );
}

export default Admin;
