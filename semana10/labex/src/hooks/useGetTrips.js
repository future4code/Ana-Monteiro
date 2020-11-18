import React, { useState, useEffect } from "react";
import axios from "axios";

export function useGetTrips(url, initialState) {
  const [trip, setTrips] = useState(initialState);

  useEffect(() => {
    console.log("To funfando Get Trips!");
    axios
      .get(url)
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((erro) => {
        console.log(erro, "Erro no GetTrips");
      });
  }, [url]);

  return trip;
}
