import { useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);

  async function buscarPokemon() {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
    const dados = await resposta.json();
    setPokemon(dados);
  }

  return (
    <div>
      <h1>Pokémon</h1>
      <button onClick={buscarPokemon}>Buscar Pokémon</button>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Número: {pokemon.id}</p>
        </div>
      )}
    </div>
  );
}

export default App;
