import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MainDiv,
  Image,
  ImageIcon,
  MiddleDiv,
  ImagePhoto,
  Text,
  ImageLogo,
  ImageIcon2,
} from "./styled";

import core from "../img/core.png";
import recusar from "../img/recusar.png";
import baixados from "../img/baixados.png";
import crushes from "../img/crushes.svg";

const urlBase =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapatricia/";

function Profile(props) {
  const [profile, setProfile] = useState([]);

  const [choiceProfile, setChoiceProfile] = useState(false);

  const [renderState, setRenderState] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    choosePerson();
  }, [renderState]);

  const getProfile = () => {
    axios
      .get(`${urlBase}person`)
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const choosePerson = () => {
    const body = {
      id: profile.id,
      choice: choiceProfile,
    };

    axios
      .post(`${urlBase}choose-person`, body)
      .then((answer) => {
        console.log(answer.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onClickLike = () => {
    setChoiceProfile(true);
    getProfile();
    setRenderState(!renderState);
  };

  const onClickDislike = () => {
    setChoiceProfile(false);
    getProfile();
    setRenderState(!renderState);
  };

  return (
    <MainDiv>
      <MiddleDiv>
        <ImageLogo src={baixados} />
        <ImageIcon2 src={crushes} onClick={props.onClickProfile} />
        <Text>{profile.name}</Text>
        <Text>{profile.age}</Text>
        <ImagePhoto src={profile.photo} />
        <Text>{profile.bio}</Text>
        <Image>
          <ImageIcon onClick={onClickLike} src={core} />
          <ImageIcon onClick={onClickDislike} src={recusar} />
        </Image>
      </MiddleDiv>
    </MainDiv>
  );
}

export default Profile;
