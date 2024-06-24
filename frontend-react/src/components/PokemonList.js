import React, { useState, useEffect } from "react";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>API de Pokemons</h2>
      <ul>
        {pokemons.map((poke) => (
          <li key={poke.name}>
            <h3>{poke.name}</h3>
            <p>{poke.url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
