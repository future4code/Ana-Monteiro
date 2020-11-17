import styled from "styled-components";
import ocean from "../img/ocean.jpg";

export const MainDiv = styled.div`
  background-image: url(${ocean});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: solid black;
  margin: 0;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;
