import React from "react";
import styled from "styled-components";
import FormUser from "./components/FormUser";
import WatchPlaylist from "./components/WatchPlaylist";
import labefy from "./img/Labefy.jpg";

class App extends React.Component {

  state ={
    formUser: true,
  }

  changePageUser = () =>{
    this.setState({formUser: !this.state.formUser})
    }
  

  render(){
    const currentPage = this.state.formUser? <FormUser/> : <WatchPlaylist/>;

  return (
    <div>
      <img src={labefy}/>
      <h1>Labefy</h1>
      {currentPage}
      <button onClick ={this.changePageUser}>Ver Playlist</button>

    </div>
  );
}
}
export default App;
