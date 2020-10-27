import React from "react";
import Cadastro from "./components/Cadastro.js";
import { render } from '@testing-library/react';
import ListaUsuarios from './components/ListaUsuarios.js';
import axios from "axios";

export default class App extends React.Component {

    



render() {
  return(
    <div>
  <Cadastro/>
  <ListaUsuarios/>
  </div>
  )
}

}

