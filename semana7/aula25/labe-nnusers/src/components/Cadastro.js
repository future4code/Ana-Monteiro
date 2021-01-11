import React from "react";
import axios from "axios";
import styled from "styled-components";
import App from "../App";

const ContainerCadastro = styled.div`
    border: dotted #A61464;
    padding: 10px;
    margin: 10px;
    background-color: RGB(162,113,99,0.15);
`
const TituloFormulario = styled.p`
   color: #0C0A0D;
   text-align: center;
`

const MudarBotao = styled.button`
    padding: 10px;
    background-color: pink;
    text-decoration: none;
`

const Alterando2 = styled.div`
    display: flex;
    justify-content: center;
`

export default class Cadastro extends React.Component{

    state = {
        nome: "",
        email: "",
        nomeValor: "",
        emailValor: ""
    };

    pegarUsuario = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "anapatricia-monteiro-dumont",
                },
            }
        )
        .then((response) => {
            this.setState({nome: response.data});
            this.setState({email: response.data})
        })
        .catch((erro) =>{
            console.log(erro.message)
        })  
    }

    criarUsuario = () => {
        const body = {
            name: this.state.nomeValor,
            email: this.state.emailValor
        };

        axios
        .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
                headers: {
                    Authorization: "anapatricia-monteiro-dumont"
                },
            }
        )
        .then((response)=>{
            this.setState({nomeValor: "", emailValor: ""})
            this.pegarUsuario();
            console.log("Legal, você inseriu novo usuário")
        })
        .catch((error)=> {
            console.log(error.message)
        })
    };

    onChangeEntradaNome = (event) =>{
        this.setState({nomeValor: event.target.value})
    };

    onChangeEntradaEmail = (event)=>{
        this.setState({emailValor: event.target.value})
    }

    render(){
        return(
            
            <ContainerCadastro>
                <TituloFormulario>
                <h4>Nome</h4>
                <input
                placeholder = "Nome do usuário"
                value={this.state.nomeValor}
                onChange={this.onChangeEntradaNome}
                />
                <h4>Email</h4>
                <input
                placeholder ="Email do usuário"
                value={this.state.emailValor}
                onChange={this.onChangeEntradaEmail}
                />
                </TituloFormulario>
                <Alterando2><MudarBotao onClick ={this.criarUsuario}>Cadastro</MudarBotao></Alterando2>
    
                
                
            </ContainerCadastro>
        )
    }
}

