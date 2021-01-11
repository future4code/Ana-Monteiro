import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { form, onChange } = useForm({ email: "", password: "" });

  const history = useHistory();

  const goToSubscribe = () => {
    history.push("/cadastro");
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  console.log(form);

  return (
    <div>
      Login
      <input name="email" value={form.email} onChange={handleInputChange} />
      <input
        name="password"
        value={form.password}
        onChange={handleInputChange}
      />
      <button>Login</button>
      <button onClick={goToSubscribe}>Cadastre-se</button>
    </div>
  );
};

export default Login;
