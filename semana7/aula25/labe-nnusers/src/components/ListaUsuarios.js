import React from "react";
import axios from "axios";


export default class ListaUsuarios extends React.Component{

    state = {
        listaUsuarios: []
    }

    componentDidMount = () => {
        this.mostrarUsuario()
    }

    mostrarUsuario = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "anapatricia-monteiro-dumont",
                },
            }
        )
        .then((response) => {
            this.setState({listaUsuarios: response.data});
        })
        .catch((erro) =>{
            alert("Não deu para mostrar a lista de usuários")
        })  
    }
    render(){
        const atualizaLista = this.state.listaUsuarios.map((user) => {
            return (<p key={user.id}>
                {user.name}
            </p>)
        })
        return(
            <div>
                {atualizaLista}
            </div>
        )
    }
}