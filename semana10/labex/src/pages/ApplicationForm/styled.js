import styled from "styled-components";
import fundo from "../img/fundo.jpg";

export const MainDiv = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: solid black;
  margin: 0;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;
