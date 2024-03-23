import axios from 'axios';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

// Get pokemon by number
export const getPokemonByNumber = async (pokemonNumber) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${pokemonNumber}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pokemon:', error);
    throw error;
  }
};