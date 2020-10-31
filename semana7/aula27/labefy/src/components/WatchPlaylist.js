import React from "react";
import styled from "styled-components";
import axios from "axios";
import WatchPlaylistTrack from "./WatchPlaylistTrack";
import App from "../App";


    class WatchPlaylist extends React.Component {

        state = {
            playlists: [],
            playlistsValue: "",
            watchMusic: true,
            playlistsTrack: [],
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
                    this.setState({playlists: response.data.result.tracks})

                })
                .catch((error)=>{
                    console.log("Não foi possível deletar!")
                })

                {this.state.playlists.map(playlist=> {
                    if(id === playlist.id){
                        console.log(playlist.name)
                    }
                })}

            }

           
    
        wannaWatchMusic = () =>{
            this.setState({watchMusic: !this.state.watchMusic})
            }
    
      render(){

        const renderedPlaylistsTracks = this.state.playlists.map((playlist)=>{
            return (<p key={playlist.id}>
                <button onClick={() => {this.catchPlaylistsTrack(playlist.id)}}>
                    +
                </button>
            </p>
            );
        });


        const renderedPlaylists = this.state.playlists.map((playlist) => {
                return (<p key={playlist.id}>
                    {playlist.name}
                    <button  onClick={() => {this.deletePlaylist(playlist.id)}}>
                        X
                    </button>
                    </p>   
              );   
        });

      return (
        <div>
           
           <div>{renderedPlaylists}</div>
            <div>{renderedPlaylistsTracks}</div>
        </div>
      );
    }
    }

export default WatchPlaylist;
