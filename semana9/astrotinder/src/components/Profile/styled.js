import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: #6f2b8c;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vw;
  height: 100vh;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-bottom: 6px;
  padding-left: 33px;
`;

export const ImageIcon = styled.img`
  width: 5em;
  padding-right: 40px;
  padding-bottom: 26px;
`;

export const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin: 15px;
  border: solid;
  width: 30em;
  height: 57em;
  overflow: visible;
`;

export const ImagePhoto = styled.img`
  width: 16em;
  height: 16em;
  margin: 25px;
  border: solid;
`;

export const ImageLogo = styled.img`
  height: 9em;
  padding-right: 1em;
`;

export const ImageIcon2 = styled.img`
  height: 6em;
  padding-left: 1em;
`;

export const Text = styled.p`
  color: #4ba695;
  font-size: 1.5em;
  font-weight: bolder;
  text-align: center;
`;
