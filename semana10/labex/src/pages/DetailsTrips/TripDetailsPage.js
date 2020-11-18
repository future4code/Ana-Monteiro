import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { MainDiv } from "./styled";
import back from "../img/Plane2.png";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useGetTrips } from "../../hooks/useGetTrips";
import axios from "axios";

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({});
  const history = useHistory();
  const pathParams = useParams();
  const id = pathParams.id;

  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/anapatricia-monteiro/trip/${id}`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
        console.log(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <div key={trip.id}>
        <h1>Trip details</h1>
        <p>{trip.name}</p>
        <p>{trip.planet}</p>
        <img src={back} onClick={goBack} />
      </div>
    </MainDiv>
  );
};

export default TripDetailsPage;
