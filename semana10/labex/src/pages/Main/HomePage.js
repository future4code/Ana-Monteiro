import React from "react";
import { useHistory } from "react-router-dom";
import globo from "../img/Map3.svg";
import form from "../img/Luggage2.svg";
import {
  MainDiv,
  MiddleDiv,
  Middle2Div,
  Middle3Div,
  TextTitle,
  Text,
} from "./styled";

const HomePage = () => {
  const history = useHistory();

  const goToAdmPages = () => {
    history.push("/loginadmpage");
  };

  const goToApplicationForm = () => {
    history.push("/applicationform");
  };

  return (
    <MainDiv>
      <TextTitle>LabeX</TextTitle>;
      <Text>Seu futuro começa Aqui!Bon Voyage = D</Text>
      <MiddleDiv>
        <Middle2Div>
          <h3>Login Administrador</h3>
          <img src={globo} onClick={goToAdmPages} />
        </Middle2Div>
        <Middle3Div>
          <h3>Login Usuário</h3>
          <img src={form} onClick={goToApplicationForm} />
        </Middle3Div>
      </MiddleDiv>
    </MainDiv>
  );
};

export default HomePage;
