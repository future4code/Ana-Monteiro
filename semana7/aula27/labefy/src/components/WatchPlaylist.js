import React from "react";
import styled from "styled-components";
import axios from "axios";
import WatchPlaylistTrack from "./WatchPlaylistTrack";
import App from "../App";

const MainDiv = styled.div`
font-size: 20px;
`

    class WatchPlaylist extends React.Component {

        state = {
            playlists: [],
            playlistsValue: "",
            watchMusic: true,
            playlistsTrack: [],
            playlistsValueTrackName: "",
            playlistsValueTrackArtist: "",
            playlistsValueTrackUrl: "",
            createTrack: true,
            selPlaylistId: ""
        }

        componentDidMount = () => {
            this.catchPlaylists();
        }

        componentDidUpdate = ()=>{
            this.catchPlaylistsTrack();
        }

        
        catchPlaylists = () => {
            axios.get(
                    }
                    this.setState({playlists: response.data.result.tracks})
                    console.log("peguei o id da musica")
                    this.setState({playlistsTrack: response.data.result.tracks})

                })
                .catch((error)=>{
                    console.log("Não foi possível deletar!")
                })
            }



        deletePlaylist = (id) => {
            axios.delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{
                    headers: {
                        Authorization: "anapatricia-monteiro-dumont"
                    },
                }
              )
            .then(() => {
                alert("Playlist deletada com sucesso!");
                this.catchPlaylists();
            })
            .catch((error)=>{
                console.log("Não foi possível deletar!")
            })
        }

        catchPlaylistsTrack = (id) => {
            axios.get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,{
                        headers: {
                            Authorization: "anapatricia-monteiro-dumont"
                        },
                    }
                )
                .then((response) => {
                    this.setState({playlists: response.data.result.tracks})

                })
                .catch((error)=>{
                    console.log("Não foi possível deletar!")
                })
            }

        wannaWatchMusic = () =>{
            this.setState({watchMusic: !this.state.watchMusic})
            }
        
    
      render(){

      return (
          this.state.playlists.map((playlist)=> {
              return (<MainDiv key={playlist.id}>
                <button onClick={() => {this.catchPlaylistsTrack(playlist.id)}}>
                    +
                </button>
                <div>{playlist.name}</div>
                <div>{playlist.artist}
                <audio src={playlist.url} value={playlist.url} controls>{playlist.url}</audio>
                </div>
                <button  onClick={() => {this.deletePlaylist(playlist.id)}}>
                        X
                </button>
              
            </MainDiv>
            );
            
          })
      );
    }
    }

export default WatchPlaylist;
