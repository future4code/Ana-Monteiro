import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import core from "./img/core.png";
import recusar from "./img/recusar.png";
import baixados from "./img/baixados.png";

const MainDiv = styled.div`
  background-color: #6f2b8c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Imagem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2em;
`;

const ImageIcon = styled.img`
  width: 5em;
`;

const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin: 15px;
  border: solid;
  width: 30em;
  height: 53em;
`;

const ImagePhoto = styled.img`
  width: 15em;
  height: 15em;
  margin: 25px;
  border: solid;
`;

const Text = styled.p`
  color: #4ba695;
  font-size: 1.5em;
  font-weight: bolder;
  text-align: center;
`;

const urlBase =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapatricia/";

function Profile(props) {
  const [perfil, setPerfil] = useState([]);
  const [choiceProfile, setChoiceProfile] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    choosePerson();
  }, [perfil]);

  const getProfile = () => {
    axios
      .get(`${urlBase}person`)
      .then((res) => {
        setPerfil(res.data.profile);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const choosePerson = (id, response) => {
    const body = {
      id: id,
      choice: response,
    };

    axios
      .post(`${urlBase}choose-person`, body)
      .then((answer) => {
        getProfile();
        console.log(answer);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onClickLike = () => {
    setChoiceProfile(true);
    getProfile();
  };

  const onClickDislike = () => {
    setChoiceProfile(false);
    getProfile();
  };
  console.log(choiceProfile);

  return (
    <MainDiv>
      <MiddleDiv className="App-header">
        <img src={baixados} />
        <Text>{perfil.name}</Text>
        <Text>{perfil.age}</Text>
        <ImagePhoto src={perfil.photo} />
        <Text>{perfil.bio}</Text>
        <Imagem>
          <ImageIcon onClick={onClickLike} src={core} />
          <ImageIcon onClick={onClickDislike} src={recusar} />
        </Imagem>
      </MiddleDiv>
    </MainDiv>
  );
}

export default Profile;
