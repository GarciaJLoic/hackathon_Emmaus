import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TableauAntutuEtc from "../components/TableauAntutuEtc";
import Categorisation from "../components/Categorisation";
import Header from "../components/Header";
import Titre from "../assets/titreAdmin.svg";
import ConfigMini from "../components/ConfigMini";

function Admin() {
  return (
    <div>
      <Header />
      <div className="admin">
        <img src={Titre} alt="titre" />
        <Carousel className="carouselResp">
          <Categorisation />
          <TableauAntutuEtc />
          <ConfigMini />
        </Carousel>
      </div>
    </div>
  );
}

export default Admin;
