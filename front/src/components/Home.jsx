import React, { useEffect, useState } from "react";
import Grid from "../commons/Grid";
import Searcher from "./Searcher";
import { getAllPokemon } from "../services/getAllPokemon";

function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon().then((data) => setPokemon(data));
  }, []);
  console.log("pokemon", pokemon);

  return (
    <div>
      <h2>Home</h2>
      <Searcher />
      <Grid />
    </div>
  );
}

export default Home;
