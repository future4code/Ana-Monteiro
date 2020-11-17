import styled from "styled-components";
import montain from "../img/montain.jpg";

export const MainDiv = styled.div`
  background-image: url(${montain});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: solid black;
  margin: 0;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

export const MiddleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Middle2Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Middle3Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextTitle = styled.div`
  color: white;
  font-size: 60px;
`;

export const Text = styled.div`
  color: white;
`;
