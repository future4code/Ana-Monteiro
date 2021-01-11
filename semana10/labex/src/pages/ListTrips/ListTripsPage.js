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

  const getTripDetails = (id) => {
    history.push(`/detailstrips/${id}`);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

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
              <Text onClick={() => getTripDetails(trip.id)}>
                Nome da viagem : {trip.name}
              </Text>
              <button onClick={logOut}>Sair lista</button>
            </MiddleDiv>
          );
        })}
    </MainDiv>
  );
};

export default ListTripsPage;
