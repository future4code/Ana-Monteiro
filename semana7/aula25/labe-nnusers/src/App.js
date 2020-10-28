import React from "react";
import Cadastro from "./components/Cadastro.js";
import { render } from '@testing-library/react';
import ListaUsuarios from './components/ListaUsuarios.js';
import axios from "axios";
import Styled from "styled-components";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";



export default class App extends React.Component {

  state = {
    registroUsuario: true
  }

  indoListaUsuarios = () => {
    this.setState({
      registroUsuario: false,
    });
  }


render() {
  const aparecerTela = () => {
    if(this.state.registroUsuario){
      return <ListaUsuarios botaoLogin={this.fazerlogin} />
    }
  }
  return(
    <div>  
  <Cadastro/>
  <ListaUsuarios/>

  {aparecerTela}
  </div>
  )
}
}

