import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";

import { useHistory } from "react-router-dom";

const Cadastro = () => {
  const history = useHistory();

  const { form, onChange } = useForm({ username: "", email: "", password: "" });

  const goBack = () => {
    history.goBack();
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const handleCreateUser = () => {
    const body = {
      email: form.email,
      password: form.password,
      username: form.username,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup",
        body
      )
      .then(() => {
        alert("ta funcionando");
      })
      .catch((error) => {
        alert("Erro ao criar usuário");
      });
  };

  console.log(form);
  return (
    <div>
      Cadastro
      <input
        placeholder="Nome"
        name="username"
        onChange={handleInputChange}
        type="name"
        value={form.name}
      />
      <input
        placeholder="Email"
        name="email"
        onChange={handleInputChange}
        type="email"
        value={form.email}
      />
      <input
        placeholder="Senha"
        name="password"
        onChange={handleInputChange}
        type="password"
        value={form.password}
      />
      <button onClick={handleCreateUser}>Cadastrar</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default Cadastro;
