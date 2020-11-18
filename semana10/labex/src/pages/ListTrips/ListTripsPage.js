import React from "react";
import {
  MainDiv,
  MiddleDiv,
  Text,
  TextTitle,
  Image,
  MiddleDiv1,
} from "./styled";
import { useHistory } from "react-router-dom";
import back from "../img/Plane2.png";
import { useGetTrips } from "../../hooks/useGetTrips";

const ListTripsPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/anapatriciamonteiro-dumont/";

  const getTrip = useGetTrips(`${baseUrl}trips`, undefined);
  console.log("getTrip", getTrip);

  return (
    <MainDiv>
      <MiddleDiv1>
        <TextTitle>Lista de Viagens</TextTitle>
        <Image src={back} onClick={goBack} />
      </MiddleDiv1>
      {getTrip &&
        getTrip.map((trip) => {
          return (
            <MiddleDiv key={trip.id}>
              <Text>Nome da viagem : {trip.name}</Text>
              <Text>Descrição da Viagem : {trip.description}</Text>
              <Text>Duração em dias : {trip.durationInDays}</Text>
              <Text>Data : {trip.date}</Text>
            </MiddleDiv>
          );
        })}
    </MainDiv>
  );
};

export default ListTripsPage;
