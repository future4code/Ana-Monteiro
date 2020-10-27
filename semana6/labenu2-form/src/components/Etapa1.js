import React from 'react';

class Etapa1 extends React.Component {

    render(){
        return(
            <div>
                <h2>Etapa 1- Seus dados Gerais</h2>
                <p>Qual o seu nome?</p>
                <input></input>
                <p>Qual a sua idade?</p>
                <input></input>
                <p>Qual seu email?</p>
                <input></input>
                <p>Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino médio completo</option>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior Completo</option>
                </select>
            </div>
        );
    }}

export default Etapa1;





