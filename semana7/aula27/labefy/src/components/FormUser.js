import Axios from "axios";
import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import axios from "axios";

class FormUser extends React.Component {

    state = {
        playlists: [],
        playlistValue: ""
    }
    
    componentDidMount = () => {
        this.catchPlaylists();
    }

    catchPlaylists = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
                headers: {
                    Authorization: "anapatricia-monteiro-dumont"
                }
            }
        )
        .then((response) => {
            this.setState({playlists: response.data.result.list})
            console.log("TA INU O CACTH")
        })
        .catch((err)=> {
            console.log(err.message);
        });
    };




  render(){

  return (
    <div>
        <div>
        <input />
        <button>Criar Playlist</button>
      </div>
    </div>
  );
}
}
export default FormUser;
