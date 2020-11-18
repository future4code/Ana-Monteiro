import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MainDiv } from "./styled";
import back from "../img/Plane2.png";
import Guide from "../img/Guide.png";
import Ticket from "../img/Ticket.png";
import axios from "axios";

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
      history.push("/detailstrips");
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
        history.push("/detailstrips");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const goBack = () => {
    history.goBack();
  };

  const goToCreateTripPage = () => {
    history.push("/createtrippage");
  };

  return (
    <MainDiv>
      <h1>Adm Page</h1>;<p>Email:</p>
      <input value={email} onChange={handleEmail} />
      <p>Senha:</p>
      <input value={password} onChange={handlePassword} />
      <img src={back} onClick={goBack} />
      <img src={Guide} onClick={login} />
      <img src={Ticket} onClick={goToCreateTripPage} />
    </MainDiv>
  );
}
