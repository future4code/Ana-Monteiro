import logo from './logo.svg';
import React from "react";
import axios from "axios";
import styled from "styled-components";

class App extends React.Component {

  state = {
    rocketList: [],
    selectedRocketUrl: "",
    imagem: []

  }
  componentDidMount(){
    this.fetchRockets()
  }

  fetchRockets = () =>{
    const apiUrl ="https://api.spacexdata.com/v3/rockets"
    axios.get(apiUrl).then((response)=> {
      this.setState({rocketList: response.data})
    })
  }

  onChangeSelect = (event) => {
    console.log("selecionou algo", event.target.value)
    const apiUrl1 =`https://api.spacexdata.com/v3/rockets/${{rocket_id}}`
    axios.get(apiUrl1).then((response)=> {
      console.log("hauhsuhau")
      this.setState({imagem:response.data})
    })
  }


  render(){   
    console.log(this.state.rocketList)

   const optionList= this.state.rocketList.map((rocket) =>{
   return <option key={rocket.rocket_name}>
            {rocket.rocket_name}
          
   </option>
   })

   console.log(optionList)
  return (
    <div>
      <select onChange={this.onChangeSelect}>
        {optionList}
      </select>
      <img src ={this.state.imagem[0]}/>

    </div>
  );
}
}

export default App;
