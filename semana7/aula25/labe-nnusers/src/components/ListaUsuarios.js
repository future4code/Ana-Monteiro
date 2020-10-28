import React from "react";
import axios from "axios";
import styled from "styled-components";
import Cadastro from "./Cadastro";
import DetalheUsuarios from "./DetalheUsuarios";

const DeletarBotao= styled.span`
    color: red;
    margin-left: 10px;

`
const ContainerUsuario = styled.div`
    border: dotted #A61464;
    margin: 10px;
    background-color: RGB(162,113,99,0.15);

`
const TituloLista = styled.p`
   color: #0C0A0D;
   text-align: center;
`
const BotaoInfo = styled.button`
    color: #0C0A0D;
    display: inline;
    margin: 10px;
`


export default class ListaUsuarios extends React.Component{
 
    state = {
        listaUsuarios: [],
        maisInfo: false,
        usuarioSelecionado: {}
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
    };

    verPerfil = () =>{
        this.setState({maisInfo: !this.state.maisInfo})
    }

    pegarPerfil = (userId) => {
        this.verPerfil()
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
            headers:{
                Authorization: "anapatricia-monteiro-dumont"
            }
        }).then(response => {
            this.setState({usuarioSelecionado: response.data})
        }).catch(error => {
            console.log(error.message)
        })
    }

    deletarUsuario = (userId)=> {
        const confirm = window.confirm("Tem certeza que deseja deletar?")
        if(confirm === true){
            axios.delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                {
                    headers: {
                        Authorization: "anapatricia-monteiro-dumont",
                    },
                }
            )
            .then((response)=>{
                window.confirm("Tem certeza que deseja deletar?")
                this.mostrarUsuario();
            }).catch((error)=>{
                console.log(error.message)
            })
        }
        
    }


    render(){
        const atualizaLista = this.state.listaUsuarios.map((user) => {
            return (
            <div>
                <p key={user.id}>
                {user.name}
                </p>
                <DeletarBotao onClick ={() => this.deletarUsuario(user.id)}>
                    X
                </DeletarBotao>

            </div>
            );
        });

        return(
            <ContainerUsuario>
                <TituloLista>Lista de Usuários Cadastrados</TituloLista>
                <TituloLista> {atualizaLista} </TituloLista>
                
            </ContainerUsuario>
        )
    }
}