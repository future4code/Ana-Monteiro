import React from "react";
import { MainDiv } from "./styled";
import { useHistory } from "react-router-dom";
import back from "../img/Plane2.png";

const ListTripsPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <h1>Lista de Viagens</h1>
      <img src={back} onClick={goBack} />
    </MainDiv>
  );
};

export default ListTripsPage;
