import React from "react";
import { MainDiv } from "./styled";
import { useHistory } from "react-router-dom";
import viajando from "../img/Baloon.png";
import back from "../img/Plane2.png";
import luggage from "../img/Luggage.svg";

const ApplicationForm = () => {
  const history = useHistory();

  const goToListTripsPage = () => {
    history.push("/listtripspage");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <div>
        <h1>Página de Formulário</h1>
        <h2>Nome:</h2>
        <input></input>
        <h2>Endereço</h2>
        <input></input>
        <h2>Telefone:</h2>
        <input></input>
        <img src={luggage} />
        Partiu Viajar!! :D
      </div>
      <div>
        <img src={back} onClick={goBack} />
        <img src={viajando} onClick={goToListTripsPage} />
      </div>
    </MainDiv>
  );
};

export default ApplicationForm;
