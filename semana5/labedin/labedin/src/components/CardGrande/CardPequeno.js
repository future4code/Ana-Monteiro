import React from 'react';
import './CardGrande.css';

function CardPequeno(props){
    return (
        <div className="bigcard-container">
            <img src={props.imagem}/>
            <div>
                <h5>{props.contato}</h5>
                <p>{props.descricao}</p>
                <p>{props.email}</p>
                <p>{props.endereco}</p>
            </div>
        </div>

    )
}

export default CardPequeno;