import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MotherDiv = styled.div`
  text-align: center;
  padding: 6em;
  background-color: #d9886a;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 25px;
  color: #732d14;
`;

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, []);

  useEffect(() => {
    if (props.pokemon !== pokemon) {
      pegaPokemon(props.pokemon);
    }
  }, [props.pokemon]);

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MotherDiv>
      <Title>{pokemon.name}</Title>
      <Title>{pokemon.weight} Kg</Title>
      {pokemon.types && <Title>{pokemon.types[0].type.name}</Title>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </MotherDiv>
  );
}

export default PokeCard;
