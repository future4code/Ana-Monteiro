import React from "react";


export default class Cadastro extends React.Component{

    state = {
        inputNome: "",
        inputEmail: ""
    };

    render(){
        return(
            <div>
                <h1>Nome</h1>
                <input
                placeholder = "Nome do usuário"
                value={this.state.inputNomeValue}
                onChange={this.onChangeInputNomeValue}
                />
                <input
                placeholder ="Email do usuário"
                value={this.state.inputEmailValue}
                onChange={this.state.onChangeInputNomeEmail}
                
                />

                <button>Salvar</button>

            </div>
        )
    }
}

