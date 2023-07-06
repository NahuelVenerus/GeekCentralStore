import axios from "axios";

export async function getAllPokemon() {
  try {
    const allPlans = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
    );
    return allPlans.data.results;
  } catch (error) {
    throw Error(error);
  }
}
