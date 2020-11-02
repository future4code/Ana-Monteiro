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
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                {
                    headers: {
                        Authorization: "anapatricia-monteiro-dumont"
                    },
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
                    console.log("peguei o id da musica")
                    this.setState({playlistsTrack: response.data.result.tracks})

                })
                .catch((error)=>{
                    console.log("Não foi possível deletar!")
                })
            }

          createPlaylistsTrack = (id) => {
              const body ={
                  "name": this.state.playlistsValueTrackName,
                  "artist": this.state.playlistsValueTrackArtist,
                   "url": this.state.playlistsValueTrackUrl
              }
              axios.post(
                  `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.selPlaylistId}/tracks`,
                  body,
                  {
                  headers:{
                      Authorization: "anapatricia-monteiro-dumont"
                  }
                }
              )
              .then((response) => {
                this.setState({playlistsValueTrackName: "", playlistsValueTrackArtist:"", playlistsValueTrackUrl:""})
                this.catchPlaylistsTrack(this.state.selPlaylistId);
                console.log("FUNFOU CRIAR MUSICA NA PRAYLISTA")
              })
            }
          
        changeCreateTrack = () =>{
            this.setState({createTrack: !this.state.createTrack})
        }

      render(){
        const currentNewTrack = this.state.createTrack? <WatchPlaylistTrack/> : <App/>;

        const renderizaPlaylist = this.state.playlists.map((playlist)=> {
            return <p key={playlist.id}>
              <button onClick={() => {this.catchPlaylistsTrack(playlist.id)}}>
                  Ver Músicas da Playlist abaixo
              </button>
              <div>{playlist.name}</div>
              <button  onClick={() => {this.deletePlaylist(playlist.id)}}>
                        Excluir essa Playlist acima
              </button>
              </p>
              })

        const renderizaTrack = this.state.playlistsTrack.map((playlistTrack)=> {
            return <p key={playlistTrack.id} value={playlistTrack.id}>
              <div>{playlistTrack.name}</div>
              <div>{playlistTrack.artist}</div>
              <audio src={"http://spoti4.future4.com.br/1.mp3"} controls></audio>
              <button onClick={this.createPlaylistsTrack}  key={playlistTrack.id} value={playlistTrack.id}>Criar Músicas</button>
              </p>
              })

              return (
                <MainDiv>{renderizaPlaylist}
                    {renderizaTrack}
                    {currentNewTrack}

                </MainDiv>
              
            )
            }
        }
    
export default WatchPlaylist;
