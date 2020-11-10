import React from "react";
import styled from "styled-components";
import AddPlaylistTrack from "./AddPlaylistTrack";

class Playlists extends React.Component {
  render() {
    return this.props.playlists.map((playlist) => {
      return (
        <p key={playlist.id}>
          <div>{playlist.name}</div>
          <audio
            src={"http://spoti4.future4.com.br/1.mp3"}
            controls={"controls"}
          ></audio>
          <div>{playlist.artist}</div>
          <button
            onClick={() => {
              this.props.deletePlaylist(playlist.id);
            }}
          >
            Excluir essa Playlist acima
          </button>
          <AddPlaylistTrack
            playlist={playlist}
            setPlaylistDetails={this.props.setPlaylistDetails}
          />
        </p>
      );
    });
  }
}

export default Playlists;
