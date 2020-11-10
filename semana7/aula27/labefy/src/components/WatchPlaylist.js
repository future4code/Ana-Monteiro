import React from "react";
import styled from "styled-components";
import axios from "axios";
import AddPlaylistTrack from "./AddPlaylistTrack";
import App from "../App";
import Playlists from "./Playlists";
import api from "../services/api";

const MainDiv = styled.div`
  font-size: 20px;
`;

class WatchPlaylist extends React.Component {
  state = {
    playlists: [],
    playlistsValue: "",
    watchMusic: true,
    playlistsTrack: [],
    createTrack: true,
    playlistDetail: [],
    selPlaylistId: "",
  };

  componentDidMount = () => {
    this.catchPlaylists();
  };

  componentDidUpdate = () => {
    this.catchPlaylistsTrack();
  };

  setPlaylistDetails = (tracks) => {
    this.setState({ playlistDetail: tracks });
  };

  catchPlaylists = () => {
    api
      .get("/labefy/playlists")
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
        console.log("TA INU O CACTH");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  deletePlaylist = (id) => {
    api
      .delete(`/labefy/playlists/${id}`)
      .then(() => {
        alert("Playlist deletada com sucesso!");
        this.catchPlaylists();
      })
      .catch((error) => {
        console.log("Não foi possível deletar!");
      });
  };

  catchPlaylistsTrack = (id) => {
    api
      .get(`/labefy/playlists/${id}/tracks`)
      .then((response) => {
        this.setState({ playlists: response.data.result.tracks });
      })
      .catch((error) => {
        console.log("Não foi possível deletar!");
      });
  };

  render() {
    const renderizaButton = this.state.playlists.map((playlist) => {
      return (
        <p key={playlist.id}>
          <button
            onClick={() => {
              this.deletePlaylist(playlist.id);
            }}
          >
            Excluir essa Playlist acima
          </button>
          <button
            onClick={() => {
              this.catchPlaylistsTrack(playlist.id);
            }}
          >
            Ver Músicas da Playlist abaixo
          </button>
        </p>
      );
    });

    return (
      <MainDiv>
        <Playlists
          playlists={this.state.playlists}
          setPlaylistDetails={setPlaylistDetails}
        />

        {renderizaButton}
      </MainDiv>
    );
  }
}

export default WatchPlaylist;
