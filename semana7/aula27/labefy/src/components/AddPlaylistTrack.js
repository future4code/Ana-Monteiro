import React from "react";
import styled from "styled-components";
import api from "../services/api";

class AddPlaylistTrack extends React.Component {
  state = {
    isEditing: false,
    name: "",
    artist: "",
    url: "",
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleArtistChange = (event) => {
    const newArtistValue = event.target.value;

    this.setState({ artist: newArtistValue });
  };

  handleUrlChange = (event) => {
    const newUrlValue = event.target.value;

    this.setState({ url: newUrlValue });
  };

  handleToggleEdition = () => {
    this.setState({ isEditing: true });
  };

  getPlaylistDetails = (id) => {
    api
      .get(`/labefy/playlists/${id}/tracks`)
      .then((response) => {
        this.props.setPlaylistDetails(response.data.result.tracks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleAddTrackPlaylist = (id) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    api
      .post(`/labefy/playlists/${id}/tracks`, body)
      .then((response) => {
        this.setState({ name: "", artist: "", url: "" });
        this.getPlaylistDetails(id);
        alert("Playlist editada com sucesso!");
        console.log(response);
      })
      .catch((error) => {
        alert("Erro ao editar Playlist!");
        console.log(error.message);
      });
  };

  render() {
    return this.state.isEditing ? (
      <div>
        <p>Adicionar tracks a playlist:</p>
        <input
          placeholder="Nome da música"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <br />

        <input
          placeholder="Artista"
          type="text"
          value={this.state.artist}
          onChange={this.handleArtistChange}
        />
        <br />

        <input
          placeholder="Url"
          type="url"
          value={this.state.url}
          onChange={this.handleUrlChange}
        />
        <br />

        <button
          onClick={() => this.handleAddTrackPlaylist(this.props.playlist.id)}
        >
          Salvar
        </button>
      </div>
    ) : (
      <button onClick={this.handleToggleEdition()}>Adicionar tracks</button>
    );
  }
}

export default AddPlaylistTrack;
