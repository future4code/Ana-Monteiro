import React from "react";
import { MainDiv } from "./styled";
import back from "../img/Plane2.png";
import { useHistory } from "react-router-dom";
import Guide from "../img/Guide.png";
import Ticket from "../img/Ticket.png";

const LoginAdmPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goToTripDetailsPage = () => {
    history.push("/detailstrips");
  };

  const goToCreateTripPage = () => {
    history.push("/createtrippage");
  };

  return (
    <MainDiv>
      <h1>Adm Page</h1>;
      <img src={back} onClick={goBack} />
      <img src={Guide} onClick={goToTripDetailsPage} />
      <img src={Ticket} onClick={goToCreateTripPage} />
    </MainDiv>
  );
};

export default LoginAdmPage;
