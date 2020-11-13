import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MainDiv,
  MiddleDiv,
  ImageLogo,
  OrganizeImages,
  BackImage,
  ImageDel,
  OrganizeImages2,
  ImageMatch,
  OrganizeImages3,
  Text,
} from "./styled";
import baixados from "../img/baixados.png";
import back from "../img/back.svg";
import del from "../img/del.svg";

const urlBase =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapatricia/";

function Matches(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(`${urlBase}matches`)
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const deleteMatches = () => {
    console.log("ta deletando");
    axios
      .put(`${urlBase}clear`)
      .then((response) => {
        alert("Matches Deletados!");
        getMatches();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const mapList = matches.map((dados) => {
    return (
      <OrganizeImages3>
        <ImageMatch src={dados.photo} />
        <Text>{dados.name}</Text>
      </OrganizeImages3>
    );
  });

  return (
    <MainDiv>
      <MiddleDiv>
        <OrganizeImages>
          <ImageLogo src={baixados} />
          <BackImage src={back} onClick={props.onClickMatches} />
        </OrganizeImages>
        <OrganizeImages2>
          {mapList}
          <ImageDel src={del} onClick={deleteMatches} />
        </OrganizeImages2>
      </MiddleDiv>
    </MainDiv>
  );
}

export default Matches;
