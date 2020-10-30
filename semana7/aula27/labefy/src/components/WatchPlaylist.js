import React from "react";
import styled from "styled-components";
import axios from "axios";


    class WatchPlaylist extends React.Component {

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
    
      render(){
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
            {renderedPlaylists}
        </div>
      );
    }
    }

export default WatchPlaylist;
