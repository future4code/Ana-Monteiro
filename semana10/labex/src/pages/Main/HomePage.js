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
  TextTitle2,
  Image,
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
          <TextTitle2>Administrador</TextTitle2>
          <Image src={globo} onClick={goToAdmPages} />
        </Middle2Div>
        <Middle3Div>
          <TextTitle2>Usuário</TextTitle2>
          <Image src={form} onClick={goToApplicationForm} />
        </Middle3Div>
      </MiddleDiv>
    </MainDiv>
  );
};

export default HomePage;
