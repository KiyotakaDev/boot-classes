import React, { useState, useEffect } from 'react';
import { getPokemonByNumber } from '../utils/pokeFetch';

const PokeFetch = ({ pokemonNumber }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonByNumber(pokemonNumber);
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching pokemon:', error);
      }
    };

    fetchPokemon();
  }, [pokemonNumber]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className='contain'>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>Abilities:</h3>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Types:</h3>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeFetch;
