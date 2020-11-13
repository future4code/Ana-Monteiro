import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: #6f2b8c;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vw;
  height: 100vh;


  @media screen and(max-width: 600px) {
    max-height: 100px;
    max-width: 100px;
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
  border: solid;
  border-width: 5px;
  border-color: #4ba695;
  width: 30em;
  height: 58em;
  overflow: auto;

  @media screen (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: device-width;
    column-width: 100em;
  }
`;

export const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImagePhoto = styled.img`
  width: 16em;
  height: 16em;
  margin: 25px;
  border: solid;
  border-width: 5px;
  border-color: #4ba695;
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
