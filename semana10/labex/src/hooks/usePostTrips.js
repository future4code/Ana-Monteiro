import React, { useState, useEffect } from "react";
import axios from "axios";

export function usePostTrips(url, initialState) {
  const [trip, setTrips] = useState(initialState);

  useEffect(() => {
    console.log("To funfando Post Trips!");
    axios
      .post(url)
      .then((response) => {
        setTrips(response.data.trip);
      })
      .catch((erro) => {
        console.log(erro, "Erro no GetTrips");
      });
  }, [url]);

  return trip;
}
