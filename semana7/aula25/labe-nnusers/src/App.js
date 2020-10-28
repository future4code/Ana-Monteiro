import React from "react";
import Cadastro from "./components/Cadastro.js";
import { render } from '@testing-library/react';
import ListaUsuarios from './components/ListaUsuarios.js';
import axios from "axios";
import styled from "styled-components";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const MudarBotao1 = styled.button`
    padding: 10px;
    background-color: pink;
    text-decoration: none;
    align-self: center;
    margin-left: 34em;

`


class App extends React.Component {

  state = {
   cadastroPagina: true
  }

  mudarPagina = () => {
    this.setState({
     cadastroPagina: !this.state.cadastroPagina,
    });
  }


render() {
  const aparecerTela = this.state.cadastroPagina? (<Cadastro />) : <ListaUsuarios />

  return(
    <div>  
    {aparecerTela}
    <MudarBotao1 onClick = {this.mudarPagina}>Mudar de Página </MudarBotao1>
  </div>
  )
  }
}

export default App
