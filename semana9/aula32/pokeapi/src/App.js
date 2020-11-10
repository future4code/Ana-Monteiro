import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import styled from "styled-components";

const MotherDiv = styled.div`
  text-align: center;
  padding: 6em;
  background-color: #d9886a;
  margin: 10em;
`;

const Title = styled.div`
  font-size: 25px;
  color: #732d14;
  margin: 1em;
`;

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    pegaPokemon();
  }, []);

  const pegaPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <MotherDiv className="App">
      {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
      <Title>Pokemóns ATIVAR</Title>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>

        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </MotherDiv>
  );
}

export default App;
