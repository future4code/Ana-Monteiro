import logo from './logo.svg';
import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0.3em;
  padding-right: 1em;
  background-color: #A6370F;
  position: -webkit-sticky;

  h1{
    font-size: 40px;
    color: #260101;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
    border: thick double #730D1F;
  }

  select{
    font-size: 20px;
    padding: 1em;
    margin-right: 1em;
    color: #731022;
    border: 3mm ridge rgba(150, 100, 89);
  }

`

const RocketImg  = styled.div`
padding: 3em;
margin-right: 11px;
padding-left: 17em;

img {
  height: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const RocketDesc = styled.div`
padding-right: 6em;
padding-top: 1em;
margin: 3px;
display: flex;
justify-content: flex-start;
flex-direction: row;
font-size: 20px;
`

class App extends React.Component {

  state = {
    rocketList: [],
    selectedRocketImg: "",
    selectRocketDesc: ""

  }
  componentDidMount(){
    this.fetchRockets()
  }

  fetchRockets = () =>{
    const apiUrl ="https://api.spacexdata.com/v3/rockets?limit=200"
    axios.get(apiUrl).then((response)=> {
      this.setState({rocketList: response.data})
    })
  }

  onChangeSelect = (e) => {
    console.log("selecionou algo", e.target.value)
    const apiUrl2 =`https://api.spacexdata.com/v3/rockets/${e.target.value}`;
    axios.get(apiUrl2).then((response)=> {
      this.setState(
        {selectedRocketImg: response.data.flickr_images[1]}
        )
      this.setState(
        {selectedRocketDesc:response.data.description}
        )
    })
  }


  render(){   
    console.log(this.state.rocketList)

   const optionList= this.state.rocketList.map((rocket) =>{
   return <option value={rocket.rocket_id}>
            {rocket.rocket_name}
          
   </option>
   })

   console.log(optionList)
  return (
    <MainDiv>
      <h1>Space X - Rockets</h1>
      <select onChange={this.onChangeSelect}>
        {optionList}
      </select>
      <RocketImg>
        <img src ={this.state.selectedRocketImg} alt={this.state.selectedRocketImg}/>
        <RocketDesc>{this.state.selectedRocketDesc}</RocketDesc>
      </RocketImg>
      

    </MainDiv>
  );
}
}

export default App;
