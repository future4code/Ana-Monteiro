import React from "react";
import axios from "axios";
import Styled from "styled-components";
import App from "../App";


export default class Cadastro extends React.Component{

    state = {
        name: "",
        email: "",
        nameValue: "",
        emailValue: ""
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
            this.setState({name: response.data});
            this.setState({email: response.data})
        })
        .catch((erro) =>{
            console.log(erro.message)
        })  
    }

    criarUsuario = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
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
            this.setState({nameValue: ""})
            this.setState({emailValue: ""})
            this.pegarUsuario();
            console.log("Legal, você inseriu novo usuário")
        })
        .catch((error)=> {
            console.log(error.message)
        })
    };

    onChangeInputName = (event) =>{
        this.setState({nameValue: event.target.value})
    };

    onChangeInputEmail = (event)=>{
        this.setState({emailValue: event.target.value})
    }

    render(){
        return(
            
            <div>
                <button onClick={this.props.botaoLogin}>Ver lista cadastrada</button>
                <h4>Nome</h4>
                <input
                placeholder = "Nome do usuário"
                value={this.state.nameValue}
                onChange={this.onChangeInputName}
                />
                <h4>Email</h4>
                <input
                placeholder ="Email do usuário"
                value={this.state.emailValue}
                onChange={this.onChangeInputEmail}
                />

                <button onClick ={this.criarUsuario}>Cadastro</button>
                
                
            </div>
        )
    }
}

