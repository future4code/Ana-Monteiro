import styled from "styled-components";
import ocean from "../img/adm.jpg";

export const MainDiv = styled.div`
  background-image: url(${ocean});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: solid black;
  margin: 0 auto;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  overflow-y: scroll;
`;

export const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5em;
  padding-left: 40em;
  padding-right: 40em;
`;

export const Text = styled.div`
  color: #0d0205;
  font-size: 2em;
  padding: 0.5em;
`;

export const TextTitle = styled.div`
  color: rgb(40, 33, 64, 0.7);
  font-size: 13em;
  text-align: center;
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 100px;
`;

export const MiddleDiv1 = styled.div`
  display: flex;
  flex-direction: column;
`;
