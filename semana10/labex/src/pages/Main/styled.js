import styled from "styled-components";
import montain from "../img/main.jpg";

export const MainDiv = styled.div`
  background-image: url(${montain});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: solid black;
  margin: 0 auto;
  justify-content: space-between;
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
  font-family: "Dancing Script", cursive;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

export const MiddleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 4em;
`;

export const Middle2Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 6em;
`;

export const Middle3Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextTitle = styled.div`
  color: rgb(40, 33, 64, 0.7);
  font-size: 19em;
  text-align: center;
`;

export const Text = styled.div`
  color: rgb(40, 33, 64, 0.7);
  text-align: center;
  font-size: 3em;
`;

export const TextTitle2 = styled.div`
  color: rgb(40, 33, 64, 1);
  text-align: center;
  font-size: 3em;
`;

export const Image = styled.img`
  height: 10em;
`;

export const UpperDiv = styled.div`
  background: #413473;
`;
