import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MainDiv } from "./styled";
import back from "../img/Plane2.png";
import Guide from "../img/Guide.png";
import Ticket from "../img/Ticket.png";

export function LoginAdmPage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/listtripspage");
    }
  }, [history]);

  const login = () => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/anapatriciamonteiro-dumont/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/listtripspage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goBack = () => {
    history.goBack();
  };

  const goToCreateTripPage = () => {
    history.push("/createtrippage/:id");
  };

  return (
    <MainDiv>
      <h1>Adm Page</h1>
      <input value={email} placeholder="Email" onChange={handleEmail} />
      <input
        value={password}
        type="senha"
        placeholder="Senha"
        onChange={handlePassword}
      />
      <img src={back} onClick={goBack} />
      <img src={Guide} onClick={login} />
      <img src={Ticket} onClick={goToCreateTripPage} />
    </MainDiv>
  );
}
