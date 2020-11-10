import Axios from "axios";
import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import axios from "axios";

class FormUser extends React.Component {

    state = {
        playlists: [],
        playlistsValue: ""
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

    createPlaylists = () => {
        const body = {
            name: this.state.playlistValue
        };

        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            body,
            {
                headers: {
                    Authorization: "anapatricia-monteiro-dumont"
                }
            }
        )
        .then((response) => {
            this.setState({playlistsValue: ""})
            this.catchPlaylists();
            console.log("legal vc criou praylista");
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    onChangePlaylistValue = (event) => {
        this.setState({playlistValue: event.target.value})
    }
    

  render(){

  return (
    <div>
        <div>
        <input
        placeholder="Escrever nome da sua Playlist"
        value={this.state.playlistValue}
        onChange={this.onChangePlaylistValue}
        />
        <button onClick={this.createPlaylists}>Criar Playlist</button>
      </div>
    </div>
  );
}
}
export default FormUser;
