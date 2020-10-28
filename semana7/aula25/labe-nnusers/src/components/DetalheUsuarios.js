import React from "react";
import axios from "axios";
import styled from "styled-components";



class DetalheUsuarios extends React.Component {

  


render() {

  return(
    <div>  
    <p>Nome: </p>
    <p>Email:</p>
    <button onClick={this.props.saberInfo}/>
  </div>
  )
  }
}

export default DetalheUsuarios;