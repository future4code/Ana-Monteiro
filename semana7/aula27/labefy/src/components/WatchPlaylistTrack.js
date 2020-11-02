import React from "react";
import styled from "styled-components";
import axios from "axios";


class WatchPlaylistTrack extends React.Component {

  state = {
    playlistsTrack: [],
    playlistValueName: "",
    playlistValueArtist: "",
    playlistValueUrl: ""
  }

  componentDidMount = () => {
    this.catchPlaylistsTrack()
  }
  
  catchPlaylistsTrack = (id) => {
    axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
                headers: {
                    Authorization: "anapatricia-monteiro-dumont"
                },
            }
    )
        .then((response) => {
            this.setState({playlistsTrack: response.data.result.tracks})

        })
        .catch((error)=>{
            console.log("Não foi possível deletarREEEEEE!")
        })
    }

    createPlaylistsTrack = (id) => {

      const body ={
          name: this.state.playlistValueName,
          artist: this.state.playlistValueArtist,
          url: this.state.playlistValueUrl
      }
      axios.post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
          body,
          {
          headers:{
              Authorization: "anapatricia-monteiro-dumont"
          }
        }
      )
      .then((response) => {
        this.setState({playlistValueName: "", playlistValueArtist:"", playlistValueUrl:""})
        this.catchPlaylistsTrack();
        console.log("FUNFOU CRIAR MUSICA NA PRAYLISTA")
      })
      .catch((error) => {
          console.log(error.message)
      })
    }

    onChangePlaylistValueName = (event) => {
      this.setState({playlistValueName: event.target.value})
  }

  onChangePlaylistValueArtist = (event) => {
    this.setState({playlistValueArtist: event.target.value})
}


onChangePlaylistValueUrl = (event) => {
  this.setState({playlistValueUrl: event.target.value})
}
   
  render(){

  return (
    <div>
      <input
        placeholder="Escrever nome da sua Musica"
        value={this.state.playlistValueName}
        onChange={this.onChangePlaylistValueName}
        />
        <input
        placeholder="Escrever nome do Artista/ Banda"
        value={this.state.playlistValueArtist}
        onChange={this.onChangePlaylistValueArtist}
        />
        <input
        placeholder="Escrever URL da sua música"
        value={this.state.playlistValueUrl}
        onChange={this.onChangePlaylistValueUrl}
        />
    </div>
  );
}
}

export default WatchPlaylistTrack;