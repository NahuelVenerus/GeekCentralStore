import React from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";
import { setUser } from "../state/user";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDfault();
    axios
      .post(`${BASE_ROUTE}/api/users/logout`)
      .then((resp) => console.log(resp))
      .catch((error) => console.error(error));
  };

  return (
    <nav>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/logout" onClick={handleLogOut}>
          <button>Logout</button>
        </Link>

        <Link to="/signup">
          <button>Signup</button>
        </Link>

        <Link to="/carrito">
          <button>Carrito</button>
        </Link>
      </div>
      <Buscador />
    </nav>
  );
}

export default Navbar;
