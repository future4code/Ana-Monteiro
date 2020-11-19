import { MainDiv } from "./styled";
import { useHistory } from "react-router-dom";
import back from "../img/Plane2.png";
import { useGetTrips } from "../../hooks/useGetTrips";
import React, { useEffect, useState } from "react";
import axios from "axios";

export function CreateTripPage() {
  const history = useHistory();

  const [name, setName] = useState("");

  const goBack = () => {
    history.goBack();
  };

  const handleName = (event) => {
    setName(event.target.name);
  };

  useEffect(() => {
    createTrip();
  }, []);

  const createTrip = () => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/anapatriciamonteiro-dumont/trips",
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log("olar");
        setName(res.data.trip.name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MainDiv>
      <h1>Create Trip Page</h1>
      <input value={name} onChange={handleName}></input>
      <button onClick={createTrip}>Criar viagem</button>
      <img src={back} onClick={goBack} />
    </MainDiv>
  );
}

export default CreateTripPage;
