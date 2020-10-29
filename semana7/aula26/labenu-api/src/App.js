import logo from './logo.svg';
import React from "react";
import axios from "axios";
import styled from "styled-components";

class App extends React.Component {

  state = {
    rocketList: [],
    selectedRocketUrl: ""

  }
  componentDidMount(){
    this.fetchRockets()
  }

  fetchRockets = () =>{
    const apiUrl ="https://api.spacexdata.com/v3/rockets"
    axios.get(apiUrl).then((response)=> {
      console.log("OI QUERIDO, TE AMO", response)
      this.setState({rocketList: response.data})
    })
  }

  render(){   
    console.log(this.state.rocketList)

   const optionList= this.state.rocketList.map((rocket) =>{
   return <option>{rocket.rocket_name}</option>

   })
  return (
    <div>
      <select>
        <option>BANANA</option>
        <option>CAQUI</option>
        <option>MELANCIA</option>
      </select>
    </div>
  );
}
}

export default App;
