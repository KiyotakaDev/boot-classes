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
    return <div className='contain-title text-white'>Loading...</div>;
  }

  return (
    <div className='contain'>
      <h2 className='contain-title'>{pokemon.name}</h2>
      <div className='w-1/2 mx-auto h-[40%]'>
        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className='mx-auto  h-full' />
      </div>
      <div className='flex flex-col justify-center items-center py-10'>
        <h3 className="contain-title">Types:</h3>
        <ul className="flex gap-4 text-stale-500">
          {pokemon.types.map((type, index) => (
            <li key={index} className="contain-text px-10 py-2 text-center rounded-xl" style={{ background: `var(--${type.type.name}-color)` }} >{type.type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokeFetch;
