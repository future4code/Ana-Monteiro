import React from "react";
import { MainDiv } from "./styled";
import { useHistory } from "react-router-dom";
import back from "../img/Plane2.png";

const CreateTripPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <MainDiv>
      <h1>Create Trip Page</h1>
      <img src={back} onClick={goBack} />
    </MainDiv>
  );
};

export default CreateTripPage;
