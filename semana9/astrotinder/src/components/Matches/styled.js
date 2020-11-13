import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: #6f2b8c;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  height: 100vh;
`;

export const ImageMatch = styled.img`
  border-radius: 30em;
  height: 6em;
  width: 6em;
  display: flex;
  flex-direction: column;
`;

export const ImageLogo = styled.img`
  height: 7.5em;
  padding-right: 1em;
`;

export const OrganizeImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const OrganizeImages2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4em;
  overflow-y: scroll;
  height: 60vh;
  width: 20vw;
`;

export const OrganizeImages3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2em;
  background-image: linear-gradiente(
    to-right,
    rgba(111, 43, 140, 0.1),
    rgba(115, 80, 128, 0.7)
  );
`;

export const BackImage = styled.img`
  height: 3em;
  padding-top: 1.5em;
  margin-left: 1em;
`;

export const ImageDel = styled.img`
  height: 5em;
  padding-bottom: 3em;
`;

export const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin: 15px;
  border: solid;
  border-width: 5px;
  border-color: #4ba695;
  width: 30em;
  height: 53em;

  @media screen (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: device-width;
  }
`;

export const Text = styled.p`
  color: #4ba695;
  font-size: 1.2em;
  font-weight: bolder;
  text-align: center;
`;
