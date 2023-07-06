import React, { useEffect, useState } from "react";
import Grid from "../commons/Grid";
<<<<<<< HEAD
import Searcher from "./Searcher";
import { getAllPokemon } from "../services/getAllPokemon";

function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon().then((data) => setPokemon(data));
  }, []);
  console.log("pokemon", pokemon);
=======
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminViews from "./AdminViews";

function Home() {
  const user = useSelector((state) => state.user);
>>>>>>> 726aaa3cdb2e8d402d6dcdf87271d59886baef55

  return (
    <div>
      <div>
        {user.is_admin ? (
          <div>
            <Link to="/admin">
              <AdminViews />
            </Link>
          </div>
        ) : (
          <Grid />
        )}
      </div>
    </div>
  );
}

export default Home;
